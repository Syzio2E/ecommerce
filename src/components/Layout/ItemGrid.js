import React, { Fragment } from "react";
import './ItemGrid.css'

const ItemGrid = (props) => {
  return (
    <Fragment>
      <div key={props.id}>
        <h2>{props.title}</h2>
        <img src={props.image} alt="merch" />
        <div className="flex-container">
          <span>${props.price}</span>
          <span>
            <button>Add To Cart</button>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemGrid;
