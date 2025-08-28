import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../test-utils';
import Reservations from '../Reservations';

describe('Reservations Page', () => {
  test('renders hero section with correct content', () => {
    render(<Reservations />);
    
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
    expect(screen.getByText('Join us for an unforgettable Mediterranean dining experience')).toBeInTheDocument();
  });

  test('renders reservation form with all required fields', () => {
    render(<Reservations />);
    
    expect(screen.getByText('Book Your Table')).toBeInTheDocument();
    expect(screen.getByText('Reservations are held for 15 minutes past the reserved time.')).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByLabelText('First Name *')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name *')).toBeInTheDocument();
    expect(screen.getByLabelText('Email *')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number *')).toBeInTheDocument();
    expect(screen.getByLabelText('Date *')).toBeInTheDocument();
    expect(screen.getByLabelText('Time *')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests *')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByLabelText('Special Requests')).toBeInTheDocument();
  });

  test('form submission works with empty data', async () => {
    render(<Reservations />);
    
    const submitButton = screen.getByText('Confirm Reservation');
    
    // Submit empty form (component doesn't have client-side validation)
    fireEvent.click(submitButton);
    
    // Should show success message even with empty data
    await waitFor(() => {
      expect(screen.getByText('Reservation Confirmed!')).toBeInTheDocument();
    });
  });

  test('form submission works with valid data', async () => {
    render(<Reservations />);
    
    // Fill in form fields
    fireEvent.change(screen.getByLabelText('First Name *'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name *'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number *'), { target: { value: '555-123-4567' } });
    
    // Set date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    fireEvent.change(screen.getByLabelText('Date *'), { target: { value: dateString } });
    
    // Select time
    fireEvent.change(screen.getByLabelText('Time *'), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText('Number of Guests *'), { target: { value: '2' } });
    
    // Submit form
    const submitButton = screen.getByText('Confirm Reservation');
    fireEvent.click(submitButton);
    
    // Should show success message
    await waitFor(() => {
      expect(screen.getByText('Reservation Confirmed!')).toBeInTheDocument();
      expect(screen.getByText(/Thank you for choosing Little Lemon/)).toBeInTheDocument();
    });
  });

  test('renders restaurant information section', () => {
    render(<Reservations />);
    
    expect(screen.getByText('Restaurant Hours')).toBeInTheDocument();
    
    // Check restaurant hours
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument();
    expect(screen.getByText('Saturday')).toBeInTheDocument();
    expect(screen.getByText('Sunday')).toBeInTheDocument();
    
    // Check contact information
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('📍 123 Main Street, Chicago, IL 60601')).toBeInTheDocument();
    expect(screen.getByText('📞 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('✉️ reservations@littlelemon.com')).toBeInTheDocument();
  });

  test('renders reservation policies section', () => {
    render(<Reservations />);
    
    expect(screen.getByText('Reservation Policy')).toBeInTheDocument();
    
    // Check policies
    expect(screen.getByText(/Large parties \(8\+ guests\) require 24-hour notice/)).toBeInTheDocument();
    expect(screen.getByText(/Cancellations must be made 2 hours in advance/)).toBeInTheDocument();
    expect(screen.getByText(/Dress code is smart casual/)).toBeInTheDocument();
  });

  test('time slots are correctly populated', () => {
    render(<Reservations />);
    
    const timeSelect = screen.getByLabelText('Time *');
    const timeOptions = Array.from(timeSelect.options).map(option => option.value);
    
    // Should have time slots from 11:00 AM to 9:00 PM
    expect(timeOptions).toContain('11:00 AM');
    expect(timeOptions).toContain('12:00 PM');
    expect(timeOptions).toContain('1:00 PM');
    expect(timeOptions).toContain('7:00 PM');
    expect(timeOptions).toContain('8:00 PM');
    expect(timeOptions).toContain('9:00 PM');
  });

  test('guest number options are correct', () => {
    render(<Reservations />);
    
    const guestSelect = screen.getByLabelText('Number of Guests *');
    const guestOptions = Array.from(guestSelect.options).map(option => option.value);
    
    // Should have options from 1 to 10
    expect(guestOptions).toContain('1');
    expect(guestOptions).toContain('2');
    expect(guestOptions).toContain('5');
    expect(guestOptions).toContain('10');
  });

  test('occasion options are available', () => {
    render(<Reservations />);
    
    const occasionSelect = screen.getByLabelText('Occasion');
    const occasionOptions = Array.from(occasionSelect.options).map(option => option.value);
    
    expect(occasionOptions).toContain('Birthday');
    expect(occasionOptions).toContain('Anniversary');
    expect(occasionOptions).toContain('Business Dinner');
    expect(occasionOptions).toContain('Date Night');
    expect(occasionOptions).toContain('Family Celebration');
    expect(occasionOptions).toContain('Just Because');
  });

  test('form shows success message after submission', async () => {
    render(<Reservations />);
    
    // Fill in form fields
    fireEvent.change(screen.getByLabelText('First Name *'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name *'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number *'), { target: { value: '555-123-4567' } });
    
    // Set date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    fireEvent.change(screen.getByLabelText('Date *'), { target: { value: dateString } });
    
    // Select time and guests
    fireEvent.change(screen.getByLabelText('Time *'), { target: { value: '7:00 PM' } });
    fireEvent.change(screen.getByLabelText('Number of Guests *'), { target: { value: '2' } });
    
    // Submit form
    const submitButton = screen.getByText('Confirm Reservation');
    fireEvent.click(submitButton);
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Reservation Confirmed!')).toBeInTheDocument();
      expect(screen.getByText(/Thank you for choosing Little Lemon/)).toBeInTheDocument();
    });
  });

  test('renders CTA section with correct content', () => {
    render(<Reservations />);
    
    expect(screen.getByText('Questions About Your Reservation?')).toBeInTheDocument();
    expect(screen.getByText(/Our team is here to help make your dining experience perfect./)).toBeInTheDocument();
    
    // Check CTA buttons
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    expect(screen.getByText('Email Us')).toBeInTheDocument();
  });
});
