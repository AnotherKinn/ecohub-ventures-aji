
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  ecoLabels: string[];
  category: string;
  description?: string;
  shortDescription?: string;
  materials?: string[];
  featured?: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Bamboo Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop",
    ecoLabels: ["Biodegradable", "Plastic-Free"],
    category: "Home",
    shortDescription: "Stay hydrated sustainably with our 100% biodegradable bamboo water bottle.",
    featured: true
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=680&auto=format&fit=crop",
    ecoLabels: ["Organic", "Fair Trade"],
    category: "Clothing",
    shortDescription: "Ethically-made t-shirt from 100% organic cotton for everyday comfort.",
    featured: true
  },
  {
    id: 3,
    name: "Recycled Yoga Mat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=720&auto=format&fit=crop",
    ecoLabels: ["Recycled", "Non-Toxic"],
    category: "Fitness",
    shortDescription: "Made from recycled materials, our eco-friendly yoga mat supports both your practice and the planet.",
    featured: true
  }
];

export const popularProducts: Product[] = [
  {
    id: 4,
    name: "Beeswax Food Wraps",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?q=80&w=770&auto=format&fit=crop",
    ecoLabels: ["Reusable", "Zero-Waste"],
    category: "Kitchen",
    shortDescription: "Replace plastic wrap with these natural, reusable food wraps."
  },
  {
    id: 5,
    name: "Biodegradable Phone Case",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1616353071855-2c045c4458cf?q=80&w=1964&auto=format&fit=crop",
    ecoLabels: ["Biodegradable", "Compostable"],
    category: "Accessories",
    shortDescription: "Protect your phone and the planet with our fully biodegradable case."
  },
  {
    id: 6,
    name: "Reusable Bamboo Cutlery Set",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1589549117424-a642c8e03c0e?q=80&w=1587&auto=format&fit=crop",
    ecoLabels: ["Plastic-Free", "Sustainable"],
    category: "Kitchen",
    shortDescription: "Take your sustainable lifestyle on-the-go with this portable bamboo cutlery set."
  },
  {
    id: 7,
    name: "Natural Shampoo Bar",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1614806687394-7e093b514592?q=80&w=1587&auto=format&fit=crop",
    ecoLabels: ["Zero-Waste", "Vegan"],
    category: "Beauty",
    shortDescription: "Plastic-free, concentrated shampoo bar that lasts longer than liquid alternatives."
  },
  {
    id: 8,
    name: "Organic Hemp Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=774&auto=format&fit=crop",
    ecoLabels: ["Organic", "Sustainable"],
    category: "Accessories",
    shortDescription: "Durable, water-resistant backpack made from organic hemp fibers."
  }
];

export const allProducts: Product[] = [...featuredProducts, ...popularProducts];
