
import './About.css';

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <span className="about-tag">GET TO KNOW US</span>
        <h1>About <span>QuickBite</span></h1>
        <p>
          Good food, great experiences and convenient delivery.
          That's what QuickBite is all about.
        </p>
      </section>

      <section className="about-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
            alt="A delicious freshly prepared meal"
          />
        </div>

        <div className="story-content">
          <span>OUR STORY</span>
          <h2>Making Every Meal Special</h2>
          <p>
            QuickBite is a food ordering and delivery platform
            designed to make getting delicious meals easier.
          </p>

          <p>
            We bring together a variety of Nigerian favourites,
            fast foods, refreshing drinks and desserts in one
            convenient place.
          </p>

          <p>
            Our aim is to make food ordering simple, enjoyable
            and convenient for everyone.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To make delicious food easily accessible through
          convenient ordering and reliable delivery.
        </p>
      </section>

      <section className="about-values">
        <h2>Why Choose QuickBite?</h2>

        <div className="values-container">
          <div className="value-card">
            <div className="value-icon">🍽️</div>
            <h3>Quality Meals</h3>
            <p>
              A variety of delicious meals to satisfy your cravings.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🚚</div>
            <h3>Convenience</h3>
            <p>
              Order your favourite meals from one convenient platform.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Customer Care</h3>
            <p>
              We aim to make every customer's experience enjoyable.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
