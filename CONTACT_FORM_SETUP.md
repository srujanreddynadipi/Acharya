# Contact Form Email Setup Guide

## Overview
The contact form on your website is now fully functional with email notifications. When visitors submit the form, you'll receive an email with their details, and they'll get a confirmation email.

## Setup Steps

### 1. Create Resend Account
- Go to https://resend.com
- Click "Sign Up" and create a free account
- Verify your email

### 2. Get API Key
- After signing up, go to the Dashboard
- Click on "API Keys" in the left sidebar
- Copy your API key (starts with `re_`)

### 3. Add API Key to Your Environment
- Open the `.env.local` file in your project root
- Replace `your_resend_api_key_here` with your actual Resend API key:
  ```
  RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
  ```

### 4. Test Locally (Optional)
- Run `npm run dev` to start the dev server
- Go to http://localhost:3000
- Scroll to the Contact section
- Fill out and submit the form
- Check your email for notifications

### 5. Deploy to Vercel
- Commit and push your changes to GitHub:
  ```bash
  git add .
  git commit -m "Add email notifications to contact form"
  git push
  ```
- Vercel will auto-deploy
- In Vercel dashboard, go to Project Settings → Environment Variables
- Add your `RESEND_API_KEY` variable there as well

## What Happens When Someone Submits the Form

1. **Owner Gets Notified**
   - Email sent to: `dptiearis46@gmail.com`
   - Includes: Name, Email, Phone, Message
   - Formatted beautifully with your branding

2. **Visitor Gets Confirmation**
   - Confirmation email sent to the visitor
   - Includes your contact info and WhatsApp link

3. **User Sees Success Message**
   - Green success notification on the page
   - Form gets cleared for next submission

## Features

✅ Beautiful HTML email templates with your branding
✅ Automatic form validation
✅ Loading state (spinning icon while sending)
✅ Success/error messages on the page
✅ Responsive design on all devices
✅ Phone field is optional, name/email/message required
✅ Both owner and visitor get emails

## Troubleshooting

**Issue: "API Key not found" error**
- Make sure `.env.local` has the correct key
- For Vercel, add the key in Project Settings → Environment Variables
- Restart your dev server after adding the key

**Issue: Emails not arriving**
- Check spam folder
- Make sure the API key is correct
- Check Resend dashboard for any errors

**Issue: Form not submitting**
- Check browser console for errors (F12)
- Make sure all required fields are filled
- Check that the API route exists at `/api/contact`

## Custom Domain Emails (Optional)

After you're comfortable with the basic setup, you can:
1. Add a custom domain to Resend
2. Use emails from your own domain (e.g., `contact@acharya.com`)

Visit Resend docs for more details.

## Contact for Help
If you need any modifications or have questions, feel free to reach out!
