"use client";

import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900 shadow-lg">
      {/* Top bar */}
      <div className="bg-navy-950 py-2 px-4 text-sm text-white/60 flex justify-between items-center max-w-7xl mx-auto">
        <span>Chief of Hand Surgery · Lenox Hill Hospital · NYC & Scarsdale</span>
        <a href="tel:+12127373301" className="flex items-center gap-1 hover:text-gold-400 transition-colors">
          <Phone size={13} />
          (212) 737-3301
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-white font-bold text-lg tracking-wide">Steven J. Lee, MD</span>
          <span className="text-gold-400 text-xs tracking-wider uppercase">Orthopedic Surgery</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors",
                  activeDropdown === link.href && "bg-white/10 text-white"
                )}
              >
                {link.label}
                {link.children && <ChevronDown size={13} className="opacity-60" />}
              </Link>

              {link.children && activeDropdown === link.href && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-navy-800 hover:text-white transition-colors"
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
            className="ml-3 px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold rounded transition-colors whitespace-nowrap"
          >
            Book Online
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-white/10 px-4 py-4 space-y-2">
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
            className="block w-full text-center mt-4 px-4 py-3 bg-gold-500 text-navy-900 font-semibold rounded"
          >
            Book Online — ZocDoc
          </a>
        </div>
      )}
    </nav>
  );
}
