import { createContext, ReactNode, useState } from "react";

interface Coffees {
  id: string;
  title: string;
  description: string;
  tags: string[];
  value: string;
  image: string;
}

interface CartItem {
  id: string;
  coffeeId: string;
  quantity: number;
}

interface CoffeesContextData {
  coffees: Coffees[];
}

export const CoffeesContext = createContext({} as CoffeesContextData);

interface CoffeesProviderProps {
  children: ReactNode;
}

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffees[]>([]);

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  );
}
