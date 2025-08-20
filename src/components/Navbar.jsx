import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Yakin ingin logout?")) {
      logout();
    }
  };

  return (
    <nav className="bg-indigo-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">BaToko</h1>

      <div className="space-x-6 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          Cart 
          {cart.length > 0 && (
            <span className="ml-1 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <span className="font-semibold">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
