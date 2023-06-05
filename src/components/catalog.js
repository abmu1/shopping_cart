import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function Catalog({setCart}) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');

  const changeCategory = (e) => {
    setCategory(e.currentTarget.value);
  };

  const addToCart = (e) => {
    const id = +e.currentTarget.id;
    const product = products.filter(product => {
      return (product.id === id);
    })[0];

    setCart(prevCart => {
      let item = null;
      const newCart = prevCart.filter(prevItem => {
        if (prevItem.id === id) {
          item = {...prevItem};
          return false;
        }
        return true;
      });

      if (item) {
        item.quantity += 1;
      }
      else{
        item = {...product, quantity: 1};
      }
      newCart.push(item);
      return newCart;
    });
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => {
      return res.json();
    })
    .then(products => {
      setProducts(products);
    })
    .catch(err => {
      console.log(err)
    })
  },[]);

  return (
    <div>
      <h2>Browse Catalog</h2>
      <label>
        Choose Category
        <select onInput={changeCategory}>
          <option value='All'>All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </label>
      <div>
        {products.filter((product) => {
          return (product.category === category || (category === 'All'));;
        }).map(product => {
          return (
            <div key={uniqid()}>
              <img src={product.image} alt='product'/>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button onClick={addToCart} id={product.id}>Add to cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Catalog;