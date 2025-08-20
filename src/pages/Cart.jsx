import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-3">🛒 Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">
          Tambahkan produk ke keranjang dulu yuk!
        </p>
        <Link
          to="/product"
          className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        🛍️ Your Shopping Cart
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* daftar produk */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain rounded-md border"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-indigo-600 font-semibold">${item.price}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* ringkasan belanja */}
        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <p className="flex justify-between text-lg mb-2">
            <span>Total Items:</span> <span>{cart.length}</span>
          </p>
          <p className="flex justify-between text-lg mb-4">
            <span>Total Price:</span>{" "}
            <span className="font-semibold text-indigo-600">
              ${total.toFixed(2)}
            </span>
          </p>
          <button
            onClick={clearCart}
            className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition mb-3"
          >
            Clear Cart
          </button>
          <button className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
