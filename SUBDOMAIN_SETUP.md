# Subdomain Setup Guide - Dynadot to Render

This guide will help you set up a subdomain (e.g., `conference.yourdomain.com`) for your conference website on Render.

## Step 1: Set Up Subdomain in Dynadot

1. **Log in to Dynadot**
   - Go to https://www.dynadot.com
   - Log in to your account

2. **Navigate to DNS Management**
   - Go to **"My Domains"** → Select your domain
   - Click on **"DNS"** or **"DNS Management"**

3. **Add a CNAME Record**
   - Click **"Add Record"** or **"Add DNS Record"**
   - Select record type: **CNAME**
   - **Host/Name**: Enter your subdomain (e.g., `conference` or `conf` or `med`)
     - This will create: `conference.yourdomain.com`
   - **Value/Target**: Enter your Render service URL
     - Format: `your-service-name.onrender.com`
     - Example: `conference-pmed.onrender.com`
   - **TTL**: Leave default (usually 3600 or 1 hour)
   - Click **"Save"** or **"Add Record"**

   **Example:**
   ```
   Type: CNAME
   Host: conference
   Value: conference-pmed.onrender.com
   TTL: 3600
   ```

4. **Wait for DNS Propagation**
   - DNS changes can take 5 minutes to 48 hours to propagate
   - Usually takes 15-30 minutes
   - You can check propagation status at: https://www.whatsmydns.net

## Step 2: Configure Custom Domain in Render

1. **Go to Your Render Dashboard**
   - Navigate to https://dashboard.render.com
   - Select your static site service

2. **Add Custom Domain**
   - In your service settings, find **"Custom Domains"** section
   - Click **"Add Custom Domain"** or **"Add"**
   - Enter your subdomain: `conference.yourdomain.com`
   - Click **"Add"** or **"Save"**

3. **Verify Domain Ownership**
   - Render will provide you with a DNS record to verify ownership
   - Usually a TXT record or CNAME record
   - Add this record in Dynadot DNS settings
   - Wait for verification (usually a few minutes)

4. **SSL Certificate**
   - Render automatically provisions SSL certificates via Let's Encrypt
   - This usually happens automatically after domain verification
   - Your site will be accessible via HTTPS

## Step 3: Update Environment Variables (if needed)

If you're using environment variables in your Render service, make sure they're set:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

These should already be configured from your initial deployment.

## Step 4: Test Your Subdomain

1. **Wait for DNS Propagation** (15-30 minutes typically)
2. **Test the subdomain:**
   ```bash
   # Check if DNS is resolving
   nslookup conference.yourdomain.com
   
   # Or use online tools
   https://www.whatsmydns.net
   ```

3. **Visit your subdomain:**
   - Open: `https://conference.yourdomain.com`
   - Your site should load!

## Troubleshooting

### DNS Not Resolving
- **Wait longer**: DNS can take up to 48 hours (usually much faster)
- **Check DNS records**: Make sure CNAME is correct in Dynadot
- **Clear DNS cache**: 
  - Windows: `ipconfig /flushdns`
  - Mac/Linux: `sudo dscacheutil -flushcache`

### SSL Certificate Issues
- Render usually handles SSL automatically
- If issues persist, check Render dashboard for SSL status
- Contact Render support if SSL doesn't provision after 24 hours

### Subdomain Not Working
- Verify CNAME record in Dynadot points to: `your-service-name.onrender.com`
- Make sure you added the custom domain in Render dashboard
- Check Render service logs for any errors

## Example Configuration

**Dynadot DNS Records:**
```
Type    Host        Value                              TTL
CNAME   conference  conference-pmed.onrender.com      3600
```

**Render Custom Domain:**
```
conference.yourdomain.com
```

## Notes

- **Free Render Plan**: Custom domains work on free tier
- **HTTPS**: Automatically enabled by Render
- **WWW Subdomain**: If you want `www.conference.yourdomain.com`, add another CNAME record
- **Root Domain**: To use root domain (`yourdomain.com`), you'll need an A record pointing to Render's IP (check Render docs for current IPs)

## Quick Checklist

- [ ] Added CNAME record in Dynadot
- [ ] Added custom domain in Render dashboard
- [ ] Verified domain ownership (if required)
- [ ] Waited for DNS propagation (15-30 min)
- [ ] Tested subdomain in browser
- [ ] Confirmed HTTPS is working

Your subdomain should be live at: `https://conference.yourdomain.com` 🎉










