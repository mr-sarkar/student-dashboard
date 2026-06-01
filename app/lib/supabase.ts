import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create client if we have both values
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

// Fallback data for build time
export const fallbackCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    progress: 75,
    icon_name: 'BookOpen',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Tailwind Mastery',
    progress: 45,
    icon_name: 'Palette',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Framer Motion Pro',
    progress: 30,
    icon_name: 'Sparkles',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Next.js 15 Deep Dive',
    progress: 90,
    icon_name: 'Rocket',
    created_at: new Date().toISOString()
  }
];