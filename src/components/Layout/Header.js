import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
    <div className="wrapper">
      <Link to="/home">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/about">About</Link>
      <a href="/cart">Cart</a>
    </div>
    <div className="second-header">
        <h2>The Generics</h2>
    </div>
    </React.Fragment>
  );
};

export default Header;
