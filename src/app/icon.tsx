import { ImageResponse } from "next/og";

// Favicon: gold "SJL" monogram on brand navy. Generated so there is no binary
// asset to maintain and it stays in sync with the palette.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
        }}
      >
        SJL
      </div>
    ),
    { ...size },
  );
}
