import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetch product detail:", err));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product detail...</p>;
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-60 object-contain rounded-lg mx-auto"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-pink-600 font-semibold text-lg mb-4">
            ${product.price}
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link
          to="/product"
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}
