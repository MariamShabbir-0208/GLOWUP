"use client"

import Link from "next/link"
import { useCart } from "../app/contexts/CartContext"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  const { cart } = useCart()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-pink-100 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Glow Up
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="text-pink-800 hover:text-pink-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-pink-800 hover:text-pink-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-pink-800 hover:text-pink-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-pink-800 hover:text-pink-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-pink-800 hover:text-pink-600 relative">
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

