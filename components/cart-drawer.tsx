'use client'

import React from 'react'
import { X, Plus, Minus, ArrowRight, Trash2, ShoppingCart } from 'lucide-react'
import { CartItem } from '@/lib/types'
import { formatPrice, SITE_CONFIG } from '@/lib/data'

interface CartDrawerProps {
  items: CartItem[]
  isOpen: boolean
  onClose: () => void
  onUpdateQuantity: (id: number, delta: number) => void
  onRemoveItem: (id: number) => void
}

export function CartDrawer({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return

    const itemLines = items
      .map((item) => `🍔 ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`)
      .join('\n')

    const message = `¡Hola ${SITE_CONFIG.name}! 🍔 Quiero hacer el siguiente pedido:\n\n${itemLines}\n\n💰 Total: ${formatPrice(totalAmount)}\n\n📍 Mi dirección:\n💳 Método de pago:\n\n¡Muchas gracias!`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        aria-label="Tu pedido"
        className={`fixed top-0 right-0 z-60 h-full w-full max-w-md bg-[#161616] border-l border-neutral-800 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <div>
            <h2 className="text-2xl font-display font-black text-white flex items-center gap-2">
              Tu pedido <span className="text-neutral-400 font-sans text-base font-normal">({totalCount})</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-400 mb-4 animate-float">
                <ShoppingCart className="w-10 h-10 text-cheesy-yellow" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-neutral-400 text-sm max-w-xs mb-6">
                Elegí tus burgers favoritas del menú y armá tu pedido en unos pocos clics.
              </p>
              <button
                onClick={onClose}
                className="group relative w-full max-w-xs flex items-center justify-center gap-2.5 pt-4 pb-7 px-6 text-cheesy-black font-sans font-bold text-base transition-transform duration-200 cursor-pointer hover:scale-[1.015] active:scale-[0.98] select-none"
              >
                {/* Fondo artesanal con forma orgánica de queso cheddar derretido */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none z-0"
                >
                  <svg
                    viewBox="0 0 340 88"
                    preserveAspectRatio="none"
                    className="w-full h-full drop-shadow-[0_8px_18px_rgba(245,185,0,0.22)] transition-transform duration-300 group-hover:scale-y-[1.02]"
                  >
                    <path
                      d="M 16,13 C 42,8 68,14 100,9 C 132,4 165,11 198,7 C 232,3 268,10 295,7 C 314,5 328,10 334,18 C 340,26 339,38 335,48 C 331,58 322,62 312,64 C 300,66 292,72 284,79 C 276,86 268,84 260,74 C 252,62 242,67 232,69 C 220,71 210,65 198,63 C 186,61 176,72 168,81 C 160,88 150,86 142,75 C 134,58 124,66 112,68 C 100,70 90,64 78,63 C 66,62 56,73 46,78 C 36,82 28,76 22,66 C 14,54 4,46 2,34 C 0,22 6,15 16,13 Z"
                      className="fill-cheesy-yellow group-hover:fill-cheesy-yellow-bright transition-colors duration-200"
                    />
                  </svg>
                </div>

                <span className="relative z-10">Ver el menú</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          ) : (
            <div className="divide-y divide-neutral-800/70">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="py-4 first:pt-0 last:pb-0 group transition-colors"
                >
                  {/* Fila principal estilo comanda de restaurante: Nombre ············ Subtotal */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-display font-bold text-base sm:text-lg text-white tracking-tight truncate">
                      {item.name}
                    </h4>

                    {/* Línea punteada tradicional igual que en el menú */}
                    <div className="flex-1 mx-2 sm:mx-3 border-b-2 border-dotted border-neutral-800 self-baseline mb-1 group-hover:border-neutral-700 transition-colors" />

                    <span className="font-display font-black text-base sm:text-lg text-cheesy-yellow shrink-0 tracking-tight">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>

                  {/* Fila secundaria: Precio unitario y Controles */}
                  <div className="flex items-center justify-between mt-2.5 text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="text-neutral-300">{formatPrice(item.price)}</span>
                      <span className="text-neutral-500">c/u</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-5 h-5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                          aria-label={`Disminuir cantidad de ${item.name}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-4 text-center font-display">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-5 h-5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Botón eliminar */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-neutral-500 hover:text-rose-400 p-1.5 rounded-md hover:bg-neutral-900 transition-colors cursor-pointer"
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-900/60 space-y-4">
            <div className="flex items-center justify-between text-base">
              <span className="text-neutral-400">Total</span>
              <span className="font-display font-black text-2xl text-cheesy-yellow">
                {formatPrice(totalAmount)}
              </span>
            </div>

            <p className="text-[11px] text-neutral-500 leading-normal">
              El costo de envío y horario de entrega se confirman por WhatsApp.
            </p>

            <button
              onClick={handleCheckoutWhatsApp}
              className="group relative w-full flex items-center justify-center gap-3 pt-5 pb-8 px-6 text-cheesy-black font-sans font-bold text-base transition-transform duration-200 cursor-pointer hover:scale-[1.015] active:scale-[0.98] select-none mb-1"
            >
              {/* Fondo artesanal con forma orgánica de queso cheddar derretido — 100% fluido y curvo, con base gruesa */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-0"
              >
                <svg
                  viewBox="0 0 340 88"
                  preserveAspectRatio="none"
                  className="w-full h-full drop-shadow-[0_8px_18px_rgba(245,185,0,0.22)] transition-transform duration-300 group-hover:scale-y-[1.02]"
                >
                  <path
                    d="M 16,13 C 42,8 68,14 100,9 C 132,4 165,11 198,7 C 232,3 268,10 295,7 C 314,5 328,10 334,18 C 340,26 339,38 335,48 C 331,58 322,62 312,64 C 300,66 292,72 284,79 C 276,86 268,84 260,74 C 252,62 242,67 232,69 C 220,71 210,65 198,63 C 186,61 176,72 168,81 C 160,88 150,86 142,75 C 134,58 124,66 112,68 C 100,70 90,64 78,63 C 66,62 56,73 46,78 C 36,82 28,76 22,66 C 14,54 4,46 2,34 C 0,22 6,15 16,13 Z"
                    className="fill-cheesy-yellow group-hover:fill-cheesy-yellow-bright transition-colors duration-200"
                  />
                </svg>
              </div>

              {/* WhatsApp Icon */}
              <svg
                className="relative z-10 w-5 h-5 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="relative z-10">Pedir por WhatsApp</span>
              <ArrowRight className="relative z-10 w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
