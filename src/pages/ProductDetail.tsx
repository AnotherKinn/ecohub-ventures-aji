
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Share2, Truck, Package, Leaf, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts, Product } from '@/data/products';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProduct = allProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct || null);
      
      // Reset image loading state when product changes
      setIsImageLoaded(false);
      setSelectedImage(0);
      
      // Find related products from the same category
      if (foundProduct) {
        const related = allProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 3);
        setRelatedProducts(related);
      }
    }
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  // Mock images array for the image gallery
  const productImages = [
    product?.image || '',
    'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1588&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop'
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-28 px-6 md:px-10 bg-white flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="py-4">
            <Link to="/marketplace" className="text-muted-foreground hover:text-foreground inline-flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Marketplace
            </Link>
          </div>

          {/* Product Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-eco-50 relative">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name} 
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    isImageLoaded ? "image-loaded" : "image-load"
                  )}
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-3">
                {productImages.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-20 rounded-md overflow-hidden border-2 transition-all",
                      selectedImage === index ? "border-eco-500" : "border-transparent"
                    )}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.ecoLabels.map((label, index) => (
                    <span 
                      key={index} 
                      className="bg-eco-100 text-eco-700 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
                <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground">
                {product.shortDescription || 'A sustainable product designed with the environment in mind. Made from eco-friendly materials to reduce environmental impact.'}
              </p>

              {/* Materials */}
              <div>
                <h3 className="text-sm font-medium mb-2">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {(product.materials || ['Sustainable', 'Eco-friendly', 'Recycled']).map((material, index) => (
                    <span key={index} className="bg-gray-100 text-foreground text-xs px-2.5 py-1 rounded-full">
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-sm font-medium mb-2">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={handleDecrement} 
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-muted-foreground"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button 
                    onClick={handleIncrement} 
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-muted-foreground"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart and Buy Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-eco-500 text-white font-medium hover:bg-eco-600 transition-colors duration-200">
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
                <button className="flex-1 px-6 py-3 rounded-full border border-eco-500 text-eco-600 font-medium hover:bg-eco-50 transition-colors duration-200">
                  Buy Now
                </button>
              </div>

              {/* Wishlist and Share */}
              <div className="flex gap-6 pt-2">
                <button className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                  <Heart size={18} />
                  <span className="text-sm">Add to Wishlist</span>
                </button>
                <button className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                  <Share2 size={18} />
                  <span className="text-sm">Share</span>
                </button>
              </div>

              {/* Shipping and Returns */}
              <div className="pt-6 space-y-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <Truck size={20} className="text-eco-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">Free Shipping</h3>
                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Package size={20} className="text-eco-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">Easy Returns</h3>
                    <p className="text-xs text-muted-foreground">30 days return policy</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Leaf size={20} className="text-eco-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium">Eco-Friendly Packaging</h3>
                    <p className="text-xs text-muted-foreground">Zero plastic, 100% recycled materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="py-12 border-t border-gray-100">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold mb-6">Product Description</h2>
              <div className="prose text-muted-foreground">
                <p className="mb-4">
                  Our {product.name} is designed with sustainability at its core. Made from eco-friendly materials, this product helps reduce your environmental footprint without compromising on quality or functionality.
                </p>
                <p className="mb-4">
                  The production process minimizes waste and uses renewable energy sources wherever possible. We've carefully selected materials that are either recycled, biodegradable, or sustainably harvested to ensure minimal environmental impact.
                </p>
                <h3 className="text-foreground text-lg font-medium mt-6 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-eco-500 mt-0.5 flex-shrink-0" />
                    <span>Made from {product.ecoLabels.includes('Recycled') ? 'recycled' : 'sustainable'} materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-eco-500 mt-0.5 flex-shrink-0" />
                    <span>Durably constructed for long-term use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-eco-500 mt-0.5 flex-shrink-0" />
                    <span>{product.ecoLabels.includes('Biodegradable') ? 'Fully biodegradable' : 'Recyclable at end of life'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-eco-500 mt-0.5 flex-shrink-0" />
                    <span>Shipped in plastic-free, recycled packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-eco-500 mt-0.5 flex-shrink-0" />
                    <span>Ethically manufactured under fair working conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="py-12 border-t border-gray-100">
              <h2 className="text-2xl font-semibold mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="animate-fade-in">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
