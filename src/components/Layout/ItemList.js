import React from 'react'
import ItemGrid from './ItemGrid'
import './itemList.css'


const products = [
{
id: 1,
title: "Colors",
price: 100,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
},
{
    id:2,
title: "Black and white Colors",
price: 50,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
},
{
id: 3,
title: "Yellow and Black Colors",
price: 70,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
},
{
id: 4,
title: "Blue Color",
price: 100,
imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
},
];

const ItemList = () => {
return (
<div className='item-grid'>
<h1>Music</h1>
<div className='grid-container'>
{products.map((product, id) => (
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
{products.map((product, id) => (
<ItemGrid className='items'
         key={product.id}
         title={product.title}
         price={product.price}
         image={product.imageUrl}
       />
))}
</div>
<button>See The Cart</button>
</div>
)
}

export default ItemList