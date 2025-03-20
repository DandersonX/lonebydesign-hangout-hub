import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BlurCard from "@/components/ui/BlurCard";
import { ArrowRight, Music, Book, ShoppingBag } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const categories = [
    { 
      title: "My Music", 
      icon: Music, 
      description: "Check out my latest music projects, upcoming releases, and behind-the-scenes content.", 
      link: "/music",
      color: "from-green-500 to-emerald-600" 
    },
    { 
      title: "Shop", 
      icon: ShoppingBag, 
      description: "Browse our collection of tech, books, vinyl, and more.", 
      link: "/shop",
      color: "from-amber-500 to-orange-600" 
    },
    { 
      title: "Daily Blog", 
      icon: Book, 
      description: "Check out daily updates, opinions, and personal stories.", 
      link: "/blog",
      color: "from-teal-500 to-cyan-600" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-lbd-dark z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Lone</span>
            <span className="text-white">By</span>
            <span className="text-gradient">Design</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Your digital hangout for my personal music blog, regular content updates, and a curated shop of unique items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog" className="bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Read the Blog
            </Link>
            <Link to="/shop" className="bg-transparent border border-white/20 hover:border-white/40 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Shop Now
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
          <a href="#content" className="text-white/70 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore My World</h2>
            <p className="text-lbd-muted max-w-2xl mx-auto">
              Dive into my personal music journey, daily blog posts, and shop for carefully curated products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <BlurCard 
                key={category.title} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-lbd-muted mb-4">{category.description}</p>
                <Link to={category.link} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-20 px-6 bg-lbd-darker">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Blog Posts</h2>
              <p className="text-lbd-muted">Stay updated with daily thoughts and discoveries.</p>
            </div>
            <Link to="/blog" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <BlurCard 
                key={item} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={`https://picsum.photos/600/400?random=${index}`} 
                    alt="Blog post" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="text-xs text-lbd-accent mb-2">May 15, 2023</div>
                <h3 className="text-xl font-bold mb-2">Discovering New Gaming Frontiers</h3>
                <p className="text-lbd-muted mb-4 line-clamp-3">
                  Exploring the latest innovations in gaming technology and how they're shaping the future of interactive entertainment.
                </p>
                <Link to="/blog/post-1" className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-lbd-muted">The best items from our shop, curated just for you.</p>
            </div>
            <Link to="/shop" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center">
              Shop All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <BlurCard 
                key={item} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={`https://picsum.photos/400/400?random=${index + 10}`} 
                    alt="Product" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="text-xs text-lbd-accent mb-1">PC Components</div>
                <h3 className="text-lg font-bold mb-1">RGB Gaming Keyboard</h3>
                <p className="text-lbd-muted mb-3 text-sm">High-performance mechanical keyboard with custom switches.</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$129.99</span>
                  <Link to="/shop/product-1" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                    View
                  </Link>
                </div>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gradient-to-br from-lbd-darker to-lbd-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Join the LBD Community</h2>
          <p className="text-lbd-muted mb-8 animate-on-scroll">
            Subscribe to our newsletter and never miss an update. Get the latest content, product launches, and exclusive offers directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-on-scroll">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lbd-accent text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
