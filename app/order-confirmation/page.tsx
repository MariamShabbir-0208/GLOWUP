"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useCart } from "../contexts/CartContext"

export default function OrderConfirmation() {
  const router = useRouter()
  const { cart, clearCart } = useCart()
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem("orderDetails")
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails))
      localStorage.removeItem("orderDetails")
      clearCart()
    } else {
      router.push("/")
    }
  }, [clearCart, router])

  if (!orderDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-pink-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">Order Confirmation</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
              <p className="mb-4">Your order has been successfully placed. Here are the details:</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
                {orderDetails.cart.map((item: any) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
                <p>{orderDetails.name}</p>
                <p>{orderDetails.address}</p>
                <p>
                  {orderDetails.city}, {orderDetails.zipCode}
                </p>
                <p>{orderDetails.country}</p>
              </div>
              <p className="text-sm text-gray-600">
                A confirmation email has been sent to {orderDetails.email}. If you have any questions about your order,
                please contact our customer support.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

