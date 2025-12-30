# Supabase Setup Instructions

## 1. Create Supabase Tables

Run these SQL commands in your Supabase SQL Editor:

### Registrations Table
```sql
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  gender TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  job_title TEXT,
  specialty TEXT,
  institution TEXT,
  workshops TEXT[],
  registration_type TEXT NOT NULL,
  abstract_submitted TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  payment_completed TEXT NOT NULL,
  id_upload_url TEXT,
  student_card_upload_url TEXT,
  payment_receipt_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Submissions Table
```sql
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  topics TEXT[] NOT NULL,
  keywords TEXT,
  author_name TEXT NOT NULL,
  author_job_title TEXT NOT NULL,
  coauthors JSONB,
  email TEXT NOT NULL,
  phone TEXT,
  abstract_document_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Contacts Table
```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 2. Create Storage Bucket

1. Go to Storage in your Supabase dashboard
2. Create a new bucket named `documents`
3. Set it to **Public** (or configure policies as needed)
4. Create folders: `registrations`, `submissions`

## 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these in your Supabase project settings under API.

## 4. Storage Policies (Optional - for private buckets)

If you want to keep the bucket private, set up RLS policies:

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

## 5. Enable Row Level Security (RLS)

For each table, enable RLS and create policies:

```sql
-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for form submissions)
CREATE POLICY "Allow public inserts on registrations"
ON registrations FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public inserts on submissions"
ON submissions FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public inserts on contacts"
ON contacts FOR INSERT
TO public
WITH CHECK (true);
```

## Notes

- The forms will automatically upload files to Supabase Storage
- All form submissions are saved to the database
- Error handling is included in all forms
- Loading states show during submission







