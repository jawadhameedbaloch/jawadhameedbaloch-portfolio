# EmailJS Setup Guide for Your Portfolio

## 🚀 **Step 1: Sign Up for EmailJS**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 📧 **Step 2: Create Email Service**
1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (jawadhameedbaloch@gmail.com)
5. Note down your **Service ID** (e.g., `service_abc123`)

## 📝 **Step 3: Create Email Template**
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Message from Portfolio Contact Form
**Content:**
```
Hello Jawad,

You have received a new message from your portfolio website:

Name: {{name}}
Email: {{email}}
Message: {{message}}

Best regards,
Your Portfolio Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## 🔑 **Step 4: Get Your Public Key**
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## ⚙️ **Step 5: Update Your Code**
Replace these placeholders in your `src/App.tsx` file:

```typescript
// Replace these with your actual EmailJS credentials
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // ← Replace with your Template ID  
  formRef.current!,
  'YOUR_PUBLIC_KEY'      // ← Replace with your Public Key
);
```

**Example:**
```typescript
const result = await emailjs.sendForm(
  'service_abc123',
  'template_xyz789', 
  formRef.current!,
  'user_def456'
);
```

## 🎯 **Step 6: Test Your Form**
1. Save your changes
2. Start your development server: `npm run dev`
3. Go to the contact section
4. Fill out the form and submit
5. Check your email (jawadhameedbaloch@gmail.com)

## 💡 **Features Added:**
- ✅ **Form validation** with required fields
- ✅ **Real-time input handling** 
- ✅ **Loading states** during submission
- ✅ **Success/Error messages** after submission
- ✅ **Form reset** after successful submission
- ✅ **Professional UI** with status indicators

## 🔒 **Security Notes:**
- Your EmailJS credentials are safe to use in frontend code
- The service ID and template ID are public by design
- Only your public key is exposed (this is normal and secure)

## 🆘 **Need Help?**
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Free tier includes 200 emails per month
- Support available for paid plans

Your contact form will now send real emails to jawadhameedbaloch@gmail.com! 🎉
