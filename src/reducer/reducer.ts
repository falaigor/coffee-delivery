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
      return {
        ...state,
        cart: [...state.cart, action.payload.newCartItem],
      };

    case ActionTypes.INCREMENT_ITEM_QUANTITY_BY_ONE:
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

    case ActionTypes.DECREMENT_ITEM_QUANTITY_BY_ONE:
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
}
