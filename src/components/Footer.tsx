import Link from "next/link";
import { Phone, MapPin, ExternalLink, Globe } from "lucide-react";
import { ZOCDOC_URL } from "@/lib/site";

const footerLinks = {
  Specialties: [
    { label: "Hand & Wrist", href: "/specialties/hand-wrist" },
    { label: "Elbow", href: "/specialties/elbow" },
    { label: "Shoulder", href: "/specialties/shoulder" },
    { label: "Knee & Sports Medicine", href: "/specialties/knee" },
    { label: "PRP & Advanced Treatments", href: "/specialties/advanced-treatments" },
  ],
  "For Patients": [
    { label: "Book an Appointment", href: ZOCDOC_URL, external: true },
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
            <p className="text-white/85 text-sm leading-relaxed mb-6">
              Double fellowship-trained specialist in hand, upper extremity, and sports medicine surgery.
              Chief of Hand &amp; Upper Extremity Surgery at Lenox Hill Hospital. Serving patients in NYC and Scarsdale.
            </p>

            <div className="space-y-3 text-sm text-white/85">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-medium text-white">New York City</div>
                  <div>159 East 74th Street, New York, NY 10021</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-medium text-white">Scarsdale</div>
                  <div>2 Overhill Road, Suite 310, Scarsdale, NY 10583</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-gold-400 shrink-0" aria-hidden="true" />
                <a href="tel:+12127373301" className="hover:text-white transition-colors" aria-label="Call NYC office">
                  (212) 737-3301
                </a>
                <span className="text-white/40">·</span>
                <a href="tel:+19147256970" className="hover:text-white transition-colors" aria-label="Call Scarsdale office">
                  (914) 725-6970
                </a>
              </div>
              {/* Group practice site; changes after the practice transition */}
              <div className="flex items-start gap-2">
                <Globe size={15} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-medium text-white">Group practice</div>
                  <a
                    href="https://www.newyorkorthopedics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    newyorkorthopedics.com
                  </a>
                </div>
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
                        className="flex items-center gap-1 text-sm text-white/85 hover:text-white transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={11} className="opacity-50" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/85 hover:text-white transition-colors"
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

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/85">
          <p>
            © {new Date().getFullYear()} Steven J. Lee, MD. All rights reserved.
            <span className="text-white/40 mx-2" aria-hidden="true">·</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </p>
          <p className="text-center">
            The information on this website is for general educational purposes only and does not constitute medical advice.
            Always consult a qualified physician for medical decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
