import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'nav' | 'footer'
  className?: string
}

export function Logo({ variant = 'nav', className = '' }: LogoProps) {
  const isFooter = variant === 'footer'

  return (
    <Link
      href="/"
      className={`inline-flex items-center transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      aria-label="CheesyBite - Volver al inicio"
    >
      {/* Logotipo oficial de CheesyBite */}
      <Image
        src="/images/logo.png"
        alt="CheesyBite"
        width={240}
        height={96}
        priority={!isFooter}
        loading="eager"
        className={`w-auto object-contain ${
          isFooter ? 'h-14 sm:h-16' : 'h-13 sm:h-15'
        }`}
      />
    </Link>
  )
}
