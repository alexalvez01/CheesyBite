'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { BenefitsSection } from '@/components/benefits-section'
import { AboutSection } from '@/components/about-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import { useCart } from '@/lib/cart'

export default function CheesyBiteLanding() {
  const { cart, totalCartCount, handleAddToCart, handleUpdateQuantity, handleRemoveItem } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F7F7F5] selection:bg-[#F5B900] selection:text-[#0D0D0D]">
      {/* Sticky Header / Navbar */}
      <Navbar cartCount={totalCartCount} onOpenCart={() => setCartOpen(true)} />

      <main>
        {/* Hero Section with Mockup Composition */}
        <Hero onQuickOrder={() => setCartOpen(true)} />

        {/* About CheesyBite with aesthetic scroll entrance animation */}
        <AboutSection />

        {/* Brand Value Propositions */}
        <BenefitsSection />

        {/* Final Conversion Banner */}
        <FinalCTA onQuickOrder={() => setCartOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer with WhatsApp checkout */}
      <CartDrawer
        items={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  )
}
