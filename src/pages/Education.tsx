
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EducationCard from '@/components/EducationCard';
import { allArticles, Article } from '@/data/articles';
import { cn } from '@/lib/utils';

// Categories for filter
const categories = ["All", "Eco Tips", "Product Knowledge", "Positive Impacts"];

const Education = () => {
  const [articles, setArticles] = useState<Article[]>(allArticles);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter articles based on search and category
  useEffect(() => {
    let results = allArticles;

    // Search filter
    if (searchTerm) {
      results = results.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      results = results.filter(article => article.category === selectedCategory);
    }

    setFilteredArticles(results);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner Section */}
      <section className="pt-32 pb-16 px-6 md:px-10 bg-gradient-to-br from-eco-50 to-eco-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">Learn, Act, and Save the Planet</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover sustainable living tips, environmental insights, and ways to make a positive impact through your daily choices.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Controls */}
          <div className="mb-10 flex flex-wrap gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2.5 w-full rounded-full border border-gray-200 focus:border-eco-500 focus:ring-eco-500 focus:ring-1 focus:outline-none"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors",
                    selectedCategory === category 
                      ? "bg-eco-500 text-white" 
                      : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No articles match your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-lg bg-eco-500 text-white font-medium"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <div 
                  key={article.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  <EducationCard {...article} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-10 bg-eco-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest sustainability tips, educational resources, and exclusive content.
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

export default Education;
