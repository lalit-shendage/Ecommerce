import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, editItem } from "../actions/itemActions";
import { addToCart } from "../actions/cartActions";

const ProductItem = (props) => {
  const [text, setText] = useState("Edit me!");
  const [editable, setEditable] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useSelector((state) => state.itemState.items);
  const [editedText, setEditedText] = useState("");
  const dispatch = useDispatch();

  let { title, description, imgurl, price, stars } = props;
  console.log("populated");

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [showAlert]);

  // inline editing
  const edit = (event) => {
    setText(event.target.innerText);
    setEditedText(event.target.innerText);
  };
  const handleToggleEditable = () => {
    setEditable(!editable);
    dispatch(editItem(editedText));
  };

  // deleting item from database
  const remove = (id) => {
    console.log("delete start");
    console.log(props.id);
    dispatch(removeItem(props.id));
    console.log("delete is clicked");
    alert("item is deleted from database");
    setShowAlert(true);
  };

  // inserting item in cart
  const addtocart = (id) => {
    dispatch(addToCart(props));
    console.log(props);
    console.log("add is clicked");
    alert("item is added to cart");
    setShowAlert(true);
  };

  // implementation of item rating 
  let n = [];
  for (var i = 0; i < stars; i++) {
    n.push(<i className="fa fa-star star" key={i + 5}></i>);
  }
  for (i = 0; i < 5 - stars; i++) {
    n.push(<i className="fa-regular fa-star star" key={i}></i>);
  }

  return (
    <div className=" col-md-6 ">
      <div
        className="card mb-3 card1 mx-3 my-3 productflex"
        style={{ width: "30 rem" }}
      >
        <div className="row g-0 item-card">
          <div className="col-md-4 my-auto">
            <img
              src={imgurl}
              className="img-fluid rounded-start center image"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body col-md-9">
              <h5
                className="card-title"
                contentEditable={editable}
                onBlur={edit}
                suppressContentEditableWarning={true}
              >
                {title}
              </h5>
              <p
                className="card-text"
                contentEditable={editable}
                onBlur={edit}
                suppressContentEditableWarning={true}
              >
                {description}
              </p>
              <p
                className="card-text"
                contentEditable={editable}
                onBlur={edit}
                suppressContentEditableWarning={true}
              >
                Rs.{price}
              </p>
              <p className="card-text star">{n}</p>
              <button className="mx-2 btn btn-success my-2" onClick={addtocart}>
                Add to Cart
              </button>
              <button
                className="mx-2 btn btn-warning my-2"
                onClick={(event) => {
                  edit(event)
                  handleToggleEditable(event)
                }}
              >
                {editable ? (
                  "save"
                ) : (
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                )}
              </button>
              <button className="mx-2 btn btn-danger my-2" onClick={remove}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
