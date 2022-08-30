import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CartItem, cartReducer } from "../reducer/reducer";
import {
  addItemToCartAction,
  decrementItemQuantityByOneAction,
  incrementItemQuantityByOneAction,
  removeItemCartAction,
} from "../reducer/actions";
import { coffees } from "../store/data";

type CartContextData = {
  cart: CartItem[];
  subTotal: number;
  delivery: number;
  total: number;
  addItemToCart: (id: string) => void;
  increaseCoffeeQuantityByOne: (id: string | undefined) => void;
  decreaseCoffeeQuantityByOne: (id: string | undefined) => void;
  removeItemCart: (id: string | undefined) => void;
};

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const localStorageName = "@coffee-delivery:cart";

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(localStorageName);

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );

  const { cart } = cartState;

  const delivery = 3.5;
  const subTotal = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.totalPrice,
    0
  );
  const total = subTotal + delivery;

  useEffect(() => {
    const stateJson = JSON.stringify(cartState);

    localStorage.setItem(localStorageName, stateJson);
  }, [cartState]);

  function checkHasProductInCart(id: string) {
    const coffee = cart.find((item) => item.coffeeId === id);
    return coffee;
  }

  function increaseCoffeeQuantityByOne(id: string | undefined) {
    dispatch(incrementItemQuantityByOneAction(id));
  }

  function decreaseCoffeeQuantityByOne(id: string | undefined) {
    dispatch(decrementItemQuantityByOneAction(id));
  }

  function removeItemCart(id: string | undefined) {
    dispatch(removeItemCartAction(id));
  }

  function addItemToCart(id: string) {
    const coffee = checkHasProductInCart(id);
    const coffeePrice = coffees.find((coffee) => coffee.id === id)?.value;

    if (coffee) {
      return increaseCoffeeQuantityByOne(id);
    }

    const newCartItem = {
      id: `item-${id}-${Date.now()}`,
      quantity: 1,
      coffeeId: id,
      unityPrice: coffeePrice ?? 0,
      totalPrice: coffeePrice ?? 0,
    };

    dispatch(addItemToCartAction(newCartItem));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemCart,
        subTotal,
        delivery,
        total,
        increaseCoffeeQuantityByOne,
        decreaseCoffeeQuantityByOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
