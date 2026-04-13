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
          <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');" }} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B3D91] leading-[1.1] tracking-tight">
            NEXIVIS PHARMA <br />
            <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl text-[#0B3D91] font-medium tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quality you can prescribe with confidence
            </span>
          </h1>

          <p className="text-[#0B3D91] text-lg md:text-xl leading-relaxed max-w-xl font-medium opacity-90 mt-6 md:mt-8">
            Committed to quality, innovation, and trust. We use state-of-the-art technology to manufacture medicines that meet global standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-8 md:mt-10">
            <Link
              href="/products"
              className="group bg-[#0B3D91] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#082a63] shadow-lg hover:shadow-blue-900/30 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              View Our Products
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full font-semibold text-[#0B3D91] hover:text-[#082a63] hover:bg-blue-50 transition-all duration-300 text-center border-2 border-[#0B3D91] hover:border-[#082a63]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Content - Certifications aligned to right */}
        <div className="hidden md:flex flex-col justify-center items-end h-full gap-6">
          <div className="flex gap-4 animate-fade-in-left delay-500">
            {["certification1.jpg", "certification2.jpg", "certification3.jpg"].map((cert, index) => (
              <div key={index} className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full p-2 shadow-2xl border-4 border-emerald-50/50 flex items-center justify-center transition-transform hover:scale-110 group cursor-pointer backdrop-blur-sm">
                <img
                  src={`/images/brands/${cert}`}
                  alt="Certified Quality"
                  className="w-full h-full object-contain rounded-full group-hover:rotate-6 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-sm font-bold text-[#0B3D91] uppercase tracking-wider">
              Global Manufacturing Standards
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
