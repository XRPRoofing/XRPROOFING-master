import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Hammer,
  HardHat,
  Home,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  User,
  Wrench,
  Zap,
} from "lucide-react";
import { PHONE, PHONE_HREF, SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} Landing | Reliable Roofing You Can Trust`,
  description:
    "Request a free estimate from XR Proofing for licensed and insured roof repair, roof replacement, roof inspection, storm damage repair, and 24/7 emergency roofing service.",
  alternates: { canonical: `${SITE_URL}/landing` },
  openGraph: {
    title: `${SITE_NAME} | Reliable Roofing You Can Trust`,
    description: "Modern roofing services with free estimates, quality workmanship, and 24/7 emergency support.",
    images: [{ url: OG_IMAGE }],
  },
};

const services = [
  {
    title: "Roof Repair",
    description: "Fast leak fixes, shingle repairs, flashing work, and reliable protection for damaged roof areas.",
    icon: Wrench,
  },
  {
    title: "Roof Replacement",
    description: "Durable roof replacement options installed with clean workmanship and long-term value in mind.",
    icon: Home,
  },
  {
    title: "Roof Inspection",
    description: "Clear roof assessments for buyers, sellers, homeowners, and businesses planning repairs.",
    icon: ShieldCheck,
  },
  {
    title: "Storm Damage Repair",
    description: "Responsive help after wind, hail, rain, and storm events with practical repair recommendations.",
    icon: Zap,
  },
];

const benefits = [
  { title: "Licensed & Insured", description: "Work with a professional roofing team that puts safety and accountability first.", icon: ShieldCheck },
  { title: "Fast Response", description: "Get timely scheduling for estimates, inspections, repairs, and urgent roofing issues.", icon: Clock },
  { title: "Quality Workmanship", description: "Every project is completed with attention to detail, durable materials, and clean job sites.", icon: Award },
  { title: "Affordable Pricing", description: "Receive straightforward estimates and roofing options that fit your property and budget.", icon: DollarSign },
];

const projects = [
  {
    title: "Roof repair project",
    image: "/images/xrp-roofing/project-gallery-1.jpg",
    alt: "roof repair project by XR Proofing",
  },
  {
    title: "New roof installation",
    image: "/images/xrp-roofing/project-gallery-2.jpg",
    alt: "new roof installation by XR Proofing",
  },
  {
    title: "Storm damage roof repair",
    image: "/images/xrp-roofing/project-gallery-3.jpg",
    alt: "storm damage roof repair by XR Proofing",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    review: "XR Proofing answered quickly, explained the repair clearly, and stopped our roof leak before more damage happened.",
  },
  {
    name: "Daniel Brooks",
    review: "Professional crew, clean work, and a smooth roof replacement from the first estimate to the final walkthrough.",
  },
  {
    name: "Maria Johnson",
    review: "The team was honest, affordable, and easy to communicate with. I would recommend XR Proofing to any homeowner.",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative flex min-h-[680px] items-center overflow-hidden bg-slate-950">
        <Image
          src="/images/xrp-roofing/2025-01-26.jpg"
          alt="roofing crew working on a residential roof"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/40" />
        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <HardHat className="h-4 w-4 text-blue-300" />
              Licensed & insured roofing services
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Reliable Roofing You Can Trust
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-blue-50 sm:text-xl">
              XR Proofing helps homeowners and businesses protect their property with roof repair, replacement, inspections, storm damage repair, and emergency roofing support.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-colors hover:bg-blue-700"
              >
                Get Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                {PHONE}
              </a>
            </div>
            <div className="mt-10 grid gap-3 text-sm font-semibold text-blue-50 sm:grid-cols-3">
              {["Free estimates", "24/7 emergency service", "Clean workmanship"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Services</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Roofing solutions for every stage of your roof</h2>
            <p className="mt-4 text-lg text-slate-600">
              Whether you need an urgent repair or a full replacement, XR Proofing provides dependable service with a clear plan.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-slate-900">{service.title}</h3>
                  <p className="leading-relaxed text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
              <Image
                src="/images/xrp-roofing/2025-01-26-2.jpg"
                alt="completed residential roofing workmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Why Choose Us</span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Built for homeowners who want roofing done right</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We keep the roofing process simple with honest recommendations, responsive communication, professional crews, and reliable project follow-through.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <Icon className="mb-4 h-8 w-8 text-blue-600" />
                      <h3 className="text-lg font-black text-slate-900">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Projects Gallery</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Roofing work examples</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Existing local project images representing roof repair, new roof installation, and storm damage repair work.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-3xl bg-slate-800 shadow-xl">
                <div className="relative h-72">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">Roofing project image</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Testimonials</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">What customers say about XR Proofing</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star key={rating} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="leading-relaxed text-slate-700">&ldquo;{testimonial.review}&rdquo;</p>
                <p className="mt-6 font-black text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">5-star customer review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
                <Clock className="h-4 w-4" />
                24/7 Emergency Roofing Service
              </div>
              <h2 className="text-3xl font-black sm:text-4xl">Need emergency roof help?</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-50">
                Roof leaks and storm damage can escalate fast. Call XR Proofing for urgent support, temporary protection, and a clear repair path.
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-black text-blue-700 shadow-xl transition-colors hover:bg-blue-50"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Contact XR Proofing</span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Request your free estimate</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Share a few details about your roof and our team will follow up to schedule your estimate or inspection.
              </p>
              <div className="mt-8 space-y-4">
                <a href={PHONE_HREF} className="flex items-center gap-3 font-semibold text-slate-800 hover:text-blue-700">
                  <Phone className="h-5 w-5 text-blue-600" />
                  {PHONE}
                </a>
                <div className="flex items-center gap-3 font-semibold text-slate-800">
                  <Mail className="h-5 w-5 text-blue-600" />
                  info@xrproofing.com
                </div>
              </div>
            </div>
            <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                    <User className="h-4 w-4 text-blue-600" />
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Phone className="h-4 w-4 text-blue-600" />
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Your phone"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Mail className="h-4 w-4 text-blue-600" />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  placeholder="you@example.com"
                />
              </label>
              <label className="mt-5 block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  placeholder="Tell us about your roof repair, replacement, inspection, or storm damage needs."
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-black text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                Request Estimate
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xl font-black">
                <Hammer className="h-6 w-6 text-blue-300" />
                XR Proofing
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Reliable roofing services for repairs, replacements, inspections, storm damage, and emergency roof support.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-black">Company Info</h3>
              <p className="text-sm text-slate-400">Licensed & insured roofing professionals</p>
              <p className="text-sm text-slate-400">Residential and commercial roofing service</p>
            </div>
            <div>
              <h3 className="mb-3 font-black">Contact</h3>
              <a href={PHONE_HREF} className="block text-sm text-slate-400 transition-colors hover:text-white">
                {PHONE}
              </a>
              <p className="text-sm text-slate-400">info@xrproofing.com</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} XR Proofing. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
