import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Steven J. Lee, MD — Orthopedic Surgeon | NYC & Scarsdale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Load the headshot from /public so we can compose it server-side.
  let headshotData: string | null = null;
  try {
    const buf = await readFile(
      join(process.cwd(), "public", "images", "dr-lee-headshot.jpg")
    );
    headshotData = `data:image/jpeg;base64,${buf.toString("base64")}`;
  } catch {
    headshotData = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a1020",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left: copy */}
        <div
          style={{
            flex: 1.3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 64px",
          }}
        >
          {/* Top: kicker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#e8c96a",
            }}
          >
            <div style={{ width: 56, height: 1, backgroundColor: "#c9a84c" }} />
            Chief of Hand &amp; Upper Extremity Surgery · Lenox Hill
          </div>

          {/* Middle: name + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                fontSize: 78,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Steven J. Lee,</span>
              <span style={{ color: "#e8c96a" }}>MD</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 28,
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 600,
                fontWeight: 300,
              }}
            >
              <span>Orthopedic surgeon. Arthrex implant designer.</span>
              <span>NYC &amp; Scarsdale.</span>
            </div>
          </div>

          {/* Bottom: domain */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#c9a84c",
              }}
            />
            stevenjleemd.com
          </div>
        </div>

        {/* Right: portrait */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 64px 60px 0",
            position: "relative",
          }}
        >
          {/* Gold corner accents */}
          <div
            style={{
              position: "absolute",
              top: 48,
              left: -12,
              width: 56,
              height: 56,
              borderTop: "2px solid #c9a84c",
              borderLeft: "2px solid #c9a84c",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 48,
              right: 52,
              width: 56,
              height: 56,
              borderBottom: "2px solid #c9a84c",
              borderRight: "2px solid #c9a84c",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              backgroundColor: "#1a2744",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {headshotData ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={headshotData}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 96,
                  color: "rgba(232,201,106,0.8)",
                  fontWeight: 700,
                }}
              >
                SJL
              </div>
            )}
          </div>
        </div>

        {/* Left edge gold rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 4,
            backgroundColor: "#c9a84c",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
