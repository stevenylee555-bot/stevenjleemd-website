import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, ShieldAlert } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy, Steven J. Lee, MD",
  description:
    "How the Steven J. Lee, MD website handles information shared by visitors, including contact-form data and website analytics. Not medical advice; the practice's Notice of Privacy Practices governs protected health information.",
  alternates: { canonical: "https://www.stevenjleemd.com/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 26, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Privacy"
        italic="Policy."
        lede="How we handle information you share with this website. For how the medical practice handles your protected health information as a patient, see the separate Notice of Privacy Practices provided at intake."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy", href: "/privacy" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 lg:py-20">
          {/* Effective date */}
          <div className="flex items-center gap-3 rounded-md border border-navy-900/10 bg-cream px-5 py-4 mb-12">
            <CalendarClock size={18} className="text-gold-600 shrink-0" strokeWidth={1.5} />
            <p className="text-[14px] text-navy-900/85">
              <span className="font-semibold text-navy-950">Last updated:</span> {LAST_UPDATED}
            </p>
          </div>

          {/* HIPAA notice */}
          <div className="flex items-start gap-3 rounded-md border border-gold-600/30 bg-gold-500/[0.07] p-5 mb-14">
            <ShieldAlert size={20} className="text-gold-600 mt-0.5 shrink-0" strokeWidth={1.75} />
            <div className="text-[14.5px] leading-relaxed text-navy-900/90">
              <p className="font-semibold text-navy-950 mb-1">This website is not a clinical channel.</p>
              <p>
                Please do not enter medical or health details on the contact form or anywhere else
                on this website. For medical questions, call the office or use the patient portal.
                In an emergency, dial 911. How the medical practice handles your protected health
                information as a patient is covered by the practice&apos;s Notice of Privacy
                Practices, which is provided to patients at intake.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <Section title="1. About this policy">
              <p>
                This Privacy Policy explains how the Steven J. Lee, MD website
                (stevenjleemd.com) collects, uses, and shares information from visitors. It applies
                only to this website. It does not govern care delivered by Dr. Lee or his practice;
                that is covered by the practice&apos;s separate Notice of Privacy Practices, which
                you receive when you become a patient.
              </p>
            </Section>

            <Section title="2. Information we collect">
              <p>We collect a limited amount of information when you use this website:</p>
              <ul>
                <li>
                  <strong>Contact form submissions.</strong> If you submit the &ldquo;request a
                  callback&rdquo; form, we collect the information you provide: name, phone number,
                  email address, the reason for your inquiry (selected from a short list), and an
                  optional preferred call-back time.
                </li>
                <li>
                  <strong>Automatic technical information.</strong> When you visit a page, our
                  analytics provider records general details such as the pages viewed, the
                  approximate location (city or region), the type of device and browser, the
                  referring site, and an anonymized IP address. This information is aggregated and
                  is not used to personally identify you.
                </li>
                <li>
                  <strong>Cookies.</strong> We use a small number of cookies set by Google
                  Analytics to measure website traffic. We do not use cookies for advertising.
                </li>
              </ul>
            </Section>

            <Section title="3. Information we deliberately do not collect">
              <p>
                We do not request medical or health information on this website. The contact form
                asks you not to include health details, and is designed to capture only the
                information needed to call you back. The website does not include patient portals,
                medical records, or any clinical workflow.
              </p>
            </Section>

            <Section title="4. How we use information">
              <ul>
                <li>
                  <strong>Contact form data</strong> is used solely to respond to your inquiry,
                  most often by calling you back to schedule an appointment or answer a general
                  question.
                </li>
                <li>
                  <strong>Analytics data</strong> is used to understand which pages are most useful,
                  how visitors find the site, and to improve content and performance. We do not
                  use it for advertising or to build profiles of individual visitors.
                </li>
              </ul>
            </Section>

            <Section title="5. How information is shared">
              <p>
                We do not sell or rent personal information. We share limited information with a
                small number of service providers that help operate the website:
              </p>
              <ul>
                <li>
                  <strong>Hosting:</strong> Vercel Inc., which serves the website.
                </li>
                <li>
                  <strong>Analytics:</strong> Google LLC, through Google Analytics 4, which
                  measures website traffic.
                </li>
                <li>
                  <strong>Form delivery:</strong> a third-party form-delivery service that
                  transmits contact-form submissions to the office by email.
                </li>
                <li>
                  <strong>Email:</strong> Google Workspace, which the practice uses to receive
                  contact-form notifications under a signed Business Associate Agreement.
                </li>
              </ul>
              <p>
                We may also disclose information when required by law, to comply with legal
                process, or to protect the rights, safety, or property of patients, staff, or the
                practice.
              </p>
            </Section>

            <Section title="6. Cookies and tracking choices">
              <p>
                The cookies we use are set by Google Analytics and are categorized as functional or
                analytics cookies. We do not use advertising cookies, retargeting pixels, or
                cross-site tracking on this website. You can clear or block cookies through your
                browser settings; doing so will not affect your ability to read content or contact
                the office.
              </p>
            </Section>

            <Section title="7. Data security">
              <p>
                The website is served over HTTPS, and we use industry-standard measures to protect
                information in transit and at rest. The practice follows the reasonable
                data-security requirements of the New York SHIELD Act. No website or system can
                guarantee absolute security; you share information at your own risk.
              </p>
            </Section>

            <Section title="8. Data retention">
              <ul>
                <li>
                  <strong>Contact form submissions</strong> are retained by the office for as long
                  as needed to respond to your inquiry and to keep a reasonable record of
                  communications, then handled according to the practice&apos;s record-retention
                  policies.
                </li>
                <li>
                  <strong>Analytics data</strong> is retained by Google Analytics for up to 14
                  months, after which it is automatically deleted from the analytics account.
                </li>
              </ul>
            </Section>

            <Section title="9. Your rights">
              <p>
                You may request access to, correction of, or deletion of personal information we
                hold about you that was submitted through this website. California residents may
                have additional rights under the California Consumer Privacy Act. To make a
                request, contact us using the details at the bottom of this policy. We will
                respond within a reasonable time and in accordance with applicable law.
              </p>
            </Section>

            <Section title="10. Children&rsquo;s privacy">
              <p>
                This website is intended for adults and is not directed to children under 13. We
                do not knowingly collect information from children under 13. If you believe a
                child has submitted information, contact us and we will delete it.
              </p>
            </Section>

            <Section title="11. International visitors">
              <p>
                The website is operated from the United States. If you visit it from outside the
                United States, your information will be transferred to and processed in the United
                States, which may have data-protection rules different from those in your country.
              </p>
            </Section>

            <Section title="12. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. Material changes will be
                reflected by updating the &ldquo;Last updated&rdquo; date at the top. Continued use
                of the website after a change means you accept the updated policy.
              </p>
            </Section>

            <Section title="13. Contact us">
              <p>For privacy-related questions or requests, contact:</p>
              <ul>
                <li>Steven J. Lee, MD</li>
                <li>159 East 74th Street, New York, NY 10021</li>
                <li>
                  Phone:{" "}
                  <a href="tel:+12127373301" className="text-navy-950 font-semibold hover:text-gold-600 transition-colors">
                    (212) 737-3301
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a href="mailto:admin@stevenjleemd.com" className="text-navy-950 font-semibold hover:text-gold-600 transition-colors">
                    admin@stevenjleemd.com
                  </a>
                </li>
              </ul>
              <p className="text-navy-900/85 text-[14px] mt-6">
                For clinical questions, please do not use the addresses above. Call the office or
                use the patient portal.
              </p>
            </Section>
          </div>

          <div className="mt-16 pt-8 border-t border-navy-900/10 text-[13.5px] text-navy-900/85 leading-relaxed">
            <p>
              This Privacy Policy is provided for transparency about website data practices and is
              not legal advice. See the practice&apos;s separate Notice of Privacy Practices for
              how protected health information is handled in the course of clinical care, and the{" "}
              <Link href="/contact" className="text-navy-950 font-semibold hover:text-gold-600 transition-colors">
                contact page
              </Link>{" "}
              for office details.
            </p>
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
      <div className="space-y-4 text-[15.5px] leading-relaxed text-navy-900/85 [&>ul]:space-y-2.5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:marker:text-gold-600 [&_strong]:text-navy-950">
        {children}
      </div>
    </section>
  );
}
