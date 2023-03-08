import {  REMOVE_ITEM, EDIT_ITEM } from '../actions/itemActions';
import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from '../actions/itemActions';
import {ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, } from '../actions/itemActions';



const initialState = {
  items:[ ],
  loading: false,
  error:null
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
        console.log("fetching")
        return { 
          ...state,
          items: action.payload,
          error: null,
          loading:false
        };
        case ADD_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
        error: null,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
        case FETCH_ITEMS_FAILURE:
        return {
          ...state,
          items: [],
          error: action.payload
        };
    // case ADD_ITEM:
    //   return {
    //     ...state,
    //     items: [...state.items, action.payload]
    //   };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    default:
      return state;
  }
};

export default itemReducer;


