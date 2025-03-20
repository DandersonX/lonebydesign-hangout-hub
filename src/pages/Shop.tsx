import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BlurCard from '@/components/ui/BlurCard';
import { Filter, ShoppingCart, Star, ChevronDown, Search } from 'lucide-react';
const Shop = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-active");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  const categories = [{
    id: 'all',
    name: 'All Products'
  }, {
    id: 'computer-parts',
    name: 'Computer Parts'
  }, {
    id: 'pcs',
    name: 'PCs'
  }, {
    id: 'books',
    name: 'Books'
  }, {
    id: 'journals',
    name: 'Journals'
  }, {
    id: 'vinyl',
    name: 'Vinyl'
  }, {
    id: 'music',
    name: 'Music'
  }];

  // Sample product data - would be replaced with real data/API
  const products = [{
    id: 1,
    name: "RGB Gaming Keyboard",
    category: "computer-parts",
    price: 129.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
  }, {
    id: 2,
    name: "Gaming Mouse",
    category: "computer-parts",
    price: 79.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }, {
    id: 3,
    name: "32\" Curved Monitor",
    category: "computer-parts",
    price: 349.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }, {
    id: 4,
    name: "Custom Gaming PC",
    category: "pcs",
    price: 1899.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587202372682-219c44340510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }, {
    id: 5,
    name: "The Art of Game Design",
    category: "books",
    price: 29.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }, {
    id: 6,
    name: "Anime Art Journal",
    category: "journals",
    price: 19.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }, {
    id: 7,
    name: "Classic Rock Vinyl Collection",
    category: "vinyl",
    price: 89.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603048588665-711bd59e3ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }, {
    id: 8,
    name: "Limited Edition Jazz Vinyl",
    category: "vinyl",
    price: 49.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1526394931762-8a4116f6e2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
  }];
  const filteredProducts = activeCategory === 'all' ? products : products.filter(product => product.category === activeCategory);
  return <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-lbd-accent/20 to-lbd-highlight/20 blur-3xl opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll">LoneByDesign Shop</h1>
          <p className="text-lbd-muted max-w-2xl mx-auto mb-8 animate-on-scroll">
            Browse our collection of computer parts, PCs, books, journals, vinyl records, and digital music.
          </p>
          <div className="max-w-md mx-auto animate-on-scroll">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="w-full px-4 py-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lbd-accent text-white" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lbd-muted h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Category Navigation */}
        <div className="mb-10 overflow-x-auto scrollbar-none">
          <div className="flex space-x-2 min-w-max animate-on-scroll">
            {categories.map(category => <button key={category.id} className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${activeCategory === category.id ? 'bg-lbd-accent text-white' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`} onClick={() => setActiveCategory(category.id)}>
                {category.name}
              </button>)}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 animate-on-scroll">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
            <span className="text-lbd-muted">
              Showing {filteredProducts.length} products
            </span>
          </div>
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lbd-accent text-white">
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rating</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-lbd-muted" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product, index) => <BlurCard key={product.id} className="h-full animate-on-scroll" style={{
          animationDelay: `${index * 100}ms`
        }} hoverEffect>
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="text-xs text-lbd-accent mb-1">
                {categories.find(c => c.id === product.category)?.name}
              </div>
              <h3 className="text-lg font-bold mb-1 hover:text-lbd-accent transition-colors">
                <Link to={`/shop/product/${product.id}`}>{product.name}</Link>
              </h3>
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-lbd-highlight fill-lbd-highlight' : i < product.rating ? 'text-lbd-highlight fill-lbd-highlight/50' : 'text-lbd-muted'}`} />)}
                </div>
                <span className="ml-2 text-xs text-lbd-muted">({product.rating})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                <button className="p-2 rounded-full hover:bg-lbd-accent/10 transition-colors text-lbd-accent">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </BlurCard>)}
        </div>

        {/* Pagination */}
        <div className="flex justify-center animate-on-scroll">
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-lbd-accent text-white hover:bg-lbd-accent/90 transition-colors">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              2
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              3
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Shop;