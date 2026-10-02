'use client'

import React, { useState } from 'react'
import { Plus, Check } from 'lucide-react'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/data'

interface ProductCardProps {
  product: Product
  onAdd: (product: Product) => void
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    onAdd(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 900)
  }

  return (
    <article className="group relative flex flex-col justify-between bg-linear-to-b from-cheesy-card via-[#141414] to-[#101010] border border-[#2A2A2A] hover:border-cheesy-yellow/60 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cheesy-yellow/10">
      {/* Product Image Wrap */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-cheesy-yellow text-cheesy-black font-display font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          </div>
        )}

        {/* Placeholder until real product photos are loaded */}
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🍔</span>
      </div>

      {/* Info & Action */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cheesy-yellow transition-colors">
            {product.name}
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Bottom row: Price & Add Button */}
        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
          <span className="font-display font-black text-xl text-cheesy-yellow">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAdd}
            aria-label={`Agregar ${product.name} al carrito`}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
              justAdded
                ? 'bg-emerald-500 text-white scale-110'
                : 'bg-cheesy-yellow hover:bg-cheesy-yellow-bright text-cheesy-black hover:scale-110 active:scale-95'
            }`}
          >
            {justAdded ? (
              <Check className="w-5 h-5 stroke-3 animate-pop" />
            ) : (
              <Plus className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
