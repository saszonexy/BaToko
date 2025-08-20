import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetch products:", err));
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Rina Putri",
      rating: 5,
      comment:
        "Bajunya bagus banget, bahan nyaman dipakai dan harga terjangkau.",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Andi Wijaya",
      rating: 4,
      comment: "Pengiriman cepat, produk sesuai deskripsi. Recommended seller!",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Siti Aulia",
      rating: 5,
      comment: "Suka banget belanja di BaToko, banyak pilihan model kekinian.",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
  ];

  return (
    <div>
      <section
        className="relative text-center text-white py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/Baju4.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/60 via-purple-700/50 to-pink-600/40"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
            BaToko
          </h1>
          <p className="text-xl mt-4 font-light">
            Dapatkan Outfit terbaik anda disini ✨
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:scale-105 transition">
            Belanja Sekarang
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/Baju1.jpeg" alt="Baju" className="mx-auto rounded-xl" />
          <h3 className="text-xl font-bold mt-4">Baju</h3>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/Baju2.jpeg" alt="Celana" className="mx-auto rounded-xl" />
          <h3 className="text-xl font-bold mt-4">Celana</h3>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/Baju3.jpeg" alt="Jacket" className="mx-auto rounded-xl" />
          <h3 className="text-xl font-bold mt-4">Jacket</h3>
        </div>
      </section>

      <section className="bg-white py-16 text-center border-t border-gray-200">
        <h2 className="text-4xl font-bold mb-8">
          🔥 Promo Spesial Minggu Ini 🔥
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl p-8 shadow-lg text-white hover:scale-105 transition">
            <h3 className="text-2xl font-bold">Diskon 50%</h3>
            <p className="mt-2">Untuk koleksi baju summer edition</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl p-8 shadow-lg text-white hover:scale-105 transition">
            <h3 className="text-2xl font-bold">Gratis Ongkir</h3>
            <p className="mt-2">Minimal belanja Rp150.000 seluruh Indonesia</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl p-8 shadow-lg text-white hover:scale-105 transition">
            <h3 className="text-2xl font-bold">Flash Sale</h3>
            <p className="mt-2">Hanya hari ini! mulai jam 19:00 - 22:00</p>
          </div>
        </div>

        <Link to="/promo">
          <button className="mt-10 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:scale-105 transition">
            Cek Semua Promo
          </button>
        </Link>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Produk Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 object-contain mx-auto rounded-xl"
              />
              <h3 className="text-lg font-bold mt-4">{product.title}</h3>
              <p className="text-indigo-600 font-semibold mt-2">
                ${product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/product">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 hover:scale-105 transition">
              Lihat Semua Produk
            </button>
          </Link>
        </div>
      </section>

      <section className="p-10 text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-700">
          BaToko menyediakan banyak pilihan pakaian menarik, untuk anda dan
          keluarga. Mari belanja hemat di BaToko, Toko pilihan keluarga.
        </p>
      </section>

      <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-700">
          Customer Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition transform duration-300"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-indigo-200 shadow-md"
              />
              <h3 className="font-bold text-lg mt-4">{review.name}</h3>
              <p className="flex justify-center text-yellow-400 my-2">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-gray-600 italic leading-relaxed">
                “{review.comment}”
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
