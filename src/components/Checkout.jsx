import React, { useContext } from "react"
import Productscontext from "../context/products"

function Checkout() {
  const { cart } = useContext(Productscontext)

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-gray-50 min-h-screen">

      <div>
        <h2 className="text-2xl font-bold mb-4">Your Items</h2>

        {cart.map((item) => (
          <div key={item.id}
            className="flex justify-between bg-white p-4 rounded-xl shadow mb-2">
            <span>{item.title} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold">Order Summary</h2>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold text-green-600">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-xl">
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Checkout