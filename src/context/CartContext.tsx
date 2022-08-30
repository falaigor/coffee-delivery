import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CartItem, cartReducer } from "../reducer/reducer";
import { coffees } from "../store/data";

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

  useEffect(() => {
    const stateJson = JSON.stringify(cartState);

    localStorage.setItem(localStorageName, stateJson);
  }, [cartState]);

  function checkHasProductInCart(id: string) {
    const coffee = cart.find((item) => item.coffeeId === id);
    return coffee;
  }

  function addItemToCartAction(id: string) {
    const coffeePrice = coffees.find((coffee) => coffee.id === id)?.value;

    const newCartItem = {
      id: `item-${id}-${Date.now()}`,
      quantity: 1,
      coffeeId: id,
      unityPrice: coffeePrice ?? 0,
      totalPrice: coffeePrice ?? 0,
    };

    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: {
        newCartItem,
      },
    });
  }

  function increaseCoffeeQuantityByOne(id: string) {
    const existsInCart = checkHasProductInCart(id);

    if (!!existsInCart === false) {
      addItemToCartAction(id);
    } else {
      dispatch({
        type: "INCREMENT_QUANTITY_ITEM_CART",
        payload: {
          coffeeId: id,
        },
      });
    }
  }

  function decreaseCoffeeQuantityByOne(id: string) {
    dispatch({
      type: "DECREMENT_QUANTITY_ITEM_CART",
      payload: {
        coffeeId: id,
      },
    });
  }

  function addItemToCart(id: string) {
    const coffee = checkHasProductInCart(id);

    if (coffee) {
      return increaseCoffeeQuantityByOne(id);
    }

    addItemToCartAction(id);
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
