
-- Profiles table
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by owner" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Sessions table for pomodoro tracking
create type public.session_type as enum ('focus', 'short_break', 'long_break');

create table public.focus_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type public.session_type not null,
  duration_seconds integer not null,
  completed boolean not null default true,
  started_at timestamptz not null default now(),
  ended_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.focus_sessions enable row level security;

create policy "Users can view own sessions" on public.focus_sessions
  for select using (auth.uid() = user_id);
create policy "Users can insert own sessions" on public.focus_sessions
  for insert with check (auth.uid() = user_id);
create policy "Users can delete own sessions" on public.focus_sessions
  for delete using (auth.uid() = user_id);

create index focus_sessions_user_started_idx on public.focus_sessions(user_id, started_at desc);

-- Updated_at trigger
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();
