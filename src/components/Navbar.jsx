
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({cart}) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">Q</span>
        <span className="logo-text">
          Quick<span>Bite</span>
          <small>FRESH FOOD, FAST DELIVERY</small>
        </span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/cart">My Cart</NavLink>
        <NavLink to="/checkout">CheckOut</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-actions" >
        
       <Link to="/cart" className="cart-link">
        <span>🛒</span>
        <span>Cart</span>
        <span className="cart-count">
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
        </Link>
          
        <Link to="/menu" className="nav-button">
          Order Now <span>→</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
