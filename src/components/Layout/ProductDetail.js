import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Shop/cart-context";
import { useLocation } from "react-router-dom";


const ProductDetail = (props) => {
  const location = useLocation();
  const cartCtx = useContext(CartContext);
  const item = location.state?.item;
  console.log(item)
  
  const addToCartHandler = () => {
    if (!item) return; 
    const newItem = {
      title: item.title,
      price: item.price,
      amount: 1,
      image: item.image,
    };
    cartCtx.addItem(newItem);
  };

  if (!item) return <div>No item found</div>; // check if item is defined

  return (
    <div key={item.id}>
      <h2 style={{ color: "black" }}>{item.title}</h2>
      <img src={item.image} alt="merch" />
      <div className="flex-container">
        <div>${item.price}</div>
        <div>
          <button className="addtocartbutton" onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
      <Link to="/">Back to all products</Link>
    </div>
  );
};

export default ProductDetail;