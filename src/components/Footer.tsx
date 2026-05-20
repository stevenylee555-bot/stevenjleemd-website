import Link from "next/link";
import { Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  Specialties: [
    { label: "Hand & Wrist", href: "/specialties/hand-wrist" },
    { label: "Elbow", href: "/specialties/elbow" },
    { label: "Shoulder", href: "/specialties/shoulder" },
    { label: "Knee & Sports Medicine", href: "/specialties/knee" },
    { label: "PRP & Advanced Treatments", href: "/specialties/advanced-treatments" },
  ],
  "For Patients": [
    { label: "Book an Appointment", href: "https://www.zocdoc.com/doctor/steven-lee-md", external: true },
    { label: "Conditions Library", href: "/conditions" },
    { label: "Therapy Protocols", href: "/therapy-protocols" },
    { label: "Second Opinions", href: "/second-opinions" },
    { label: "Shop", href: "/shop" },
    { label: "Referral Network", href: "/referral-network" },
  ],
  About: [
    { label: "Biography", href: "/about/bio" },
    { label: "Credentials & Awards", href: "/about/credentials" },
    { label: "Publications & Research", href: "/about/publications" },
    { label: "Videos", href: "/about/videos" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-1">Steven J. Lee, MD</h3>
            <p className="text-gold-400 text-sm mb-4">Board-Certified Orthopedic Surgeon</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Double fellowship-trained specialist in hand, upper extremity, and sports medicine surgery.
              Chief of Hand &amp; Upper Extremity Surgery at Lenox Hill Hospital. Serving patients in NYC and Scarsdale.
            </p>

            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-white">New York City</div>
                  <div>333 E 56th St, New York, NY 10022</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-white">Scarsdale</div>
                  <div>341 Central Park Ave, Scarsdale, NY 10583</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a href="tel:+12127373301" className="hover:text-white transition-colors">
                  (212) 737-3301
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={11} className="opacity-50" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Steven J. Lee, MD. All rights reserved.</p>
          <p className="text-center">
            The information on this website is for general educational purposes only and does not constitute medical advice.
            Always consult a qualified physician for medical decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
