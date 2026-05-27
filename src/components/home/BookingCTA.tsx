"use client";

import { motion } from "motion/react";
import { Calendar, Phone, Video, MapPin, ExternalLink } from "lucide-react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";
import { ZOCDOC_URL } from "@/lib/site";

export default function BookingCTA() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      {/* Editorial accent number */}
      <div className="absolute -top-12 left-6 lg:left-10 font-serif text-[16rem] leading-none text-white/[0.04] select-none pointer-events-none">
        04
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <motion.div {...inViewProps} variants={stagger(0, 0.1)}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Book Online</span>
            <span className="h-px w-10 bg-gold-500" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] mb-8"
          >
            Skip the call center.{" "}
            <span className="serif-italic text-gold-400">Book directly.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light"
          >
            Same-week appointments are often available at both the NYC and Scarsdale
            offices. Telemedicine consultations available for out-of-state and
            international patients.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <a
              href={ZOCDOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={2} />
              Book via ZocDoc
              <ExternalLink size={14} className="opacity-70" />
            </a>
            <a
              href="tel:+12127373301"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              (212) 737-3301
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm"
          >
            <div className="flex items-start gap-3 text-left">
              <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-white font-semibold mb-0.5">New York City</div>
                <div className="text-white/85 leading-relaxed">
                  159 East 74th Street
                  <br />
                  New York, NY 10021
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-white font-semibold mb-0.5">Scarsdale</div>
                <div className="text-white/85 leading-relaxed">
                  2 Overhill Road, Suite 310
                  <br />
                  Scarsdale, NY 10583
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <Video size={16} className="text-gold-400 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-white font-semibold mb-0.5">Telemedicine</div>
                <div className="text-white/75 leading-relaxed">
                  Available for U.S. and international patients
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
