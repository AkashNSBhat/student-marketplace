import { Link } from "react-router-dom"

import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaUserCircle
} from "react-icons/fa"

const Navbar = () => {

  return (

    <nav className="bg-[#131921] text-white sticky top-0 z-50 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between gap-8">

          {/* Logo */}

          <Link to="/">

            <h1 className="text-3xl font-extrabold tracking-wide">

              Campus
              <span className="text-yellow-400">
                Cart
              </span>

            </h1>

          </Link>

          {/* Search Bar */}

          <div className="hidden md:flex flex-1 max-w-2xl">

            <div className="flex items-center bg-white rounded-xl overflow-hidden w-full shadow-lg">

              <input
                type="text"
                placeholder="Search laptops, books, phones..."
                className="w-full px-5 py-3 text-black outline-none"
              />

              <button className="bg-yellow-400 hover:bg-yellow-500 duration-300 px-5 py-4 text-black">

                <FaSearch size={18} />

              </button>

            </div>

          </div>

          {/* Nav Links */}

          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="hover:text-yellow-400 duration-300 font-medium"
            >
              Home
            </Link>

            <Link
              to="/add-product"
              className="hover:text-yellow-400 duration-300 font-medium"
            >
              Sell
            </Link>

            {/* Favorites */}

            <Link
              to="/favorites"
              className="hover:text-red-400 duration-300 relative"
            >

              <FaHeart size={22} />

            </Link>

            {/* Cart */}

            <button className="hover:text-yellow-400 duration-300 relative">

              <FaShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

                2

              </span>

            </button>

            {/* User */}

            <button className="hover:text-yellow-400 duration-300">

              <FaUserCircle size={28} />

            </button>

          </div>

        </div>

        {/* Mobile Search */}

        <div className="mt-4 md:hidden">

          <div className="flex items-center bg-white rounded-xl overflow-hidden">

            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 text-black outline-none"
            />

            <button className="bg-yellow-400 px-4 py-4 text-black">

              <FaSearch />

            </button>

          </div>

        </div>

      </div>

    </nav>

  )
}

export default Navbar