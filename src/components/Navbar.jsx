import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">Mani Store</h1>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/admingate">Admin Gate</Link>
      </div>
    </div>
  )
}

export default Navbar