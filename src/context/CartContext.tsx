import { useContext, useEffect, useState, type ReactNode } from "react";
import { createContext } from "react";

export interface cartCourse {
  id: number;
  title: string;
  price: number;
}

interface CartContextType {
  cart: cartCourse[];
  setCart: React.Dispatch<React.SetStateAction<cartCourse[]>>;
  addToCart: (course: cartCourse) => void;
  removeFromCart: (id: number) => void;
  totalCourses: number;
  totalPrice: number;
  isInCart: (id: number) => boolean;
}

export const CartContext = createContext<CartContextType | null>(null);

// cart provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<cartCourse[]>(() => {
    // LOAD CART FROM LOCAL STORAGE
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  //  SAVE CART TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD COURSE FUNCTION
  const addToCart = (course: cartCourse) => {
    setCart((prev) => {
      const exists = prev.find((e) => e.id === course.id);
      return exists ? prev : [...prev, course];
    });
  };

  // DELETE COURSE FUNCTION
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalCourses = cart.length;
  const totalPrice = Number(
    cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  );

  const isInCart = (id: number) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        totalCourses,
        totalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
