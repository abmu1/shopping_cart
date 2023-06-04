import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => {
      return res.json();
    })
    .then(products => {
      setProducts(products);
    }
    )
  },[]);
  return (
    <div>
      <h2>Browse Catalog</h2>
      <div>
        {products.map(product => {
          return (
            <div key={uniqid()}>
              <img src={product.image} alt='product'/>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button>Add to cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Catalog;