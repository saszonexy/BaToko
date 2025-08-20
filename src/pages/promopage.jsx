import { useState } from "react";
import { Gift, Search, Percent, Home } from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function PromoPage() {
  const [sortOption, setSortOption] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");

  const promos = [
    {
      id: 1,
      title: "Diskon 50% Semua Produk",
      desc: "Nikmati potongan harga 50% untuk semua produk tertentu!",
      valid: "Berlaku hingga 31 Agustus 2025",
      code: "HEMAT50",
      discount: 50,
      date: "2025-08-31",
    },
    {
      id: 2,
      title: "Gratis Ongkir",
      desc: "Gratis ongkos kirim untuk pembelian minimal Rp100.000.",
      valid: "Berlaku hingga 15 September 2025",
      code: "ONGKIRFREE",
      discount: 0,
      date: "2025-09-15",
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free",
      desc: "Beli 1 produk fashion, gratis 1 produk dengan harga sama/lebih murah.",
      valid: "Berlaku hingga 30 September 2025",
      code: "B1G1",
      discount: 50,
      date: "2025-09-30",
    },
  ];

  const filteredPromos = promos.filter(
    (promo) =>
      promo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPromos = [...filteredPromos].sort((a, b) => {
    if (sortOption === "newest") return new Date(b.date) - new Date(a.date);
    if (sortOption === "endingSoon") return new Date(a.date) - new Date(b.date);
    if (sortOption === "biggestDiscount") return b.discount - a.discount;
    return 0;
  });

  const handleUsePromo = (code) => {
    navigator.clipboard.writeText(code);
    toast.success(`Kode promo "${code}" berhasil disalin! 🎉`, {
      duration: 2500,
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-6">
      <Toaster />
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            <Home className="w-5 h-5" />
            Kembali
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8 flex items-center justify-center gap-2">
          <Gift className="w-8 h-8 text-indigo-600" />
          Semua Promo Menarik
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari promo atau kode..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          {/* Sort */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          >
            <option value="newest">Terbaru</option>
            <option value="endingSoon">Segera Berakhir</option>
            <option value="biggestDiscount">Diskon Terbesar</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {sortedPromos.length > 0 ? (
            sortedPromos.map((promo) => (
              <div
                key={promo.id}
                className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {promo.discount > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Percent className="w-4 h-4" />
                    {promo.discount}%
                  </div>
                )}

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {promo.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{promo.desc}</p>
                <p className="text-sm text-gray-500 mb-2">{promo.valid}</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
                    {promo.code}
                  </span>
                  <button
                    onClick={() => handleUsePromo(promo.code)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
                  >
                    Gunakan
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              Tidak ada promo yang cocok dengan pencarianmu.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
