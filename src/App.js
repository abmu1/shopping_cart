import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Catalog from './components/catalog';
import Home from './components/home';
import About from './components/about';
import { useState } from 'react';
// import uniqid from 'uniqid';
import CartItem from './components/cartItem';

function App() {
  const [cart, setCart] = useState([]);

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
          <ul>
            {cart.map(item => {
              return <CartItem item={item} setCart={setCart} key={item.id}/>;
            })}
          </ul>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='catalog' element={<Catalog setCart={setCart}/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
