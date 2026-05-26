# XRP Roofing — Next.js 14+ Programmatic SEO Site

Production-ready Next.js 14+ App Router website for **XRP Roofing** — Phoenix, AZ's trusted roofing contractor. Designed to dominate local SEO for Phoenix and a 100-mile radius via programmatic city and city-service pages.

---

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** + **shadcn/ui**
- **React Hook Form** + **Zod** (contact form validation)
- **Resend** (email delivery)
- **Lucide React** (icons)
- Fully static — **414 pages** pre-rendered at build time

---

## Project Structure

```
app/
  page.tsx                        # Homepage
  about/page.tsx                  # About page
  contact/page.tsx                # Contact page
  services/
    page.tsx                      # Services hub
    [service]/page.tsx            # Individual service pages (12)
  locations/
    page.tsx                      # Locations hub
    [city]/
      page.tsx                    # City landing pages (30)
      [service]/page.tsx          # City+service pages (360)
  blog/
    page.tsx                      # Blog index
    [slug]/page.tsx               # Blog post template
  api/contact/route.ts            # Contact form API (Resend)
  sitemap.ts                      # Dynamic sitemap (414 URLs)
  robots.ts                       # robots.txt

lib/
  constants.ts                    # Site-wide constants (phone, address, etc.)
  cities.ts                       # 30 cities with neighborhoods, notes, etc.
  services.ts                     # 12 roofing services with full metadata
  contentEngine.ts                # Deterministic content variant system
  images.ts                       # Image asset mapping

components/
  layout/
    Header.tsx                    # Sticky header with service dropdown
    Footer.tsx                    # Full footer with NAP, links, trust
    MobileCtaBar.tsx              # Fixed bottom bar (mobile only)
  ui/
    SeoSchema.tsx                 # JSON-LD: LocalBusiness, Service, FAQ, Breadcrumb
    TrustBadges.tsx               # 6-badge trust section
    ReviewSection.tsx             # 6 customer review cards
    FAQSection.tsx                # Accordion FAQ component
    CTASection.tsx                # CTA banner (3 variants)
    LeadForm.tsx                  # React Hook Form + Zod lead form
    ServiceGrid.tsx               # Service card grid
    LocationGrid.tsx              # City link grid
    Breadcrumbs.tsx               # Breadcrumb nav

public/images/xrp-roofing/       # 15 real project images
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Required for contact form email delivery
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Email address to receive leads (defaults to info@xrproofing.com)
CONTACT_EMAIL=info@xrproofing.com
```

