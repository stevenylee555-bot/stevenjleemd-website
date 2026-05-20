// Custom line-art anatomy icons for specialties grid.
// Stroke uses currentColor so parents can tint via class.

type IconProps = { className?: string; size?: number };

const baseProps = (size = 56) => ({
  width: size,
  height: size,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function HandIcon({ className, size }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className} aria-hidden="true">
      <path d="M22 42V20a3 3 0 0 1 6 0v14" />
      <path d="M28 34V16a3 3 0 0 1 6 0v18" />
      <path d="M34 34V18a3 3 0 0 1 6 0v18" />
      <path d="M40 34V22a3 3 0 0 1 6 0v18c0 8-5 16-13 16h-3c-6 0-11-4-12-10l-3-10a3 3 0 0 1 5-3l2 4" />
    </svg>
  );
}

export function ElbowIcon({ className, size }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className} aria-hidden="true">
      <path d="M10 14c8 0 16 4 22 10s10 14 10 22" />
      <path d="M14 18c6 0 13 3 18 8s8 12 8 18" />
      <circle cx="32" cy="32" r="3" />
      <path d="M44 50l8 8" />
      <path d="M52 44l8 8" />
    </svg>
  );
}

export function ShoulderIcon({ className, size }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className} aria-hidden="true">
      <path d="M6 24c8-4 18-6 26-6s14 2 18 4" />
      <circle cx="22" cy="26" r="6" />
      <path d="M22 32v12" />
      <path d="M22 44l-6 12" />
      <path d="M22 44l8 10" />
      <path d="M48 22c4 4 6 10 4 16" />
    </svg>
  );
}

export function KneeIcon({ className, size }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className} aria-hidden="true">
      <path d="M24 6l-2 22" />
      <path d="M40 6l2 22" />
      <ellipse cx="32" cy="32" rx="14" ry="8" />
      <path d="M22 34l-4 24" />
      <path d="M42 34l4 24" />
      <circle cx="32" cy="32" r="2" />
    </svg>
  );
}

export function BiologicsIcon({ className, size }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className} aria-hidden="true">
      <path d="M16 10c8 8 24 8 32 0" />
      <path d="M16 54c8-8 24-8 32 0" />
      <path d="M18 14c6 12 22 12 28 0" />
      <path d="M18 50c6-12 22-12 28 0" />
      <path d="M22 18c5 8 15 8 20 0" />
      <path d="M22 46c5-8 15-8 20 0" />
      <line x1="16" y1="10" x2="48" y2="54" />
      <line x1="48" y1="10" x2="16" y2="54" />
    </svg>
  );
}

export function SecondOpinionIcon({ className, size }: IconProps) {
  return (
    <svg {...baseProps(size)} className={className} aria-hidden="true">
      <circle cx="26" cy="28" r="14" />
      <path d="M36 38l12 12" />
      <path d="M20 28h12" />
      <path d="M26 22v12" />
      <path d="M48 14l4 4-4 4" />
      <path d="M52 18H40" />
    </svg>
  );
}

// Arthrex feature: stylized plate/anchor line drawing
export function ImplantPlateIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Plate body */}
      <path d="M30 100 L60 70 L260 70 L290 100 L260 130 L60 130 Z" />
      {/* Inner contour */}
      <path d="M50 100 L70 84 L250 84 L270 100 L250 116 L70 116 Z" opacity="0.5" />
      {/* Screw holes */}
      {[80, 120, 160, 200, 240].map((x) => (
        <g key={x}>
          <circle cx={x} cy="100" r="8" />
          <circle cx={x} cy="100" r="3" opacity="0.6" />
          <line x1={x - 4} y1="100" x2={x + 4} y2="100" opacity="0.4" />
          <line x1={x} y1="96" x2={x} y2="104" opacity="0.4" />
        </g>
      ))}
      {/* Anchor below */}
      <g transform="translate(140 150)" opacity="0.7">
        <path d="M0 0 L40 0 L40 8 L24 8 L24 30 L16 30 L16 8 L0 8 Z" />
        <path d="M16 30 L20 38 L24 30" />
      </g>
      {/* Annotation marks */}
      <line x1="60" y1="60" x2="60" y2="50" opacity="0.4" />
      <line x1="60" y1="50" x2="100" y2="50" opacity="0.4" />
      <line x1="260" y1="60" x2="260" y2="50" opacity="0.4" />
      <line x1="260" y1="50" x2="220" y2="50" opacity="0.4" />
    </svg>
  );
}
