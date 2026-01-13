import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions
export interface Coauthor {
  name: string;
  job_title: string;
}

export interface SubmissionData {
  id: string;
  title: string;
  topics: string[];
  keywords?: string;
  author_name: string;
  author_job_title: string;
  coauthors?: Coauthor[];
  email: string;
  phone?: string;
  abstract_document_url?: string;
  is_published?: string;
  publication_link?: string;
  study_design?: string;
  originality_declaration: boolean;
}

export interface RegistrationData {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  phone?: string;
  city?: string;
  job_title?: string;
  specialty?: string;
  institution?: string;
  workshops?: string[];
  registration_type: string;
  abstract_submitted: string;
  payment_method: string;
  payment_completed: string;
  id_upload_url?: string;
  student_card_upload_url?: string;
  payment_receipt_url?: string;
}
