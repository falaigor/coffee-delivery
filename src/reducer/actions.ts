import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  INCREMENT_ITEM_QUANTITY_BY_ONE = "INCREMENT_ITEM_QUANTITY_BY_ONE",
  DECREMENT_ITEM_QUANTITY_BY_ONE = "DECREMENT_ITEM_QUANTITY_BY_ONE",
  REMOVE_ITEM_CART = "REMOVE_ITEM_CART",
}

export function addItemToCartAction(newCartItem: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newCartItem,
    },
  };
}

export function incrementItemQuantityByOneAction(id: string | undefined) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY_BY_ONE,
    payload: {
      coffeeId: id,
    },
  };
}

export function decrementItemQuantityByOneAction(id: string | undefined) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY_BY_ONE,
    payload: {
      coffeeId: id,
    },
  };
}

export function removeItemCartAction(id: string | undefined) {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: {
      coffeeId: id,
    },
  };
}
