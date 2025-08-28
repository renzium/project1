import React, { useState } from 'react';
import './OrderOnline.css';
import falafel from "../images/falafel.jpg";
import bruschetta from '../images/bruschetta.webp'
import hummus from '../images/hummus.jpeg'
import lamb_kebabs from '../images/lamb-kebabs.jpeg'
import moussaka from "../images/moussaka.jpeg"
import chicken_souvlaki from '../images/chicken-souvlaki.jpeg'
import seafood_paella from '../images/seafood-paella.jpeg'
import baklava from '../images/baklava.jpeg'
import tiramisu from '../images/tiramisu.jpeg' 

const OrderOnline = () => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
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
      price: 12.99,
      description: "Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese with our house dressing.",
      image: "/images/greek-salad.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Bruschetta",
      category: "starters",
      price: 8.99,
      description: "Toasted bread topped with tomatoes, garlic, and fresh basil.",
      image: bruschetta,
      popular: false
    },
    {
      id: 3,
      name: "Hummus",
      category: "starters",
      price: 7.99,
      description: "Creamy chickpea dip served with warm pita bread and olive oil.",
      image: hummus,
      popular: false
    },
    {
      id: 4,
      name: "Falafel",
      category: "starters",
      price: 9.99,
      description: "Crispy chickpea fritters served with tahini sauce and fresh vegetables.",
      image: falafel,
      popular: false
    },

    // Main Courses
    {
      id: 5,
      name: "Grilled Salmon",
      category: "main-courses",
      price: 24.99,
      description: "Fresh Atlantic salmon grilled to perfection with Mediterranean herbs and lemon.",
      image: "/images/grilled-salmon.jpg",
      popular: true
    },
    {
      id: 6,
      name: "Lamb Kebabs",
      category: "main-courses",
      price: 22.99,
      description: "Tender lamb marinated in Mediterranean spices, grilled and served with rice.",
      image: lamb_kebabs,
      popular: false
    },
    {
      id: 7,
      name: "Vegetarian Moussaka",
      category: "main-courses",
      price: 18.99,
      description: "Layers of eggplant, potatoes, and vegetables with creamy béchamel sauce.",
      image: moussaka,
      popular: false
    },
    {
      id: 8,
      name: "Chicken Souvlaki",
      category: "main-courses",
      price: 19.99,
      description: "Marinated chicken skewers grilled and served with pita bread and tzatziki.",
      image: chicken_souvlaki,
      popular: false
    },
    {
      id: 9,
      name: "Seafood Paella",
      category: "main-courses",
      price: 26.99,
      description: "Traditional Spanish rice dish with shrimp, mussels, and saffron.",
      image: seafood_paella,
      popular: true
    },

    // Desserts
    {
      id: 10,
      name: "Lemon Dessert",
      category: "desserts",
      price: 6.99,
      description: "Homemade lemon cake with a sweet glaze and fresh berries.",
      image: "/images/lemon-dessert.jpg",
      popular: true
    },
    {
      id: 11,
      name: "Baklava",
      category: "desserts",
      price: 7.99,
      description: "Layers of phyllo dough filled with nuts and sweetened with honey.",
      image: baklava,
      popular: false
    },
    {
      id: 12,
      name: "Tiramisu",
      category: "desserts",
      price: 8.99,
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
      image: tiramisu,
      popular: false
    },

    // Beverages
    {
      id: 13,
      name: "Fresh Lemonade",
      category: "beverages",
      price: 4.99,
      description: "Homemade lemonade made with fresh lemons and a hint of mint.",
      image: "/images/lemonade.jpg",
      popular: false
    },
    {
      id: 14,
      name: "Greek Coffee",
      category: "beverages",
      price: 3.99,
      description: "Traditional Greek coffee served in a small cup with grounds.",
      image: "/images/greek-coffee.jpg",
      popular: false
    },
    {
      id: 15,
      name: "Mediterranean Tea",
      category: "beverages",
      price: 3.99,
      description: "Herbal tea blend with Mediterranean herbs and honey.",
      image: "/images/mediterranean-tea.jpg",
      popular: false
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="order-online-page">
      {/* Hero Section */}
      <section className="order-hero">
        <div className="container">
          <div className="order-hero-content">
            <h1>Order Online</h1>
            <p>Delicious Mediterranean cuisine delivered to your door</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section order-content">
        <div className="container">
          <div className="order-layout">
            {/* Menu Section */}
            <div className="menu-section">
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
                        <span className="price">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="description">{item.description}</p>
                      <button 
                        className="btn btn-primary add-to-cart-btn"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Section */}
            <div className="cart-section">
              <div className="cart-header">
                <h3>Your Order</h3>
                <span className="cart-count">{getCartItemCount()} items</span>
              </div>

              {cart.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                  <p>Add some delicious items to get started!</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-details">
                          <h4>{item.name}</h4>
                          <p className="cart-item-price">${item.price.toFixed(2)}</p>
                          <div className="quantity-controls">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="quantity-btn"
                            >
                              -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="quantity-btn"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                          aria-label="Remove item"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="cart-summary">
                    <div className="cart-total">
                      <span>Total:</span>
                      <span className="total-amount">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary checkout-btn">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section delivery-info-section">
        <div className="container">
          <h2 className="text-center mb-6">Delivery Information</h2>
          <div className="delivery-grid">
            <div className="delivery-card">
              <h3>🚚 Delivery Areas</h3>
              <p>We deliver to most areas within 10 miles of our restaurant in Chicago.</p>
              <p>Delivery time: 30-45 minutes</p>
            </div>
            <div className="delivery-card">
              <h3>💰 Delivery Fees</h3>
              <p>Standard delivery: $3.99</p>
              <p>Free delivery on orders over $50</p>
            </div>
            <div className="delivery-card">
              <h3>⏰ Delivery Hours</h3>
              <p>Monday - Friday: 11:00 AM - 9:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Hungry for More?</h2>
          <p className="mb-4">Visit our restaurant to experience the full Little Lemon atmosphere!</p>
          <div className="cta-buttons">
            <a href="/reservations" className="btn btn-primary">Make a Reservation</a>
            <a href="/menu" className="btn btn-secondary">View Full Menu</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderOnline;
