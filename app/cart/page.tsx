"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useCart } from "../contexts/CartContext"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus } from "lucide-react"

export default function Cart() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-pink-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800 mb-12">Your Cart</h1>
            {cart.length === 0 ? (
              <p className="text-center text-lg text-pink-800">Your cart is empty.</p>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center">
                      <Image
                        src={`/placeholder.svg?height=80&width=80`}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="text-pink-500 hover:text-pink-700"
                          >
                            <Minus size={20} />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="text-pink-500 hover:text-pink-700"
                          >
                            <Plus size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-8 flex justify-between items-center">
                  <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
                  <div>
                    <button
                      onClick={clearCart}
                      className="bg-red-500 text-white px-4 py-2 rounded mr-4 hover:bg-red-600 transition-colors"
                    >
                      Clear Cart
                    </button>
                    <Link
                      href="/checkout"
                      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

