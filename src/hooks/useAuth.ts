import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  // Helper function to check if Supabase is properly configured
  const isSupabaseConfigured = () => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      return false;
    }

    // Check for placeholder values
    const placeholders = [
      'your_supabase_project_url_here',
      'your-supabase-url-here',
      'your_supabase_anon_key_here',
      'your-anon-key-here',
      'placeholder',
      'PLACEHOLDER',
      'dummy'
    ];
    
    const hasPlaceholder = placeholders.some(placeholder => 
      supabaseUrl.includes(placeholder) || supabaseAnonKey.includes(placeholder)
    );

    // Check if URL is valid
    try {
      new URL(supabaseUrl);
    } catch {
      return false;
    }

    return !hasPlaceholder;
  };

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      console.log('Supabase not configured. Running in offline mode.');
      setLoading(false);
      return;
    }

    setLoading(true);

    // Get initial session with error handling
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
        setSession(null);
        setUser(null);
      } else {
        setSession(session);
        setUser(session?.user ?? null);
      }
      setLoading(false);
    }).catch((error) => {
      console.error('Error getting session:', error);
      setSession(null);
      setUser(null);
      setLoading(false);
    });

    // Listen for auth changes with error handling
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    if (!isSupabaseConfigured()) {
      return { 
        data: null, 
        error: { message: 'Supabase not configured. Please connect to Supabase first.' } 
      };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      return { data, error };
    } catch (error) {
      console.error('Sign up error:', error);
      return { 
        data: null, 
        error: { message: 'Failed to connect to authentication service. Please check your connection.' } 
      };
    }
  };

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured()) {
      return { 
        data: null, 
        error: { message: 'Supabase not configured. Please connect to Supabase first.' } 
      };
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { data, error };
    } catch (error) {
      console.error('Sign in error:', error);
      return { 
        data: null, 
        error: { message: 'Failed to connect to authentication service. Please check your connection.' } 
      };
    }
  };

  const signOut = async (saveProgressCallback?: () => void) => {
    // Save progress before signing out if callback provided
    if (saveProgressCallback) {
      try {
        await saveProgressCallback();
      } catch (error) {
        console.error('Error saving progress before logout:', error);
      }
    }
    
    if (!isSupabaseConfigured()) {
      return { error: null };
    }

    try {
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error: null }; // Don't throw error on logout failure
    }
  };

  return {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };
};