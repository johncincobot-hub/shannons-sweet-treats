# Shannon's Sweet Treats - Deployment Guide

## 🍭 Overview

This is a static HTML website with a serverless email function for order notifications.

**Tech Stack:**
- Static HTML/CSS/JS
- Cloudflare Pages (hosting)
- Cloudflare Pages Functions (serverless email)
- Resend API (email delivery)

---

## 🚀 Deploy to Cloudflare Pages

### Step 1: Push to GitHub

```bash
cd ~/.openclaw/workspace/projects/shannons-sweet-treats
git init
git add .
git commit -m "Initial commit - Shannon's Sweet Treats"
gh repo create shannons-sweet-treats --public --source=. --push
```

### Step 2: Connect Cloudflare Pages

1. Go to: https://dash.cloudflare.com
2. Log in with: **johncincobot@gmail.com**
3. **Workers & Pages** → **Create** → **Pages** tab
4. **Connect to Git** → Select **shannons-sweet-treats** repo
5. **Build settings:**
   - Framework preset: **None** (static HTML)
   - Build command: (leave empty)
   - Build output directory: `/website`
   - Root directory: (leave empty)
6. Click **Save and Deploy**

### Step 3: Set Up Email API (Resend)

1. Sign up at: https://resend.com (free - 100 emails/day)
2. Create API key
3. Verify domain: **technicianb.com** (or use resend's test domain for now)
4. In Cloudflare Pages project:
   - Go to **Settings** → **Environment variables**
   - Add:
     - `RESEND_API_KEY` = (your Resend API key)
     - `SHANNON_EMAIL` = (Shannon's actual email address)
5. **Save** and **Redeploy**

### Step 4: Add Custom Domain

1. In Pages project → **Custom domains**
2. Add: `shannon.technicianb.com`
3. Cloudflare auto-configures DNS
4. Wait ~2 minutes for SSL

---

## 📧 Email Setup Details

### Using Resend API

**Free tier:** 100 emails/day, 3,000/month  
**Perfect for:** Small business order notifications

**Email format:**
- From: `orders@technicianb.com`
- To: Shannon's email (set in env variable)
- Reply-To: Customer's email
- Subject: `New Order: [Customer Name] - [Date]`

### Alternative: Use Resend Test Mode First

If you don't want to set up domain verification right away:
- Resend provides a test domain: `onboarding@resend.dev`
- Can send to verified email addresses only
- Good for testing before going live

---

## 🧪 Testing

### Test locally:
```bash
cd ~/.openclaw/workspace/projects/shannons-sweet-treats/website
python3 -m http.server 8085
```

**Note:** The email function won't work locally (needs Cloudflare Pages environment). To test email:
1. Deploy to Cloudflare Pages
2. Submit a test order
3. Check Shannon's email

---

## 🔧 Environment Variables

Required in Cloudflare Pages:

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Resend API key | `re_xxxxxxxxxxxx` |
| `SHANNON_EMAIL` | Shannon's email address | `shannon@example.com` |

---

## 📁 File Structure

```
website/
├── index.html          # Home page
├── about.html          # About Shannon
├── products.html       # Product catalog
├── order.html          # Order form (with email)
├── contact.html        # Contact page
├── css/
│   └── styles.css
├── images/
│   └── (product photos)
└── functions/
    └── submit-order.js # Serverless email function
```

---

## 💰 Cost

**Total: $0/month**

- Cloudflare Pages: Free (unlimited bandwidth)
- Resend: Free tier (100 emails/day)
- Domain (technicianb.com): Already purchased

---

## 🔄 Updates

After initial setup, updates are automatic:

```bash
cd ~/.openclaw/workspace/projects/shannons-sweet-treats
git add .
git commit -m "Update products/images"
git push
```

Cloudflare Pages auto-deploys in ~30 seconds! 🚀

---

## 🆘 Troubleshooting

### Email not sending?
1. Check environment variables in Cloudflare Pages
2. Verify Resend API key is correct
3. Check Cloudflare Pages function logs
4. Make sure SHANNON_EMAIL is set

### Form not submitting?
1. Check browser console for errors
2. Verify `/submit-order` endpoint is accessible
3. Check Cloudflare Pages deployment logs

---

**Questions?** Check Cloudflare Pages docs or Resend docs, or ask Johnny5! 🤖
