import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ShopCart
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="font-medium hover:text-blue-600 duration-200"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2"
          >
            <ShoppingCart size={22} />

            <span>Cart</span>

            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;