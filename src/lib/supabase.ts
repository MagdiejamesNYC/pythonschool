import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;

// Check for missing, empty, or placeholder values
const isValidUrl = (url: string) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const isPlaceholder = (value: string) => {
  if (!value) return true;
  const placeholders = [
    'your-supabase-url-here',
    'your-anon-key-here',
    'placeholder',
    'PLACEHOLDER'
  ];
  return placeholders.some(placeholder => value.includes(placeholder));
};

// Always create a valid client, even with dummy values if needed
if (!supabaseUrl || 
    !supabaseAnonKey || 
    !isValidUrl(supabaseUrl) || 
    isPlaceholder(supabaseUrl) || 
    isPlaceholder(supabaseAnonKey)) {
  console.warn('Supabase environment variables not found or invalid. Running in offline mode.');
  // Create a dummy client with valid URL format to prevent errors
  supabase = createClient('https://dummy.supabase.co', 'dummy-key-for-offline-mode');
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

export type Database = {
  public: {
    Tables: {
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          points: number;
          current_chapter: number;
          completed_chapters: number[];
          collected_creatures: number[];
          eggs: number;
          completed_projects: number[];
          chapter_progress: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          points?: number;
          current_chapter?: number;
          completed_chapters?: number[];
          collected_creatures?: number[];
          eggs?: number;
          completed_projects?: number[];
          chapter_progress?: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          points?: number;
          current_chapter?: number;
          completed_chapters?: number[];
          collected_creatures?: number[];
          eggs?: number;
          completed_projects?: number[];
          chapter_progress?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};