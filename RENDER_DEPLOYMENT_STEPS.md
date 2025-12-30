# Quick Deployment Steps for Render

## ✅ Answer: No Backend Needed!
This is a **static site** that uses **Supabase** as the backend. Supabase handles:
- Database (PostgreSQL)
- File Storage
- Authentication (if needed later)

You only need to deploy the **frontend** to Render.

---

## 🚀 Quick Deployment Steps

### 1. Push Code to GitHub
```bash
git init
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Go to Render.com
- Sign up/Login at [render.com](https://render.com)
- Connect your GitHub account

### 3. Create Static Site
1. Click **"New +"** → **"Static Site"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `conference-pmed`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

### 4. Add Environment Variables
Click **"Environment"** tab and add:

**Variable 1:**
- Key: `VITE_SUPABASE_URL`
- Value: `https://nzjjemfrfgpnmjpxrmsx.supabase.co`

**Variable 2:**
- Key: `VITE_SUPABASE_ANON_KEY`
- Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56amplbWZyZmdwbm1qcHhybXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyOTU0OTIsImV4cCI6MjA4MTg3MTQ5Mn0.CLWj9UPu_OzjjQGKs1OzKZa_lzMsYPuBJPvCJXmyrNg`

### 5. Deploy!
Click **"Create Static Site"** and wait 2-5 minutes.

---

## ✅ What Works After Deployment

- ✅ Registration form → Saves to Supabase
- ✅ Submissions form → Saves to Supabase  
- ✅ Contact form → Saves to Supabase
- ✅ File uploads → Stored in Supabase Storage
- ✅ Toast notifications → All working

---

## 🔍 Verify Deployment

1. Visit your Render URL (e.g., `https://conference-pmed.onrender.com`)
2. Test each form
3. Check Supabase dashboard to see data being saved

---

## 📝 Important Notes

- **No backend server needed** - Supabase is your backend
- **Free tier available** on Render for static sites
- **Environment variables** are set in Render dashboard (not in code)
- **Auto-deploys** on every git push to main branch

---

## 🆘 Troubleshooting

**Build fails?**
- Run `npm run build` locally first to check for errors
- Make sure all dependencies are in `package.json`

**Forms don't work?**
- Double-check environment variables in Render dashboard
- Check browser console for errors
- Verify Supabase tables exist

**File uploads fail?**
- Make sure you ran the STORAGE_POLICIES.sql in Supabase
- Check that `documents` bucket exists and is public

---

That's it! Your site will be live in minutes! 🎉







