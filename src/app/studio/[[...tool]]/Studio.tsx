"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// Client boundary: the Sanity config pulls in client-only modules (they call
// React.createContext at import time), so they must live in the client graph,
// not the server/RSC graph. Rendered as a full-screen overlay so the Studio
// covers the site's fixed Navbar/Footer without restructuring the app routes.
export default function Studio() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "#fff",
        overflow: "auto",
      }}
    >
      <NextStudio config={config} />
    </div>
  );
}
