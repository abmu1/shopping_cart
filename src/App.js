import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Catalog from './components/catalog';
import Home from './components/home';
import { useState } from 'react';
import CartItem from './components/cartItem';

function App() {
  const [cart, setCart] = useState([]);

  const cartTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity * item.price;
    });
    return Math.floor(total * 100) / 100;
  };

  const cartLength = () => {
    let sum = 0;
    cart.forEach(item => {
      sum += item.quantity;
    });
    return sum
  };

  const showCart = () => {
    const cart = document.getElementById('cart');
    
    const backDrop = document.getElementById('cart-backdrop');
    backDrop.style.display = 'block';
    setTimeout(() => {
      backDrop.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      cart.style.right = '0px';
    }, 1);
  };

  const hideCart = (e) => {
    const cart = document.getElementById('cart');
    cart.style.right = -cart.offsetWidth - 10 + 'px';

    const backDrop = document.getElementById('cart-backdrop');
    backDrop.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    setTimeout(() => {
      backDrop.style.display = 'none';
    }, 1000);
  }

  const toggle = (e) => {
    e.currentTarget.classList.toggle('getting-clicked');
  };
  return (
    <div className="App">
      <header>
        <h1 id='shop-name'>Electronics Shop</h1>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='catalog'>Products</NavLink>
          <div onClick={showCart} id='cart-icon' onMouseDown={toggle} onMouseUp={toggle}>
            <img src='./svgs/shopping_cart.svg' alt='show cart'/>
            <span className='quantity-count'>{cartLength()}</span>
          </div>
        </nav>
      </header>
    <div id='cart-backdrop' style={{display:'none'}} onClick={hideCart}>
      <div id='cart' onClick={(e) => {e.stopPropagation()}}>
        <div className='cart-top'>
          <h2>Cart</h2>
          <div onClick={hideCart} onMouseDown={toggle} onMouseUp={toggle}>
            <img src='./svgs/close.svg' alt='close cart'/>
          </div>
        </div>
          <div className='cart-view'>
            {cart.length === 0 ? <p>Your cart is empty.</p> : 
              cart.map(item => {
                return <CartItem item={item} setCart={setCart} key={item.id}/>;
              })
              }
          </div>
        <div className='total-price'>
          <span>Total: </span> <span>${cartTotal()}</span>
        </div>
      </div>
    </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='catalog' element={<Catalog setCart={setCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
