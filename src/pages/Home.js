import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import lemon_dessert from '../images/lemon-dessert.jpg';
import brushetta from '../images/bruschetta.webp';
import greek_salad from '../images/greek-salad.jpg';
import restaurant_1 from '../images/restaurant-1.jpg';
import restaurant_2 from '../images/about-hero.jpg';

const Home = () => {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese with our house dressing.",
      image:greek_salad
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$8.99",
      description: "Toasted bread topped with tomatoes, garlic, and fresh basil.",
      image: brushetta
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$6.99",
      description: "Homemade lemon cake with a sweet glaze and fresh berries.",
      image:lemon_dessert
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "The best Mediterranean food I've ever had! The atmosphere is perfect for family dinners."
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Amazing flavors and fresh ingredients. The Greek salad is absolutely delicious!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Great service and authentic Mediterranean cuisine. Highly recommend!"
    }
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <div className="hero-buttons">
            <Link to="/reservations" className="btn btn-primary">Reserve a Table</Link>
            <Link to="/order-online" className="btn btn-secondary">Order Online</Link>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="section">
        <div className="container">
          <div className="specials-header">
            <h2>This Week's Specials!</h2>
            <Link to="/menu" className="btn btn-primary">Online Menu</Link>
          </div>
          <div className="grid-3">
            {specials.map((special) => (
              <div key={special.id} className="card special-card">
                <img src={special.image} alt={special.name} />
                <div className="special-content">
                  <div className="special-header">
                    <h3>{special.name}</h3>
                    <span className="price">{special.price}</span>
                  </div>
                  <p>{special.description}</p>
                  <Link to="/order-online" className="btn btn-secondary">Order Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="grid-2">
            <div className="about-content">
              <h2>About Little Lemon</h2>
              <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <p>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.</p>
              <p>The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="about-images">
              <div className="image-stack">
                <img src={restaurant_1} alt="Restaurant interior" className="image-1" />
                <img src={restaurant_2} alt="Chef cooking" className="image-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="text-center mb-6">What Our Customers Say</h2>
          <div className="grid-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card testimonial-card">
                <div className="rating">{renderStars(testimonial.rating)}</div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <h4 className="testimonial-name">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Experience Mediterranean Cuisine?</h2>
          <p className="mb-4">Join us for an unforgettable dining experience with authentic flavors and warm hospitality.</p>
          <div className="cta-buttons">
            <Link to="/reservations" className="btn btn-primary">Make a Reservation</Link>
            <Link to="/menu" className="btn btn-secondary">View Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
