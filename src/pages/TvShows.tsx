
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlurCard from '@/components/ui/BlurCard';
import { ArrowRight, Star, Clock, Play } from 'lucide-react';

const TvShows = () => {
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

  // Sample featured show data
  const featuredShow = {
    title: "The Last of Us",
    description: "Twenty years after a fungal infection has devastated the planet, Joel is tasked with smuggling 14-year-old Ellie across a post-apocalyptic America. What begins as a small smuggling job turns into a brutal cross-country journey.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    network: "HBO",
    season: "Season 1"
  };

  // Sample TV news data
  const tvNews = [
    {
      id: 1,
      title: "House of the Dragon Season 2 Reveals First Teaser",
      excerpt: "HBO unveils the first look at the next chapter of the Game of Thrones prequel series.",
      date: "May 14, 2023",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 2,
      title: "Stranger Things Final Season Begins Production",
      excerpt: "The beloved Netflix series gears up for its epic conclusion.",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Apple TV+ Announces New Sci-Fi Series from Acclaimed Director",
      excerpt: "A high-concept space drama is coming to the streaming platform next year.",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1518122116689-2439c0323ea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Sample TV show reviews data
  const tvReviews = [
    {
      id: 1,
      title: "Succession",
      rating: 4.9,
      excerpt: "A masterclass in writing, acting, and direction that culminates in a perfect finale.",
      image: "https://images.unsplash.com/photo-1564223288351-a96bab72c21c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "The Bear",
      rating: 4.8,
      excerpt: "An intense, authentic portrayal of restaurant life with stellar performances.",
      image: "https://images.unsplash.com/photo-1584448097939-bada4179201d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "The White Lotus",
      rating: 4.7,
      excerpt: "A biting satire that expertly examines privilege and class dynamics.",
      image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Severance",
      rating: 4.8,
      excerpt: "A thought-provoking sci-fi thriller with impeccable production design.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    }
  ];

  // Sample upcoming shows data
  const upcomingShows = [
    {
      id: 1,
      title: "The Penguin",
      network: "HBO",
      date: "Fall 2023",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      title: "The Lord of the Rings: Season 2",
      network: "Prime Video",
      date: "2024",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      title: "Agatha All Along",
      network: "Disney+",
      date: "Late 2023",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Sample streaming platforms
  const streamingPlatforms = [
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1648387165220-1e8fcbd34efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "HBO Max", logo: "https://images.unsplash.com/photo-1580579452318-54a2cea32385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80" },
    { name: "Disney+", logo: "https://images.unsplash.com/photo-1590969709485-88f3a2247f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80" },
    { name: "Amazon Prime", logo: "https://images.unsplash.com/photo-1627873649417-c67f79df6571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Apple TV+", logo: "https://images.unsplash.com/photo-1575600578880-4701453889f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" },
    { name: "Hulu", logo: "https://images.unsplash.com/photo-1620371001201-5a1422ced933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 blur-3xl opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={featuredShow.image}
                  alt={featuredShow.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="h-5 w-5 text-lbd-accent" />
                    <span className="text-sm text-lbd-accent">Featured Show</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{featuredShow.title}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(featuredShow.rating)
                              ? 'text-lbd-highlight fill-lbd-highlight'
                              : i < featuredShow.rating
                              ? 'text-lbd-highlight fill-lbd-highlight/50'
                              : 'text-lbd-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-lbd-muted">({featuredShow.rating})</span>
                  </div>
                  <p className="text-white/80 mb-4 line-clamp-3 md:line-clamp-none">
                    {featuredShow.description}
                  </p>
                  <div className="flex gap-4 mb-4 text-sm text-white/80">
                    <div>Network: {featuredShow.network}</div>
                    <div>{featuredShow.season}</div>
                  </div>
                  <Link to="/tv-shows/the-last-of-us" className="inline-flex items-center bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Read Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-6">
              <BlurCard className="animate-on-scroll">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-lbd-accent" />
                  Coming Soon
                </h2>
                <div className="space-y-4">
                  {upcomingShows.map((show) => (
                    <div key={show.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-lbd-surface flex-shrink-0">
                        <img 
                          src={show.image} 
                          alt={show.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium hover:text-lbd-accent transition-colors">
                          <Link to={`/tv-shows/${show.id}`}>{show.title}</Link>
                        </h3>
                        <div className="text-xs text-lbd-muted flex flex-col">
                          <span>{show.network}</span>
                          <span>Release: {show.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/tv-shows/upcoming" className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors mt-4">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Latest TV News</h2>
            <Link to="/tv-shows/news" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tvNews.map((news, index) => (
              <BlurCard 
                key={news.id} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="text-xs text-lbd-muted mb-2">{news.date}</div>
                <h3 className="text-xl font-bold mb-2 hover:text-lbd-accent transition-colors">
                  <Link to={`/tv-shows/news/${news.id}`}>{news.title}</Link>
                </h3>
                <p className="text-lbd-muted mb-4">{news.excerpt}</p>
                <Link to={`/tv-shows/news/${news.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* TV Show Reviews Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">TV Show Reviews</h2>
            <Link to="/tv-shows/reviews" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All Reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tvReviews.map((review, index) => (
              <BlurCard 
                key={review.id} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={review.image} 
                    alt={review.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(review.rating)
                            ? 'text-lbd-highlight fill-lbd-highlight'
                            : i < review.rating
                            ? 'text-lbd-highlight fill-lbd-highlight/50'
                            : 'text-lbd-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold">{review.rating}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-lbd-accent transition-colors">
                  <Link to={`/tv-shows/review/${review.id}`}>{review.title}</Link>
                </h3>
                <p className="text-lbd-muted text-sm mb-3">{review.excerpt}</p>
                <Link to={`/tv-shows/review/${review.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors text-sm">
                  Read Review <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-on-scroll">Streaming Platforms</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {streamingPlatforms.map((platform, index) => (
              <BlurCard 
                key={platform.name} 
                className="animate-on-scroll hover-scale" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/tv-shows/platform/${platform.name.toLowerCase().replace('+', '-plus')}`} className="flex flex-col items-center">
                  <div className="h-20 w-full flex justify-center items-center mb-2">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <span className="font-medium">{platform.name}</span>
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Genres */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-on-scroll">Browse by Genre</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Drama", "Comedy", "Sci-Fi", "Fantasy", "Horror", "Action", "Thriller", "Mystery"].map((genre, index) => (
              <Link 
                key={genre} 
                to={`/tv-shows/genre/${genre.toLowerCase()}`}
                className="bg-gradient-to-br from-lbd-darker to-lbd-surface border border-white/5 p-4 rounded-lg text-center hover:from-lbd-accent/20 hover:to-lbd-surface transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{genre}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TvShows;
