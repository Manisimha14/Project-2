import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminGate() {
  const [pass, setpass] = useState("")
  const navigate = useNavigate()

  const handle = () => {
    if (pass === "mani") {
      navigate("/admin")
    } else {
      alert("check your console you will find it")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">

      {/* Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Admin Access 🔐
          </h1>
          <p className="text-gray-500 text-sm">
            Enter password to continue
          </p>
        </div>

        {/* Input */}
        <input
          type="password"
          placeholder="Enter admin password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
        />

        {/* Button */}
        <button
          onClick={handle}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-medium shadow-sm"
        >
          Enter Admin Panel
        </button>

      </div>
    </div>
  )
}

export default AdminGate