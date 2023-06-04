import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Catalog from './components/catalog';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Super Electronics</h1>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='catalog'>Catalog</NavLink>
        </nav>
        <div>Cart</div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='catalog' element={<Catalog/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
