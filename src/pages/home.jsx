import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetch products:", err));
  }, []);

  return (
    <div>
      {}
      <section className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-center text-white py-20">
        <h1 className="text-5xl font-extrabold mb-4">BaToko</h1>
        <p className="text-lg">Dapatkan Outfit terbaik anda disini ✨</p>
      </section>

      {}
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

      {}
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

      {}
      <section className="p-10 text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-700">
          BaToko menyediakan banyak pilihan pakaian menarik, untuk anda dan
          keluarga. Mari belanja hemat di BaToko, Toko pilihan keluarga.
        </p>
      </section>
    </div>
  );
}
