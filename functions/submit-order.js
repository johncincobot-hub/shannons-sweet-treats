// Cloudflare Pages Function to handle order submissions
// This runs serverless on Cloudflare's edge network

export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    
    // Extract form fields
    const order = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      dark: formData.get('dark') || 0,
      milk: formData.get('milk') || 0,
      mixed: formData.get('mixed') || 0,
      large: formData.get('large') || 0,
      notes: formData.get('notes') || '',
      delivery: formData.get('delivery'),
      date: formData.get('date'),
    };

    // Build email body
    const emailBody = `
New Order from Shannon's Sweet Treats!

Customer: ${order.firstName} ${order.lastName}
Email: ${order.email}
Phone: ${order.phone}

Order Details:
- Dark Chocolate Truffles (12pc): ${order.dark}
- Milk Chocolate Assortment (12pc): ${order.milk}
- Assorted Gift Box (12pc): ${order.mixed}
- Large Gift Box (24pc): ${order.large}

Delivery Method: ${order.delivery}
Needed By: ${order.date}

Special Notes:
${order.notes || 'None'}

---
This order was submitted via shannonssweettreats.com
Reply to ${order.email} to confirm the order.
    `.trim();

    // Send emails via Resend API
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const SHANNON_EMAIL = context.env.SHANNON_EMAIL || 'shannon@example.com';

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Email service not configured' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Email 1: Send order notification to Shannon
    const shannonEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shannon\'s Sweet Treats <onboarding@resend.dev>',
        to: [SHANNON_EMAIL],
        reply_to: order.email,
        subject: `New Order: ${order.firstName} ${order.lastName} - ${order.date}`,
        text: emailBody,
      }),
    });

    if (!shannonEmailResponse.ok) {
      const errorText = await shannonEmailResponse.text();
      console.error('Resend API error (Shannon):', errorText);
      throw new Error('Failed to send notification email');
    }

    // Email 2: Send confirmation to customer
    const customerEmailBody = `
Hi ${order.firstName},

Thank you for your order from Shannon's Sweet Treats!

We've received your request and will be in touch soon to confirm availability and finalize the details.

YOUR ORDER SUMMARY:
- Dark Chocolate Truffles (12pc): ${order.dark}
- Milk Chocolate Assortment (12pc): ${order.milk}
- Assorted Gift Box (12pc): ${order.mixed}
- Large Gift Box (24pc): ${order.large}

Delivery Method: ${order.delivery}
Needed By: ${order.date}

${order.notes ? `Special Notes: ${order.notes}` : ''}

We'll contact you at ${order.email} or ${order.phone} to confirm your order.

Thank you for supporting our small business!

Sweet regards,
Shannon's Sweet Treats
    `.trim();

    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shannon\'s Sweet Treats <onboarding@resend.dev>',
        to: [order.email],
        subject: `Order Confirmation - Shannon's Sweet Treats`,
        text: customerEmailBody,
      }),
    });

    if (!customerEmailResponse.ok) {
      // Log but don't fail the whole request if customer email fails
      const errorText = await customerEmailResponse.text();
      console.error('Resend API error (customer):', errorText);
      console.warn('Customer confirmation email failed, but order notification was sent');
    }

    // Success!
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Order received! Shannon will contact you soon.' 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error processing order:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Failed to process order. Please try again or contact us directly.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