Get a Resend API key at [resend.com](https://resend.com). The free tier handles up to 3,000 emails/month.

---

## Setup & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site runs at `http://localhost:3000` in development.

---

## Before Launch Checklist

### Content & Branding
- [ ] Update `lib/constants.ts` with real phone number, email, and address
- [ ] Replace placeholder `PHONE` with actual number throughout
- [ ] Add real social media URLs in `lib/constants.ts`
- [ ] Upload a real favicon to `public/favicon.ico`
- [ ] Add an OG image at `public/images/xrp-roofing/og-image.jpg` (1200×630)

### SEO
- [ ] Verify `SITE_URL` in `lib/constants.ts` matches production domain
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Add Google Analytics or other analytics script to `app/layout.tsx`
- [ ] Set up Google Business Profile if not already done

### Contact Form
- [ ] Set `RESEND_API_KEY` in production environment variables
- [ ] Set `CONTACT_EMAIL` to the inbox that should receive leads
- [ ] Verify your sending domain in Resend dashboard
- [ ] Test form submission end-to-end before launch

### Performance
- [ ] Run Lighthouse on key pages after deployment
- [ ] Verify Core Web Vitals in Google Search Console after indexing
- [ ] Check mobile rendering on real devices

### Deployment (Vercel — Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Add environment variables in the Vercel dashboard under Project Settings → Environment Variables.

---

## SEO Architecture

### Pages Generated
| Route | Count | Priority |
|-------|-------|----------|
| Core pages (/, /about, /contact, etc.) | 6 | High |
| Global service pages `/services/[service]` | 12 | High |
| City landing pages `/locations/[city]` | 30 | High |
| City+service pages `/locations/[city]/[service]` | 360 | Medium-High |
| **Total** | **408+** | |

### Schema Markup
- `LocalBusiness` / `RoofingContractor` — homepage and city pages
- `Service` — service and city+service pages
- `FAQPage` — all pages with FAQ sections
- `BreadcrumbList` — city-service pages

### Content Engine
`lib/contentEngine.ts` uses a deterministic hash function to select from 5 variants of each content section (intro, local challenges, process, why us, project examples, FAQs). The same city+service combination always gets the same variant, ensuring consistent builds while avoiding duplicate content across pages.

---

## Cities Served (30)

Maricopa County: Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Tempe, Glendale, Peoria, Surprise, Goodyear, Buckeye, Avondale, Queen Creek, Fountain Hills, Paradise Valley, Sun City, Sun City West, Litchfield Park, Tolleson, El Mirage, Cave Creek, Carefree, Anthem

Pinal County: Casa Grande, Maricopa, Apache Junction, Florence, Coolidge

Other: Wickenburg, Payson

## Services (12)

Roof Repair, Roof Replacement, New Roof Installation, Tile Roofing, Shingle Roofing, Metal Roofing, TPO Roofing, Flat Roofing, Commercial Roofing, Roof Coatings, Emergency Roof Repair, Storm Damage Roofing

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## XRP Roofing CRM SaaS

This repository now includes a protected roofing CRM workspace for XRP Roofing staff.

### CRM Routes

- `/login` — Supabase email/password login
- `/signup` — staff signup
- `/forgot-password` — reset email request
- `/reset-password` — password update page
- `/crm` — protected dashboard
- `/crm/leads` — Kanban-style leads pipeline
- `/crm/customers` — customer profiles
- `/crm/estimates` — estimate builder placeholder
- `/crm/tasks` — task management
- `/crm/calendar` — scheduling calendar
- `/crm/files` — file/photo upload placeholder
- `/crm/settings` — company, users, roles, notifications, and branding settings

### CRM Environment Variables

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@xrproofing.com
```

### Supabase Setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Go to Authentication → Providers and enable Email.
5. Set Site URL to your local or production URL.
6. Add redirect URLs:
   - `http://localhost:3000/crm`
   - `http://localhost:3000/reset-password`
   - `https://your-vercel-domain.vercel.app/crm`
   - `https://your-vercel-domain.vercel.app/reset-password`
7. Create a Storage bucket named `crm-files` for roofing photos and documents.

### Local Run Setup

```bash
npm install
npm run dev
```

Open:

- Public website: `http://localhost:3000`
- CRM login: `http://localhost:3000/login`
- CRM dashboard: `http://localhost:3000/crm`

If npm has local certificate issues, run:

```bash
npm config set strict-ssl false
npm install
```

### GitHub Setup

```bash
git status
git add .
git commit -m "Add XRP Roofing CRM SaaS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If the remote already exists:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### Vercel Deployment

1. Push the repository to GitHub.
2. Import the GitHub repo in Vercel.
3. Add environment variables from `.env.example`.
4. Deploy with the default Next.js build settings.
5. Add the Vercel domain to Supabase Auth redirect URLs.

### CRM Architecture

- `app/crm` contains the protected CRM application routes.
- `components/crm` contains CRM-specific auth and dashboard shell components.
- `lib/supabase` contains Supabase browser/server clients.
- `lib/crm-data.ts` contains realistic seed UI data for the current CRM screens.
- `types/crm.ts` contains CRM TypeScript domain types.
- `supabase/schema.sql` contains database tables, relationships, seed data, and RLS placeholders.
