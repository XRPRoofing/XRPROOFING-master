create extension if not exists "pgcrypto";

create type public.user_role as enum ('admin', 'sales_rep', 'office_staff');
create type public.lead_stage as enum ('new_lead', 'inspection_scheduled', 'estimate_sent', 'insurance_review', 'approved', 'in_progress', 'completed');
create type public.task_priority as enum ('low', 'medium', 'high', 'urgent');
create type public.task_status as enum ('todo', 'in_progress', 'done');

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  role public.user_role not null default 'sales_rep',
  phone text,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  property_address text not null,
  roof_details text,
  insurance_carrier text,
  notes text,
  created_by uuid references public.users(id),
  created_at timestamptz not null default now()
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete set null,
  name text not null,
  email text,
  phone text,
  property_address text,
  city text,
  stage public.lead_stage not null default 'new_lead',
  estimated_value numeric(12,2) not null default 0,
  assigned_to uuid references public.users(id),
  roof_type text,
  source text,
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.estimates (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  customer_id uuid references public.customers(id) on delete cascade,
  title text not null,
  materials_total numeric(12,2) not null default 0,
  labor_total numeric(12,2) not null default 0,
  tax_total numeric(12,2) not null default 0,
  grand_total numeric(12,2) not null default 0,
  status text not null default 'draft',
  created_by uuid references public.users(id),
  created_at timestamptz not null default now()
);

create table public.estimate_line_items (
  id uuid primary key default gen_random_uuid(),
  estimate_id uuid not null references public.estimates(id) on delete cascade,
  description text not null,
  quantity numeric(10,2) not null default 1,
  unit_price numeric(12,2) not null default 0,
  line_total numeric(12,2) not null default 0
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  due_date date,
  priority public.task_priority not null default 'medium',
  status public.task_status not null default 'todo',
  assigned_to uuid references public.users(id),
  lead_id uuid references public.leads(id) on delete cascade,
  customer_id uuid references public.customers(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  appointment_type text not null default 'inspection',
  assigned_to uuid references public.users(id),
  lead_id uuid references public.leads(id) on delete cascade,
  customer_id uuid references public.customers(id) on delete cascade,
  location text,
  notes text,
  created_at timestamptz not null default now()
);

create table public.notes (
  id uuid primary key default gen_random_uuid(),
  body text not null,
  author_id uuid references public.users(id),
  lead_id uuid references public.leads(id) on delete cascade,
  customer_id uuid references public.customers(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table public.activities (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.users(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.uploaded_files (
  id uuid primary key default gen_random_uuid(),
  bucket text not null default 'crm-files',
  storage_path text not null,
  file_name text not null,
  content_type text,
  size_bytes bigint,
  uploaded_by uuid references public.users(id),
  lead_id uuid references public.leads(id) on delete cascade,
  customer_id uuid references public.customers(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.proposal_shares (
  id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.invoice_shares (
  id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.customers enable row level security;
alter table public.leads enable row level security;
alter table public.estimates enable row level security;
alter table public.estimate_line_items enable row level security;
alter table public.tasks enable row level security;
alter table public.appointments enable row level security;
alter table public.notes enable row level security;
alter table public.activities enable row level security;
alter table public.uploaded_files enable row level security;
alter table public.proposal_shares enable row level security;
alter table public.invoice_shares enable row level security;

create policy "Authenticated users can read users" on public.users for select to authenticated using (true);
create policy "Users can update own profile" on public.users for update to authenticated using (auth.uid() = id);
create policy "Authenticated users can read CRM data" on public.customers for select to authenticated using (true);
create policy "Authenticated users can read leads" on public.leads for select to authenticated using (true);
create policy "Authenticated users can read tasks" on public.tasks for select to authenticated using (true);
create policy "Authenticated users can read appointments" on public.appointments for select to authenticated using (true);

create policy "Admins can manage customers" on public.customers for all to authenticated using (exists (select 1 from public.users where id = auth.uid() and role = 'admin'));
create policy "Admins can manage leads" on public.leads for all to authenticated using (exists (select 1 from public.users where id = auth.uid() and role = 'admin'));
create policy "Admins can manage users" on public.users for all to authenticated using (exists (select 1 from public.users where id = auth.uid() and role = 'admin'));
create policy "Service role can manage proposal shares" on public.proposal_shares for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');
create policy "Service role can manage invoice shares" on public.invoice_shares for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

insert into public.customers (name, email, phone, property_address, roof_details, insurance_carrier, notes) values
('Priya Shah', 'priya@example.com', '(480) 555-0108', '3012 S Dobson Rd, Mesa, AZ', 'Concrete tile, 2,900 sq ft, underlayment replacement', 'State Farm', 'Approved job with deposit received.'),
('Sunset Retail Center', 'ops@example.com', '(480) 555-0160', '7707 E Main St, Mesa, AZ', '60-mil TPO commercial roof', 'Travelers', 'Completed warranty packet uploaded.'),
('Carlos Vega', 'carlos@example.com', '(602) 555-0148', '4119 N 15th Ave, Phoenix, AZ', 'Leak repair and flashing replacement', 'USAA', 'Crew dispatched.');

insert into public.leads (name, email, phone, property_address, city, stage, estimated_value, roof_type, source, internal_notes) values
('Maria Hernandez', 'maria@example.com', '(602) 555-0181', '2148 E Camelback Rd', 'Phoenix', 'new_lead', 18500, 'Tile', 'Website', 'Requested storm inspection.'),
('Desert Plaza HOA', 'board@example.com', '(480) 555-0134', '8800 N Scottsdale Rd', 'Scottsdale', 'inspection_scheduled', 72000, 'Flat/TPO', 'Referral', 'Inspection booked for Friday.'),
('Ryan Mitchell', 'ryan@example.com', '(623) 555-0199', '944 W Ocotillo Rd', 'Glendale', 'estimate_sent', 24600, 'Shingle', 'Google', 'Estimate sent.');
