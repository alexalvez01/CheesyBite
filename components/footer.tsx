import React from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-8 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navigation shortcuts */}
        <div className="flex items-center gap-6">
          <Link href="/#inicio" className="hover:text-[#F5B900] transition-colors">
            Inicio
          </Link>
          <Link href="/menu" className="hover:text-[#F5B900] transition-colors">
            Nuestro Menú
          </Link>
          <a href="#nosotros" className="hover:text-[#F5B900] transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="hover:text-[#F5B900] transition-colors">
            Contacto
          </a>
        </div>

        {/* Info */}
        <div className="text-center sm:text-right text-neutral-500 text-xs">
          <p>{SITE_CONFIG.address} · {SITE_CONFIG.schedule}</p>
          <p className="mt-1">CheesyBite © {new Date().getFullYear()} | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
