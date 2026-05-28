"use client";

import { useState } from "react";
import { Send, Phone, ShieldAlert, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Non-clinical "request a callback" form. By design it collects NO medical
// details, which keeps the marketing site out of HIPAA scope: the office calls
// the patient back to discuss specifics over the phone (a compliant channel).
//
// Delivery is via a no-backend form service (Formspree or Web3Forms), driven by
// env so the form ships inert until configured:
//   NEXT_PUBLIC_FORM_ENDPOINT    POST URL (Formspree form URL, or
//                                https://api.web3forms.com/submit for Web3Forms)
//   NEXT_PUBLIC_FORM_ACCESS_KEY  optional; sent as access_key (Web3Forms only)
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

const REASONS = [
  "New appointment",
  "Second opinion",
  "Billing or insurance",
  "Other",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-navy-900/15 bg-white px-4 py-3 text-[15px] text-navy-900 placeholder:text-navy-900/75 focus:border-gold-500 transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    if (data.get("company")) {
      setStatus("success");
      return;
    }

    const reason = String(data.get("reason") ?? "");
    const payload: Record<string, string> = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      reason,
      preferredTime: String(data.get("preferredTime") ?? ""),
      subject: "New callback request from stevenjleemd.com",
    };
    if (ACCESS_KEY) payload.access_key = ACCESS_KEY;

    if (!ENDPOINT) {
      // Not configured yet: never strand a patient, send them to the phone.
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      trackEvent("callback_request", { reason });
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Intro */}
          <div className="lg:pt-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">Request a Callback</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1] mb-6">
              Prefer we reach <span className="serif-italic text-gold-600">out to you?</span>
            </h2>
            <p className="text-navy-900/90 text-[15px] leading-relaxed mb-8 max-w-md">
              Leave your details and the office will call you back to schedule. For the
              fastest scheduling, you can also book online or call us directly.
            </p>

            <div className="flex items-start gap-3 rounded-md border border-gold-600/30 bg-gold-500/[0.07] p-4 max-w-md">
              <ShieldAlert size={18} className="text-gold-600 mt-0.5 shrink-0" strokeWidth={1.75} />
              <p className="text-[13.5px] leading-relaxed text-navy-900/85">
                <span className="font-semibold text-navy-950">Please do not include medical or health details.</span>{" "}
                For medical questions, call the office or use the patient portal. In an
                emergency, dial 911.
              </p>
            </div>
          </div>

          {/* Form / confirmation */}
          <div className="bg-white border border-navy-900/10 p-8 lg:p-10 rounded-md">
            {status === "success" ? (
              <div aria-live="polite" className="text-center py-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/30 mb-5">
                  <CheckCircle2 size={24} className="text-gold-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-navy-950 mb-3">Thank you</h3>
                <p className="text-navy-900/90 text-[15px] leading-relaxed max-w-sm mx-auto">
                  Your request has been received and the office will be in touch. If this
                  is a medical emergency, dial 911. You can also call us 24/7 at{" "}
                  <a href="tel:+12127373301" className="font-semibold text-navy-950 hover:text-gold-600 transition-colors">
                    (212) 737-3301
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot: hidden from people, tempting to bots */}
                <div className="hidden" aria-hidden="true">
                  <label>
                    Company
                    <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cf-name" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Name <span className="text-gold-600">*</span>
                    </label>
                    <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Phone <span className="text-gold-600">*</span>
                    </label>
                    <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-email" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Email <span className="text-gold-600">*</span>
                  </label>
                  <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cf-reason" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Reason <span className="text-gold-600">*</span>
                    </label>
                    <select id="cf-reason" name="reason" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select one
                      </option>
                      {REASONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cf-time" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Best time to call <span className="text-navy-900/75 font-normal">(optional)</span>
                    </label>
                    <input id="cf-time" name="preferredTime" type="text" placeholder="e.g. weekday mornings" className={inputClass} />
                  </div>
                </div>

                {status === "error" && (
                  <div aria-live="polite" className="flex items-start gap-2.5 rounded-md border border-red-300 bg-red-50 p-3.5 text-[14px] text-red-800">
                    <Phone size={16} className="mt-0.5 shrink-0" strokeWidth={1.75} />
                    <span>
                      We could not send your request right now. Please call the office at{" "}
                      <a href="tel:+12127373301" className="font-semibold underline">
                        (212) 737-3301
                      </a>
                      .
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex w-full items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  <Send size={17} strokeWidth={2} />
                  {status === "submitting" ? "Sending..." : "Request callback"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
