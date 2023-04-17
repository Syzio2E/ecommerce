import { Link } from "react-router-dom";
import React, { Fragment, useContext, useState, } from "react";
import "./ItemGrid.css";
import CartContext from "../Shop/cart-context";

const ItemGrid = (props) => {
  const cartCtx = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = props.title;
    const enteredPrice = props.price;
    const enteredAmount = 1;
    const enteredImage = props.image;

    const item = {
      title: enteredTitle,
      price: enteredPrice,
      amount: enteredAmount,
      image: enteredImage,
    };
    cartCtx.addItem(item);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div key={props.id}>
        <Link to={{ pathname: `/${props.id}`, state: { item: props} }}>
          <h2 style={{ color: "black" }}>{props.title ?? "No title"}</h2>
          </Link>
          <img src={props.image} alt="merch" />
          <div className="flex-container">
            <div>${props.price}</div>
            <div>
              <button className="addtocartbutton"> Add To Cart</button>
            </div>
          </div>
        </div>
      </form>
      {showModal && (
        <div className="modal">
          <p>{props.title} added to cart!</p>
        </div>
      )}
    </Fragment>
  );
};

export default ItemGrid;
