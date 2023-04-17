import React from 'react'
import ItemGrid from './ItemGrid'
import './itemList.css'



const products = [
{
id: 1,
title: "Album 1",
price: 100,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
},
{
    id:2,
title: "Album 2",
price: 50,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
},
{
id: 3,
title: "Album 3",
price: 70,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
},
{
id: 4,
title: "Album 4",
price: 100,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
},
];

const ItemList = (props) => {
return (
  <React.Fragment>
<div className='item-grid'>
<h1>Music</h1>
<div className='grid-container'>
{products.map((product) => (
<ItemGrid className='items'
         key={product.id}
         title={product.title}
         price={product.price}
         image={product.imageUrl}
       />
))}
</div>
<h1>Merch</h1>
<div className='grid-container'>
{products.map((product) => (
<ItemGrid className='items'
         key={product.id}
         title={product.title}
         price={product.price}
         image={product.imageUrl}
       />
))}
</div>
</div>
</React.Fragment>
)
}

export default ItemList