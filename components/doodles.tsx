import React from 'react'

/** 3 chunky rounded doodle rays placed to the left of "El verdadero" under the eyebrow */
export function HeroLeftSparks({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-10 text-[#F5B900] ${className}`}
      aria-hidden="true"
    >
      {/* Top ray */}
      <line
        x1="36"
        y1="24"
        x2="10"
        y2="8"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Middle ray */}
      <line
        x1="34"
        y1="31"
        x2="6"
        y2="28"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Bottom ray */}
      <line
        x1="36"
        y1="38"
        x2="14"
        y2="44"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** 3 chunky rounded capsule rays bursting from the top-left of the burger (exact mockup shape) */
export function BurgerTopLeftSparks({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-16 text-[#F5B900] ${className}`}
      aria-hidden="true"
    >
      {/* Top chunky ray */}
      <line
        x1="38"
        y1="40"
        x2="56"
        y2="10"
        stroke="currentColor"
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      {/* Middle chunky ray */}
      <line
        x1="30"
        y1="46"
        x2="14"
        y2="22"
        stroke="currentColor"
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      {/* Bottom chunky ray */}
      <line
        x1="26"
        y1="52"
        x2="6"
        y2="42"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Chunky hand-drawn curved arrow pointing to the burger */
export function BurgerCurvedArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-11 h-11 text-[#F5B900] ${className}`}
      aria-hidden="true"
    >
      {/* Curved body */}
      <path
        d="M48 6C44 26 28 36 10 38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M22 26L10 38L22 48"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Liquid cheese droplets / splash on the bottom-right of the burger */
export function CheeseSplashes({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-20 text-[#F5B900] ${className}`}
      aria-hidden="true"
    >
      {/* Upper teardrop splash (pointing inwards) */}
      <path
        d="M32 16C38 16 46 22 52 26C58 29 64 33 64 40C64 47 57 51 50 49C43 47 38 38 34 32C30 26 28 16 32 16Z"
        fill="currentColor"
      />
      {/* Lower chunky round drop */}
      <circle cx="56" cy="68" r="10" fill="currentColor" />
    </svg>
  )
}

/** Faithful organic cheddar wave transition for the bottom of the hero (matches mockup.png) */
export function CheddarHeroWaveBottom({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute -bottom-px left-0 right-0 z-10 w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-28 sm:h-36 lg:h-48 block"
      >
        {/* Ola de cheddar izquierda — con ricas ondulaciones orgánicas, anclada fluidamente a la base inferior en el medio */}
        <path
          d="M 0,30 C 70,45 120,85 180,85 C 230,85 260,60 310,70 C 360,80 390,135 450,140 C 490,145 520,125 560,145 C 600,165 630,210 670,230 C 690,240 710,240 730,240 L 0,240 Z"
          fill="#F5B900"
        />

        {/* Ola de cheddar derecha — pegada al final del hero, recorre la base y sube fluidamente cubriendo el lateral */}
        <path
          d="M 1120,240 C 1180,220 1240,205 1300,205 C 1360,205 1395,175 1410,95 C 1420,40 1430,10 1440,0 L 1440,240 Z"
          fill="#F5B900"
        />
      </svg>
    </div>
  )
}

export function TripleSparks({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-8 text-[#F5B900] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M6 34L18 20M24 16L32 6M38 24L52 14"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BurgerDoodle({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-6 text-[#F5B900] ${className}`}
      aria-hidden="true"
    >
      <path d="M3 10C3 5 8 2 18 2C28 2 33 5 33 10H3Z" fill="currentColor" />
      <rect x="2" y="13" width="32" height="3" rx="1.5" fill="#22C55E" />
      <rect x="2" y="18" width="32" height="4" rx="2" fill="#E11D48" />
      <path d="M4 24C4 26 8 28 18 28C28 28 32 26 32 24H4Z" fill="currentColor" />
    </svg>
  )
}
