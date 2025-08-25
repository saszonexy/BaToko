import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Cek token saat pertama kali load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("ME RESPONSE:", res.data);
          setUser(res.data.user || res.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
        });
    }
  }, []);

  // REGISTER
  const register = async (name, email, password) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/register", {
        name,
        email,
        password,
      });

      console.log("REGISTER RESPONSE:", res.data);
      alert(res.data.message || "Registrasi berhasil, silakan login");
      return true;
    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Gagal registrasi");
      return false;
    }
  };

  // LOGIN
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      // Ambil token (bisa 'token' atau 'access_token')
      const token = res.data.token || res.data.access_token;
      if (!token) throw new Error("Token tidak ditemukan di response");

      // Simpan token ke localStorage
      localStorage.setItem("token", token);

      // Set user langsung kalau ada
      if (res.data.user) {
        setUser(res.data.user);
      } else {
        // Kalau tidak ada user di response, ambil dari /auth/me
        const me = await axios.get("http://localhost:3000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("FETCHED USER:", me.data);
        setUser(me.data.user || me.data);
      }

      return true;
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Gagal login");
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
