"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* Hamburger Menu (Mobile & Tablet) */}
          <button
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
            <Image
              src="/images/brands/nexivis-logo-new.png?v=3"
              alt="Nexivis Pharma"
              width={280}
              height={90}
              priority
              className="h-20 md:h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

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
            <Image
              src="/images/brands/nexivis-logo-new.png?v=3"
              alt="Nexivis Pharma"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-[var(--primary-blue)] hover:bg-emerald-50 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="space-y-2">
            {links.map((link) => (
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
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">© 2026 Nexivis Pharma</p>
          </div>
        </div>
      </div>
    </>
  );
}
