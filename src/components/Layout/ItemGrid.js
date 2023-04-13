import React, { Fragment } from "react";

const ItemGrid = (props) => {
  return (
    <Fragment>
      <div key={props.id}>
        <div>{props.title}</div>
        <img src={props.image} alt="merch" />
        <div>${props.price}</div>
        <button>Add to Cart</button>
      </div>
    </Fragment>
  );
};

export default ItemGrid;
