
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const meals = [
    {
      name: 'Special Jollof Rice',
      category: 'Nigerian',
      price: '₦4.5b',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600'
    },
    {
      name: 'Classic Beef Burger',
      category: 'Fast Food',
      price: '₦5.5b',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
    },
    {
      name: 'Grilled Chicken',
      category: 'Nigerian',
      price: '₦6.5b',
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600'
    },
    {
      name: 'Delicious Pizza',
      category: 'Fast Food',
      price: '₦7.5b',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600'
    }
  ];

  return (
    <main className="home">

      <h2 className="welcome-text">
        Welcome to QuickBite!
      </h2>

      <section className="hero">
        <div className="hero-content">

          <span className="hero-tag">
            FRESHLY MADE, JUST FOR YOU
          </span>

          <h1>
            Good Food.<br />
            Great Mood.<br />
            <span>Delivered.</span>
          </h1>

          <p>
            From delicious Nigerian favourites to your favourite
            fast food, enjoy amazing meals delivered right to your door.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">
              Explore Menu →
            </Link>

            <Link to="/about" className="secondary-btn">
              Discover More
            </Link>
          </div>

          <div className="hero-note">
            <span>★ 4.9/5</span>
            <span>Fresh meals, happy customers,More money</span>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000"
            alt="Delicious freshly prepared food"
          />

          <div className="delivery-badge">
            <span>🍔</span>
            <div>
              <strong>Fresh & Tasty</strong>
              <small>Made with your money</small>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-section">

        <div className="section-heading">
          <div>
            <span className="section-tag">OUR MENU</span>
            <h2>
              Popular <span>Delights</span>
            </h2>
            <p>
              Discover meals made to satisfy your cravings.
            </p>
          </div>

          <Link to="/menu" className="view-menu">
            View Full Menu →
          </Link>
        </div>

        <div className="food-grid">
          {meals.map((meal, index) => (
            <div className="food-card" key={index}>
              <img src={meal.image} alt={meal.name} />

              <div className="food-info">
                <span className="food-category">
                  {meal.category}
                </span>

                <h3>{meal.name}</h3>

                <div className="food-bottom">
                  <strong>{meal.price}</strong>
                  <Link to="/menu" className="add-btn">
                    +
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
      
    </main>
  );
}

export default Home;
