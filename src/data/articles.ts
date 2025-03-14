
export interface Article {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  readTime: number;
  featured?: boolean;
}

export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "10 Simple Ways to Reduce Your Plastic Use",
    summary: "Practical tips for cutting down plastic consumption in your everyday life, from shopping habits to home organization.",
    image: "https://images.unsplash.com/photo-1591057645298-3db8bc4cc0e8?q=80&w=1740&auto=format&fit=crop",
    category: "Eco Tips",
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: "The Environmental Impact of Fast Fashion",
    summary: "Discover the hidden costs of cheap clothing and learn how to build a sustainable wardrobe that lasts.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1740&auto=format&fit=crop",
    category: "Product Knowledge",
    readTime: 7,
    featured: true
  },
  {
    id: 3,
    title: "How to Create a Zero-Waste Kitchen",
    summary: "Transform your kitchen with these practical zero-waste solutions that reduce environmental impact and save money.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1740&auto=format&fit=crop",
    category: "Eco Tips",
    readTime: 6,
    featured: true
  }
];

export const recentArticles: Article[] = [
  {
    id: 4,
    title: "Understanding Sustainable Materials in Fashion",
    summary: "A deep dive into eco-friendly fabrics and materials revolutionizing the fashion industry.",
    image: "https://images.unsplash.com/photo-1579274737960-7d8bf7f2cf37?q=80&w=1740&auto=format&fit=crop",
    category: "Product Knowledge",
    readTime: 8
  },
  {
    id: 5,
    title: "The Rise of Biodegradable Packaging",
    summary: "How innovative companies are tackling the packaging problem with compostable alternatives.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=1742&auto=format&fit=crop",
    category: "Positive Impacts",
    readTime: 4
  },
  {
    id: 6,
    title: "Sustainable Living in Small Spaces",
    summary: "Eco-friendly tips for apartment dwellers and those with limited space to make meaningful environmental changes.",
    image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1735&auto=format&fit=crop",
    category: "Eco Tips",
    readTime: 6
  },
  {
    id: 7,
    title: "The Benefits of Shopping Secondhand",
    summary: "Why thrifting and buying used goods might be the most sustainable shopping choice you can make.",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1742&auto=format&fit=crop",
    category: "Eco Tips",
    readTime: 5
  },
  {
    id: 8,
    title: "How Carbon Offsets Really Work",
    summary: "A straightforward explanation of carbon offsetting and how to identify which programs actually make a difference.",
    image: "https://images.unsplash.com/photo-1604344929197-60a4c4b46f17?q=80&w=1740&auto=format&fit=crop",
    category: "Product Knowledge",
    readTime: 9
  }
];

export const allArticles: Article[] = [...featuredArticles, ...recentArticles];
