import products from "../data/products"
import ProductCard from "../components/ProductCard"

const Home = () => {

  return (

    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-10 shadow-xl">

        <h1 className="text-6xl font-bold leading-tight">
          Buy & Sell
          <br />
          Products On Campus
        </h1>

        <p className="mt-4 text-lg max-w-xl">
          Find the best student deals for electronics,
          furniture, books and more.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold mt-6 hover:scale-105 duration-300">

          Explore Products

        </button>

      </div>

      {/* Product Section */}

      <div className="mt-12">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-bold">
            Latest Products
          </h2>

          <button className="text-blue-600 font-semibold">
            View All
          </button>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            products.map((product)=>(
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Home