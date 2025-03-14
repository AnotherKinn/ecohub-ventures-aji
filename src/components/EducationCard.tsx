
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface EducationCardProps {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  readTime: number;
}

const EducationCard: React.FC<EducationCardProps> = ({
  id,
  title,
  summary,
  image,
  category,
  readTime
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className={cn(
            "h-full w-full object-cover transition-all duration-700",
            isLoaded ? "image-loaded" : "image-load"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-eco-100 text-eco-700 text-xs font-medium px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-medium mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {summary}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-muted-foreground">
            {readTime} min read
          </span>
          
          <Link
            to={`/education/${id}`}
            className="text-sm font-medium text-eco-600 hover:text-eco-700 underline-animation"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
