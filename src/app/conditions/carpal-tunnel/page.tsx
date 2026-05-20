import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  ArrowUpRight,
  Activity,
  Scissors,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { buildFaqSchema, buildConditionSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Carpal Tunnel Syndrome, Steven J. Lee, MD",
  description:
    "Carpal tunnel syndrome, symptoms, diagnosis, and treatment options including endoscopic carpal tunnel release. Written by Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  alternates: { canonical: "https://www.stevenjleemd.com/conditions/carpal-tunnel" },
};

const faqs = [
  {
    question: "How do I know if I have carpal tunnel syndrome?",
    answer:
      "The classic symptoms are numbness, tingling, and pain in the thumb, index, middle, and half of the ring finger. Symptoms are typically worse at night and often wake patients from sleep. Many patients also describe weakness or clumsiness, dropping objects, difficulty buttoning shirts, or trouble holding a phone. A definitive diagnosis is made by combining the clinical exam with a nerve conduction study (EMG/NCV). Imaging is sometimes used to rule out other conditions but is not required to diagnose carpal tunnel syndrome.",
  },
  {
    question: "Does carpal tunnel syndrome always require surgery?",
    answer:
      "No. Mild and early carpal tunnel syndrome often responds well to non-surgical treatment, particularly nighttime wrist splinting, activity modification, and corticosteroid injection. Dr. Lee typically recommends surgery only when symptoms are significant, when conservative treatment has failed, or when there is evidence of nerve damage on the EMG. Many of the patients Dr. Lee sees never need an operation.",
  },
  {
    question: "What is endoscopic carpal tunnel release?",
    answer:
      "Endoscopic carpal tunnel release is a minimally invasive technique in which the transverse carpal ligament is divided through one or two very small incisions, using a small camera (endoscope) to visualize the release. Compared with traditional open release, endoscopic release typically results in less scar tenderness, faster return to normal hand use, and a smaller visible scar. The relief of nerve compression is identical to open surgery, only the approach differs.",
  },
  {
    question: "How long is recovery after carpal tunnel surgery?",
    answer:
      "Most patients use the hand for light activities the same day. Heavy gripping, lifting, and high-impact use of the hand typically resume between 4 and 6 weeks. Numbness and tingling often improve within days to weeks; chronic symptoms or hand weakness may take longer to recover, and in cases of severe long-standing compression some residual numbness may remain. Hand therapy is occasionally recommended but is not required for most patients.",
  },
  {
    question: "Will carpal tunnel come back after surgery?",
    answer:
      "Recurrence after a properly performed carpal tunnel release is uncommon, approximately 1–2% of patients. If symptoms persist or return, it usually means either the diagnosis was incomplete (another nerve compression was missed) or the release was not adequate. A revision is occasionally needed and Dr. Lee performs these for patients who have had prior carpal tunnel surgery elsewhere.",
  },
];

const sidebarFacts = [
  { label: "Affected area", value: "Median nerve at the wrist" },
  { label: "Typical age", value: "40–60, but seen across adulthood" },
  { label: "Surgical option", value: "Endoscopic release (Dr. Lee's preference)" },
  { label: "Procedure time", value: "~15 minutes per hand" },
  { label: "Return to activity", value: "Light use same day · full use 4–6 weeks" },
  { label: "Anesthesia", value: "Local + light sedation (no general)" },
];

const recoveryTimeline = [
  {
    when: "Day 0–3",
    what: "Light hand use the same day. Bulky dressing for the first 2–3 days. Elevate the hand above heart level to minimize swelling.",
  },
  {
    when: "Week 1",
    what: "Sutures removed. Begin normal daily activities, typing, light cooking, dressing. Avoid heavy gripping or lifting.",
  },
  {
    when: "Weeks 2–4",
    what: "Most patients have returned to office work. Numbness and tingling improve substantially. Scar massage begins.",
  },
  {
    when: "Weeks 4–6",
    what: "Return to heavier activities, exercise, manual labor, sports. Scar tenderness fades over the following months.",
  },
];

