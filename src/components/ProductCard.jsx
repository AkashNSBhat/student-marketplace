import { FaHeart } from "react-icons/fa"

const ProductCard = ({product}) => {

  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">

      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <div className="flex justify-between items-start">

          <h2 className="text-xl font-bold">
            {product.title}
          </h2>

          <button className="text-gray-400 hover:text-red-500 duration-300">
            <FaHeart />
          </button>

        </div>

        <p className="text-gray-500 mt-2">
          {product.category}
        </p>

        <p className="text-gray-600 mt-3 text-sm">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">

          <h3 className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </h3>

          <button className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 duration-300">

            View

          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard