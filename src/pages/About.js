import React from 'react';
import './About.css';
import restaurant_exterior from '../images/restaurant-story.jpg';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mario Adnet",
      role: "Head Chef & Owner",
      bio: "With over 20 years of culinary experience, Mario brings authentic Mediterranean flavors to every dish.",
      image: "/images/chef-mario.jpg"
    },
    {
      id: 2,
      name: "Adrian Adnet",
      role: "Restaurant Manager & Owner",
      bio: "Adrian ensures every guest experiences the warm hospitality that makes Little Lemon special.",
      image: "/images/manager-adrian.jpg"
    }
  ];

  const values = [
    {
      id: 1,
      title: "Authenticity",
      description: "We stay true to traditional Mediterranean recipes while adding our own creative twist.",
      icon: "🍋"
    },
    {
      id: 2,
      title: "Quality",
      description: "Only the finest, freshest ingredients make it to your plate.",
      icon: "✨"
    },
    {
      id: 3,
      title: "Community",
      description: "We're proud to be part of the Chicago community and welcome everyone like family.",
      icon: "🤝"
    },
    {
      id: 4,
      title: "Innovation",
      description: "We constantly explore new ways to enhance traditional Mediterranean cuisine.",
      icon: "🌟"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Our Story</h1>
            <p>Discover the passion and tradition behind Little Lemon</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="story-content">
              <h2>The Little Lemon Story</h2>
              <p>Founded in 2010 by brothers Mario and Adrian Adnet, Little Lemon began as a small family restaurant with big dreams. Growing up in a Mediterranean household, the brothers learned the art of cooking from their grandmother, who passed down generations of traditional recipes.</p>
              <p>What started as a humble kitchen serving authentic Mediterranean dishes to friends and family has grown into one of Chicago's most beloved restaurants. Our commitment to quality ingredients, traditional cooking methods, and warm hospitality has remained unchanged.</p>
              <p>Today, Little Lemon continues to serve the community with the same passion and dedication that inspired us to open our doors over a decade ago.</p>
            </div>
            <div className="story-image">
              <img src={restaurant_exterior} alt="Little Lemon restaurant exterior" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="text-center mb-6">Meet Our Team</h2>
          <div className="grid-2">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="text-center mb-6">Our Values</h2>
          <div className="grid-4">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Info Section */}
      <section className="section restaurant-info-section">
        <div className="container">
          <div className="grid-2">
            <div className="info-content">
              <h2>Visit Us</h2>
              <div className="info-item">
                <h4>📍 Location</h4>
                <p>123 Main Street<br />Chicago, IL 60601</p>
              </div>
              <div className="info-item">
                <h4>🕒 Hours</h4>
                <p>Monday - Friday: 11:00 AM - 10:00 PM<br />
                Saturday: 10:00 AM - 11:00 PM<br />
                Sunday: 10:00 AM - 9:00 PM</p>
              </div>
              <div className="info-item">
                <h4>📞 Contact</h4>
                <p>Phone: (555) 123-4567<br />
                Email: info@littlelemon.com</p>
              </div>
            </div>
            <div className="info-image">
              <img src="/images/restaurant-interior.jpg" alt="Restaurant interior" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Experience Our Hospitality</h2>
          <p className="mb-4">Join us for an authentic Mediterranean dining experience that will transport you to the shores of the Mediterranean Sea.</p>
          <div className="cta-buttons">
            <a href="/reservations" className="btn btn-primary">Make a Reservation</a>
            <a href="/menu" className="btn btn-secondary">View Our Menu</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
