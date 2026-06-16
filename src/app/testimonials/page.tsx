import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "Patient Testimonials, Steven J. Lee, MD",
  description:
    "Testimonials for Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, including professional athletes and public figures who have trusted him with their orthopedic and sports medicine care. Shared with each patient's written consent.",
  alternates: { canonical: "https://www.stevenjleemd.com/testimonials" },
};

// Full, verbatim accounts shared with each patient's written consent. The three
// long-standing patients (Adams, McLean, Leach) are quoted in full from Dr.
// Lee's prior site; the three newer notable patients (Messier, Young, Bouchard)
// from their signed notes. Photos are the same 4:5 crops the homepage carousel
// uses, served from /public/images/testimonials.
type Story = {
  name: string;
  credential: string;
  image: string;
  quote: string;
};

const stories: Story[] = [
  {
    name: "Mark Messier",
    credential: "Hockey Hall of Famer, New York Rangers Captain",
    image: "/images/testimonials/mark-messier.jpg",
    quote:
      "Dr. Lee has literally saved my life and helps keep my body in top shape.",
  },
  {
    name: "Cameron Young",
    credential: "PGA Tour Professional",
    image: "/images/testimonials/cameron-young.jpg",
    quote: "Thank you, Dr. Lee, for fixing my wrist!",
  },
  {
    name: "Katrina Adams",
    credential: "Former USTA President and Chairman, Professional Tennis Player",
    image: "/images/testimonials/katrina-adams.jpg",
    quote:
      "It has been an absolute pleasure having Dr. Steven Lee as my doctor. Dr. Lee has looked after me for years. As a retired professional tennis player, I have had many aches and pains. The care and attention to detail from Dr. Lee has allowed me to be active. He works with cutting edge technology and treatments and I highly recommend all to seek him for consultation and treatment. His personality is calming and assuring and his staff is amazing.",
  },
  {
    name: "Genie Bouchard",
    credential: "WTA Professional Tennis Player",
    image: "/images/testimonials/genie-bouchard.jpg",
    quote: "Thank you for getting me back into playing shape. You're the best!",
  },
  {
    name: "Jim McLean",
    credential: "Hall of Fame Golf Instructor, Top 100 Golf Teacher",
    image: "/images/testimonials/jim-mclean.jpg",
    quote:
      "Dr. Lee is a world class doctor and person who has been my friend for decades. As a golf teaching professional I have had several students with very bad hand injuries. I sent them to Dr. Lee and he saved each of them. Dr. Lee has taken care of me on several occasions and each time with a complete recovery. He is super attentive to your situation and listens carefully to everything you say. He explains what the problem is and then how he will treat it. No stone is unturned in his thorough analysis. Steve Lee is the consummate professional who has my 100% trust. He is in the very highest class of doctors.",
  },
  {
    name: "Clive Leach",
    credential: "Professional Squash Player, Former World No. 8",
    image: "/images/testimonials/clive-leach.jpg",
    quote:
      "My overall opinion of Steven is of the highest quality. Not only did he do a great, successful job with my knee, which was in need of surgery, he is also a good friend, and I am still fortunate enough to coach his kids on the squash court. Back in March 2016 I had my procedure. I had meniscus tears and cartilage damage. All went well and I have never looked back, and the knee feels like a brand new knee. It was my first ever surgery, and Steven made me feel very comfortable and relaxed going into it. He and his team gave me a fantastic experience, and I can't thank him enough. I have referred many people to Steven, and I will keep doing so.",
  },
];

function StoryPhoto({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative w-[280px] sm:w-[360px] mx-auto lg:mx-0">
      <div
        className="absolute -top-2 -left-2 h-12 w-12 border-t-2 border-l-2 border-gold-500 z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-2 -right-2 h-12 w-12 border-b-2 border-r-2 border-gold-500 z-10"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-sm bg-navy-800 ring-1 ring-navy-900/10 shadow-xl">
        <Image
          src={image}
          alt={`Dr. Steven Lee with ${name}`}
          width={720}
          height={900}
          sizes="(min-width: 1024px) 360px, 280px"
          className="block w-full h-auto"
        />
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        kicker="Testimonials"
        title="What patients say"
        italic="about their care."
        lede="From Hall of Fame athletes to weekend competitors, patients trust Dr. Lee with the injuries that matter most to them. These accounts are shared with each patient's written consent."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />

      {/* Full accounts */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="mb-16 lg:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">In their own words</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
              The full{" "}
              <span className="serif-italic text-gold-600">patient accounts.</span>
            </h2>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {stories.map((s, i) => (
              <article
                key={s.name}
                className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <StoryPhoto image={s.image} name={s.name} />
                </div>

                <figure
                  className={`max-w-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    aria-hidden="true"
                    className="font-serif text-[5rem] leading-[0.5] text-gold-500/25 select-none mb-4"
                  >
                    &ldquo;
                  </div>
                  <blockquote className="font-serif text-[clamp(1.25rem,1.9vw,1.6rem)] leading-[1.5] tracking-[-0.005em] text-navy-900">
                    {s.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      className="h-px w-10 bg-gold-500 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-semibold text-navy-950 text-[16px]">
                        {s.name}
                      </div>
                      <div className="text-navy-900/90 text-[12.5px] uppercase tracking-[0.12em] mt-1">
                        {s.credential}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>

          <p className="mt-20 text-center text-navy-900/70 text-[13px] leading-relaxed max-w-xl mx-auto">
            Every testimonial on this page is published with the patient&apos;s
            written permission. Individual results vary; these accounts describe
            one patient&apos;s experience and are not a guarantee of outcome.
          </p>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
