import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/95 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        {/* Brand & Disclaimer */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/brands/nexivis-logo-new.png"
              alt="Nexivis Logo"
              width={140}
              height={40}
              className="select-none"
            />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Nexivis Pharmaceuticals is committed to delivering high-quality
            pharmaceutical products that meet stringent international quality
            and safety standards.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed max-w-lg">
            The information provided on this website is intended for healthcare
            professionals and partners. It does not replace the advice of a
            qualified medical practitioner. Product availability and regulatory
            status may vary by country.
          </p>
        </div>

        {/* Navigation & Meta */}
        <div className="flex flex-col gap-6 md:items-end">
          <nav>
            <ul className="flex flex-wrap gap-3 md:justify-end text-sm text-gray-600">
              <li>
                <Link
                  href="/"
                  className="px-2 py-1 rounded-md hover:text-[var(--primary-blue)] hover:bg-[var(--soft-gray)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="px-2 py-1 rounded-md hover:text-[var(--primary-blue)] hover:bg-[var(--soft-gray)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/vision"
                  className="px-2 py-1 rounded-md hover:text-[var(--primary-blue)] hover:bg-[var(--soft-gray)] transition-colors"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="px-2 py-1 rounded-md hover:text-[var(--primary-blue)] hover:bg-[var(--soft-gray)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-xs text-gray-400 md:text-right space-y-1">
            <p>© {new Date().getFullYear()} Nexivis Pharmaceuticals. All rights reserved.</p>
            <p>For regulatory or compliance enquiries, please contact our Quality &amp; Compliance team.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
