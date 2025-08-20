import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=6")
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
    },
    {
      id: 2,
      name: "Andi Wijaya",
      rating: 4,
      comment: "Pengiriman cepat, produk sesuai deskripsi. Recommended seller!",
    },
    {
      id: 3,
      name: "Siti Aulia",
      rating: 5,
      comment: "Suka banget belanja di BaToko, banyak pilihan model kekinian.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-center text-white py-20">
        <h1 className="text-5xl font-extrabold mb-4">BaToko</h1>
        <p className="text-lg">Dapatkan Outfit terbaik anda disini ✨</p>
      </section>

      {/* Kategori */}
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

      {/* Produk Terbaru */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Produk Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-40 object-cover mx-auto rounded-xl"
              />
              <h3 className="text-lg font-bold mt-4">{product.title}</h3>
              <p className="text-indigo-600 font-semibold mt-2">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deskripsi */}
      <section className="p-10 text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-700">
          BaToko menyediakan banyak pilihan pakaian menarik, untuk anda dan
          keluarga. Mari belanja hemat di BaToko, Toko pilihan keluarga.
        </p>
      </section>

      {/* Reviews */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg">{review.name}</h3>
              <p className="text-yellow-500 my-2">
                {"⭐".repeat(review.rating)}
              </p>
              <p className="text-gray-600 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
