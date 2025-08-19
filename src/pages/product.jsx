import { useEffect, useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetch products:", err));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-40 object-contain mx-auto"
            />
            <h3 className="text-lg font-bold mt-4">{p.title}</h3>
            <p className="text-pink-600 font-semibold">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
