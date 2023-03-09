import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import CartItems from "./CartItems";

const Cart = () => {
  const [showAlert, setShowAlert] = useState(false);
  const cartItems = useSelector((state) => state.cartState.cartItems);

  console.log(cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [showAlert]);

  const handleRemoveFromCart = (itemId) => {
    alert("item is removed from cart");
    dispatch(removeFromCart(itemId));
    setShowAlert(true);
  };

  const uniqueData = cartItems.filter((item, index) => {
    return cartItems.indexOf(item) === index;
  });

  console.log(uniqueData);

  const count = uniqueData.length;
  console.log(count);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container ">
      <h2 className="d-flex p-2 justify-content-center">Cart</h2>
      <p className="d-flex justify-content-center t-price">
        <b>Total price: Rs.{totalPrice}</b>
      </p>
      <div className=" d-flex justify-content-center">
        <div className="cartitem ">
          {uniqueData.map((item) => (
            <div className=" my-2 cariitem1  border border-dark ">
              <div
                key={item.id}
                className="mx-3 d-flex justify-content-between"
              >
                <p className="d-flex justify-content-start">{`${item.title} - ${item.price}`}</p>
                <p className="d-flex align-items-end ">
                  <button
                    className="mx-3 btn btn-danger "
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
