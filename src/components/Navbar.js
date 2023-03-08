import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  const cartCount = cartItems.length;

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid  mx-3">
          <p className="navbar-brand"><h3>eCommerce</h3></p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 ">
                <Link to="/lalit-shendage/Ecommerce/" style={{ textDecoration: "none", color:"white" }}>
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link to="/lalit-shendage/Ecommerce/addItem" style={{ textDecoration: "none" , color:"white"}}>
                  Add Item
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/lalit-shendage/Ecommerce/cart" style={{ textDecoration: "none",  color:"white" }}>
                <h4 className="mx-2 my-2">
                  <i className="fa-solid fa-cart-shopping"></i>
                </h4>
              </Link>
              <div className="cartcount">{cartCount}</div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
