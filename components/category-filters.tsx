'use client'

import React from 'react'
import { CATEGORIES } from '@/lib/data'
import { CategoryFilter } from '@/lib/types'

interface CategoryFiltersProps {
  activeCategory: CategoryFilter
  onSelectCategory: (category: CategoryFilter) => void
}

export function CategoryFilters({
  activeCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Categorías del menú"
      className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto no-scrollbar py-3 px-4 sm:px-0 w-full"
    >
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#F5B900] text-[#0D0D0D] font-display font-black shadow-md shadow-[#F5B900]/20 scale-105'
                : 'bg-[#181818] text-[#DEDED9] border border-[#2E2E2E] hover:border-[#F5B900]/60 hover:text-white hover:bg-[#202020]'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
