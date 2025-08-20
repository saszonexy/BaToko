import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { usePromo } from "../Context/PromoContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const { promos } = usePromo();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-3">Keranjangmu Kosong</h2>
        <p className="text-gray-600 mb-6">
          Yuk tambahkan produk dulu sebelum checkout!
        </p>
        <Link
          to="/product"
          className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Belanja Sekarang
        </Link>

        <Link
          to="/"
          className="mt-4 bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-300 transition"
        >
          Kembali
        </Link>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  const shipping = subtotal > 100 ? 0 : 20;
  const totalBeforeDiscount = subtotal + shipping;
  const total = totalBeforeDiscount - (subtotal * discount) / 100;

  const applyPromo = () => {
    const found = promos.find(
      (p) => p.code.toLowerCase() === promoCode.toLowerCase()
    );
    if (found) {
      setDiscount(found.discount);
      alert(`Kode berhasil diterapkan: ${found.code} (${found.discount}%)`);
    } else {
      setDiscount(0);
      alert("Kode promo tidak valid!");
    }
  };

  const handleCheckout = () => {
    alert("Pesananmu berhasil diproses! Terima kasih sudah belanja.");
    clearCart();
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Keranjang Belanja</h2>

      <div className="grid md:grid-cols-2 gap-6">
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

                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, (item.qty || 1) - 1))
                    }
                    className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">
                    {item.qty || 1}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, (item.qty || 1) + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  ${item.price} x {item.qty || 1} ={" "}
                  <span className="font-semibold text-indigo-600">
                    ${(item.price * (item.qty || 1)).toFixed(2)}
                  </span>
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Ringkasan Belanja</h3>
          <p className="flex justify-between text-lg mb-2">
            <span>Total Item:</span>{" "}
            <span>{cart.reduce((acc, item) => acc + (item.qty || 1), 0)}</span>
          </p>
          <p className="flex justify-between text-lg mb-2">
            <span>Subtotal:</span>{" "}
            <span className="font-semibold text-gray-700">
              ${subtotal.toFixed(2)}
            </span>
          </p>
          <p className="flex justify-between text-lg mb-2">
            <span>Ongkir:</span>{" "}
            <span className="font-semibold text-gray-700">
              {shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}
            </span>
          </p>
          {discount > 0 && (
            <p className="flex justify-between text-lg mb-2 text-green-600">
              <span>Diskon ({discount}%):</span>{" "}
              <span>- ${((subtotal * discount) / 100).toFixed(2)}</span>
            </p>
          )}
          <p className="flex justify-between text-lg mb-4">
            <span>Total Bayar:</span>{" "}
            <span className="font-bold text-indigo-600">
              ${total.toFixed(2)}
            </span>
          </p>

          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Masukkan kode promo"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 border rounded-l-lg px-3 py-2"
            />
            <button
              onClick={applyPromo}
              className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600"
            >
              Apply
            </button>
          </div>

          <button
            onClick={clearCart}
            className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-red-500 transition mb-3"
          >
            Hapus Semua
          </button>
          <button
            onClick={handleCheckout}
            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-violet-500 transition mb-3"
          >
            Checkout
          </button>

          <Link
            to="/"
            className="w-full inline-block text-center bg-violet-500 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
