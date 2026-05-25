import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { physicianSchema, medicalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
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
      </body>
    </html>
  );
}
