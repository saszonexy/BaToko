export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Hubungi Kami</h2>
      <p className="mb-6 text-center text-gray-600">
        Batoko siap melayani Anda!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          required
          className="w-full p-3 border rounded-xl"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 border rounded-xl"
        />
        <textarea
          placeholder="Pesan"
          required
          className="w-full p-3 border rounded-xl"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-3 rounded-xl w-full"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
