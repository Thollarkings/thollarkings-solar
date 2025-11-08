# EmailJS Configuration Guide

## Setting up EmailJS for Contact Form

Follow these steps to configure EmailJS for your Thollarkings Solar website contact form:

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Log in to your EmailJS dashboard
2. Go to "Email Services" section
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the authentication steps
6. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" section
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Solar Inquiry from {{from_name}} - {{subject}}
```

**Email Body:**
```
Hello,

You have received a new solar energy inquiry through your website:

**Contact Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Project Type: {{project_type}}

**Subject:** {{subject}}

**Message:**
{{message}}

Best regards,
Thollarkings Solar Website

---
This email was sent from the contact form on thollarkings.github.io/thollarkings-solar/
```

4. Set the recipient email to: `thollarkings@gmail.com`
5. Note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key** (e.g., `user_def456`)

### 5. Update Contact Form Code
1. Open `src/pages/Contact.jsx`
2. Replace the placeholder EmailJS configuration:

```javascript
// Replace this line in handleSubmit function:
await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

### 6. Environment Variables (Recommended)
For better security, create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update the Contact.jsx file to use environment variables:

```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

await emailjs.send(serviceId, templateId, templateParams, publicKey)
```

### 7. Test the Contact Form
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form with test data
4. Submit and check if you receive the email

### 8. Free Plan Limits
EmailJS free plan includes:
- 200 emails per month
- 50 emails per day
- Basic support

### 9. Production Deployment
1. Make sure to set environment variables in your hosting platform
2. For Netlify: Go to Site Settings > Environment Variables
3. For Vercel: Go to Project Settings > Environment Variables

### Troubleshooting

**Common Issues:**
- **Emails not sending**: Check Service ID, Template ID, and Public Key
- **Authentication errors**: Re-authenticate your email service
- **Rate limits**: Upgrade to paid plan if needed
- **CORS errors**: Ensure your domain is whitelisted in EmailJS settings

**Testing Tips:**
- Use different email addresses to test
- Check spam/junk folders
- Monitor EmailJS dashboard for delivery status

## Alternative Email Services

If you prefer not to use EmailJS, you can also consider:
- **Formspree**: Simple form handling service
- **Netlify Forms**: Built-in form handling for Netlify sites
- **EmailJS Alternatives**: SendGrid, Mailgun, or custom backend

## Security Notes

- Never expose private keys in client-side code
- Use environment variables for sensitive data
- Consider implementing rate limiting
- Add CAPTCHA for spam protection
- Validate all form inputs on both client and server side