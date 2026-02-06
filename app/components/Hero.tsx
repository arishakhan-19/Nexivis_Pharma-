"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">

      {/* 1. Manufacturing Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
          poster="/images/hero-bg-placeholder.jpg"
        >
          <source src="/videos/production.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay: Minimized for maximum video clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Content */}
        <div
          className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Badge Removed */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-dark)] leading-[1.1] tracking-tight">
            Nexivis Pharma <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-emerald-600">Advancing Healthcare</span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Committed to quality, innovation, and trust. We use state-of-the-art technology to manufacture medicines that meet global standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/products"
              className="group bg-[var(--primary-blue)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--secondary-blue)] shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              View Our Products
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full font-semibold text-[var(--text-dark)] hover:text-[var(--primary-blue)] hover:bg-emerald-50 transition-all duration-300 text-center border border-gray-200 hover:border-emerald-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Content - Empty to let video show */}
        <div className="hidden md:block">
        </div>

      </div>
    </section>
  );
}
