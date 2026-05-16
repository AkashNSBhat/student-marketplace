import { useState, useEffect } from "react"

import productsData from "../data/products"
import ProductCard from "../components/ProductCard"

const Home = () => {

  const [products, setProducts] = useState(productsData)

  const [search, setSearch] = useState("")

  const [category, setCategory] = useState("All")

  useEffect(() => {

    let filteredProducts = productsData

    // Search Filter

    if(search){

      filteredProducts = filteredProducts.filter((product)=>

        product.title.toLowerCase().includes(search.toLowerCase())

      )

    }

    // Category Filter

    if(category !== "All"){

      filteredProducts = filteredProducts.filter((product)=>

        product.category === category

      )

    }

    setProducts(filteredProducts)

  }, [search, category])

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

      {/* Search & Filter */}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mt-12">

        {/* Search */}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="bg-white shadow-md px-5 py-3 rounded-xl outline-none w-full md:w-96"
        />

        {/* Category Buttons */}

        <div className="flex flex-wrap gap-3">

          {
            ["All", "Electronics", "Furniture", "Mobiles", "Accessories", "Books"]
            .map((item)=>(
              <button
                key={item}
                onClick={()=>setCategory(item)}
                className={`px-5 py-2 rounded-xl font-medium duration-300

                  ${
                    category === item
                    ?
                    "bg-blue-600 text-white"
                    :
                    "bg-white shadow hover:bg-blue-100"
                  }

                `}
              >

                {item}

              </button>
            ))
          }

        </div>

      </div>

      {/* Products Section */}

      <div className="mt-12">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-bold">
            Latest Products
          </h2>

          <p className="text-gray-500">
            {products.length} Products
          </p>

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

          {
            products.length === 0 && (

              <div className="col-span-full text-center py-20">

                <h2 className="text-3xl font-bold text-gray-500">

                  No Products Found

                </h2>

              </div>

            )
          }

        </div>

      </div>

    </div>
  )
}

export default Home