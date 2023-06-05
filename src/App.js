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
  }

  return (
    <div className="App">
      <header>
        <h1>Super Electronics</h1>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='catalog'>Catalog</NavLink>
        </nav>
        <div>
          <h2>Cart</h2>
          <ul className='cart-view'>
            {cart.map(item => {
              return <CartItem item={item} setCart={setCart} key={item.id}/>;
            })}
          </ul>
          <br/>
          <span>Total Price: ${cartTotal()}</span>
          <br/>
          <span>Number Of Items: {cartLength()}</span>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='catalog' element={<Catalog setCart={setCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
