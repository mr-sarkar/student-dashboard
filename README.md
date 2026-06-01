# Student Dashboard

A futuristic learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Features

- Dark theme with glowing gradients
- Bento grid layout
- Collapsible sidebar with animations
- Dynamic course cards from Supabase
- Animated progress bars
- Activity chart
- Spring physics hover effects
- Fully responsive

## Tech Stack

- Next.js 15 (App Router)
- Supabase
- Tailwind CSS
- Framer Motion
- TypeScript

## Setup

1. Copy `.env.example` to `.env.local`
2. Add your Supabase credentials
3. Run `npm install`
4. Run `npm run dev`

## Database Schema

```sql
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);