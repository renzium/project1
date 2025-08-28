import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Custom render function that includes router context
const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };

// Common test data
export const mockMenuItems = [
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
  }
];

export const mockTestimonials = [
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
  }
];

export const mockTeamMembers = [
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
