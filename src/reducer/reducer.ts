import { produce } from "immer";
import { ActionTypes } from "./actions";

export type CartItem = {
  id: string;
  coffeeId: string;
  quantity: number;
  unityPrice: number;
  totalPrice: number;
};

interface CartState {
  cart: CartItem[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newCartItem);
      });

    case ActionTypes.INCREMENT_ITEM_QUANTITY_BY_ONE:
      return produce(state, (draft) => {
        const currentCartItem = state.cart.findIndex((cart) => {
          return cart.coffeeId === action.payload.coffeeId;
        });

        if (currentCartItem < 0) {
          return state;
        }

        const quantity = draft.cart[currentCartItem].quantity + 1;
        const totalPrice = draft.cart[currentCartItem].unityPrice * quantity;

        draft.cart[currentCartItem].quantity = quantity;
        draft.cart[currentCartItem].totalPrice = totalPrice;
      });

    case ActionTypes.DECREMENT_ITEM_QUANTITY_BY_ONE:
      return produce(state, (draft) => {
        const currentCartItem = state.cart.findIndex((cart) => {
          return cart.coffeeId === action.payload.coffeeId;
        });

        if (currentCartItem < 0) {
          return state;
        }

        const quantity = draft.cart[currentCartItem].quantity - 1;
        const totalPrice = draft.cart[currentCartItem].unityPrice * quantity;

        draft.cart[currentCartItem].quantity = quantity;
        draft.cart[currentCartItem].totalPrice = totalPrice;
      });

    default:
      return state;
  }
}
