import { Link } from "react-router-dom"

import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaUserCircle
} from "react-icons/fa"

const Navbar = () => {

  return (

    <nav className="bg-[#131921] text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between gap-8">

        {/* Logo */}

        <Link to="/">

          <h1 className="text-4xl font-extrabold tracking-wide">

            Campus
            <span className="text-yellow-400">
              Cart
            </span>

          </h1>

        </Link>

        {/* Search */}

        <div className="hidden md:flex flex-1 max-w-2xl">

          <div className="flex items-center bg-white rounded-xl overflow-hidden w-full">

            <input
              type="text"
              placeholder="Search laptops, books, phones..."
              className="w-full px-5 py-3 text-black outline-none text-lg"
            />

            <button className="bg-yellow-400 hover:bg-yellow-500 duration-300 px-6 py-4 text-black">

              <FaSearch size={18} />

            </button>

          </div>

        </div>

        {/* Nav */}

        <div className="flex items-center gap-8 text-lg font-medium">

          <Link
            to="/"
            className="hover:text-yellow-400 duration-300"
          >
            Home
          </Link>

          <Link
            to="/add-product"
            className="hover:text-yellow-400 duration-300"
          >
            Sell
          </Link>

          <Link
            to="/favorites"
            className="hover:text-red-400 duration-300"
          >
            <FaHeart size={22} />
          </Link>

          <button className="relative hover:text-yellow-400 duration-300">

            <FaShoppingCart size={22} />

            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

              2

            </span>

          </button>

          <button className="hover:text-yellow-400 duration-300">

            <FaUserCircle size={30} />

          </button>

        </div>

      </div>

    </nav>

  )
}

export default Navbar