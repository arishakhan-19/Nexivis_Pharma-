"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const productCategories = [
  { name: "ANTI-INFECTIVE & ANTI-ALLERGIC", href: "/products#anti-infective" },
  { name: "ANALGESIC & ANTIPYRETICS", href: "/products#analgesic" },
  { name: "GASTROPROTECTIVE", href: "/products#gastroprotective" },
  { name: "Neurology", href: "#", isPopup: true },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Nexivis" },
  { href: "/products", label: "Products" },
  { href: "/vision", label: "Vision & Mission" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* Hamburger Menu (Mobile & Tablet) */}
          <button suppressHydrationWarning
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-[var(--primary-blue)] hover:bg-emerald-50 rounded-full transition-colors focus:outline-none"
            aria-label="Open Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity mx-auto md:mx-0"
          >
            <img
              src="/images/brands/nexivis_logo.png"
              alt="NEXIVIS"
              width={220}
              height={70}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.label === "Products") {
                return (
                  <li 
                    key={link.href} 
                    ref={dropdownRef}
                    className="relative group" 
                    onMouseEnter={() => setIsDropdownOpen(true)} 
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link
                        href={link.href}
                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                          ${isActive || isDropdownOpen
                            ? "text-white bg-[var(--primary-blue)] shadow-md"
                            : "text-gray-600 hover:text-[var(--accent-teal)] hover:bg-emerald-50"
                          }
                        `}
                      >
                        {link.label}
                      </Link>
                    </div>
                    
                    {/* Desktop Dropdown */}
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 py-3 transition-all duration-200 transform origin-top 
                        ${isDropdownOpen ? "opacity-100 scale-100 visible translate-y-0" : "opacity-0 scale-95 invisible -translate-y-2"}
                      `}
                    >
                        {productCategories.map((cat, idx) => (
                           cat.isPopup ? (
                             <button suppressHydrationWarning 
                               key={idx} 
                               onClick={() => { setShowPopup(true); setIsDropdownOpen(false); }} 
                               className="w-full text-left px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-[var(--primary-blue)] transition-colors border-b border-gray-50 last:border-0"
                             >
                               {cat.name}
                             </button>
                           ) : (
                             <Link 
                               key={idx} 
                               onClick={() => setIsDropdownOpen(false)} 
                               href={cat.href} 
                               className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-[var(--primary-blue)] transition-colors border-b border-gray-50 last:border-0"
                             >
                               {cat.name}
                             </Link>
                           )
                        ))}
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${isActive
                        ? "text-white bg-[var(--primary-blue)] shadow-md"
                        : "text-gray-600 hover:text-[var(--accent-teal)] hover:bg-emerald-50"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Placeholder (Hidden on Desktop) */}
          <div className="w-8 md:hidden"></div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transform transition-all duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}
        <div className="relative bg-white h-full w-[80%] max-w-sm shadow-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <img
              src="/images/brands/nexivis_logo.png"
              alt="NEXIVIS"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <button suppressHydrationWarning
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-[var(--primary-blue)] hover:bg-emerald-50 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="space-y-2">
            {links.map((link) => {
              if (link.label === "Products") {
                return (
                  <li key={link.href} className="space-y-1">
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
                      <Link
                        href={link.href}
                        onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }}
                        className={`text-base font-medium ${pathname === link.href || pathname.startsWith("/products") ? "text-[var(--primary-blue)]" : "text-gray-700"}`}
                      >
                        {link.label}
                      </Link>
                      <button suppressHydrationWarning className="p-1 text-gray-400">
                        <svg className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180 text-[var(--primary-blue)]" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <ul className="pl-6 space-y-1 pb-2">
                        {productCategories.map((cat, idx) => (
                          <li key={idx}>
                            {cat.isPopup ? (
                              <button suppressHydrationWarning 
                                onClick={() => { setShowPopup(true); setIsMenuOpen(false); }} 
                                className="block w-full text-left px-4 py-3 text-sm font-semibold text-gray-600 hover:text-[var(--primary-blue)] hover:bg-emerald-50 rounded-lg transition-colors border-b border-gray-50 last:border-0"
                              >
                                {cat.name}
                              </button>
                            ) : (
                              <Link 
                                href={cat.href} 
                                onClick={() => setIsMenuOpen(false)} 
                                className="block px-4 py-3 text-sm font-semibold text-gray-600 hover:text-[var(--primary-blue)] hover:bg-emerald-50 rounded-lg transition-colors border-b border-gray-50 last:border-0"
                              >
                                {cat.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${pathname === link.href
                      ? "bg-emerald-50 text-[var(--primary-blue)]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[var(--accent-teal)]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">© 2026 Nexivis Pharma</p>
          </div>
        </div>
      </div>
      {/* Launching Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transition-all duration-300 transform scale-100 opacity-100">
            <button suppressHydrationWarning
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 text-[var(--primary-blue)] rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.45m.311-.06a15.09 15.09 0 0 1 2.448 2.45" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-6">Launching Soon !!</h3>
              <button suppressHydrationWarning 
                onClick={() => setShowPopup(false)} 
                className="w-full py-3 bg-gradient-to-r from-[var(--primary-blue)] to-blue-600 hover:from-blue-600 hover:to-[var(--primary-blue)] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
