import { createContext, ReactNode, useState } from "react";
import { coffees } from "../store/data";

export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  value: number;
  image: string;
}

interface CartItem {
  id: string;
  coffeeId: string;
  quantity: number;
}

interface CoffeesContextData {
  coffees: Coffee[];
}

export const CoffeesContext = createContext({} as CoffeesContextData);

interface CoffeesProviderProps {
  children: ReactNode;
}

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  );
}
