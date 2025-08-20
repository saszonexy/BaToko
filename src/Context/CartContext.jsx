import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();

  const addToCart = (product) => {
    if (!user) {
      alert("Anda harus login untuk menambahkan produk ke keranjang!");
      return;
    }

    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
