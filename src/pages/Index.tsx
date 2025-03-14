
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Recycle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import EducationCard from '@/components/EducationCard';
import { featuredProducts } from '@/data/products';
import { featuredArticles } from '@/data/articles';
import { cn } from '@/lib/utils';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 px-6 md:px-10 overflow-hidden bg-gradient-to-b from-eco-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">
          <div className="space-y-6 md:pr-12">
            <div className="inline-block px-3 py-1 rounded-full bg-eco-100 text-eco-700 text-sm font-medium mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Sustainable Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Shop Eco-Friendly, <br />
              <span className="text-eco-600">Save the Earth</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Discover sustainable products that reduce your environmental footprint without compromising on quality or style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/marketplace" 
                className="px-6 py-3 rounded-full bg-eco-500 text-white font-medium hover:bg-eco-600 shadow-sm transition-colors duration-200 text-center"
              >
                Explore Products
              </Link>
              <Link 
                to="/education" 
                className="px-6 py-3 rounded-full border border-eco-500 text-eco-600 font-medium hover:bg-eco-50 transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className={cn(
            "relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000",
            imagesLoaded ? "opacity-100" : "opacity-0 transform translate-y-8"
          )}>
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1738&auto=format&fit=crop" 
              alt="Eco-friendly lifestyle" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-sm font-light">Together for a</span>
              <h2 className="text-2xl font-medium">Sustainable Future</h2>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-eco-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-eco-300 rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose Sustainable Products?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Making environmentally conscious choices benefits both the planet and your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-10 w-10 text-eco-500" />,
                title: "Eco-Friendly Materials",
                description: "Our products use sustainable, renewable, or recycled materials to minimize environmental impact.",
                delay: "0.1s"
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-eco-500" />,
                title: "Ethical Production",
                description: "We partner with companies committed to fair wages, safe working conditions, and ethical standards.",
                delay: "0.2s"
              },
              {
                icon: <Recycle className="h-10 w-10 text-eco-500" />,
                title: "Reduced Waste",
                description: "Products designed for durability and recyclability, with minimal or plastic-free packaging.",
                delay: "0.3s"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: benefit.delay }}
              >
                <div className="mb-5">{benefit.icon}</div>
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-6 md:px-10 bg-eco-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-xl">
                Our handpicked selection of sustainable products that combine style, functionality, and eco-consciousness.
              </p>
            </div>
            <Link 
              to="/marketplace" 
              className="group mt-4 md:mt-0 flex items-center text-eco-600 font-medium hover:text-eco-700 transition-colors duration-200"
            >
              View all products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              EcoHub is more than a marketplace — we're a community dedicated to making sustainable living accessible and enjoyable for everyone.
            </p>
            <p className="text-muted-foreground">
              Through curated eco-friendly products and educational resources, we empower individuals to make environmentally conscious choices without compromising on quality or aesthetics.
            </p>
            <p className="text-muted-foreground">
              Our goal is to demonstrate that small changes in purchasing habits can collectively create significant positive environmental impact.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-eco-600 font-medium hover:text-eco-700 group"
            >
              Learn more about us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1738&auto=format&fit=crop" 
                alt="Sustainable forest" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Preview Section */}
      <section className="py-20 px-6 md:px-10 bg-eco-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Learn & Grow</h2>
              <p className="text-muted-foreground max-w-xl">
                Explore our educational content to discover simple ways to live more sustainably every day.
              </p>
            </div>
            <Link 
              to="/education" 
              className="group mt-4 md:mt-0 flex items-center text-eco-600 font-medium hover:text-eco-700 transition-colors duration-200"
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <EducationCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for sustainable living tips, new product alerts, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:border-eco-500 focus:ring-eco-500 focus:ring-1 focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 rounded-full bg-eco-500 text-white font-medium hover:bg-eco-600 shadow-sm transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
