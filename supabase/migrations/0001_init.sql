-- Phase 1: profiles table for role (student/teacher), KVKK consent tracking,
-- and teacher verification status (used by later phases).

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role text not null check (role in ('student', 'teacher')),
  grade_level int,
  goal text,
  teacher_verification_status text not null default 'unverified'
    check (teacher_verification_status in ('unverified', 'pending', 'verified', 'rejected')),
  kvkk_accepted_at timestamptz not null,
  kvkk_version text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);
