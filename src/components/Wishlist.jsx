import React, { useContext } from "react"
import Productscontext from "../context/products"
import ProductCard from "./ProductCard"

function Wishlist() {
  const { wishlist, removefromwishlist, onAddToCart } =
    useContext(Productscontext)

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {wishlist.length === 0 ? (
        <p className="text-center">No items in wishlist</p>
      ) : (
        <div className="grid gap-6 grid-cols-3">
          {wishlist.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} onAddToCart={onAddToCart} />

              <button
                onClick={() => removefromwishlist(product)}
                className="w-full mt-2 bg-red-500 text-white py-2 rounded-xl"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist