import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import Favorites from "./pages/Favorites"
import ProductDetails from "./pages/ProductDetails"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App