import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
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
              className="mx-auto h-40 object-contain rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{p.title}</h3>
            <p className="text-indigo-600 font-semibold">${p.price}</p>

            <Link
              to={`/product/${p.id}`}  
              className="mt-4 inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              See Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
