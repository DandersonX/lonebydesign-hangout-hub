import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlurCard from '@/components/ui/BlurCard';
import { ArrowRight, Search, Calendar, Tag } from 'lucide-react';
const Blog = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
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

  // Sample blog post data - would be replaced with real data/API
  const blogPosts = [{
    id: 1,
    title: "The Future of Gaming: Next-Gen Consoles and Beyond",
    excerpt: "Exploring the technological advancements and what they mean for the future of gaming experiences.",
    date: "May 15, 2023",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80"
  }, {
    id: 2,
    title: "Anime Spring Season 2023: Top 5 Must-Watch Series",
    excerpt: "A roundup of the best new anime releases that you shouldn't miss this season.",
    date: "May 12, 2023",
    category: "Anime",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  }, {
    id: 3,
    title: "Vinyl Revival: Why Analog Sound is Making a Comeback",
    excerpt: "Diving into the resurgence of vinyl records and the unique listening experience they offer.",
    date: "May 10, 2023",
    category: "Music",
    image: "https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
  }, {
    id: 4,
    title: "Building the Ultimate Gaming PC in 2023",
    excerpt: "A comprehensive guide to selecting components for your dream gaming rig.",
    date: "May 8, 2023",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }, {
    id: 5,
    title: "Streaming Wars: Which TV Platform Deserves Your Subscription",
    excerpt: "Comparing the major streaming services to help you decide where to spend your money.",
    date: "May 5, 2023",
    category: "TV Shows",
    image: "https://images.unsplash.com/photo-1522869635100-187f6605241d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }, {
    id: 6,
    title: "Essential Books Every Gamer Should Read",
    excerpt: "Literature that explores gaming culture, history, and design principles.",
    date: "May 3, 2023",
    category: "Books",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
  }];

  // Sample categories
  const categories = [{
    name: "Gaming",
    count: 24
  }, {
    name: "Anime",
    count: 18
  }, {
    name: "TV Shows",
    count: 15
  }, {
    name: "Music",
    count: 12
  }, {
    name: "Tech",
    count: 10
  }, {
    name: "Books",
    count: 8
  }, {
    name: "Personal",
    count: 5
  }];
  return <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-lbd-accent/20 to-lbd-accent2/20 blur-3xl opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll">LoneByDesign Blog</h1>
          <p className="text-lbd-muted max-w-2xl mx-auto mb-8 animate-on-scroll">
            Daily updates, thoughts, reviews, and insights on gaming, anime, TV shows, music, and more.
          </p>
          <div className="max-w-md mx-auto animate-on-scroll">
            <div className="relative">
              <input type="text" placeholder="Search articles..." className="w-full px-4 py-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lbd-accent text-white" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lbd-muted h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => <BlurCard key={post.id} className="h-full animate-on-scroll" style={{
              animationDelay: `${index * 100}ms`
            }} hoverEffect>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-lbd-accent/20 text-lbd-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-lbd-muted flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 hover:text-lbd-accent transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-lbd-muted mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </BlurCard>)}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
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

          {/* Sidebar */}
          <div className="space-y-8">
            <BlurCard className="animate-on-scroll">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => <div key={category.name} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <Link to={`/blog/category/${category.name.toLowerCase()}`} className="hover:text-lbd-accent transition-colors">
                      {category.name}
                    </Link>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5">{category.count}</span>
                  </div>)}
              </div>
            </BlurCard>

            <BlurCard className="animate-on-scroll">
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Gaming", "PC Building", "Anime", "Reviews", "Vinyl", "Streaming", "Hardware", "Netflix", "Sony", "RPG", "Manga", "Jazz"].map(tag => <Link key={tag} to={`/blog/tag/${tag.toLowerCase()}`} className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-lbd-accent/20 hover:text-lbd-accent transition-colors flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Link>)}
              </div>
            </BlurCard>

            <BlurCard className="animate-on-scroll">
              <h3 className="text-lg font-bold mb-4">About the Blog</h3>
              <p className="text-lbd-muted mb-4">
                The LBD Blog is my daily journal of discoveries, reviews, and thoughts on gaming, anime, TV shows, music, and more. Join me as I explore these fascinating worlds.
              </p>
              <Link to="/about" className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </BlurCard>

            <BlurCard className="animate-on-scroll">
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-lbd-muted mb-4">
                Get notified when new content is published. No spam, just the content you love.
              </p>
              <form className="space-y-3">
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lbd-accent text-white" required />
                <button type="submit" className="w-full px-4 py-2 bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </BlurCard>
          </div>
        </div>
      </div>
    </div>;
};
export default Blog;