import { createContext, ReactNode, useState } from "react";
import { coffees } from "../store/data";

export type CartItem = {
  id: string;
  coffeeId: string;
  quantity: number;
  unityPrice: number;
  totalPrice: number;
};

type CartContextData = {
  cart: CartItem[];

  addItemToCart: (id: string) => void;
  increaseCoffeeQuantityByOne: (id: string) => void;
  decreaseCoffeeQuantityByOne: (id: string) => void;
};

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function checkHasProductInCart(id: string) {
    const coffee = cart.find((item) => item.coffeeId === id);
    return coffee;
  }

  function increaseCoffeeQuantityByOne(id: string) {
    const existsInCart = checkHasProductInCart(id);

    if (!!existsInCart === false) {
      const coffeePrice = coffees.find((coffee) => coffee.id === id)?.value;

      setCart((state) => [
        ...state,
        {
          id: `item-${id}-${Date.now()}`,
          quantity: 1,
          coffeeId: id,
          unityPrice: coffeePrice ?? 0,
          totalPrice: coffeePrice ?? 0,
        },
      ]);
    } else {
      const updatedCart = cart.map((cart) => {
        if (cart.coffeeId === id) {
          if (cart.quantity === 5) {
            return cart;
          }

          const quantity = cart.quantity + 1;
          const totalPrice = cart.unityPrice * quantity;
          return {
            ...cart,
            quantity,
            totalPrice,
          };
        }

        return cart;
      });

      setCart(updatedCart);
    }
  }

  function decreaseCoffeeQuantityByOne(id: string) {
    const updatedCart = cart.map((coffee) => {
      if (coffee.coffeeId === id) {
        if (coffee.quantity === 1) {
          return coffee;
        }

        const quantity = coffee.quantity - 1;
        const totalPrice = coffee.unityPrice * quantity;

        return {
          ...coffee,
          quantity,
          totalPrice,
        };
      }

      return coffee;
    });

    setCart(updatedCart);
  }

  function addItemToCart(id: string) {
    const coffee = checkHasProductInCart(id);

    if (coffee) {
      return increaseCoffeeQuantityByOne(id);
    }

    const coffeePrice = coffees.find((coffee) => coffee.id === id)?.value;

    setCart((state) => [
      ...state,
      {
        id: `item-${id}-${Date.now()}`,
        quantity: 1,
        coffeeId: id,
        unityPrice: coffeePrice ?? 0,
        totalPrice: coffeePrice ?? 0,
      },
    ]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        increaseCoffeeQuantityByOne,
        decreaseCoffeeQuantityByOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
