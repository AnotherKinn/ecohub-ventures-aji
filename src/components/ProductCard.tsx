
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  ecoLabels: string[];
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  ecoLabels,
  category
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden bg-eco-50 relative">
        <img
          src={image}
          alt={name}
          className={cn(
            "h-full w-full object-cover object-center transition-all duration-500",
            isLoaded ? "image-loaded" : "image-load",
            isHovered ? "scale-105" : "scale-100"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Eco Labels */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {ecoLabels.map((label, index) => (
            <span 
              key={index} 
              className="bg-eco-500 text-white text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {label}
            </span>
          ))}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-3 right-3 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button 
            className="bg-white hover:bg-eco-50 border border-gray-100 shadow-sm p-2 rounded-full text-foreground"
            aria-label="Add to wishlist"
          >
            <Heart size={16} />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex-grow">
          <span className="text-xs text-muted-foreground">{category}</span>
          <h3 className="mt-1 font-medium text-foreground tracking-tight">
            <Link to={`/product/${id}`} className="hover:text-eco-600 transition-colors">
              {name}
            </Link>
          </h3>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <p className="font-medium">${price.toFixed(2)}</p>
          
          <button
            className="flex items-center justify-center gap-1 bg-eco-500 hover:bg-eco-600 text-white p-2 rounded-full shadow-sm transition-colors duration-200"
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
