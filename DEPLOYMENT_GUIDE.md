# Deployment Guide for Render

## Overview
This is a **static site** (React/Vite) that uses **Supabase as the backend**. You don't need a separate backend server - Supabase handles all database and storage operations.

## Prerequisites
- ✅ Supabase project set up (already done)
- ✅ Database tables created (already done)
- ✅ Storage bucket created (already done)
- ✅ GitHub repository (or GitLab/Bitbucket)

## Step-by-Step Deployment to Render

### Step 1: Push Your Code to GitHub
1. Create a new repository on GitHub (if you haven't already)
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### Step 2: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up or log in
3. Connect your GitHub account

### Step 3: Create New Static Site
1. Click **"New +"** button
2. Select **"Static Site"**
3. Connect your GitHub repository
4. Configure the settings:
   - **Name**: `conference-pmed` (or any name you prefer)
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave empty (or `./` if needed)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

### Step 4: Add Environment Variables
In the Render dashboard, go to your static site → **Environment** tab, and add:

```
VITE_SUPABASE_URL=https://nzjjemfrfgpnmjpxrmsx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56amplbWZyZmdwbm1qcHhybXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyOTU0OTIsImV4cCI6MjA4MTg3MTQ5Mn0.CLWj9UPu_OzjjQGKs1OzKZa_lzMsYPuBJPvCJXmyrNg
```

### Step 5: Deploy
1. Click **"Create Static Site"**
2. Render will automatically:
   - Install dependencies
   - Build your app
   - Deploy it
3. Wait for deployment to complete (usually 2-5 minutes)

### Step 6: Access Your Site
Once deployed, you'll get a URL like:
- `https://conference-pmed.onrender.com` (or your custom domain)

## Alternative: Manual Deployment (if render.yaml doesn't work)

If the `render.yaml` file doesn't work, you can manually configure:

1. **Service Type**: Static Site
2. **Build Command**: `npm install && npm run build`
3. **Publish Directory**: `dist`
4. **Environment Variables**: Add the two Supabase variables above

## Important Notes

### ✅ What Works Automatically:
- ✅ All forms (Registration, Submissions, Contact) will work
- ✅ Database connections will work
- ✅ File uploads will work
- ✅ Toast notifications will work

### 🔒 Security:
- Your Supabase anon key is safe to use in frontend code
- Supabase RLS (Row Level Security) protects your data
- Only INSERT operations are allowed for public users

### 📝 Custom Domain (Optional):
1. In Render dashboard, go to your static site
2. Click **"Settings"** → **"Custom Domains"**
3. Add your domain and follow DNS instructions

## Troubleshooting

### Build Fails:
- Check that all dependencies are in `package.json`
- Make sure `npm run build` works locally first

### Forms Don't Work After Deployment:
- Verify environment variables are set correctly in Render
- Check browser console for errors
- Make sure Supabase RLS policies are set up

### File Uploads Fail:
- Verify storage bucket policies are set (run STORAGE_POLICIES.sql)
- Check that bucket is public or policies allow uploads

## Testing After Deployment

1. Test Registration form
2. Test Submissions form  
3. Test Contact form
4. Check Supabase dashboard to see if data is being saved

That's it! Your site is now live! 🎉






