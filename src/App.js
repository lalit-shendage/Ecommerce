import React from 'react';
import { BrowserRouter as Router, Route,Routes,HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import ItemForm from './components/ItemForm';
// import {connect} from "react-redux"
import './App.css';



const App = () => {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemList/>} />
            <Route exact path="/additem" element={<ItemForm/>} />
            <Route exact path="/cart" element={<Cart/>} />
          </Routes>
        </div>
        <div></div>
      </Router>
      </HashRouter>
    </Provider>
  );
};

export default App;
