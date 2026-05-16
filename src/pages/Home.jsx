import { useState, useEffect } from "react"

import productsData from "../data/products"
import ProductCard from "../components/ProductCard"

const Home = () => {

  const [products, setProducts] = useState(productsData)

  const [search, setSearch] = useState("")

  const [category, setCategory] = useState("All")

  useEffect(() => {

    let filteredProducts = productsData

    if(search){

      filteredProducts = filteredProducts.filter((product)=>

        product.title.toLowerCase().includes(search.toLowerCase())

      )

    }

    if(category !== "All"){

      filteredProducts = filteredProducts.filter((product)=>

        product.category === category

      )

    }

    setProducts(filteredProducts)

  }, [search, category])

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-14 text-white shadow-xl">

        <div className="max-w-3xl">

          <h1 className="text-6xl font-extrabold leading-tight">

            Buy & Sell
            <br />
            Products On Campus

          </h1>

          <p className="text-xl mt-6 text-blue-100 leading-8">

            Find the best student deals on electronics,
            furniture, books, accessories and more.

          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 duration-300 text-black font-bold px-8 py-4 rounded-2xl mt-8 text-lg">

            Explore Products

          </button>

        </div>

      </div>

      {/* Search & Filter */}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-14">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="bg-white shadow-md rounded-2xl px-6 py-4 outline-none text-lg w-full lg:w-[400px]"
        />

        <div className="flex flex-wrap gap-4">

          {
            ["All", "Electronics", "Furniture", "Mobiles", "Accessories", "Books"]
            .map((item)=>(
              <button
                key={item}
                onClick={()=>setCategory(item)}
                className={`px-6 py-3 rounded-2xl font-semibold duration-300

                  ${
                    category === item
                    ?
                    "bg-blue-600 text-white"
                    :
                    "bg-white shadow-md hover:bg-blue-100"
                  }

                `}
              >

                {item}

              </button>
            ))
          }

        </div>

      </div>

      {/* Products */}

      <div className="mt-16">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-bold">

            Latest Products

          </h2>

          <p className="text-gray-500 text-lg">

            {products.length} Products

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {
            products.map((product)=>(
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }

        </div>

        {
          products.length === 0 && (

            <div className="text-center py-20">

              <h2 className="text-4xl font-bold text-gray-500">

                No Products Found

              </h2>

            </div>

          )
        }

      </div>

    </div>

  )
}

export default Home