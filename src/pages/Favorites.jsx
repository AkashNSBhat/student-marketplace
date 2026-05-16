import { FaHeart } from "react-icons/fa"

const Favorites = () => {

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

        <div className="flex justify-center">

          <div className="bg-red-100 p-6 rounded-full">

            <FaHeart
              size={50}
              className="text-red-500"
            />

          </div>

        </div>

        <h1 className="text-5xl font-bold mt-8">

          Favorites Wishlist

        </h1>

        <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">

          Save your favorite products and quickly access them later.
          Your wishlist helps you track products you are interested in.

        </p>

        <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg mt-8">

          Explore Products

        </button>

      </div>

    </div>

  )
}

export default Favorites