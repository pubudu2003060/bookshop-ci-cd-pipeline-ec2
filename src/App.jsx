import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronRight,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react";
import p1 from "./assets/tml.jpeg";
import p2 from "./assets/e.jpeg";
import p3 from "./assets/tsoa.jpg";
import p4 from "./assets/phm.jpg";
import p5 from "./assets/bc.jpg";

export default function BookshopHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Sci-Fi",
    "Romance",
    "Biography",
    "History",
    "Children's",
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: p1,
      price: "$18.99",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Educated",
      author: "Tara Westover",
      cover: p2,
      price: "$16.95",
      rating: 4.7,
    },
    {
      id: 3,
      title: "The Song of Achilles",
      author: "Madeline Miller",
      cover: p3,
      price: "$15.99",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: p4,
      price: "$19.99",
      rating: 4.8,
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "BookNook has the best selection of books I've found anywhere. Their staff recommendations never disappoint!",
      author: "Sarah L.",
    },
    {
      id: 2,
      text: "I love the cozy atmosphere and how easy it is to discover new authors. My go-to bookshop for years now.",
      author: "Michael T.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-indigo-700">BookHub</h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {categories.slice(0, 4).map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                  >
                    {category}
                  </a>
                ))}
                <a
                  href="#"
                  className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  More <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search books..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <button className="text-gray-500 hover:text-indigo-600">
                  <Heart className="h-6 w-6" />
                </button>
                <button className="text-gray-500 hover:text-indigo-600 relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              <div className="ml-4 md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-indigo-600 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-500 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
                >
                  {category}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4 space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search books..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-indigo-600 flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    Wishlist
                  </button>
                  <button className="text-gray-500 hover:text-indigo-600 flex items-center">
                    <ShoppingCart className="h-6 w-6 mr-2" />
                    Cart (3)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Discover Your Next Favorite Book
              </h2>
              <p className="mt-4 text-lg text-indigo-100 max-w-lg mx-auto md:mx-0">
                From bestsellers to hidden gems, find stories that will
                transport you to new worlds and perspectives.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="px-8 py-3 bg-white text-indigo-700 font-medium rounded-full shadow hover:bg-indigo-50 transition duration-300"
                >
                  Explore Books
                </a>
                <a
                  href="#"
                  className="px-8 py-3 bg-transparent text-white border border-white font-medium rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300"
                >
                  Join Book Club
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={p5}
                alt="Collection of books"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Books
          </h2>
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            View all <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg truncate">
                  {book.title}
                </h3>
                <p className="text-gray-600">{book.author}</p>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {book.rating}
                    </span>
                  </div>
                  <span className="ml-auto font-bold text-indigo-700">
                    {book.price}
                  </span>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition duration-300 text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="bg-white rounded-lg shadow hover:shadow-md p-6 text-center transition duration-300 hover:bg-indigo-50"
              >
                <h3 className="font-medium text-lg text-gray-900">
                  {category}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          What Our Readers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow"
            >
              <p className="text-gray-600 italic text-lg">
                "{testimonial.text}"
              </p>
              <p className="mt-4 font-medium text-gray-900">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">
                Join Our Newsletter
              </h2>
              <p className="mt-2 text-indigo-100">
                Get updates on new releases and exclusive offers.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-l-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="mt-2 sm:mt-0 bg-indigo-900 text-white px-6 py-3 rounded-r-full sm:rounded-l-none rounded-full sm:rounded-r-full font-medium hover:bg-indigo-800 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">BookNook</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    New Releases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Upcoming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Bargain Books
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 BookNook. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
