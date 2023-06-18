import React, { useState } from 'react';
import products from './customObjects';

function Catalog({setCart}) {
  const [category, setCategory] = useState('all');
  const [brand, setBrand] = useState('all');

  const changeCategory = (e) => {
    setCategory(e.currentTarget.value);
  };

  const changeBrand = (e) => {
    setBrand(e.currentTarget.value);
  };

  const showFilters = (e) => {
    e.stopPropagation();
    document.getElementById('filter').style.display = 'block';
    document.getElementById('filter-icon').style.display = 'none';
  };

  const hideFilter = () => {
    document.getElementById('filter').style.display = 'none';
    document.getElementById('filter-icon').style.display = 'flex';
  }

  const toggle = (e) => {
    e.currentTarget.classList.toggle('getting-clicked');
  };

  const addToCart = (e) => {
    const id = e.currentTarget.id;
    const product = products.filter(product => {
      return (product.id === id);
    })[0];
    setCart((prevCart) => {
      let neww = true;
      const newCart = [];
      prevCart.forEach(prevItem => {
        let item = {...prevItem};
        if (item.id === id) {
          item.quantity += 1;
          neww = false;
        }
        newCart.push(item);
      });
      if (neww) {
        newCart.push({...product, quantity: 1})
      }
      return newCart;
    });
  };

  return (
    <div className='catalog' onClick={hideFilter}>
      <div className='catalog-top'>
        <h2>Browse Catalog</h2>
        <div onClick={showFilters} id='filter-icon' onMouseDown={toggle} onMouseUp={toggle}>
          <span>Filter</span>
          <img src='./svgs/filter.svg' alt='filter'/>
        </div>
        <div id='filter' style={{display: 'none'}} onClick={(e) => {e.stopPropagation()}}>
          <div>
            <span>
              Category
            </span>
            <select onChange={changeCategory}>
              <option value='all'>All</option>
              <option value="phones">Phones</option>
              <option value="tablets">Tablets</option>
              <option value="laptops">Laptops</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div>
            <span>
              Brand
            </span>
            <select onChange={changeBrand}>
              <option value='all'>All</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="google">Google</option>
            </select>
          </div>
        </div>
      </div>
      <div className='products-view'>
        {products.filter((product) => {
          return (product.category === category || (category === 'all')) && 
          (product.brand === brand || brand === 'all');
        }).map(product => {
          return (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt='product' className='product-image'/>
              <p className='product-title'>{product.title}</p>
              <p className='product-price'>${product.price}</p>
              <button onClick={addToCart} id={product.id} className='add-product'>Add to cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Catalog;