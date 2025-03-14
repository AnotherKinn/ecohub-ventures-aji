
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        scrolled ? "py-3 backdrop-blur-lg bg-white/70 shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/"
          className="text-xl md:text-2xl font-medium tracking-tight flex items-center gap-2"
        >
          <span className="text-eco-600 font-bold">Eco</span>
          <span className="text-foreground font-light">Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="underline-animation py-1 text-sm font-medium">
            Home
          </Link>
          <Link to="/marketplace" className="underline-animation py-1 text-sm font-medium">
            Marketplace
          </Link>
          <Link to="/education" className="underline-animation py-1 text-sm font-medium">
            Education
          </Link>
          <Link to="/about" className="underline-animation py-1 text-sm font-medium">
            About
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="text-foreground hover:text-eco-600 transition-colors duration-200"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            className="text-foreground hover:text-eco-600 transition-colors duration-200 relative"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-eco-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
          <Link 
            to="/login"
            className="px-4 py-1.5 text-sm font-medium rounded-full border border-eco-500 text-eco-600 hover:bg-eco-50 transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white pt-20 px-6 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <Link 
            to="/" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/marketplace" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Marketplace
          </Link>
          <Link 
            to="/education" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <div className="flex items-center space-x-4 pt-4">
            <button 
              className="text-foreground hover:text-eco-600 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
            <button 
              className="text-foreground hover:text-eco-600 transition-colors duration-200 relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-1 bg-eco-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <Link 
              to="/login"
              className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-full border border-eco-500 text-eco-600 hover:bg-eco-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
