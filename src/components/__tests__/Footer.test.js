import React from 'react';
import { render, screen } from '../../test-utils';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders footer with restaurant information', () => {
    render(<Footer />);
    
    // Check if restaurant description is present
    expect(screen.getByText(/Little Lemon is a family-owned Mediterranean restaurant/)).toBeInTheDocument();
    
    // Check if logo is present
    const logo = screen.getByAltText('Little Lemon');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo-light.jpg');
  });

  test('renders navigation section with correct links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    
    const navigationLinks = screen.getAllByRole('link');
    const navigationTexts = navigationLinks.map(link => link.textContent);
    
    expect(navigationTexts).toContain('Home');
    expect(navigationTexts).toContain('About');
    expect(navigationTexts).toContain('Menu');
    expect(navigationTexts).toContain('Reservations');
    expect(navigationTexts).toContain('Order Online');
  });

  test('renders contact information correctly', () => {
    render(<Footer />);
    
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('📍 123 Main Street, Chicago, IL')).toBeInTheDocument();
    expect(screen.getByText('📞 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('✉️ info@littlelemon.com')).toBeInTheDocument();
  });

  test('renders restaurant hours correctly', () => {
    render(<Footer />);
    
    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Monday - Friday: 11:00 AM - 10:00 PM')).toBeInTheDocument();
    expect(screen.getByText('Saturday: 10:00 AM - 11:00 PM')).toBeInTheDocument();
    expect(screen.getByText('Sunday: 10:00 AM - 9:00 PM')).toBeInTheDocument();
  });

  test('renders social media links with correct attributes', () => {
    render(<Footer />);
    
    const githubLink = screen.getByLabelText('github');
    const linkedinLink = screen.getByLabelText('linkedin');
    const xLink = screen.getByLabelText('x');
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/renzium/project1');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/lawrence-ughonu');
    expect(xLink).toHaveAttribute('href', 'https://x.com/renzium1');
  });

  test('social media icons have correct images', () => {
    render(<Footer />);
    
    const githubIcon = screen.getByAltText('github');
    const linkedinIcon = screen.getByAltText('linkedin');
    const xIcon = screen.getByAltText('x');
    
    expect(githubIcon).toHaveAttribute('src', '/images/github.png');
    expect(linkedinIcon).toHaveAttribute('src', '/images/linkedin.png');
    expect(xIcon).toHaveAttribute('src', '/images/x.png');
  });

  test('renders copyright information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/© 2025 Little Lemon Restaurant. All rights reserved./)).toBeInTheDocument();
  });

  test('footer has correct structure and classes', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer');
    
    const container = footer.querySelector('.container');
    expect(container).toBeInTheDocument();
    
    const footerContent = footer.querySelector('.footer-content');
    expect(footerContent).toBeInTheDocument();
  });

  test('footer sections are properly organized', () => {
    render(<Footer />);
    
    const footerSections = screen.getAllByText(/Navigation|Contact|Hours/);
    expect(footerSections).toHaveLength(3);
    
    // Check if each section has a heading
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Hours')).toBeInTheDocument();
  });
});
