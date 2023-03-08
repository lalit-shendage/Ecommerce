// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action creators
export const addToCart = (item) => {
    console.log("before item in action")
    console.log(item)
    console.log("after item in action")
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = id => {
    console.log(id)
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
};
