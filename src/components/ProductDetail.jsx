import React, { useContext } from "react"
import Productscontext from "../context/products"
import { useParams } from "react-router-dom"

function ProductDetail() {
  const { products, onAddToCart, addToWishlist } = useContext(Productscontext)
  const { id } = useParams()

  const product = products.find((p) => p.id == id)

  if (!product) return <p>Not found</p>

  return (
    <div className="p-6 bg-gray-50 min-h-screen grid md:grid-cols-2 gap-10">

      <div className="bg-white p-6 rounded-2xl shadow">
        <img src={product.thumbnail} className="h-96 mx-auto" />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <h2 className="text-2xl font-bold">₹{product.price}</h2>

        <div className="flex gap-4">
          <button onClick={() => onAddToCart(product)} className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
            Add to Cart
          </button>
          <button onClick={() => addToWishlist(product)} className="bg-pink-500 text-white px-6 py-3 rounded-xl">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail