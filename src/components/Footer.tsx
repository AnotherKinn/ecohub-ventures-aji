
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-eco-50 border-t border-eco-100 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-eco-600">Eco</span>
            <span className="text-2xl font-light text-foreground">Hub</span>
          </div>
          <p className="text-muted-foreground max-w-md">
            We believe in the power of conscious consumerism to create positive environmental change. Join us in our mission to make sustainable living accessible for everyone.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-muted-foreground hover:text-eco-600 transition-colors duration-200" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" className="text-muted-foreground hover:text-eco-600 transition-colors duration-200" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" className="text-muted-foreground hover:text-eco-600 transition-colors duration-200" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Impact Statistics */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Our Impact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-eco-600">10,583</p>
                  <p className="text-sm text-muted-foreground">Eco-products sold</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-eco-600">5,279</p>
                  <p className="text-sm text-muted-foreground">Trees planted</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-eco-600">25,432</p>
                  <p className="text-sm text-muted-foreground">Users engaged</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="space-y-6 md:col-span-2">
              <h3 className="text-lg font-semibold">Our Philosophy</h3>
              <blockquote className="text-lg italic text-muted-foreground">
                "We do not inherit the earth from our ancestors, we borrow it from our children."
              </blockquote>
              <p className="text-sm font-medium">— Native American Proverb</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-eco-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EcoHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Sustainability Pledge
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
