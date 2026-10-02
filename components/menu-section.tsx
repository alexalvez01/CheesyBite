'use client'

import React, { useState, useMemo, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CategoryFilters } from './category-filters'
import { ProductCard } from './product-card'
import { TripleSparks, BurgerDoodle } from './doodles'
import { PRODUCTS } from '@/lib/data'
import { Product, CategoryFilter } from '@/lib/types'
import { useInView } from '@/hooks/use-in-view'

interface MenuSectionProps {
  onAddToCart: (product: Product) => void
}

export function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Todas')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todas') return PRODUCTS
    return PRODUCTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 340
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="menu"
      ref={ref}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center gap-3 mb-3">
          <TripleSparks className="w-8 h-6 text-cheesy-yellow -rotate-12" />
          <BurgerDoodle className="w-9 h-7" />
          <TripleSparks className="w-8 h-6 text-cheesy-yellow rotate-12 scale-x-[-1]" />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
          Nuestro <span className="text-cheesy-yellow">Menú</span>
        </h2>

        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-md mx-auto">
          Elegí tu favorita y armá la combinación perfecta.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12">
        <CategoryFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Product Slider / Grid Container with Carousel Arrows */}
      <div className="relative group">
        {/* Navigation Arrows for Carousel */}
        <button
          onClick={() => handleScroll('left')}
          aria-label="Ver productos anteriores"
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-cheesy-card/90 border border-[#333] hover:border-cheesy-yellow text-cheesy-yellow items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleScroll('right')}
          aria-label="Ver siguientes productos"
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-cheesy-card/90 border border-[#333] hover:border-cheesy-yellow text-cheesy-yellow items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable Track / Grid */}
        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[82%] sm:auto-cols-[45%] lg:auto-cols-[calc(25%-18px)] gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} onAdd={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
