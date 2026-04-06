import React, { useContext, useState, useMemo } from "react"
import Productscontext from "../context/products"
import ProductCard from "../components/ProductCard"
import useDebounce from "../hooks/useDebounce"

function Products() {
  const { products, onAddToCart } = useContext(Productscontext)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sort, setSort] = useState("")

  const debouncedsearch = useDebounce(search, 100)

  const filteredProducts = useMemo(() => {
    let final = [...products]

    if (debouncedsearch !== "") {
      final = final.filter((p) =>
        p.title.toLowerCase().includes(debouncedsearch.toLowerCase())
      )
    }

    if (category !== "all") {
      final = final.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    }

    if (sort === "low-high") final.sort((a, b) => a.price - b.price)
    if (sort === "high-low") final.sort((a, b) => b.price - a.price)
    if (sort === "rating") final.sort((a, b) => b.rating - a.rating)

    return final
  }, [products, debouncedsearch, category, sort])

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex flex-wrap gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search..."
          className="border px-4 py-2 rounded-xl"
        />

        <select onChange={(e) => setCategory(e.target.value)} className="border px-4 py-2 rounded-xl">
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="electronics">Electronics</option>
          <option value="accessories">accessories</option>
          <option value="home">Home</option>
           <option value="clothing">Clothing</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)} className="border px-4 py-2 rounded-xl">
          <option value="">Sort</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default Products