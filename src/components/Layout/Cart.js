import React from 'react'

const cartElements = [
    {
        title: 'Colors',    
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]

const Cart = (props) => {
  return (
    <React.Fragment>
        <h2>Cart</h2>
        {cartElements.map((cartElement,index)=>{
            return <div key={index}>
                <div>
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>quantity</th>
                            <th>Amount</th>
                        </tr>
                        <tr>
                            <td>{cartElement.title}</td>
                            <td>{cartElement.quantity}</td>
                            <td>{cartElement.price}</td>
                            <td><button>Remove</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        })}
    </React.Fragment>
  )
}

export default Cart






