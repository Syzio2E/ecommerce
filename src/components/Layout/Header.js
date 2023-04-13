import React from "react";
import './Header.css'

const Header = () => {
  return (
    <React.Fragment>
    <div className="wrapper">
      <a href="/home">Home</a>
      <a href="/home">Store</a>
      <a href="/home">About</a>
      <a href="/home">Cart</a>
    </div>
    <div className="second-header">
        <h2>The Generics</h2>
    </div>
    </React.Fragment>
  );
};

export default Header;
