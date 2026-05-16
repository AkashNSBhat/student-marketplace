import { useParams } from "react-router-dom"

import products from "../data/products"

const ProductDetails = () => {

  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {

    return (

      <div className="text-center py-20">

        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>

      </div>

    )

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8">

        {/* Product Image */}

        <div>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-2xl"
          />

        </div>

        {/* Product Info */}

        <div className="flex flex-col justify-center">

          <p className="text-blue-600 font-semibold text-lg">

            {product.category}

          </p>

          <h1 className="text-5xl font-bold mt-3">

            {product.title}

          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">

            {product.description}

          </p>

          <h2 className="text-5xl font-bold text-green-600 mt-8">

            ₹{product.price}

          </h2>

          {/* Seller Box */}

          <div className="bg-gray-100 rounded-2xl p-6 mt-8">

            <h3 className="text-2xl font-bold">
              Seller Information
            </h3>

            <p className="text-gray-600 mt-3">
              Name: Campus Seller
            </p>

            <p className="text-gray-600 mt-2">
              Location: College Campus
            </p>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-yellow-400 hover:bg-yellow-500 duration-300 px-8 py-4 rounded-xl font-bold text-lg">

              Contact Seller

            </button>

            <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg">

              Add To Wishlist

            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default ProductDetails