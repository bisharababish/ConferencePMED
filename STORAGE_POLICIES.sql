-- ============================================
-- STORAGE POLICIES FOR DOCUMENTS BUCKET
-- ============================================
-- Run this SQL in your Supabase SQL Editor to allow file uploads

-- Allow anyone to upload files to the documents bucket
CREATE POLICY "Allow public uploads to documents"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'documents');

-- Allow anyone to read files from the documents bucket
CREATE POLICY "Allow public read from documents"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'documents');

-- Allow anyone to update their own files (optional, for file replacement)
CREATE POLICY "Allow public updates to documents"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'documents')
WITH CHECK (bucket_id = 'documents');

-- Allow anyone to delete files (optional, for cleanup)
CREATE POLICY "Allow public delete from documents"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'documents');




