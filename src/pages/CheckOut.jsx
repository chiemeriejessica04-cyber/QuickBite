
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

function Checkout({ cart, setCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);
    setCart([]);
  };

  if (orderPlaced) {
    return (
      <main className="checkout-page">
        <section className="success-message">
          <div className="success-icon">✓</div>
          <h1 
          style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:'8px',
            fontsize:'30px',
            lineHeight:'1.4',
            margin:'20px',
            width:'100%'
           }}
           >
            <span>Order Placed</span>
            <span>Successfully!</span>
           </h1>
          <p className="success-messages">
            Thank you for choosing QuickBite and giving me your money.
            Your demo order has been received.
          </p>
          <Link to="/" className="back-home-btn">
            Back to Home →
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <section className="checkout-heading">
        <span>ALMOST THERE!</span>
        <h1>Complete Your <span>Order</span></h1>
        <p>Fill in your delivery details below.</p>
      </section>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Delivery Address</label>
          <textarea
            placeholder="Enter your delivery address"
            required
          />

          <label>Additional Instructions</label>
          <textarea
            placeholder="Optional instructions"
          />

          <button
            type="submit"
            className="place-order-btn"
            disabled={cart.length === 0}
          >
            Place Demo Order →
          </button>
        </form>

        <section className="checkout-summary">
          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div className="checkout-item" key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <strong>
                  ₦{(item.price * item.quantity).toLocaleString('en-NG')}
                </strong>
              </div>
            ))
          )}

          <div className="checkout-total">
            <span>Total</span>
            <strong>
              ₦{total.toLocaleString('en-NG')}
            </strong>
          </div>

          <p className="demo-note">
            This is a demonstration checkout. No payment will be made.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Checkout;
