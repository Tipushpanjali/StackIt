# Supabase Authentication Setup Guide

## Overview

This guide will help you set up Supabase authentication for the StackIt application. Supabase provides a secure, scalable backend-as-a-service with built-in authentication features.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com) if you don't have one)
2. Node.js and npm installed on your machine

## Step 1: Create a Supabase Project

1. Log in to your Supabase account
2. Click on "New Project"
3. Enter a name for your project
4. Set a secure database password
5. Choose a region closest to your users
6. Click "Create new project"

## Step 2: Get Your Supabase Credentials

1. Once your project is created, go to the project dashboard
2. Navigate to "Settings" > "API" in the sidebar
3. You'll find your:
   - **Project URL**: Copy the URL under "Project URL"
   - **API Keys**: Copy the "anon" public key

## Step 3: Configure Environment Variables

1. Open the `.env` file in the root of your project
2. Replace the placeholder values with your actual Supabase credentials:

```
VITE_SUPABASE_URL=https://your-actual-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key
```

## Step 4: Enable Authentication Providers

### Email/Password Authentication

1. In your Supabase dashboard, go to "Authentication" > "Providers"
2. Ensure "Email" is enabled
3. Configure email templates if desired

### Google Authentication

1. Go to "Authentication" > "Providers"
2. Find "Google" and toggle it on
3. You'll need to set up OAuth credentials in the Google Cloud Console:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Navigate to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Set the application type to "Web application"
   - Add authorized redirect URIs:
     - `https://your-project-url.supabase.co/auth/v1/callback`
   - Copy the Client ID and Client Secret
4. Back in Supabase, enter the Client ID and Client Secret
5. Save changes

## Step 5: Configure Email Confirmation (Optional)

By default, Supabase requires email confirmation for new sign-ups. You can adjust this:

1. Go to "Authentication" > "Providers" > "Email"
2. Under "Confirm Email", choose your preferred setting:
   - Enabled: Users must confirm their email (default)
   - Disabled: No email confirmation required

## Step 6: Test Authentication

1. Start your application with `npm run dev`
2. Try signing up with email/password
3. Try logging in with Google
4. Verify that the authentication flow works as expected

## Troubleshooting

- **Redirect Issues**: Ensure your redirect URLs are correctly configured in both Supabase and Google Cloud Console
- **CORS Errors**: Check that your Supabase project has the correct site URL in "Authentication" > "URL Configuration"
- **Email Not Received**: Check spam folders or verify email settings in Supabase

## Additional Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/auth-signin)
- [Google OAuth Setup Guide](https://developers.google.com/identity/protocols/oauth2)