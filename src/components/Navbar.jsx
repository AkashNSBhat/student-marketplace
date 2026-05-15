import { Link } from "react-router-dom"
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa"

const Navbar = () => {
  return (

    <nav className="bg-[#131921] text-white px-6 py-4 sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-5">

        {/* Logo */}

        <Link to="/">
          <h1 className="text-3xl font-bold text-yellow-400">
            CampusCart
          </h1>
        </Link>

        {/* Search Bar */}

        <div className="flex items-center bg-white rounded-lg overflow-hidden w-full max-w-xl">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-black outline-none"
          />

          <button className="bg-yellow-400 px-4 py-3 text-black">
            <FaSearch />
          </button>

        </div>

        {/* Nav Links */}

        <div className="flex items-center gap-6">

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
            className="hover:text-yellow-400 duration-300"
          >
            <FaHeart size={20} />
          </Link>

          <button className="hover:text-yellow-400 duration-300">
            <FaShoppingCart size={20} />
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
