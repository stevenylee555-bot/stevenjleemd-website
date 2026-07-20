import type { Metadata } from "next";
import { Calendar, Phone, MapPin, Video, Mail, ExternalLink, Clock, Printer } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { ZOCDOC_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact, Steven J. Lee, MD",
  description:
    "Contact Dr. Steven J. Lee, MD for orthopedic surgery appointments and consultations. Locations in New York City and Scarsdale. Telemedicine available for out-of-state and international patients.",
  alternates: { canonical: "https://www.stevenjleemd.com/contact" },
};

const locations = [
  {
    city: "New York City",
    address: ["159 East 74th Street", "New York, NY 10021"],
    phone: "(212) 737-3301",
    fax: "(212) 737-4876",
    note: "Manhattan office, primary location",
    mapsQuery: "159+East+74th+Street,+New+York,+NY+10021",
  },
  {
    city: "Scarsdale",
    address: ["2 Overhill Road, Suite 310", "Scarsdale, NY 10583"],
    phone: "(914) 725-6970",
    fax: null,
    note: "Westchester office, by appointment",
    mapsQuery: "2+Overhill+Road,+Scarsdale,+NY+10583",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Get in Touch"
        title="Book a visit, or get answers"
        italic="before you do."
        lede="Two locations in New York. Same-week appointments often available. Telemedicine consultations for out-of-state and international patients."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Primary actions */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-900/10 border border-navy-900/10">
            <div className="bg-white p-8 lg:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-gold-500/15 ring-1 ring-gold-500/30 mb-6">
                <Calendar size={20} className="text-gold-600" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl text-navy-950 tracking-[-0.01em] mb-3">
                Book online
              </h2>
              <p className="text-navy-900/90 text-[15px] leading-relaxed mb-6">
                The fastest way. Real-time availability at both locations, 24/7. Skip the call center entirely.
              </p>
              <a
                href={ZOCDOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-950 font-semibold hover:text-gold-600 transition-colors"
              >
                <span className="border-b border-navy-950 group-hover:border-gold-600 pb-0.5">
                  Open ZocDoc
                </span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="bg-white p-8 lg:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-gold-500/15 ring-1 ring-gold-500/30 mb-6">
                <Phone size={20} className="text-gold-600" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl text-navy-950 tracking-[-0.01em] mb-3">
                Call the office
              </h2>
              <p className="text-navy-900/90 text-[15px] leading-relaxed mb-6">
                Talk to a person. The call center handles both locations. Wait times may be long during peak hours.
              </p>
              <a
                href="tel:+12127373301"
                className="inline-flex items-center gap-2 text-navy-950 font-semibold hover:text-gold-600 transition-colors"
              >
                <span className="border-b border-navy-950 pb-0.5">(212) 737-3301</span>
              </a>
            </div>

            <div className="bg-white p-8 lg:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-gold-500/15 ring-1 ring-gold-500/30 mb-6">
                <Video size={20} className="text-gold-600" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl text-navy-950 tracking-[-0.01em] mb-3">
                Telemedicine
              </h2>
              <p className="text-navy-900/90 text-[15px] leading-relaxed mb-6">
                Virtual consultations for out-of-state, international, and second-opinion patients. Imaging review included.
              </p>
              <a
                href={ZOCDOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-950 font-semibold hover:text-gold-600 transition-colors"
              >
                <span className="border-b border-navy-950 pb-0.5">Request virtual visit</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Locations */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">Office Locations</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
              Two offices. <span className="serif-italic text-gold-600">One physician.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-white p-8 lg:p-10">
                <div className="kicker text-navy-900/85 mb-4">{loc.note}</div>
                <h3 className="font-serif text-3xl text-navy-950 tracking-[-0.01em] mb-6">
                  {loc.city}
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-gold-600 mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <div className="text-navy-900/85">
                      {loc.address.map((line) => (
                        <div key={line} className="text-[15px] leading-snug">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      size={18}
                      className="text-gold-600 mt-0.5 shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:+1${loc.phone.replace(/\D/g, "")}`}
                      className="text-[15px] text-navy-900/85 hover:text-gold-600 transition-colors"
                      aria-label={`Call ${loc.city} office`}
                    >
                      {loc.phone}
                    </a>
                  </div>

                  {loc.fax && (
                    <div className="flex items-start gap-3">
                      <Printer
                        size={18}
                        className="text-gold-600 mt-0.5 shrink-0"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <div className="text-[15px] text-navy-900/85">
                        <span className="kicker text-navy-900/90 mr-2">Fax</span>
                        {loc.fax}
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-gold-600 mt-0.5 shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div className="text-[15px] text-navy-900/85">
                      Monday to Friday · 8:00 AM to 5:00 PM
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-navy-900/10">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-950 hover:text-gold-600 transition-colors"
                  >
                    <span className="border-b border-navy-950 hover:border-gold-600 pb-0.5">
                      Get directions
                    </span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-500/15 ring-1 ring-gold-500/30 mb-5">
                <Mail size={16} className="text-gold-400" strokeWidth={1.5} />
              </div>
              <div className="font-serif text-lg text-white mb-2">Records & forms</div>
              <p className="text-white/80 text-[15px] leading-relaxed">
                New-patient forms are sent by the office before your appointment. Existing patients
                can request medical records by calling the office directly.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-500/15 ring-1 ring-gold-500/30 mb-5">
                <Video size={16} className="text-gold-400" strokeWidth={1.5} />
              </div>
              <div className="font-serif text-lg text-white mb-2">Out-of-network</div>
              <p className="text-white/80 text-[15px] leading-relaxed">
                Many patients see Dr. Lee out-of-network for complex cases, second opinions, and
                procedures requiring his specific expertise. The office can provide superbills for
                reimbursement.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-500/15 ring-1 ring-gold-500/30 mb-5">
                <Phone size={16} className="text-gold-400" strokeWidth={1.5} />
              </div>
              <div className="font-serif text-lg text-white mb-2">Emergencies</div>
              <p className="text-white/80 text-[15px] leading-relaxed">
                For medical emergencies, call 911 or go to the nearest emergency room. This office
                is not equipped to handle acute emergencies outside of business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
