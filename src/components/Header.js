import React from "react";
import './Header.css'

const Header = () => {
  return (
    <React.Fragment>
    <div className="wrapper">
      <div>Home</div>
      <div>Store</div>
      <div>About</div>
      <div>Cart</div>
    </div>
    <div className="second-header">
        <h2>The Generics</h2>
    </div>
    </React.Fragment>
  );
};

export default Header;
