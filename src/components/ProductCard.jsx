import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"

const ProductCard = ({ product }) => {

  return (

    <Link to={`/product/${product.id}`}>

      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl duration-300 hover:-translate-y-2">

        {/* Image */}

        <div className="h-60 overflow-hidden">

          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover hover:scale-105 duration-500"
          />

        </div>

        {/* Content */}

        <div className="p-5">

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-2xl font-bold">

                {product.title}

              </h2>

              <p className="text-gray-500 mt-1">

                {product.category}

              </p>

            </div>

            <button className="text-gray-400 hover:text-red-500 duration-300">

              <FaHeart size={18} />

            </button>

          </div>

          <p className="text-gray-600 mt-4 leading-7">

            {product.description}

          </p>

          <div className="flex items-center justify-between mt-6">

            <h3 className="text-3xl font-bold text-green-600">

              ₹{product.price}

            </h3>

            <button className="bg-yellow-400 hover:bg-yellow-500 duration-300 px-5 py-3 rounded-xl font-bold">

              View Details

            </button>

          </div>

        </div>

      </div>

    </Link>

  )
}

export default ProductCard