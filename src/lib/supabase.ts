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

export interface WorkshopSession {
  time: string;
  topic: string;
  speaker?: string;
  organizer?: string;
  description: string;
}

export interface WorkshopRoom {
  id: string;
  name_arabic: string;
  name_english: string;
  sessions: WorkshopSession[];
}

export interface WorkshopRegistrationData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  job_title?: string;
  institution?: string;
  room_id: string;
  room_name_arabic: string;
  room_name_english: string;
  selected_session_time?: string;
  selected_session_topic?: string;
  selected_session_speaker?: string;
  selected_session_organizer?: string;
}
