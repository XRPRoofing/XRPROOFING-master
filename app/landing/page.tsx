import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Facebook,
  FileCheck2,
  Flame,
  Hammer,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react";
import { PHONE, PHONE_HREF, SITE_NAME, SITE_URL, OG_IMAGE, GOOGLE_REVIEW_URL } from "@/lib/constants";
import LandingContactForm from "@/components/ui/LandingContactForm";
import { LocalBusinessSchema, ReviewSchema, ServiceSchema } from "@/components/ui/SeoSchema";

export const metadata: Metadata = {
  title: `${SITE_NAME} Landing | Free Roof Inspection`,
  description:
    "Get a free roof inspection from XRP Roofing. Fast roofing repairs, replacements, storm restoration, commercial roofing, and insurance claim assistance across Arizona.",
  alternates: { canonical: `${SITE_URL}/landing` },
  robots: { index: false, follow: true },
  openGraph: {
    title: `${SITE_NAME} | Free Roof Inspection`,
    description: "A high-converting roofing landing page for inspections, repairs, replacements, storm restoration, and emergency roofing support.",
    images: [{ url: OG_IMAGE }],
  },
};

const stats = [
  { value: "500+", label: "Projects Completed", icon: Trophy },
  { value: "Same-Day", label: "Response Available", icon: Clock3 },
  { value: "Licensed", label: "& Fully Insured", icon: ShieldCheck },
  { value: "Claims", label: "Assistance Included", icon: FileCheck2 },
];

const services = [
  { title: "Roof Repair", description: "Stop leaks fast and prevent minor roof issues from becoming expensive property damage.", icon: Wrench, href: "/services/roof-repair" },
  { title: "Roof Replacement", description: "Upgrade your roof with durable materials, clean installation, and reliable project timelines.", icon: Home, href: "/services/roof-replacement" },
  { title: "Storm Damage Restoration", description: "Get rapid help after wind, hail, monsoon rain, and severe Arizona storm events.", icon: Zap, href: "/services/storm-damage-roofing" },
  { title: "Insurance Claim Assistance", description: "Receive clear damage documentation and support through the claim process.", icon: ClipboardCheck, href: "/services/storm-damage-roofing" },
  { title: "Commercial Roofing", description: "Protect offices, retail properties, multifamily buildings, and managed assets.", icon: Building2, href: "/services/commercial-roofing" },
];

const serviceLinks = [
  { label: "Tile Roofing", href: "/services/tile-roofing" },
  { label: "Shingle Roofing", href: "/services/shingle-roofing" },
  { label: "Metal Roofing", href: "/services/metal-roofing" },
  { label: "Flat Roofing", href: "/services/flat-roofing" },
  { label: "TPO Roofing", href: "/services/tpo-roofing" },
  { label: "Roof Coatings", href: "/services/roof-coatings" },
];

const reasons = [
  "Honest & Transparent Service",
  "Fast Communication",
  "Experienced Roofing Professionals",
  "High-Quality Materials",
  "Clean Workmanship",
  "Reliable Timelines",
  "Local & Trusted Team",
];

const process = [
  { step: "01", title: "Book Your Free Inspection", description: "Claim your no-pressure roof inspection and tell us what you are seeing." },
  { step: "02", title: "Get a Clear Estimate", description: "Receive photos, recommendations, and a straightforward scope of work." },
  { step: "03", title: "Approve the Plan", description: "Choose the repair or replacement option that fits your property and budget." },
  { step: "04", title: "Protect Your Property", description: "Our crew completes the work and checks the details before we leave." },
];

const projects = [
  { title: "Roof repair project", image: "/images/xrp-roofing/project-gallery-1.jpg", alt: "roof repair project by XRP Roofing" },
  { title: "New roof installation", image: "/images/xrp-roofing/project-gallery-2.jpg", alt: "new roof installation project by XRP Roofing" },
  { title: "Storm damage restoration", image: "/images/xrp-roofing/project-gallery-3.jpg", alt: "storm damage roof restoration by XRP Roofing" },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Homeowner", review: "They found the leak, explained the fix, and got the work scheduled fast. The entire process felt simple and professional." },
  { name: "Daniel Brooks", role: "Property Manager", review: "The inspection was detailed, the estimate was clear, and the crew left the property clean. Exactly what we needed." },
  { name: "Maria Johnson", role: "Realtor", review: "XRP Roofing is the team I call when a roof concern could slow down a closing. Honest, fast, and dependable." },
];

