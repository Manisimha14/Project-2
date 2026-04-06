import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../database/firebase"

function Admin() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    thumbnail: "",
    rating: "",
    description: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, "products"), {
        title: form.title,
        price: Number(form.price),
        category: form.category,
        thumbnail: form.thumbnail,
        rating: Number(form.rating),
        description: form.description
      })

      alert("Product added successfully ✅")

      setForm({
        title: "",
        price: "",
        category: "",
        thumbnail: "",
        rating: "",
        description: ""
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow space-y-4"
      >

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="w-full border p-3 rounded-xl"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-3 rounded-xl"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-3 rounded-xl"
        />

        <input
          name="thumbnail"
          value={form.thumbnail}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-3 rounded-xl"
        />

        <input
          name="rating"
          value={form.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-3 rounded-xl"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
        >
          Add Product
        </button>

      </form>
    </div>
  )
}

export default Admin