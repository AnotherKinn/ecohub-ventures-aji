
import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts, Product } from '@/data/products';
import { cn } from '@/lib/utils';

// Categories for filter
const categories = ["All", "Home", "Kitchen", "Clothing", "Beauty", "Accessories", "Fitness"];
const ecoLabels = ["Organic", "Recycled", "Biodegradable", "Plastic-Free", "Vegan", "Fair Trade", "Zero-Waste", "Sustainable", "Non-Toxic", "Compostable", "Reusable"];
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $20", min: 0, max: 20 },
  { label: "$20 - $50", min: 20, max: 50 },
  { label: "Over $50", min: 50, max: Infinity }
];

const Marketplace = () => {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter products based on search, category, price range, and eco labels
  useEffect(() => {
    let results = allProducts;

    // Search filter
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      results = results.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    results = results.filter(product => 
      product.price >= selectedPrice.min && product.price <= selectedPrice.max
    );

    // Eco labels filter
    if (selectedLabels.length > 0) {
      results = results.filter(product => 
        selectedLabels.some(label => product.ecoLabels.includes(label))
      );
    }

    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, selectedPrice, selectedLabels]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory("All");
    setSelectedPrice(priceRanges[0]);
    setSelectedLabels([]);
  };

  const toggleLabel = (label: string) => {
    setSelectedLabels(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label) 
        : [...prev, label]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-10 px-6 md:px-10 bg-eco-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Eco-Friendly Marketplace</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover sustainable products that combine style, functionality, and eco-consciousness for a greener lifestyle.
          </p>
        </div>
      </section>

      <div className="flex-1 px-6 md:px-10 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search products..."
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

            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden px-4 py-2.5 rounded-full border border-gray-200 flex items-center gap-2"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <Filter size={18} />
              Filters
            </button>

            {/* Active Filters Summary */}
            <div className="hidden md:flex items-center gap-2">
              {selectedCategory !== "All" && (
                <div className="px-3 py-1 rounded-full bg-eco-100 text-eco-700 text-sm flex items-center gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory("All")}>
                    <X size={14} className="ml-1" />
                  </button>
                </div>
              )}
              
              {selectedPrice !== priceRanges[0] && (
                <div className="px-3 py-1 rounded-full bg-eco-100 text-eco-700 text-sm flex items-center gap-1">
                  {selectedPrice.label}
                  <button onClick={() => setSelectedPrice(priceRanges[0])}>
                    <X size={14} className="ml-1" />
                  </button>
                </div>
              )}
              
              {selectedLabels.map(label => (
                <div key={label} className="px-3 py-1 rounded-full bg-eco-100 text-eco-700 text-sm flex items-center gap-1">
                  {label}
                  <button onClick={() => toggleLabel(label)}>
                    <X size={14} className="ml-1" />
                  </button>
                </div>
              ))}
              
              {(selectedCategory !== "All" || selectedPrice !== priceRanges[0] || selectedLabels.length > 0) && (
                <button 
                  onClick={clearAllFilters}
                  className="text-sm text-muted-foreground hover:text-foreground underline ml-2"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedCategory === category 
                            ? "bg-eco-100 text-eco-700 font-medium" 
                            : "text-muted-foreground hover:bg-gray-50"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPrice(range)}
                        className={cn(
                          "block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedPrice === range 
                            ? "bg-eco-100 text-eco-700 font-medium" 
                            : "text-muted-foreground hover:bg-gray-50"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Eco Labels</h3>
                  <div className="flex flex-wrap gap-2">
                    {ecoLabels.map(label => (
                      <button
                        key={label}
                        onClick={() => toggleLabel(label)}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs transition-colors",
                          selectedLabels.includes(label) 
                            ? "bg-eco-500 text-white" 
                            : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            <div className={cn(
              "md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
              mobileFiltersOpen ? "translate-x-0" : "translate-x-full"
            )}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <button 
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setMobileFiltersOpen(false);
                          }}
                          className={cn(
                            "block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            selectedCategory === category 
                              ? "bg-eco-100 text-eco-700 font-medium" 
                              : "text-muted-foreground hover:bg-gray-50"
                          )}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedPrice(range);
                            setMobileFiltersOpen(false);
                          }}
                          className={cn(
                            "block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            selectedPrice === range 
                              ? "bg-eco-100 text-eco-700 font-medium" 
                              : "text-muted-foreground hover:bg-gray-50"
                          )}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Eco Labels</h3>
                    <div className="flex flex-wrap gap-2">
                      {ecoLabels.map(label => (
                        <button
                          key={label}
                          onClick={() => toggleLabel(label)}
                          className={cn(
                            "px-3 py-1 rounded-full text-xs transition-colors",
                            selectedLabels.includes(label) 
                              ? "bg-eco-500 text-white" 
                              : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                          )}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => {
                        clearAllFilters();
                        setMobileFiltersOpen(false);
                      }}
                      className="w-full py-3 rounded-lg bg-gray-100 text-foreground font-medium"
                    >
                      Clear All Filters
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="w-full py-3 rounded-lg bg-eco-500 text-white font-medium"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">No products match your criteria.</p>
                  <button 
                    onClick={clearAllFilters}
                    className="px-4 py-2 rounded-lg bg-eco-500 text-white font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex justify-between items-center">
                    <p className="text-muted-foreground">
                      Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
                    </p>
                    
                    <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-eco-500 focus:ring-eco-500 focus:ring-1 focus:outline-none">
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="animate-fade-in">
                        <ProductCard {...product} />
                      </div>
                    ))}
                  </div>

                  {/* Pagination - This would be dynamic in a real application */}
                  <div className="mt-12 flex justify-center">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 rounded-lg bg-eco-500 text-white">1</button>
                      <button className="px-4 py-2 rounded-lg border border-gray-200 text-muted-foreground hover:bg-gray-50 transition-colors">2</button>
                      <button className="px-4 py-2 rounded-lg border border-gray-200 text-muted-foreground hover:bg-gray-50 transition-colors">3</button>
                      <button className="px-4 py-2 rounded-lg border border-gray-200 text-muted-foreground hover:bg-gray-50 transition-colors">Next</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
