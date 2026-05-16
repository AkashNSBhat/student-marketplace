const Footer = () => {

  return (

    <footer className="bg-[#131921] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

            <h1 className="text-3xl font-bold">

              Campus
              <span className="text-yellow-400">
                Cart
              </span>

            </h1>

            <p className="text-gray-300 mt-4 leading-7">

              A modern campus marketplace platform for students
              to buy and sell products easily.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-2xl font-bold mb-4">

              Quick Links

            </h2>

            <div className="flex flex-col gap-3 text-gray-300">

              <p>Home</p>
              <p>Sell Product</p>
              <p>Favorites</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-2xl font-bold mb-4">

              Contact

            </h2>

            <div className="flex flex-col gap-3 text-gray-300">

              <p>support@campuscart.com</p>
              <p>+91 9876543210</p>
              <p>College Campus Marketplace</p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 CampusCart. All Rights Reserved.

        </div>

      </div>

    </footer>

  )
}

export default Footer