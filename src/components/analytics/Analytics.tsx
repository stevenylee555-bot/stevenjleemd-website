"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, trackEvent } from "@/lib/analytics";

// Loads GA4 and tracks the conversions that matter for this practice. Booking
// and phone clicks are the two "key events" to mark as conversions in GA4.
//
// Click tracking is done with a single delegated listener on the document
// rather than onClick handlers on every link. That way it captures clicks
// regardless of whether the link lives in a server or client component, and no
// page or template needs to change to be measured.
export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_call", { phone_number: href.replace("tel:", "") });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { email: href.replace("mailto:", "") });
      } else if (href.includes("zocdoc.com")) {
        trackEvent("book_appointment", { destination: "zocdoc" });
      } else if (href.includes("google.com/maps")) {
        trackEvent("get_directions");
      } else if (href.toLowerCase().endsWith(".pdf")) {
        trackEvent("cv_download", { file: href });
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
