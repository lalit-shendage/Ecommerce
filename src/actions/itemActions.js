import axios from "axios";

// Action types
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
const BASE_API='https://my-json-server.typicode.com/lalit-shendage/Cartserver/items'

// Action creators
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItem =  (id) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const editItem = item => {
  return {
    type: EDIT_ITEM,
    payload: item
  };
};
// fetching items from database
export const fetchItems = () => {
  return async dispatch => {
    try {
    console.log("data is fetching")
      const response = await fetch(`${BASE_API}`);
      const data = await response.json();
      console.log (data)
      console.log("data is fetched")
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data });
    } catch (error) {
        console.log("failure in fetching data")
      dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
    }
  };
};
// adding item to database 
export const addItemRequest = () => ({
    type: ADD_ITEM_REQUEST,
  });
  
  export const addItemSuccess = (item) => ({
    type: ADD_ITEM_SUCCESS,
    payload: item,
  });
  
  export const addItemFailure = (error) => ({
    type: ADD_ITEM_FAILURE,
    payload: error,
  });
  
//   export const addItemToDatabase = (item) => {
//     return (dispatch) => {
//       dispatch(addItemRequest());
//       return addItem(item)
//         .then((response) => {
//           dispatch(addItemSuccess(response.data));
//         })
//         .catch((error) => {
//           dispatch(addItemFailure(error.message));
//         });
//     };
//   };

//   export const addItemToDatabase = (item) => {
//     return (dispatch) => {
//       dispatch(addItemRequest());
//       axios
//         .post(`${BASE_API}`, item)
//         .then((response) => {
//           dispatch(addItemSuccess(response.data));
//         })
//         .catch((error) => {
//           dispatch(addItemFailure(error.message));
//         });
//     };
//   };
