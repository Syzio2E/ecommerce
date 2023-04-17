import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderCart from "./HeaderCart";
import CartProvider from "../Shop/CartProvider";
import { useContext } from "react";
import AuthContext from "../Shop/auth-context";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const navigateto = useNavigate()
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = ()=>{
    authCtx.logout()
    navigateto('/')
  }
  return (
    <CartProvider>
      <div className="wrapper">
        <Link to="/home">Home</Link>
        {isLoggedIn && <Link to="/store">Store</Link>}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact US</Link>
        {!isLoggedIn && <Link to="/">Login</Link>}
        {isLoggedIn && <button style={{backgroundColor: 'black', color: 'white'}} onClick={logoutHandler}>Logout</button>}
        <HeaderCart onClick={props.onShowCart} />
      </div>
      <div className="second-header">
        <h2>The Generics</h2>
      </div>
    </CartProvider>
  );
};

export default Header;
