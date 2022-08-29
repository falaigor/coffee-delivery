import { createContext, ReactNode, useReducer, useState } from "react";
import { cartReducer } from "../reducer/reducer";
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

interface CartState {
  cart: CartItem[];
}

export function CartProvider({ children }: CartProviderProps) {
  const localStorageName = "@coffee-delivery:cart";

  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      switch (action.type) {
        case "ADD_ITEM_TO_CART":
          return {
            ...state,
            cart: [...state.cart, action.payload.newCartItem],
          };

        case "INCREMENT_QUANTITY_ITEM_CART":
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.coffeeId === action.payload.coffeeId) {
                if (item.quantity === 5) {
                  return item;
                }

                const quantity = item.quantity + 1;
                const totalPrice = item.unityPrice * quantity;

                return {
                  ...item,
                  quantity,
                  totalPrice,
                };
              } else {
                return item;
              }
            }),
          };

        case "DECREMENT_QUANTITY_ITEM_CART":
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.coffeeId === action.payload.coffeeId) {
                if (item.quantity === 1) {
                  return item;
                }

                const quantity = item.quantity - 1;
                const totalPrice = item.unityPrice * quantity;

                return {
                  ...item,
                  quantity,
                  totalPrice,
                };
              } else {
                return item;
              }
            }),
          };

        default:
          return state;
      }
    },
    {
      cart: [],
    }
  );

  const { cart } = cartState;

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
