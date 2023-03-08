import { legacy_createStore as createStore, combineReducers,applyMiddleware } from 'redux';
import itemReducer from './reducers/itemReducer';
import cartReducer from './reducers/cartReducer';
import thunk from "redux-thunk"


const rootReducer = combineReducers({
  itemState: itemReducer,
  cartState: cartReducer
});

const store = createStore(
  rootReducer,
//   (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  applyMiddleware(thunk)
);

export default store;
