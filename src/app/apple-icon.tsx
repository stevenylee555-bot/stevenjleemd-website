import { ImageResponse } from "next/og";

// Apple touch icon: same monogram with the gold corner-bracket motif used on
// the OpenGraph image, so the brand reads consistently when saved to a home
// screen or shown in a bookmark.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#11193a",
          color: "#c9a84c",
          fontSize: 74,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 30,
            height: 30,
            borderTop: "3px solid #c9a84c",
            borderLeft: "3px solid #c9a84c",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 30,
            height: 30,
            borderBottom: "3px solid #c9a84c",
            borderRight: "3px solid #c9a84c",
            display: "flex",
          }}
        />
        SJL
      </div>
    ),
    { ...size },
  );
}
