import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

 const addToCart = (product) => {
  const productItem = cart.find(
    (item) => item.id === product.id
  );

  if (productItem) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart((prev) => [
      ...prev,
      { ...product, quantity: 1 }
    ]);
  }
};

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}
