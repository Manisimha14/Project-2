import React, { useContext } from "react"
import Productscontext from "../context/products"

function Cart() {
  const { cart, onRemoveCart, increaseqty, decreaseqty } =
    useContext(Productscontext)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >

                <img
                  src={product.thumbnail}
                  className="w-24 h-24 object-contain bg-gray-100 rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{product.title}</h2>
                  <p className="text-gray-500">₹{product.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseqty(product)}
                      className="px-3 py-1 bg-gray-100 rounded-lg"
                    >-</button>

                    <span>{product.quantity}</span>

                    <button
                      onClick={() => increaseqty(product)}
                      className="px-3 py-1 bg-gray-100 rounded-lg"
                    >+</button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
                    ₹{product.price * product.quantity}
                  </p>

                  <button
                    onClick={() => onRemoveCart(product)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-8 text-right bg-white p-6 rounded-xl shadow">
            <h1 className="text-2xl font-bold text-gray-800">
              Total: ₹{total}
            </h1>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart