import { useState } from "react"

const AddProduct = () => {

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    console.log(formData)

    setSubmitted(true)

    setFormData({
      title: "",
      price: "",
      category: "",
      image: "",
      description: ""
    })

  }

  return (

    <div className="max-w-4xl mx-auto px-6 py-10">

      <div className="bg-white shadow-xl rounded-3xl p-8">

        <h1 className="text-5xl font-bold mb-8">

          Sell Your Product

        </h1>

        {
          submitted && (

            <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6">

              Product Added Successfully!

            </div>

          )
        }

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Product Title */}

          <div>

            <label className="block text-lg font-semibold mb-2">

              Product Title

            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Price */}

          <div>

            <label className="block text-lg font-semibold mb-2">

              Price

            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter product price"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Category */}

          <div>

            <label className="block text-lg font-semibold mb-2">

              Category

            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="">
                Select Category
              </option>

              <option value="Electronics">
                Electronics
              </option>

              <option value="Furniture">
                Furniture
              </option>

              <option value="Mobiles">
                Mobiles
              </option>

              <option value="Accessories">
                Accessories
              </option>

              <option value="Books">
                Books
              </option>

            </select>

          </div>

          {/* Image URL */}

          <div>

            <label className="block text-lg font-semibold mb-2">

              Image URL

            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Description */}

          <div>

            <label className="block text-lg font-semibold mb-2">

              Description

            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg w-full"
          >

            Add Product

          </button>

        </form>

      </div>

    </div>

  )
}

export default AddProduct