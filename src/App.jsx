
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart((currentCart) => {
      const existingMeal = currentCart.find(
        item => item.id === meal.id
      );

      if (existingMeal) {
        return currentCart.map(item =>
          item.id === meal.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...meal, quantity: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
