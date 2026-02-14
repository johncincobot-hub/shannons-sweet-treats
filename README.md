# Shannon's Sweet Treats 🍭

Artisanal handcrafted chocolates made with love.

**Live Site:** https://shannon.technicianb.com (coming soon)

---

## Features

- 🍫 **Product Showcase** - Beautiful gallery of handcrafted chocolates
- 📋 **Order Form** - Easy online ordering with email notifications
- 📧 **Email Alerts** - Shannon receives instant order notifications
- 🎨 **Elegant Design** - Clean, professional chocolate shop aesthetic
- 📱 **Mobile-Friendly** - Fully responsive design

---

## Tech Stack

- **Frontend:** Pure HTML/CSS/JS (no frameworks)
- **Hosting:** Cloudflare Pages (free, fast, global CDN)
- **Backend:** Cloudflare Pages Functions (serverless)
- **Email:** Resend API (free tier, 100 emails/day)

---

## Local Development

```bash
cd website
python3 -m http.server 8085
```

Visit: http://localhost:8085

**Note:** Email function only works when deployed to Cloudflare Pages.

---

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

**Quick deploy:**
1. Push to GitHub
2. Connect to Cloudflare Pages
3. Set environment variables (Resend API key + Shannon's email)
4. Done! 🚀

---

## Email Notifications

When a customer submits an order, Shannon receives an email with:
- Customer name, email, phone
- Products ordered (quantities)
- Delivery method & date needed
- Special notes/requests

Reply-to is set to the customer's email for easy responses.

---

## Structure

```
website/
├── index.html       # Home
├── about.html       # About Shannon
├── products.html    # Product catalog
├── order.html       # Order form ⭐
├── contact.html     # Contact info
├── css/
├── images/
└── functions/
    └── submit-order.js  # Serverless email handler
```

---

## Cost

**$0/month**

- Cloudflare Pages: Free
- Resend: Free tier (plenty for a small business)
- Domain: Shared with technicianb.com

---

## Future Enhancements

- [ ] Payment integration (Stripe/PayPal)
- [ ] Order tracking/history
- [ ] Photo gallery improvements
- [ ] Customer testimonials
- [ ] Seasonal product updates

---

Built with ❤️ for Shannon by Technician B
