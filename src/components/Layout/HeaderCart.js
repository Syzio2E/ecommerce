import React from 'react'
import './HeaderCart.css'
// import CartContext from '../Shop/cart-context'


const HeaderCart = (props) => {
// const cartCtx = useContext(CartContext);
// const items = cartCtx.items
// const totalItems = items.reduce((currNumber,item)=>{
//   return currNumber + item.amount;
// },0)
  return (
    <div>
      <div className="cartButton" onClick={props.onClick}>Cart</div>
    </div>
  )
}

export default HeaderCart
