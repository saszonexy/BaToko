import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { User, Mail, Lock } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
            <User className="text-white w-8 h-8" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Daftar Akun
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Silakan buat akun baru untuk melanjutkan
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <User className="text-gray-400 mr-2 w-5 h-5" />
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full outline-none text-gray-700"
              required
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Mail className="text-gray-400 mr-2 w-5 h-5" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-gray-700"
              required
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Lock className="text-gray-400 mr-2 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Daftar
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
