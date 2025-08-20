import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email) {
      setUser(savedUser);
    } else {
      alert("Email tidak ditemukan, silakan register dulu!");
    }
  };

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // simpan
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
