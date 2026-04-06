import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Productscontext from "../context/products"
import ProductCard from "./ProductCard"

function Home() {
  const { products, onAddToCart } = useContext(Productscontext)

  const featured = products.slice(0, 6)

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Discover Amazing <span className="text-indigo-600">Products</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Shop the best products with premium quality and unbeatable prices.
          </p>

          <div className="flex gap-4">
            <Link to="/products">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 shadow-md">
                Shop Now
              </button>
            </Link>

            <Link to="/cart">
              <button className="border px-6 py-3 rounded-xl hover:bg-gray-100">
                View Cart
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="hero"
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* 🔥 FEATURED PRODUCTS */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Products
          </h2>

          <Link to="/products" className="text-indigo-600 hover:underline">
            View All →
          </Link>
        </div>

        {featured.length === 0 ? (
          <p className="text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>

      {/* 🔥 CTA SECTION */}
      <div className="bg-indigo-600 text-white py-12 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-3xl font-bold">
            Ready to upgrade your shopping experience?
          </h2>

          <p className="text-indigo-100">
            Browse thousands of products with smooth experience.
          </p>

          <Link to="/products">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home