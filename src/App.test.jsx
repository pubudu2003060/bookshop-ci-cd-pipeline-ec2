import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders BookNook homepage title', () => {
  render(<App />);
  const titleElement = screen.getByText(/BookNook/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders hero section title', () => {
  render(<App />);
  const heroTitle = screen.getByText(/Discover Your Next Favorite Book/i);
  expect(heroTitle).toBeInTheDocument();
});

// Keep existing tests above

describe('Mobile Menu Functionality', () => {
  test('mobile menu button is present', () => {
    render(<App />);
    // The menu button might be hidden on larger screens, so we query for it
    // getByRole can find hidden elements if they are still in the accessibility tree
    const menuButtons = screen.getAllByRole('button', { name: /menu/i });
    // We expect at least one menu button (the hamburger icon)
    expect(menuButtons.length).toBeGreaterThan(0); 
  });

  test('opens mobile menu on click', () => {
    render(<App />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    // Check for an element that is unique to the mobile menu, e.g., one of the category links
    // Ensure the link is specific enough to the mobile menu if it also appears elsewhere
    const mobileMenuCategoryLink = screen.getByRole('link', { name: 'Fiction' }); // Assuming 'Fiction' is a category
    expect(mobileMenuCategoryLink).toBeVisible();
  });

  test('closes mobile menu on clicking X button', () => {
    render(<App />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton); // Open the menu

    // The close button (X) should now be visible
    const closeButton = screen.getByRole('button', { name: /x/i }); 
    fireEvent.click(closeButton);

    // After closing, an element unique to the mobile menu should not be visible.
    // We need to be careful here. If elements are just hidden by CSS, they might still be in the DOM.
    // We'll query for a specific mobile menu item and expect it not to be present or not visible.
    // A robust way is to check for the absence of a container or a specific item.
    // For this example, let's assume the 'Fiction' link is a good indicator.
    // If it's always in the DOM but visibility changes, check for visibility.
    // If it's conditionally rendered, queryByText will return null.
    const mobileMenuCategoryLink = screen.queryByRole('link', { name: 'Fiction' });
    // Depending on implementation, it might be .not.toBeVisible() or .not.toBeInTheDocument()
    // If the menu items are removed from the DOM:
    // expect(mobileMenuCategoryLink).not.toBeInTheDocument(); 
    // If they are hidden by CSS:
    expect(mobileMenuCategoryLink).not.toBeVisible();
  });
});

// Keep existing tests and describe blocks above

describe('Search Input Functionality', () => {
  test('renders search input on desktop', () => {
    render(<App />);
    // Assuming the desktop search input is identifiable by its placeholder
    const desktopSearchInputs = screen.getAllByPlaceholderText('Search books...');
    // Filter for visible inputs if necessary, as one might be for mobile and hidden
    const visibleDesktopSearchInput = desktopSearchInputs.find(input => input.offsetParent !== null);
    expect(visibleDesktopSearchInput).toBeInTheDocument();
  });

  test('allows typing in desktop search input', () => {
    render(<App />);
    const desktopSearchInputs = screen.getAllByPlaceholderText('Search books...');
    const visibleDesktopSearchInput = desktopSearchInputs.find(input => input.offsetParent !== null);
    fireEvent.change(visibleDesktopSearchInput, { target: { value: 'The Great Gatsby' } });
    expect(visibleDesktopSearchInput.value).toBe('The Great Gatsby');
  });

  test('renders search input in mobile menu when open', () => {
    render(<App />);
    // Open the mobile menu first
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);

    // Now the mobile search input should be present
    // It might also have the placeholder 'Search books...'
    const mobileSearchInputs = screen.getAllByPlaceholderText('Search books...');
    // Find the one that is visible (which should be the one in the mobile menu)
    const visibleMobileSearchInput = mobileSearchInputs.find(input => input.offsetParent !== null && input.closest('.md\\:hidden'));
    expect(visibleMobileSearchInput).toBeInTheDocument();
  });

  test('allows typing in mobile search input', () => {
    render(<App />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton); // Open the menu

    const mobileSearchInputs = screen.getAllByPlaceholderText('Search books...');
    const visibleMobileSearchInput = mobileSearchInputs.find(input => input.offsetParent !== null && input.closest('.md\\:hidden'));
    
    fireEvent.change(visibleMobileSearchInput, { target: { value: 'To Kill a Mockingbird' } });
    expect(visibleMobileSearchInput.value).toBe('To Kill a Mockingbird');
  });
});

// Keep existing tests and describe blocks above

describe('Dynamic Content Rendering', () => {
  test('renders "Featured Books" section title and books', () => {
    render(<App />);
    expect(screen.getByText('Featured Books')).toBeInTheDocument();
    
    // Check for the presence of book items. Assuming there are 4 featured books.
    // This test can be made more robust by checking for specific book titles if they are static.
    const bookTitles = ["The Midnight Library", "Educated", "The Song of Achilles", "Project Hail Mary"];
    bookTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
    // Verify the number of "Add to Cart" buttons for featured books
    const addToCartButtons = screen.getAllByRole('button', { name: /Add to Cart/i });
    // There's one "Add to Cart" per featured book
    expect(addToCartButtons.length).toBe(bookTitles.length);
  });

  test('renders "Browse by Category" section title and categories', () => {
    render(<App />);
    expect(screen.getByText('Browse by Category')).toBeInTheDocument();
    
    const categories = ["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance", "Biography", "History", "Children's"];
    categories.forEach(category => {
      // Categories are links in this component
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument();
    });
  });

  test('renders "What Our Readers Say" section title and testimonials', () => {
    render(<App />);
    expect(screen.getByText('What Our Readers Say')).toBeInTheDocument();
    
    // Check for testimonial texts.
    const testimonialTexts = [
      "BookNook has the best selection of books I've found anywhere. Their staff recommendations never disappoint!",
      "I love the cozy atmosphere and how easy it is to discover new authors. My go-to bookshop for years now."
    ];
    testimonialTexts.forEach(text => {
      expect(screen.getByText(`"${text}"`)).toBeInTheDocument(); // Note the quotes in the text
    });
  });
});
