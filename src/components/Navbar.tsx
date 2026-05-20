"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Biography", href: "/about/bio" },
      { label: "Credentials & Awards", href: "/about/credentials" },
      { label: "Publications", href: "/about/publications" },
      { label: "Videos", href: "/about/videos" },
      { label: "CV", href: "/about/cv" },
    ],
  },
  {
    label: "Specialties",
    href: "/specialties",
    children: [
      { label: "Hand & Wrist", href: "/specialties/hand-wrist" },
      { label: "Elbow", href: "/specialties/elbow" },
      { label: "Shoulder", href: "/specialties/shoulder" },
      { label: "Knee & Sports", href: "/specialties/knee" },
      { label: "PRP & Advanced Treatments", href: "/specialties/advanced-treatments" },
    ],
  },
  { label: "Conditions", href: "/conditions" },
  { label: "Therapy Protocols", href: "/therapy-protocols" },
  { label: "Second Opinions", href: "/second-opinions" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Scroll-lock body when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900 border-b border-white/5">
      {/* Top bar, hidden on phones to prevent overflow with phone number */}
      <div className="bg-navy-950 py-2 px-4 text-sm text-white/60 hidden sm:flex justify-between items-center max-w-7xl mx-auto">
        <span>Lenox Hill Hospital · NYC &amp; Scarsdale</span>
        <a href="tel:+12127373301" className="flex items-center gap-1 hover:text-gold-400 transition-colors" aria-label="Call office at (212) 737-3301">
          <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
          (212) 737-3301
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="font-serif text-white text-xl lg:text-[22px] tracking-[-0.01em] leading-none">
            Steven J. Lee,{" "}
            <span className="serif-italic text-gold-400">MD</span>
          </span>
          <span className="text-white/60 text-[11px] tracking-[0.16em] uppercase font-semibold mt-1.5">
            Chief of Hand &amp; Upper Extremity Surgery
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
              onFocus={() => link.children && setActiveDropdown(link.href)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setActiveDropdown(null);
                }
              }}
            >
              <Link
                href={link.href}
                aria-haspopup={link.children ? "true" : undefined}
                aria-expanded={link.children ? activeDropdown === link.href : undefined}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors",
                  activeDropdown === link.href && "bg-white/10 text-white"
                )}
              >
                {link.label}
                {link.children && <ChevronDown size={14} strokeWidth={1.5} className="opacity-60" aria-hidden="true" />}
              </Link>

              {link.children && activeDropdown === link.href && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-navy-900 rounded-sm shadow-2xl border border-white/10 py-1 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Book CTA */}
          <a
            href="https://www.zocdoc.com/doctor/steven-lee-md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book online via ZocDoc (opens in new tab)"
            className="ml-3 px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold rounded transition-colors whitespace-nowrap"
          >
            Book Online
          </a>
        </div>

        {/* Mobile toggle, 44x44 hit target */}
        <button
          className="lg:hidden text-white p-2.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-navy-800 border-t border-white/10 px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-white/80 hover:text-white text-sm font-medium border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-white/60 hover:text-white text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://www.zocdoc.com/doctor/steven-lee-md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book online via ZocDoc (opens in new tab)"
            className="block w-full text-center mt-4 px-4 py-3 bg-gold-500 text-navy-900 font-semibold rounded"
          >
            Book Online, ZocDoc
          </a>
        </div>
      )}
    </nav>
  );
}
