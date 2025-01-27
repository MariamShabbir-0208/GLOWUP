"use client"

import Image from "next/image"
import { useCart } from "../app/contexts/CartContext"

interface ProductProps {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

export default function Product({ id, name, description, price, imageUrl }: ProductProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-pink-600 font-bold mb-2">${price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

