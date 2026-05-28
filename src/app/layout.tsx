import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/analytics/Analytics";
import { physicianSchema, medicalBusinessSchema } from "@/lib/schema";
import { SanityLive } from "@/sanity/live";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Newsreader: a clean editorial serif with conventional letterforms (normal
// f and J). Loaded without the optical-size axis so the shapes stay consistent
// at every size. Italic is included for the gold accent words.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Steven J. Lee, MD, Orthopedic Surgeon | NYC & Scarsdale",
    template: "%s | Steven J. Lee, MD",
  },
  description:
    "Dr. Steven J. Lee is a board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine surgery. Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, Associate Director at NISMAT. Serving New York City and Scarsdale. Has helped design orthopedic implants used by surgeons nationwide. Among the first surgeons in New York to perform PRP therapy for upper extremity injuries. Book online via ZocDoc.",
  keywords: [
    "orthopedic surgeon NYC",
    "hand surgeon New York",
    "upper extremity surgeon",
    "Tommy John surgery NYC",
    "carpal tunnel surgeon",
    "shoulder surgery NYC",
    "Lenox Hill Hospital orthopedics",
    "PRP injection NYC",
    "best orthopedic surgeon New York City",
    "hand fracture specialist NYC",
    "sports medicine surgeon NYC",
    "second opinion orthopedic surgery NYC",
  ],
  authors: [{ name: "Steven J. Lee, MD" }],
  creator: "Steven J. Lee, MD",
  metadataBase: new URL("https://www.stevenjleemd.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.stevenjleemd.com",
    siteName: "Steven J. Lee, MD",
    title: "Steven J. Lee, MD, Orthopedic Surgeon | NYC & Scarsdale",
    description:
      "Board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine. Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
    // og:image is auto-injected from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven J. Lee, MD, Orthopedic Surgeon | NYC",
    description: "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital. Orthopedic implant designer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://www.stevenjleemd.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#11193a",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraft } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-navy-950 focus:text-white focus:px-4 focus:py-2 focus:rounded-sm focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-[88px]">{children}</main>
        <Footer />
        <SanityLive />
        {isDraft && <VisualEditing />}
        <Analytics />
      </body>
    </html>
  );
}
