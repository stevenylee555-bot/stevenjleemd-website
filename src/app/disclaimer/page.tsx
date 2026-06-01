import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, ShieldAlert } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Disclaimer, Steven J. Lee, MD",
  description:
    "Website disclaimer for stevenjleemd.com. The content is general educational information, not medical advice, and does not create a doctor-patient relationship.",
  alternates: { canonical: "https://www.stevenjleemd.com/disclaimer" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 31, 2026";

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Website"
        italic="Disclaimer."
        lede="The information on this website is provided for general education. It is not medical advice, and using this site does not create a doctor-patient relationship."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Disclaimer", href: "/disclaimer" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 rounded-md border border-navy-900/10 bg-cream px-5 py-4 mb-12">
            <CalendarClock size={18} className="text-gold-600 shrink-0" strokeWidth={1.5} />
            <p className="text-[14px] text-navy-900/85">
              <span className="font-semibold text-navy-950">Last updated:</span> {LAST_UPDATED}
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-md border border-gold-600/30 bg-gold-500/[0.07] p-5 mb-14">
            <ShieldAlert size={20} className="text-gold-600 mt-0.5 shrink-0" strokeWidth={1.75} />
            <div className="text-[14.5px] leading-relaxed text-navy-900/90">
              <p className="font-semibold text-navy-950 mb-1">In an emergency, call 911.</p>
              <p>
                This website is not a channel for medical care. Do not use it to seek diagnosis or
                treatment, and do not send health details through the contact form. For medical
                questions, call the office or use the patient portal.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <Section title="1. General educational information">
              <p>
                The content on stevenjleemd.com, including the condition and specialty pages, is
                provided for general informational and educational purposes. It describes orthopedic
                conditions and treatments in broad terms and cannot account for the specifics of any
                individual case.
              </p>
            </Section>

            <Section title="2. Not medical advice">
              <p>
                Nothing on this website is medical advice, a diagnosis, or a treatment recommendation,
                and it is not a substitute for an in-person evaluation by a qualified physician. Always
                seek the advice of your physician or another qualified health provider with any
                questions about a medical condition. Never disregard professional medical advice or
                delay seeking it because of something you read here.
              </p>
            </Section>

            <Section title="3. No doctor-patient relationship">
              <p>
                Reading this website, submitting the contact form, or otherwise communicating through
                this site does not create a doctor-patient relationship between you and Dr. Lee or his
                practice. That relationship is established only through a formal in-office or
                telemedicine consultation.
              </p>
            </Section>

            <Section title="4. Individual results vary">
              <p>
                Descriptions of procedures, recovery timelines, and outcomes reflect general experience
                and the medical literature. They are not a promise or guarantee of any particular
                result. Every patient is different, and outcomes depend on the individual diagnosis,
                anatomy, and circumstances. Any patient stories shared on this site are individual
                experiences and may not be typical.
              </p>
            </Section>

            <Section title="5. External links">
              <p>
                This website links to third-party resources, such as the online booking platform and
                published research. Those sites are governed by their own terms and privacy policies,
                and we are not responsible for their content.
              </p>
            </Section>

            <Section title="6. No warranty">
              <p>
                We work to keep the information current and accurate, but we make no warranty, express
                or implied, about its completeness or accuracy. Medical knowledge changes, and content
                may be updated without notice.
              </p>
            </Section>

            <Section title="7. Contact">
              <p>
                For office details, see the{" "}
                <Link href="/contact" className="text-navy-950 font-semibold hover:text-gold-600 transition-colors">
                  contact page
                </Link>
                . For how this website handles information, see the{" "}
                <Link href="/privacy" className="text-navy-950 font-semibold hover:text-gold-600 transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>
          </div>

          <div className="mt-16 pt-8 border-t border-navy-900/10 text-[13.5px] text-navy-900/85 leading-relaxed">
            <p>This disclaimer is provided for transparency and is not legal advice.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl lg:text-[1.75rem] tracking-[-0.01em] text-navy-950 mb-5 leading-snug">
        {title}
      </h2>
      <div className="space-y-4 text-[15.5px] leading-relaxed text-navy-900/85 [&_strong]:text-navy-950">
        {children}
      </div>
    </section>
  );
}
