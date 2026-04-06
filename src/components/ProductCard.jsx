import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion"

const ProductCard = ({ product, onAddToCart }) => {
  const { id, title, category, price, thumbnail, rating } = product

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden"
    >
      <Link to={`/products/${id}`}>
        <div className="h-52 flex items-center justify-center p-4 bg-linear-to-br from-gray-50 to-gray-100">
          <img
            src={thumbnail}
            alt={title}
            className="h-full object-contain hover:scale-110 transition"
          />
        </div>

        <div className="p-4 space-y-2">
          <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
            {category}
          </span>

          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <FaStar />
              <span>{rating}</span>
            </div>

            <p className="text-lg font-bold">₹{price}</p>
          </div>
        </div>
      </Link>

      <div className="p-4 pt-0">
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-indigo-600 text-white py-2.5 rounded-xl hover:bg-indigo-700 shadow-sm"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard