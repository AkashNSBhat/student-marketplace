import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import Favorites from "./pages/Favorites"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App