const trustBadges = [
  { label: "ROC Licensed", sub: "ROC #350898", icon: ShieldCheck },
  { label: "Licensed & Insured", sub: "Protected, professional service", icon: BadgeCheck },
  { label: "BBB", sub: "Business trust badge", icon: Star },
  { label: "GAF", sub: "Roofing materials trusted nationwide", icon: Hammer },
];

export default function LandingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema
        serviceName="Free Roof Inspection"
        serviceSlug="free-roof-inspection"
        description="Free roof inspections for Arizona homeowners and property managers, including roof repair, replacement, storm damage, commercial roofing, and insurance claim support."
        pagePath="/landing"
      />
      <ReviewSchema authorName={testimonials[0].name} reviewBody={testimonials[0].review} />
      <main className="scroll-smooth bg-slate-950 text-slate-950">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <Image src="/images/xrp-roofing/landing-luxury-roof.jpg.jpeg" alt="luxury Arizona home roof completed by XRP Roofing" fill priority fetchPriority="high" sizes="100vw" className="-z-20 object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.55),transparent_34%),linear-gradient(105deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.9)_45%,rgba(30,64,175,0.5)_100%)]" />
        <div className="container mx-auto grid min-h-[860px] items-center gap-12 px-4 py-12 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-black uppercase tracking-[0.16em] text-white shadow-2xl shadow-blue-500/30">
              <Flame className="h-4 w-4 fill-white" />
              Free roof inspection campaign
            </div>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
              Protect Your Home With Roofing You Can Trust
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-medium leading-9 text-blue-50 sm:text-2xl">
              Professional roofing solutions for residential and commercial properties. From inspections and repairs to full roof replacements, XRP Roofing delivers dependable service and lasting results.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-9 py-5 text-lg font-black text-blue-800 shadow-2xl shadow-blue-950/30 transition-all hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50">
                Get Free Inspection <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" aria-label="See XRP Roofing reviews on Google" className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 px-5 py-3 text-sm font-black text-white shadow-xl shadow-blue-950/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20">
              <span className="flex items-center gap-1 text-amber-300">
                {[1, 2, 3, 4, 5].map((rating) => <Star key={rating} className="h-4 w-4 fill-current" />)}
              </span>
              5.0 ★ on Google
            </a>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Arizona roofing experts", "No-pressure inspections", "Fast storm response"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur">
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 flex max-w-xl items-start gap-2 text-sm font-bold text-blue-100">
              <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
              Trusted by homeowners, Realtors, and property managers across Arizona.
            </p>
          </div>

          <div className="relative animate-[fadeIn_0.9s_ease-out]">
            <div className="absolute -left-4 top-8 z-20 rotate-[-3deg] rounded-3xl bg-white px-6 py-5 text-slate-950 shadow-2xl max-sm:hidden">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Limited promo</p>
              <p className="text-3xl font-black tracking-[-0.05em]">$0 Inspection</p>
            </div>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="relative h-[560px] overflow-hidden rounded-[1.75rem] bg-slate-200">
                <Image src="/images/xrp-roofing/landing-luxury-roof.jpg.jpeg" alt="premium luxury roofing project by XRP Roofing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">Completed roofing project</p>
                  <p className="mt-2 text-2xl font-black">Clean roof repairs, coatings, and tile work handled by local pros.</p>
                </div>
              </div>
            </div>
            <a href={PHONE_HREF} className="absolute -bottom-7 right-5 z-20 rounded-3xl bg-blue-600 px-7 py-5 text-white shadow-2xl shadow-blue-600/40 transition hover:-translate-y-1 hover:bg-blue-500">
              <span className="block text-xs font-black uppercase tracking-[0.18em] text-blue-100">Call now</span>
              <span className="flex items-center gap-2 text-xl font-black"><Phone className="h-5 w-5" />{PHONE}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="container mx-auto grid gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-[#f5f8ff] p-4 shadow-lg shadow-blue-950/5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-950">{badge.label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-600">{badge.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-blue-600 py-5 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-xl font-black tracking-[-0.03em]">Free roof inspections available for Arizona homeowners and property managers.</p>
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-black text-blue-700 transition hover:scale-105">Claim Yours <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-[#f5f8ff] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-blue-700">Why people call XRP Roofing</p>
            <h2 className="text-5xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-6xl">Built on Quality. Driven by Results.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="group rounded-[2rem] bg-white p-7 shadow-xl shadow-blue-950/5 ring-1 ring-blue-100 transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-900/15">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-600/25 transition group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <p className="text-4xl font-black tracking-[-0.06em] text-slate-950">{item.value}</p>
                  <p className="mt-1 text-lg font-black text-slate-700">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="container relative mx-auto grid items-center gap-14 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-900/15">
              <Image src="/images/xrp-roofing/landing%20luxury22.jpeg" alt="XRP Roofing completed luxury roof project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-3xl bg-slate-950 p-6 text-white shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">Stress-free roofing</p>
              <p className="mt-1 text-2xl font-black">Clear. Fast. Reliable.</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-blue-700">About XRP Roofing</p>
            <h2 className="text-5xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-6xl">Roofing Solutions Without the Stress</h2>
            <p className="mt-7 text-xl font-medium leading-9 text-slate-600">
              At XRP Roofing, we believe every homeowner deserves honest communication, quality workmanship, and reliable roofing solutions. Our team focuses on protecting your property with durable materials and professional service from start to finish.
            </p>
            <Link href="#contact" className="mt-9 inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-700 px-9 py-5 text-lg font-black text-white shadow-2xl shadow-blue-700/25 transition-all hover:-translate-y-1 hover:bg-blue-800">
              Schedule Your Free Inspection <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-950 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-blue-300">What we fix</p>
              <h2 className="max-w-3xl text-5xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Our Roofing Services</h2>
            </div>
            <p className="max-w-xl text-xl font-medium leading-8 text-slate-300">Get the right roofing solution fast, without guesswork or high-pressure sales tactics.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link href={service.href} key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:text-slate-950">
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-300 group-hover:text-slate-600">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-blue-300 group-hover:text-blue-700">Learn more <ArrowRight className="h-4 w-4" /></span>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-blue-300">More Phoenix roofing services</p>
            <div className="flex flex-wrap gap-3">
              {serviceLinks.map((service) => (
                <Link key={service.href} href={service.href} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-100">
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-100">Fast help before damage spreads</p>
          <h2 className="mx-auto mt-4 max-w-5xl text-5xl font-black leading-none tracking-[-0.06em] sm:text-7xl">Don’t Wait Until a Small Leak Becomes a Major Repair.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-medium leading-9 text-blue-50">Book a free inspection and get a clear plan to protect your roof, home, and budget.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#contact" className="rounded-2xl bg-white px-9 py-5 text-lg font-black text-blue-700 shadow-2xl shadow-blue-950/20 transition hover:-translate-y-1">Get Free Inspection</Link>
            <a href={PHONE_HREF} className="rounded-2xl border border-white/30 bg-white/10 px-9 py-5 text-lg font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">Call Now</a>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8ff] py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-blue-700">Why homeowners choose us</p>
            <h2 className="text-5xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-6xl">Designed to Make Roofing Feel Easy</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-lg shadow-blue-950/5 ring-1 ring-blue-100 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><CheckCircle2 className="h-6 w-6" /></div>
                <p className="font-black text-slate-800">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-blue-700">Simple process</p>
            <h2 className="text-5xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-6xl">From Inspection to Protection in 4 Steps</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/10 transition hover:-translate-y-2">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-600/40 blur-2xl" />
                <div className="relative mb-10 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-xl font-black shadow-lg shadow-blue-600/25">{item.step}</div>
                <h3 className="relative text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="relative mt-4 text-base leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8ff] py-24">
        <div className="container mx-auto px-4">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-blue-700">Real project visuals</p>
              <h2 className="max-w-4xl text-5xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-6xl">Roofing Work That Looks as Strong as It Performs</h2>
            </div>
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-8 py-4 font-black text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-1">Start Your Project <ArrowRight className="h-5 w-5" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-[2.25rem] bg-white shadow-2xl shadow-blue-950/8 transition hover:-translate-y-2">
                <div className="relative h-96 overflow-hidden">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-black tracking-[-0.04em]">{project.title}</h3>
                    <p className="mt-1 text-sm font-bold text-blue-100">XRP Roofing project image</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-blue-700">Customer proof</p>
            <h2 className="text-5xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-6xl">What Our Customers Say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[2rem] bg-[#f5f8ff] p-8 shadow-xl shadow-blue-950/5 ring-1 ring-blue-100 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10">
                <div className="mb-6 flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((rating) => <Star key={rating} className="h-6 w-6 fill-current" />)}
                </div>
                <p className="text-xl font-semibold leading-9 text-slate-800">&ldquo;{testimonial.review}&rdquo;</p>
                <div className="mt-8 border-t border-blue-100 pt-6">
                  <p className="text-lg font-black text-slate-950">{testimonial.name}</p>
                  <p className="font-bold text-blue-700">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <Image src="/images/xrp-roofing/landing%20luxury22.jpeg" alt="luxury roof inspection background" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/80" />
        <div className="container relative z-10 mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur lg:p-10">
            <p className="mb-4 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-white">Free inspection</p>
            <h2 className="text-5xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Get Your Free Roof Inspection Today</h2>
            <p className="mt-7 text-xl font-medium leading-9 text-blue-50">Share a few details and our team will follow up with next steps for an inspection, repair plan, or roof replacement estimate.</p>
            <div className="mt-10 space-y-5 text-lg">
              <a href={PHONE_HREF} className="flex items-center gap-4 font-black text-white"><Phone className="h-6 w-6 text-blue-300" />{PHONE}</a>
              <div className="flex items-center gap-4 font-black text-white"><Mail className="h-6 w-6 text-blue-300" />info@xrproofing.com</div>
              <div className="flex items-center gap-4 font-black text-white"><MapPin className="h-6 w-6 text-blue-300" />Serving homeowners and properties across Arizona</div>
            </div>
          </div>
          <LandingContactForm />
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-700 py-24 text-white">
        <Image src="/images/xrp-roofing/landing%20luxury22.jpeg" alt="luxury roofing background for final call to action" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-700/90 to-slate-950/80" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-100">Ready to protect your roof?</p>
          <h2 className="mx-auto mt-4 max-w-5xl text-5xl font-black leading-none tracking-[-0.06em] sm:text-7xl">Protect Your Property With Roofing You Can Rely On</h2>
          <p className="mx-auto mt-7 max-w-2xl text-xl font-medium leading-9 text-blue-50">Schedule your inspection today and get a clear roofing plan from a team built on quality, trust, and dependable results.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#contact" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-9 py-5 text-lg font-black text-blue-800 shadow-2xl shadow-blue-950/20 transition-all hover:-translate-y-1 hover:bg-blue-50">Schedule Inspection <ArrowRight className="h-5 w-5" /></Link>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-9 py-5 text-lg font-black text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"><Phone className="h-5 w-5" />Call Now</a>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2 text-2xl font-black tracking-[-0.03em] text-slate-950"><Hammer className="h-7 w-7 text-blue-700" />XRP Roofing</div>
              <p className="leading-7 text-slate-600">Premium roofing service for inspections, repairs, replacements, storm restoration, and commercial properties.</p>
            </div>
            <div><h3 className="mb-4 font-black text-slate-950">Quick Links</h3><div className="space-y-3 text-sm font-semibold text-slate-600"><a href="#contact" className="block hover:text-blue-700">Free Inspection</a><a href="#services" className="block hover:text-blue-700">Services</a><a href={SITE_URL} className="block hover:text-blue-700">Main Website</a></div></div>
            <div><h3 className="mb-4 font-black text-slate-950">Contact Info</h3><div className="space-y-3 text-sm font-semibold text-slate-600"><a href={PHONE_HREF} className="block hover:text-blue-700">{PHONE}</a><p>info@xrproofing.com</p><p>Arizona roofing service area</p></div></div>
            <div><h3 className="mb-4 font-black text-slate-950">Social</h3><div className="flex gap-3"><a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-blue-700 hover:text-white"><Facebook className="h-5 w-5" /></a><a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-blue-700 hover:text-white"><Instagram className="h-5 w-5" /></a><a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-blue-700 hover:text-white"><Linkedin className="h-5 w-5" /></a></div></div>
          </div>
          <div className="mt-10 border-t border-slate-100 pt-6 text-sm font-semibold text-slate-500">© {new Date().getFullYear()} XRP Roofing. All rights reserved.</div>
        </div>
      </footer>
      </main>
    </>
  );
}
