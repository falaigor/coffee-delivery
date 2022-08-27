import { createContext, ReactNode } from "react";
import { coffees, Coffee } from "../store/data";

interface CartItem {
  id: string;
  coffeeId: string;
  quantity: number;
}

interface CartContextData {
  coffees: Coffee[];
}

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={{ coffees }}>{children}</CartContext.Provider>
  );
}