export default function CarpalTunnelPage() {
  const faqSchema = buildFaqSchema(faqs);
  const conditionSchema = buildConditionSchema({
    name: "Carpal Tunnel Syndrome",
    description:
      "Carpal tunnel syndrome is compression of the median nerve at the wrist, causing numbness, tingling, and weakness in the thumb, index, middle, and ring fingers. Treatment options range from splinting and injections to endoscopic carpal tunnel release.",
    url: "https://www.stevenjleemd.com/conditions/carpal-tunnel",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }}
      />

      <PageHeader
        kicker="Hand & Wrist"
        title="Carpal Tunnel Syndrome:"
        italic="diagnosis, treatment, and recovery."
        lede="The most common nerve compression in the body. When non-surgical treatment fails, endoscopic carpal tunnel release offers a minimally invasive solution with faster recovery than traditional open surgery."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/conditions" },
          { label: "Carpal Tunnel", href: "/conditions/carpal-tunnel" },
        ]}
      />

      {/* Author byline */}
      <section className="bg-white border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-navy-900/65">
            <span className="kicker text-navy-900/40 mr-3">Written by</span>
            <span className="font-semibold text-navy-950">Steven J. Lee, MD</span>
            <span className="text-navy-900/55">
              {" "}
              · Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital
            </span>
          </div>
          <div className="text-xs text-navy-900/60 uppercase tracking-wider">
            Last reviewed · May 2026
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-20">
            {/* Main column, capped at ~70ch for editorial readability */}
            <article className="max-w-[640px]">
              <div className="text-navy-900/80 text-[17px] leading-[1.75] font-light">
                {/* Overview */}
                <p className="text-navy-900/90 text-[18px] font-normal">
                  Carpal tunnel syndrome is compression of the median nerve as it passes through
                  the carpal tunnel, a narrow passageway on the palm side of the wrist. It is
                  the most common nerve compression in the body, affecting roughly 4–5% of
                  adults, and one of the most frequent reasons patients are referred for hand
                  surgery.
                </p>
                <p>
                  Most patients describe a slow, gradual onset of numbness, tingling, and
                  occasional sharp pain in the thumb, index, middle, and half of the ring
                  finger. Symptoms classically worsen at night and during activities that hold
                  the wrist in a flexed position, driving, holding a phone, reading.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  Anatomy of the carpal tunnel
                </h2>
                <p>
                  The carpal tunnel is bordered on three sides by the wrist bones (carpals) and
                  on the palm side by a strong fibrous band called the transverse carpal
                  ligament. Nine flexor tendons and the median nerve share this small space. When
                  the contents swell, or when the ligament thickens, the nerve is the first
                  structure to suffer, pressure on the median nerve produces the classic
                  symptoms.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  Symptoms and red flags
                </h2>
                <p>
                  In addition to night-time numbness, patients often notice:
                </p>
                <ul className="!my-5 space-y-2">
                  {[
                    "Weakness or clumsiness, dropping objects, difficulty buttoning shirts",
                    "A burning or electric sensation that travels up the forearm",
                    "Hand fatigue with prolonged gripping",
                    "Symptoms that improve briefly when the hand is shaken out (the \"flick sign\")",
                    "Wasting at the base of the thumb in long-standing severe cases",
                  ].map((s) => (
                    <li key={s} className="flex items-baseline gap-3">
                      <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Persistent numbness that does not come and go, visible muscle wasting at the
                  base of the thumb, or severe hand weakness are signs that the nerve has been
                  compressed long enough to cause damage, and that surgery should not be
                  delayed.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  How carpal tunnel is diagnosed
                </h2>
                <p>
                  Diagnosis combines the clinical exam with an electrodiagnostic study (commonly
                  called EMG/NCV, electromyography and nerve conduction velocity). The exam
                  often includes provocative maneuvers, Tinel&apos;s test, Phalen&apos;s test,
                  carpal compression, that reproduce the symptoms when the median nerve is
                  irritated. The EMG/NCV objectively measures how well the nerve is conducting
                  and helps grade severity. Imaging is rarely required unless an unusual cause
                  is suspected.
                </p>

                {/* Dr. Lee's approach, full-card editorial treatment, no side-stripe */}
                <div className="!my-14 relative bg-cream/70 border border-navy-900/12 p-7 lg:p-9">
                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-navy-900/10">
                    <span className="h-px w-8 bg-gold-500" />
                    <span className="kicker text-gold-600">Dr. Lee&apos;s approach</span>
                  </div>
                  <p className="text-navy-950 text-[17px] leading-[1.7] font-normal mb-4">
                    Most patients with carpal tunnel syndrome do not need surgery, and they
                    don&apos;t get surgery in Dr. Lee&apos;s practice. The first line of treatment is
                    almost always a nighttime wrist splint, sometimes paired with a corticosteroid
                    injection, and an honest conversation about which activities provoke
                    symptoms.
                  </p>
                  <p className="text-navy-900/80 text-[17px] leading-[1.7] font-light">
                    When symptoms are severe, conservative care has failed, or the EMG shows
                    meaningful nerve damage, Dr. Lee performs endoscopic carpal tunnel release:
                    a minimally invasive technique that delivers the same nerve decompression
                    as traditional open surgery, but through one small incision and with
                    substantially less scar tenderness afterward.
                  </p>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  Non-surgical treatment
                </h2>
                <p>
                  For mild and moderate carpal tunnel, the following are tried first:
                </p>
                <ul className="!my-5 space-y-2">
                  {[
                    "Nighttime wrist splinting, keeps the wrist neutral while sleeping; often the single most effective non-surgical step",
                    "Activity modification, reducing prolonged wrist flexion during the day",
                    "Corticosteroid injection, reduces tendon inflammation in the tunnel; often diagnostic as well as therapeutic",
                    "Ergonomic adjustments at work, neutral wrist position, supported forearms",
                    "Physical and hand therapy, for select cases",
                  ].map((s) => (
                    <li key={s} className="flex items-baseline gap-3">
                      <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  Surgical treatment: endoscopic release
                </h2>
                <p>
                  When surgery is appropriate, the goal is straightforward: release the
                  transverse carpal ligament that is compressing the median nerve. The relief
                  delivered by surgery is durable, recurrence is rare.
                </p>
                <p>
                  In endoscopic carpal tunnel release, a small incision is made at the wrist
                  crease, and a thin camera (the endoscope) is introduced into the tunnel. The
                  ligament is then divided under direct visualization with a small blade.
                  Because the palm itself is not cut, patients typically have less scar pain and
                  return to normal hand use faster than with open surgery. The procedure is
                  performed under local anesthesia with light sedation, no general anesthesia
                  is required, and takes approximately 15 minutes per hand.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  Recovery timeline
                </h2>
                <p>
                  Recovery is faster than most patients expect. The summary:
                </p>

                {/* Recovery timeline visual */}
                <ol className="!my-8 border-t border-navy-900/10">
                  {recoveryTimeline.map((r) => (
                    <li
                      key={r.when}
                      className="grid grid-cols-[88px_1fr] sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-5 border-b border-navy-900/10"
                    >
                      <div className="font-serif text-base sm:text-lg text-gold-600 tracking-[-0.01em]">
                        {r.when}
                      </div>
                      <div className="text-navy-900/80 text-[15px] leading-relaxed">
                        {r.what}
                      </div>
                    </li>
                  ))}
                </ol>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  What patients commonly misunderstand
                </h2>
                <p>
                  Three things are worth setting straight:
                </p>
                <ul className="!my-5 space-y-3">
                  <li className="flex items-baseline gap-3">
                    <AlertTriangle
                      size={16}
                      className="text-gold-600 mt-1 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span>
                      <strong className="text-navy-950">
                        Carpal tunnel is not caused by typing alone.
                      </strong>{" "}
                      Genetics, anatomy, pregnancy, thyroid disease, and diabetes are all bigger
                      contributors than keyboard use.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <AlertTriangle
                      size={16}
                      className="text-gold-600 mt-1 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span>
                      <strong className="text-navy-950">Delay can cost recovery.</strong>{" "}
                      Severe, long-standing nerve compression may leave permanent numbness or
                      weakness even after a perfect surgical release. If non-surgical treatment
                      isn&apos;t working, don&apos;t wait too long.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <AlertTriangle
                      size={16}
                      className="text-gold-600 mt-1 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span>
                      <strong className="text-navy-950">
                        Surgery does not require months off work.
                      </strong>{" "}
                      Most patients return to office work within a week and full activity within
                      4–6 weeks.
                    </span>
                  </li>
                </ul>

                <p className="!mt-12 text-navy-900/65 text-sm italic">
                  This page is general educational content authored by Dr. Lee. It is not a
                  substitute for individual medical advice. Every patient&apos;s case is different
                 , book a consultation to discuss yours.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-10 border-t border-navy-900/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.zocdoc.com/doctor/steven-lee-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all shadow-[0_10px_30px_-12px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
                >
                  <Calendar size={16} />
                  Book an appointment
                  <ExternalLink size={12} className="opacity-70" />
                </a>
                <Link
                  href="/second-opinions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy-900/20 hover:border-navy-950 text-navy-900 hover:bg-cream rounded-md transition-all font-medium"
                >
                  Request a second opinion
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky lg:top-28 space-y-10">
                {/* At a glance */}
                <div className="bg-cream/60 border border-navy-900/[0.08] p-6 lg:p-7 rounded-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <Activity size={16} className="text-gold-600" strokeWidth={1.5} />
                    <span className="kicker text-gold-600">At a glance</span>
                  </div>
                  <dl className="space-y-4">
                    {sidebarFacts.map((f) => (
                      <div key={f.label}>
                        <dt className="text-xs uppercase tracking-wider text-navy-900/50 font-semibold mb-1">
                          {f.label}
                        </dt>
                        <dd className="text-[14.5px] text-navy-900/85 leading-snug">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Why Dr. Lee */}
                <div>
                  <div className="kicker text-navy-900/40 mb-3">Why Dr. Lee</div>
                  <ul className="space-y-3 text-[14.5px] text-navy-900/85">
                    <li className="flex items-baseline gap-3">
                      <CheckCircle2
                        size={14}
                        className="text-gold-600 mt-1 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <CheckCircle2
                        size={14}
                        className="text-gold-600 mt-1 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>Endoscopic technique, minimally invasive, faster recovery</span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <CheckCircle2
                        size={14}
                        className="text-gold-600 mt-1 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>
                        Performs revision carpal tunnel for patients who had prior surgery
                        elsewhere
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Related conditions */}
                <div>
                  <div className="kicker text-navy-900/40 mb-3">Related conditions</div>
                  <ul className="divide-y divide-navy-900/[0.08]">
                    {[
                      { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
                      { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
                      { name: "Basal Joint Arthritis", slug: "basal-joint-arthroplasty" },
                      { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
                    ].map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/conditions/${r.slug}`}
                          className="group flex items-center justify-between py-3 text-[14.5px] text-navy-900/80 hover:text-gold-600 transition-colors"
                        >
                          <span>{r.name}</span>
                          <ChevronRight
                            size={14}
                            className="text-navy-900/30 group-hover:text-gold-600 transition-all group-hover:translate-x-0.5"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA card */}
                <div className="bg-navy-950 text-white p-6 lg:p-7 rounded-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-gold-400" strokeWidth={1.5} />
                    <span className="kicker text-gold-400">15-minute procedure</span>
                  </div>
                  <div className="font-serif text-xl text-white tracking-[-0.01em] leading-snug mb-5">
                    Most patients are home within an hour.
                  </div>
                  <a
                    href="https://www.zocdoc.com/doctor/steven-lee-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-sm"
                  >
                    <Calendar size={14} />
                    Book via ZocDoc
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">Patient questions</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
              Carpal tunnel, answered.
            </h2>
          </div>

          <ul className="border-t border-navy-900/15">
            {faqs.map((faq, i) => (
              <li key={faq.question} className="border-b border-navy-900/15">
                <details className="group" open={i === 0}>
                  <summary className="flex items-start justify-between gap-6 py-7 cursor-pointer list-none">
                    <span className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] leading-[1.3] group-hover:text-gold-600 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-navy-900/60 shrink-0 mt-1.5 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <p className="text-navy-900/75 text-[17px] leading-[1.7] pb-8 pr-12 font-light max-w-3xl">
                    {faq.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA section */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Next step</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.02em] leading-[1.05] mb-8">
            Think you have carpal tunnel?{" "}
            <span className="serif-italic text-gold-400">Get it evaluated properly.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Most patients do well with non-surgical treatment. The ones who don&apos;t do best when
            they don&apos;t wait too long. Either way, the first step is an accurate diagnosis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.zocdoc.com/doctor/steven-lee-md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={2} />
              Book via ZocDoc
              <ExternalLink size={14} className="opacity-70" />
            </a>
            <Link
              href="/conditions"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              View other conditions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
