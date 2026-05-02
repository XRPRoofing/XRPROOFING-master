"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectGalleryImages } from "@/lib/images";

export default function ProjectGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#dde6f7] text-[#1a3a8f] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3">
            Jobs We&apos;ve Done
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real roofing projects completed by our licensed crew across the Phoenix metro. Every job is backed by our written workmanship warranty.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {projectGalleryImages.map((img, index) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl shadow-sm group${
                index === 0 ? " col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 ? "1 / 1" : "4 / 3" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                    : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            Get a Free Inspection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
