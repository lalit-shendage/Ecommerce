import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/itemActions";

const ItemForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stars, setStars] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [showAlert]);

  // creating new item to update database
  const handleSubmit = (e) => {
    const timestamp = Date.now();
    console.log(timestamp);
    e.preventDefault();
    const newItem = {
      title: title,
      price: price,
      stars: stars,
      imgurl: imgurl,
      description: description,
      id: timestamp,
    };
    dispatch(addItem(newItem));
    setTitle("");
    setPrice("");
    setStars("");
    setImgurl("");
    setDescription("");
    console.log(newItem);
    alert("new item is added to database");
    setShowAlert(true);
  };

  return (
    <div className="container my-5 itemform">
      <form action="#" method="POST">
        <div className="form-row d-flex flex-wrap">
          <div className="col-md-4 mb-3 mx-3">
            <label htmlFor="Title">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              id="Title"
              placeholder="Title"
              required
            />
          </div>

          <div className="col-md-4 mb-3 mx-3">
            <label htmlFor="Price">Price</label>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                min="0"
                className="form-control"
                id="Price"
                placeholder="Price"
                required
              />
            </div>
          </div>
          <div className="col-md-4 mb-3 mx-3">
            <label htmlFor="imgurl">Image url</label>
            <input
              value={imgurl}
              onChange={(e) => setImgurl(e.target.value)}
              type="url"
              className="form-control"
              id="imgurl"
              placeholder="Image url"
              required
            />
          </div>

          <div className="col-md-4 mb-3 mx-3">
            <label htmlFor="city">Stars</label>
            <input
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              type="number"
              min="1"
              max="5"
              className="form-control"
              id="stars"
              placeholder="stars"
              required
            />
          </div>

          <div className="col-md-4 mb-3 mx-3">
            <label htmlFor="Description">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              type="text"
              className="form-control "
              id="Description"
              placeholder="Description "
            />
          </div>
        </div>
        <div className="text-center ">
          <button
            type="submit btn btn-primary w-25 submit"
            onClick={handleSubmit}
          >
            Add item
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
