-- Migration: Add new fields to submissions table
-- Fields: is_published, publication_link, study_design, originality_declaration

-- Add is_published column (text, with CHECK constraint for 'yes' or 'no')
ALTER TABLE public.submissions
ADD COLUMN IF NOT EXISTS is_published text CHECK (is_published = ANY (ARRAY['yes'::text, 'no'::text]));

-- Add publication_link column (text, nullable)
ALTER TABLE public.submissions
ADD COLUMN IF NOT EXISTS publication_link text;

-- Add study_design column (text, nullable)
ALTER TABLE public.submissions
ADD COLUMN IF NOT EXISTS study_design text;

-- Add originality_declaration column (boolean, nullable with default false)
-- Note: Application logic ensures this is always true for new submissions
ALTER TABLE public.submissions
ADD COLUMN IF NOT EXISTS originality_declaration boolean DEFAULT false;

-- Add comment for documentation
COMMENT ON COLUMN public.submissions.is_published IS 'Indicates if the work has been published (yes/no)';
COMMENT ON COLUMN public.submissions.publication_link IS 'URL link to the publication (required if is_published is yes)';
COMMENT ON COLUMN public.submissions.study_design IS 'Description of the study design';
COMMENT ON COLUMN public.submissions.originality_declaration IS 'Confirmation that the work is original and has not been plagiarized';

