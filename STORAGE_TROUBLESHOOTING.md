# Storage Upload Troubleshooting Guide

## Issues Fixed

### ✅ File Type Validation
- Updated `storage.ts` to allow DOC and DOCX files (in addition to PDF)
- The form now properly validates and uploads all document types

## Common Storage Errors

### ERR_NAME_NOT_RESOLVED
This error means the browser cannot resolve the Supabase storage URL. This is **NOT** a localhost vs domain issue - it works on both.

**Possible causes:**
1. **Supabase project is paused or deleted**
   - Check your Supabase dashboard
   - Free tier projects pause after inactivity
   - Reactivate your project if paused

2. **Incorrect environment variables**
   - Check your `.env` file (or `.env.local`) has:
     ```
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```
   - Make sure there are no extra spaces or quotes
   - Restart your dev server after changing `.env` files

3. **Storage bucket doesn't exist**
   - Go to Supabase Dashboard → Storage
   - Create a bucket named `documents` if it doesn't exist
   - Make sure the bucket is **public** or has proper RLS policies

4. **Network/DNS issues**
   - Check your internet connection
   - Try accessing `https://your-project.supabase.co` directly in browser
   - Check if your firewall/antivirus is blocking the connection

## How to Fix

### Step 1: Verify Supabase Configuration
1. Go to your Supabase Dashboard
2. Check if your project is active (not paused)
3. Copy your Project URL and anon key from Settings → API

### Step 2: Create Storage Bucket
1. Go to Storage in Supabase Dashboard
2. Click "New bucket"
3. Name it: `documents`
4. Make it **Public** (or set up RLS policies)
5. Click "Create bucket"

### Step 3: Set Up Storage Policies (if bucket is private)
If you made the bucket private, you need to set up Row Level Security policies:

```sql
-- Allow authenticated users to upload
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'documents');

-- Allow public read access
CREATE POLICY "Allow public read"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'documents');
```

### Step 4: Verify Environment Variables
Create or update `.env.local` in your project root:
```
VITE_SUPABASE_URL=https://nzjjemfrfgpnmjpxrmsx.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

**Important:** 
- Restart your dev server after changing `.env` files
- Never commit `.env` files to git (they should be in `.gitignore`)

### Step 5: Test the Connection
1. Open browser console (F12)
2. Try uploading a file
3. Check for more specific error messages
4. The improved error handling will now show clearer messages

## Testing

The storage upload should work on:
- ✅ Localhost (http://localhost:5173)
- ✅ Local network (http://192.168.x.x:5173)
- ✅ Production domain (https://yourdomain.com)

The issue is **NOT** related to localhost vs domain - it's a Supabase configuration issue.


