import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'starters', name: 'Starters' },
    { id: 'main-courses', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = [
    // Starters
    {
      id: 1,
      name: "Greek Salad",
      category: "starters",
      price: "$12.99",
      description: "Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese with our house dressing.",
      image: "/images/greek-salad.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Bruschetta",
      category: "starters",
      price: "$8.99",
      description: "Toasted bread topped with tomatoes, garlic, and fresh basil.",
      image: "/images/bruschetta.jpg",
      popular: false
    },
    {
      id: 3,
      name: "Hummus",
      category: "starters",
      price: "$7.99",
      description: "Creamy chickpea dip served with warm pita bread and olive oil.",
      image: "/images/hummus.jpg",
      popular: false
    },
    {
      id: 4,
      name: "Falafel",
      category: "starters",
      price: "$9.99",
      description: "Crispy chickpea fritters served with tahini sauce and fresh vegetables.",
      image: "/images/falafel.jpg",
      popular: false
    },

    // Main Courses
    {
      id: 5,
      name: "Grilled Salmon",
      category: "main-courses",
      price: "$24.99",
      description: "Fresh Atlantic salmon grilled to perfection with Mediterranean herbs and lemon.",
      image: "/images/grilled-salmon.jpg",
      popular: true
    },
    {
      id: 6,
      name: "Lamb Kebabs",
      category: "main-courses",
      price: "$22.99",
      description: "Tender lamb marinated in Mediterranean spices, grilled and served with rice.",
      image: "/images/lamb-kebabs.jpg",
      popular: false
    },
    {
      id: 7,
      name: "Vegetarian Moussaka",
      category: "main-courses",
      price: "$18.99",
      description: "Layers of eggplant, potatoes, and vegetables with creamy béchamel sauce.",
      image: "/images/moussaka.jpg",
      popular: false
    },
    {
      id: 8,
      name: "Chicken Souvlaki",
      category: "main-courses",
      price: "$19.99",
      description: "Marinated chicken skewers grilled and served with pita bread and tzatziki.",
      image: "/images/chicken-souvlaki.jpg",
      popular: false
    },
    {
      id: 9,
      name: "Seafood Paella",
      category: "main-courses",
      price: "$26.99",
      description: "Traditional Spanish rice dish with shrimp, mussels, and saffron.",
      image: "/images/seafood-paella.jpg",
      popular: true
    },

    // Desserts
    {
      id: 10,
      name: "Lemon Dessert",
      category: "desserts",
      price: "$6.99",
      description: "Homemade lemon cake with a sweet glaze and fresh berries.",
      image: "/images/lemon-dessert.jpg",
      popular: true
    },
    {
      id: 11,
      name: "Baklava",
      category: "desserts",
      price: "$7.99",
      description: "Layers of phyllo dough filled with nuts and sweetened with honey.",
      image: "/images/baklava.jpg",
      popular: false
    },
    {
      id: 12,
      name: "Tiramisu",
      category: "desserts",
      price: "$8.99",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
      image: "/images/tiramisu.jpg",
      popular: false
    },

    // Beverages
    {
      id: 13,
      name: "Fresh Lemonade",
      category: "beverages",
      price: "$4.99",
      description: "Homemade lemonade made with fresh lemons and a hint of mint.",
      image: "/images/lemonade.jpg",
      popular: false
    },
    {
      id: 14,
      name: "Greek Coffee",
      category: "beverages",
      price: "$3.99",
      description: "Traditional Greek coffee served in a small cup with grounds.",
      image: "/images/greek-coffee.jpg",
      popular: false
    },
    {
      id: 15,
      name: "Mediterranean Tea",
      category: "beverages",
      price: "$3.99",
      description: "Herbal tea blend with Mediterranean herbs and honey.",
      image: "/images/mediterranean-tea.jpg",
      popular: false
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero" style={{
        background: `linear-gradient(rgba(73, 94, 87, 0.8), rgba(73, 94, 87, 0.8)), url('/images/restaurant-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="menu-hero-content">
            <h1>Our Menu</h1>
            <p>Discover authentic Mediterranean flavors crafted with passion and tradition</p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section">
        <div className="container">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className={`menu-card ${item.popular ? 'popular' : ''}`}>
                {item.popular && <span className="popular-badge">Popular</span>}
                <div className="menu-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-content">
                  <div className="menu-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="description">{item.description}</p>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-items">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers */}
      <section className="section special-offers-section">
        <div className="container">
          <h2 className="text-center mb-6">Special Offers</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>Lunch Special</h3>
              <p>20% off all main courses Monday-Friday, 11:00 AM - 3:00 PM</p>
              <span className="offer-badge">Valid until 3:00 PM</span>
            </div>
            <div className="offer-card">
              <h3>Family Dinner</h3>
              <p>Free dessert with any family meal order over $50</p>
              <span className="offer-badge">Every Sunday</span>
            </div>
            <div className="offer-card">
              <h3>Happy Hour</h3>
              <p>50% off all beverages and appetizers, 4:00 PM - 6:00 PM</p>
              <span className="offer-badge">Daily 4-6 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" style={{
        background: `linear-gradient(rgba(73, 94, 87, 0.9), rgba(73, 94, 87, 0.9)), url('/images/restaurant-cta.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container text-center">
          <h2>Ready to Order?</h2>
          <p className="mb-4">Experience our authentic Mediterranean cuisine delivered to your door or enjoy it in our warm, welcoming atmosphere.</p>
          <div className="cta-buttons">
            <a href="/order-online" className="btn btn-primary">Order Online</a>
            <a href="/reservations" className="btn btn-secondary">Make a Reservation</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
