import { createContext, useContext, useState } from "react";

const PromoContext = createContext();

export function PromoProvider({ children }) {
  const [promos] = useState([
    { code: "DISKON10", discount: 10, desc: "Diskon 10% semua produk" },
    { code: "DISKON20", discount: 20, desc: "Diskon 20% minimal belanja $100" },
    { code: "HEMAT50", discount: 50, desc: "Diskon 50% produk tertentu" },
  ]);

  return (
    <PromoContext.Provider value={{ promos }}>{children}</PromoContext.Provider>
  );
}

export function usePromo() {
  return useContext(PromoContext);
}
