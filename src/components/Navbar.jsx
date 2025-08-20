import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { ShoppingCart, LogOut, User } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Yakin ingin logout?")) {
      logout();
    }
  };

  return (
    <nav className="bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        BaToko
      </Link>

      {/* Menu */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">
          Home
        </Link>
        <Link to="/product" className="hover:text-indigo-600 transition">
          Products
        </Link>
        <Link to="/contact" className="hover:text-indigo-600 transition">
          Contact
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Auth */}
        {!user ? (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-gray-700 font-semibold">
              <User className="w-5 h-5" /> {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
