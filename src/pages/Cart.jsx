
import './Cart.css';
import { Link } from 'react-router-dom';
function Cart({ cart, setCart }) {

  const increaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(currentCart =>
      currentCart.filter(item => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">

      <section className="cart-header">
        <span>YOUR ORDER</span>
        <h1>My <span>Cart</span></h1>
        <p>Review your delicious selections.</p>
      </section>

      <section className="cart-container">

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>You haven't added any meals yet.</p>
            <a href="/menu" className="continue-shopping">
              Explore Menu →
            </a>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>

                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <span>{item.category}</span>
                    <strong>
                      ₦{item.price.toLocaleString('en-NG')}
                    </strong>
                  </div>

                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>

                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className="summary-row total-row">
                <strong>Total</strong>
                <strong>
                  ₦{total.toLocaleString('en-NG')}
                </strong>
              </div>

              <Link to="/checkout" className="checkout-btn">
                     Proceed to Checkout →
                        </Link>
            </div>
          </>
        )}

      </section>
    </main>
  );
}

export default Cart;
