import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import Menu from '../Menu';

describe('Menu Page', () => {
  test('renders hero section with correct content', () => {
    render(<Menu />);
    
    expect(screen.getByText('Our Menu')).toBeInTheDocument();
    expect(screen.getByText('Discover authentic Mediterranean flavors crafted with passion and tradition')).toBeInTheDocument();
  });

  test('renders category filter buttons', () => {
    render(<Menu />);
    
    expect(screen.getByText('All Dishes')).toBeInTheDocument();
    expect(screen.getByText('Starters')).toBeInTheDocument();
    expect(screen.getByText('Main Courses')).toBeInTheDocument();
    expect(screen.getByText('Desserts')).toBeInTheDocument();
    expect(screen.getByText('Beverages')).toBeInTheDocument();
  });

  test('renders all menu items by default', () => {
    render(<Menu />);
    
    // Check if all menu items are displayed
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Bruschetta')).toBeInTheDocument();
    expect(screen.getByText('Hummus')).toBeInTheDocument();
    expect(screen.getByText('Falafel')).toBeInTheDocument();
    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument();
    expect(screen.getByText('Lamb Kebabs')).toBeInTheDocument();
    expect(screen.getByText('Vegetarian Moussaka')).toBeInTheDocument();
    expect(screen.getByText('Chicken Souvlaki')).toBeInTheDocument();
    expect(screen.getByText('Seafood Paella')).toBeInTheDocument();
    expect(screen.getByText('Baklava')).toBeInTheDocument();
    expect(screen.getByText('Tiramisu')).toBeInTheDocument();
  });

  test('category filtering works correctly', () => {
    render(<Menu />);
    
    // Click on Starters category
    fireEvent.click(screen.getByText('Starters'));
    
    // Should show only starter items
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Bruschetta')).toBeInTheDocument();
    expect(screen.getByText('Hummus')).toBeInTheDocument();
    expect(screen.getByText('Falafel')).toBeInTheDocument();
    
    // Should not show main course items
    expect(screen.queryByText('Grilled Salmon')).not.toBeInTheDocument();
    expect(screen.queryByText('Lamb Kebabs')).not.toBeInTheDocument();
    
    // Click on Main Courses category
    fireEvent.click(screen.getByText('Main Courses'));
    
    // Should show only main course items
    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument();
    expect(screen.getByText('Lamb Kebabs')).toBeInTheDocument();
    expect(screen.getByText('Vegetarian Moussaka')).toBeInTheDocument();
    expect(screen.getByText('Chicken Souvlaki')).toBeInTheDocument();
    expect(screen.getByText('Seafood Paella')).toBeInTheDocument();
    
    // Should not show starter items
    expect(screen.queryByText('Greek Salad')).not.toBeInTheDocument();
    expect(screen.queryByText('Bruschetta')).not.toBeInTheDocument();
  });

  test('renders menu items with correct information', () => {
    render(<Menu />);
    
    // Check Greek Salad details
    const greekSalad = screen.getByText('Greek Salad').closest('.menu-card');
    expect(greekSalad).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();
    expect(screen.getByText(/Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese with our house dressing./)).toBeInTheDocument();
    
    // Check Grilled Salmon details
    const grilledSalmon = screen.getByText('Grilled Salmon').closest('.menu-card');
    expect(grilledSalmon).toBeInTheDocument();
    expect(screen.getByText('$24.99')).toBeInTheDocument();
    expect(screen.getByText(/Fresh Atlantic salmon grilled to perfection with Mediterranean herbs and lemon./)).toBeInTheDocument();
  });

  test('displays popular badges correctly', () => {
    render(<Menu />);
    
    const popularBadges = screen.getAllByText('Popular');
    expect(popularBadges).toHaveLength(4); // Greek Salad, Grilled Salmon, Seafood Paella, Lemon Dessert
    
    // Check if popular items have the popular class
    const greekSalad = screen.getByText('Greek Salad').closest('.menu-card');
    const grilledSalmon = screen.getByText('Grilled Salmon').closest('.menu-card');
    const seafoodPaella = screen.getByText('Seafood Paella').closest('.menu-card');
    
    expect(greekSalad).toHaveClass('popular');
    expect(grilledSalmon).toHaveClass('popular');
    expect(seafoodPaella).toHaveClass('popular');
  });

  test('renders menu item images correctly', () => {
    render(<Menu />);
    
    const greekSaladImage = screen.getByAltText('Greek Salad');
    const bruschettaImage = screen.getByAltText('Bruschetta');
    const grilledSalmonImage = screen.getByAltText('Grilled Salmon');
    
    expect(greekSaladImage).toHaveAttribute('src', '/images/greek-salad.jpg');
    expect(bruschettaImage).toHaveAttribute('src', '/images/bruschetta.jpg');
    expect(grilledSalmonImage).toHaveAttribute('src', '/images/grilled-salmon.jpg');
  });

  test('renders special offers section', () => {
    render(<Menu />);
    
    expect(screen.getByText('Special Offers')).toBeInTheDocument();
    
    // Check special offer cards
    expect(screen.getByText('Lunch Special')).toBeInTheDocument();
    expect(screen.getByText('20% off all main courses Monday-Friday, 11:00 AM - 3:00 PM')).toBeInTheDocument();
    
    expect(screen.getByText('Family Dinner')).toBeInTheDocument();
    expect(screen.getByText('Free dessert with any family meal order over $50')).toBeInTheDocument();
    
    expect(screen.getByText('Happy Hour')).toBeInTheDocument();
    expect(screen.getByText('50% off all beverages and appetizers, 4:00 PM - 6:00 PM')).toBeInTheDocument();
  });

  test('renders CTA section with correct content', () => {
    render(<Menu />);
    
    expect(screen.getByText('Ready to Order?')).toBeInTheDocument();
    expect(screen.getByText(/Experience our authentic Mediterranean cuisine delivered to your door or enjoy it in our warm, welcoming atmosphere./)).toBeInTheDocument();
    
    // Check CTA buttons
    expect(screen.getByText('Order Online')).toBeInTheDocument();
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
  });

  test('renders order buttons for menu items', () => {
    render(<Menu />);
    
    const orderButtons = screen.getAllByText('Order Now');
    expect(orderButtons.length).toBeGreaterThan(0);
    
    // Check if each button is present
    orderButtons.forEach(button => {
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('btn', 'btn-primary');
    });
  });

  test('category buttons have correct styling when active', () => {
    render(<Menu />);
    
    // Initially, "All Dishes" should be active
    const allDishesButton = screen.getByText('All Dishes');
    expect(allDishesButton).toHaveClass('active');
    
    // Click on Starters
    fireEvent.click(screen.getByText('Starters'));
    
    // Starters should now be active, All Dishes should not
    expect(screen.getByText('Starters')).toHaveClass('active');
    expect(allDishesButton).not.toHaveClass('active');
  });
});
