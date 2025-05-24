// src/App.test.js
// If you haven't already, you might need to install testing libraries:
// npm install --save-dev jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react
// You might also need a jest.config.js and babel.config.js if not using Create React App.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers like .toBeInTheDocument()
import BookshopHomepage from './App'; // Assuming default export from App.jsx

// Mock lucide-react icons to prevent issues in test environment
jest.mock('lucide-react', () => ({
  Search: () => <svg data-testid="search-icon" />,
  ShoppingCart: () => <svg data-testid="cart-icon" />,
  Menu: () => <svg data-testid="menu-icon" />,
  X: () => <svg data-testid="x-icon" />,
  ChevronRight: () => <svg data-testid="chevron-right-icon" />,
  Heart: () => <svg data-testid="heart-icon" />,
  Star: () => <svg data-testid="star-icon" />,
  ArrowRight: () => <svg data-testid="arrow-right-icon" />,
}));

// Mock image assets
jest.mock('./assets/tml.jpeg', () => 'tml.jpeg');
jest.mock('./assets/e.jpeg', () => 'e.jpeg');
jest.mock('./assets/tsoa.jpg', () => 'tsoa.jpg');
jest.mock('./assets/phm.jpg', () => 'phm.jpg');
jest.mock('./assets/bc.jpg', () => 'bc.jpg');


describe('BookshopHomepage', () => {
  test('renders BookNook title', () => {
    render(<BookshopHomepage />);
    const titleElement = screen.getByText(/BookNook/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders hero section title', () => {
    render(<BookshopHomepage />);
    const heroTitle = screen.getByText(/Discover Your Next Favorite Book/i);
    expect(heroTitle).toBeInTheDocument();
  });

  test('renders featured books section title', () => {
    render(<BookshopHomepage />);
    const featuredBooksTitle = screen.getByRole('heading', { name: /Featured Books/i });
    expect(featuredBooksTitle).toBeInTheDocument();
  });

  test('renders categories section title', () => {
    render(<BookshopHomepage />);
    const categoriesTitle = screen.getByRole('heading', { name: /Browse by Category/i });
    expect(categoriesTitle).toBeInTheDocument();
  });

  test('renders testimonials section title', () => {
    render(<BookshopHomepage />);
    const testimonialsTitle = screen.getByRole('heading', { name: /What Our Readers Say/i });
    expect(testimonialsTitle).toBeInTheDocument();
  });

  test('renders newsletter section title', () => {
    render(<BookshopHomepage />);
    const newsletterTitle = screen.getByRole('heading', { name: /Join Our Newsletter/i });
    expect(newsletterTitle).toBeInTheDocument();
  });

  test('renders footer with copyright information', () => {
    render(<BookshopHomepage />);
    const footerText = screen.getByText(/© 2025 BookNook. All rights reserved./i);
    expect(footerText).toBeInTheDocument();
  });

  // Example test for a featured book - checks if the first book title is rendered
  // This assumes the 'featuredBooks' array is not empty and has this specific title.
  test('renders the first featured book title', () => {
    render(<BookshopHomepage />);
    const firstBookTitle = screen.getByText(/The Midnight Library/i);
    expect(firstBookTitle).toBeInTheDocument();
  });
});
