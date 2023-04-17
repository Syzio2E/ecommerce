import React from 'react'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import './Cart.css'

import CartContext from '../Shop/cart-context'


const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const hasItems = cartCtx.items.length>0
  const totalAmount = `${cartCtx.totalamount.toFixed(2)}`
  const cartItemRemoveHandler = (id)=>{
    cartCtx.removeItem(id)
  }

  
    return (
      <Modal onClose={props.onClose}>
        <div>
          <h2>Cart</h2>
          
          <table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    {cartCtx.items.map((item,id)=>(
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td><button className='removeButton' onClick={()=>cartItemRemoveHandler(item.id)}>Remove</button></td>
      </tr>
    ))}
  </tbody>
</table>
        <div className='box'>Total Amount:<span>{totalAmount}</span></div>
          {hasItems &&<button className='purchaseButton'>Purchase</button>}
          <button className="closebutton" onClick={props.onClose}>X</button>
        </div>  
      </Modal>
    )
  }


export default Cart






