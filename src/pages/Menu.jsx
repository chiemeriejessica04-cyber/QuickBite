
import { useState } from 'react';
import './Menu.css';

function Menu({addToCart}) {
  const [activeCategory, setActiveCategory] = useState('All');

  const meals = [
    {
      id: 1,
      name: 'Special Jollof Rice',
      category: 'Nigerian',
      price: 4500,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600'
    },
    {
      id: 2,
      name: 'Fried Rice & Chicken',
      category: 'Nigerian',
      price: 5500,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600'
    },
    {
      id: 3,
      name: 'Ofada Rice & Sauce',
      category: 'Nigerian',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600'
    },
    {
      id: 4,
      name: 'Egusi Soup & Eba',
      category: 'Nigerian',
      price: 6000,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'
    },
    {
      id: 5,
      name: 'Pounded Yam & Egusi',
      category: 'Nigerian',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'
    },
    {
      id: 6,
      name: 'Pepper Soup',
      category: 'Nigerian',
      price: 5500,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'
    },
    {
      id: 7,
      name: 'Grilled Chicken',
      category: 'Nigerian',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600'
    },
    {
      id: 8,
      name: 'Beans & Plantain',
      category: 'Nigerian',
      price: 4000,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600'
    },
    {
      id: 9,
      name: 'Beef Burger',
      category: 'Fast Food',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
    },
    {
      id: 10,
      name: 'Chicken Burger',
      category: 'Fast Food',
      price: 5500,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600'
    },
    {
      id: 11,
      name: 'Delicious Pizza',
      category: 'Fast Food',
      price: 7500,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600'
    },
    {
      id: 12,
      name: 'Chicken Shawarma',
      category: 'Fast Food',
      price: 4000,
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600'
    },
    {
      id: 13,
      name: 'French Fries',
      category: 'Fast Food',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600'
    },
    {
      id: 14,
      name: 'Club Sandwich',
      category: 'Fast Food',
      price: 4500,
      image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=600'
    },
    {
      id: 15,
      name: 'Chicken Wings',
      category: 'Fast Food',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600'
    },
    {
      id: 16,
      name: 'Hot Dog',
      category: 'Fast Food',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1612392062798-2dbaa5e9f7e7?w=600'
    },
    {
      id: 17,
      name: 'Chocolate Cake',
      category: 'Desserts',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600'
    },
    {
      id: 18,
      name: 'Vanilla Ice Cream',
      category: 'Desserts',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600'
    },
    {
      id: 19,
      name: 'Doughnuts',
      category: 'Desserts',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600'
    },
    {
      id: 20,
      name: 'Fruit Salad',
      category: 'Desserts',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600'
    },
    {
      id: 21,
      name: 'Fresh Orange Juice',
      category: 'Drinks',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600'
    },
    {
      id: 22,
      name: 'Strawberry Smoothie',
      category: 'Drinks',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600'
    },
    {
      id: 23,
      name: 'Milkshake',
      category: 'Drinks',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600'
    },
    {
      id: 24,
      name: 'Pineapple Juice',
      category: 'Drinks',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=600'
    }
  ];

  const categories = [
    'All',
    'Nigerian',
    'Fast Food',
    'Drinks',
    'Desserts'
  ];

  const filteredMeals =
    activeCategory === 'All'
      ? meals
      : meals.filter(meal => meal.category === activeCategory);

  

  return (
    <main className="menu-page">

      <section className="menu-header">
        <span>EXPLORE OUR FOOD</span>
        <h1>Our Delicious <span>Menu</span></h1>
        <p>
          From Nigerian favourites to tasty fast food,
          discover something delicious at QuickBite.
        </p>
      </section>

      <section className="menu-container">

        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? 'category-btn active'
                  : 'category-btn'
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredMeals.map(meal => (
            <div className="menu-card" key={meal.id}>

              <img src={meal.image} alt={meal.name} />

              <div className="menu-card-content">
                <span className="menu-category">
                  {meal.category}
                </span>

                <h3>{meal.name}</h3>

                <div className="menu-card-bottom">
                  <strong>
                    ₦{meal.price.toLocaleString('en-NG')}
                  </strong>

                  <button onClick={() => addToCart(meal)}>
                    + Add
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </main>
  );
}

export default Menu;
