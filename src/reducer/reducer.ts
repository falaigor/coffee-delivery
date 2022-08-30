import { produce } from "immer";
import { ActionTypes } from "./actions";

export type CartItem = {
  id: string;
  coffeeId: string;
  quantity: number;
  unityPrice: number;
  totalPrice: number;
};

export interface OrderData {
  id: string;
  cep: string;
  address: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  paymentMethod: string;
}

interface CartState {
  cart: CartItem[];
  order: OrderData;
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

        if (currentCartItem < 0 || state.cart[currentCartItem].quantity === 5) {
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

        if (currentCartItem < 0 || state.cart[currentCartItem].quantity === 1) {
          return state;
        }

        const quantity = draft.cart[currentCartItem].quantity - 1;
        const totalPrice = draft.cart[currentCartItem].unityPrice * quantity;

        draft.cart[currentCartItem].quantity = quantity;
        draft.cart[currentCartItem].totalPrice = totalPrice;
      });

    case ActionTypes.REMOVE_ITEM_CART:
      return produce(state, (draft) => {
        const cartItems = state.cart.filter(
          (item) => item.coffeeId !== action.payload.coffeeId
        );

        draft.cart = cartItems;
      });

    case ActionTypes.RESET_CART:
      return produce(state, (draft) => {
        draft.cart = [];
      });

    case ActionTypes.CREATE_ORDER:
      return produce(state, (draft) => {
        console.log(state);
        draft.order = action.payload.newOrder;
      });

    default:
      return state;
  }
}
