import React from 'react';
import { render, screen } from '../../test-utils';
import Home from '../Home';

describe('Home Page', () => {
  test('renders hero section with correct content', () => {
    render(<Home />);
    
    // Check hero section content
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
    expect(screen.getByText(/We are a family owned Mediterranean restaurant/)).toBeInTheDocument();
    
    // Check hero buttons
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
    expect(screen.getByText('Order Online')).toBeInTheDocument();
  });

  test('renders weekly specials section', () => {
    render(<Home />);
    
    expect(screen.getByText("This Week's Specials!")).toBeInTheDocument();
    expect(screen.getByText('Online Menu')).toBeInTheDocument();
    
    // Check if special items are rendered
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Bruschetta')).toBeInTheDocument();
    expect(screen.getByText('Lemon Dessert')).toBeInTheDocument();
  });

  test('renders special items with correct information', () => {
    render(<Home />);
    
    // Check Greek Salad
    const greekSalad = screen.getByText('Greek Salad').closest('.special-card');
    expect(greekSalad).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();
    expect(screen.getByText(/Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese/)).toBeInTheDocument();
    
    // Check Bruschetta
    const bruschetta = screen.getByText('Bruschetta').closest('.special-card');
    expect(bruschetta).toBeInTheDocument();
    expect(screen.getByText('$8.99')).toBeInTheDocument();
    expect(screen.getByText(/Toasted bread topped with tomatoes, garlic, and fresh basil/)).toBeInTheDocument();
    
    // Check Lemon Dessert
    const lemonDessert = screen.getByText('Lemon Dessert').closest('.special-card');
    expect(lemonDessert).toBeInTheDocument();
    expect(screen.getByText('$6.99')).toBeInTheDocument();
    expect(screen.getByText(/Homemade lemon cake with a sweet glaze and fresh berries/)).toBeInTheDocument();
  });

  test('renders about section with correct content', () => {
    render(<Home />);
    
    expect(screen.getByText('About Little Lemon')).toBeInTheDocument();
    expect(screen.getByText(/Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant/)).toBeInTheDocument();
    expect(screen.getByText(/The chefs draw inspiration from Italian, Greek, and Turkish culture/)).toBeInTheDocument();
    expect(screen.getByText(/The restaurant has a rustic and relaxed atmosphere/)).toBeInTheDocument();
    
    // Check Learn More button
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  test('renders about section images', () => {
    render(<Home />);
    
    const restaurantInterior = screen.getByAltText('Restaurant interior');
    const chefCooking = screen.getByAltText('Chef cooking');
    
    expect(restaurantInterior).toBeInTheDocument();
    expect(chefCooking).toBeInTheDocument();
    
    expect(restaurantInterior).toHaveAttribute('src', '/images/restaurant-1.jpg');
    expect(chefCooking).toHaveAttribute('src', '/images/about-hero.jpg');
  });

  test('renders testimonials section', () => {
    render(<Home />);
    
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
    
    // Check if testimonials are rendered (with dash prefix)
    expect(screen.getByText('- Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('- Michael Chen')).toBeInTheDocument();
    expect(screen.getByText('- Emily Rodriguez')).toBeInTheDocument();
  });

  test('renders testimonials with correct content', () => {
    render(<Home />);
    
    // Check Sarah's testimonial
    expect(screen.getByText(/The best Mediterranean food I've ever had! The atmosphere is perfect for family dinners./)).toBeInTheDocument();
    
    // Check Michael's testimonial
    expect(screen.getByText(/Amazing flavors and fresh ingredients. The Greek salad is absolutely delicious!/)).toBeInTheDocument();
    
    // Check Emily's testimonial
    expect(screen.getByText(/Great service and authentic Mediterranean cuisine. Highly recommend!/)).toBeInTheDocument();
  });

  test('renders final CTA section', () => {
    render(<Home />);
    
    expect(screen.getByText('Ready to Experience Mediterranean Cuisine?')).toBeInTheDocument();
    expect(screen.getByText(/Join us for an unforgettable dining experience with authentic flavors and warm hospitality./)).toBeInTheDocument();
    
    // Check CTA buttons
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
    expect(screen.getByText('View Menu')).toBeInTheDocument();
  });

  test('renders star ratings correctly', () => {
    render(<Home />);
    
    // Check if star ratings are displayed (5 stars for each testimonial)
    const starRatings = screen.getAllByText('⭐⭐⭐⭐⭐');
    expect(starRatings).toHaveLength(3);
  });

  test('renders special images with correct attributes', () => {
    render(<Home />);
    
    const greekSaladImage = screen.getByAltText('Greek Salad');
    const bruschettaImage = screen.getByAltText('Bruschetta');
    const lemonDessertImage = screen.getByAltText('Lemon Dessert');
    
    expect(greekSaladImage).toHaveAttribute('src', '/images/greek-salad.jpg');
    expect(bruschettaImage).toHaveAttribute('src', '/images/bruschetta.jpg');
    expect(lemonDessertImage).toHaveAttribute('src', '/images/lemon-dessert.jpg');
  });

  test('renders order buttons for specials', () => {
    render(<Home />);
    
    const orderButtons = screen.getAllByText('Order Now');
    expect(orderButtons).toHaveLength(3);
    
    // Check if each button links to order online
    orderButtons.forEach(button => {
      expect(button.closest('a')).toHaveAttribute('href', '/order-online');
    });
  });
});
