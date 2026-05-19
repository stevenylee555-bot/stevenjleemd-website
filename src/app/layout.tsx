import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { physicianSchema, medicalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Steven J. Lee, MD — Orthopedic Surgeon | NYC & Scarsdale",
    template: "%s | Steven J. Lee, MD",
  },
  description:
    "Dr. Steven J. Lee is a board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine surgery. Chief of Hand Surgery at Lenox Hill Hospital. Serving New York City and Scarsdale. Arthrex implant designer. Pioneer of PRP therapy for upper extremity injuries. Book online via ZocDoc.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.stevenjleemd.com",
    siteName: "Steven J. Lee, MD",
    title: "Steven J. Lee, MD — Orthopedic Surgeon | NYC & Scarsdale",
    description:
      "Board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine. Chief of Hand Surgery at Lenox Hill Hospital.",
    images: [
      {
        url: "https://www.stevenjleemd.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Steven J. Lee, MD — Orthopedic Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven J. Lee, MD — Orthopedic Surgeon | NYC",
    description: "Chief of Hand Surgery at Lenox Hill Hospital. Arthrex implant designer.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
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
        <Navbar />
        <main className="flex-1 pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
