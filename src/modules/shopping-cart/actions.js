import {
  ADD_TO_CART_SUCCESS,
  DELETE_FROM_CART_SUCCESS,
  INCREASE_QUANTITY_SUCCESS,
  DECREASE_QUANTITY_SUCCESS,
} from "./action-types.js";

//action creators

export const addToCartSuccess = (id) => ({
  type: ADD_TO_CART_SUCCESS,
  id,
});
export const deleteFromCartSuccess = (id) => ({
  type: DELETE_FROM_CART_SUCCESS,
  id,
});
export const increaseQuantitySuccess = (id) => ({
  type: INCREASE_QUANTITY_SUCCESS,
  id,
});
export const decreaseQuantitySuccess = (id) => ({
  type: DECREASE_QUANTITY_SUCCESS,
  id,
});
