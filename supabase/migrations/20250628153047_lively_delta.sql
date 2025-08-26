/*
  # User Progress Schema

  1. New Tables
    - `user_progress`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `points` (integer, default 0)
      - `current_chapter` (integer, default 1)
      - `completed_chapters` (integer array)
      - `collected_creatures` (integer array)
      - `eggs` (integer, default 0)
      - `completed_projects` (integer array)
      - `chapter_progress` (jsonb for detailed chapter progress)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `user_progress` table
    - Add policies for users to manage their own progress
*/

CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  points integer DEFAULT 0,
  current_chapter integer DEFAULT 1,
  completed_chapters integer[] DEFAULT '{}',
  collected_creatures integer[] DEFAULT '{}',
  eggs integer DEFAULT 0,
  completed_projects integer[] DEFAULT '{}',
  chapter_progress jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create unique constraint to ensure one progress record per user
CREATE UNIQUE INDEX IF NOT EXISTS user_progress_user_id_unique 
ON user_progress(user_id);