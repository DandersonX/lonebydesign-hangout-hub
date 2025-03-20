
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlurCard from '@/components/ui/BlurCard';
import { ArrowRight, Gamepad, Star, Clock } from 'lucide-react';

const Gaming = () => {
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

  // Sample featured game data
  const featuredGame = {
    title: "Elden Ring",
    description: "An action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game, directed by Hidetaka Miyazaki and made in collaboration with fantasy novelist George R. R. Martin, was released on February 25, 2022.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    platforms: ["PC", "PS5", "Xbox Series X"]
  };

  // Sample game news data
  const gameNews = [
    {
      id: 1,
      title: "New Zelda Game Announced for Nintendo Switch",
      excerpt: "Nintendo reveals the next installment in the Legend of Zelda series at their latest Direct presentation.",
      date: "May 14, 2023",
      image: "https://images.unsplash.com/photo-1669131519413-56642f5e4a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 2,
      title: "PlayStation 6 Rumors: What We Know So Far",
      excerpt: "Industry insiders share details on Sony's next-generation console that might be in development.",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
      id: 3,
      title: "Major Update Coming to Call of Duty: Warzone",
      excerpt: "Activision announces a significant content update for their popular battle royale game.",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    }
  ];

  // Sample game reviews data
  const gameReviews = [
    {
      id: 1,
      game: "God of War Ragnarök",
      rating: 4.9,
      excerpt: "An epic sequel that builds upon everything that made the 2018 reboot great.",
      image: "https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      game: "Hogwarts Legacy",
      rating: 4.7,
      excerpt: "The Harry Potter game fans have been waiting for, with a rich open world to explore.",
      image: "https://images.unsplash.com/photo-1587814969489-e5df12e73179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      game: "The Last of Us Part II",
      rating: 4.8,
      excerpt: "A masterpiece in storytelling that pushes the boundaries of the medium.",
      image: "https://images.unsplash.com/photo-1604846887565-640d2f52d564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
    },
    {
      id: 4,
      game: "Cyberpunk 2077",
      rating: 4.3,
      excerpt: "After numerous updates, the game finally delivers on its ambitious promise.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Sample upcoming games data
  const upcomingGames = [
    {
      id: 1,
      title: "Starfield",
      releaseDate: "September 6, 2023",
      platforms: ["PC", "Xbox Series X"],
      image: "https://images.unsplash.com/photo-1583572530921-93434378d18b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
    },
    {
      id: 2,
      title: "Final Fantasy XVI",
      releaseDate: "June 22, 2023",
      platforms: ["PS5"],
      image: "https://images.unsplash.com/photo-1642055514517-7ac447b3bbb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    },
    {
      id: 3,
      title: "Assassin's Creed Mirage",
      releaseDate: "October 12, 2023",
      platforms: ["PC", "PS5", "Xbox Series X"],
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 blur-3xl opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={featuredGame.image}
                  alt={featuredGame.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad className="h-5 w-5 text-lbd-accent" />
                    <span className="text-sm text-lbd-accent">Featured Game</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{featuredGame.title}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(featuredGame.rating)
                              ? 'text-lbd-highlight fill-lbd-highlight'
                              : i < featuredGame.rating
                              ? 'text-lbd-highlight fill-lbd-highlight/50'
                              : 'text-lbd-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-lbd-muted">({featuredGame.rating})</span>
                  </div>
                  <p className="text-white/80 mb-4 line-clamp-3 md:line-clamp-none">
                    {featuredGame.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredGame.platforms.map(platform => (
                      <span key={platform} className="text-xs px-2 py-1 rounded-full bg-white/10">
                        {platform}
                      </span>
                    ))}
                  </div>
                  <Link to="/gaming/elden-ring" className="inline-flex items-center bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Read Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-6">
              <BlurCard className="animate-on-scroll">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-lbd-accent" />
                  Upcoming Releases
                </h2>
                <div className="space-y-4">
                  {upcomingGames.map((game) => (
                    <div key={game.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-lbd-surface flex-shrink-0">
                        <img 
                          src={game.image} 
                          alt={game.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium hover:text-lbd-accent transition-colors">
                          <Link to={`/gaming/${game.id}`}>{game.title}</Link>
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-1">
                          {game.platforms.map(platform => (
                            <span key={platform} className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70">
                              {platform}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-lbd-muted flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 
                          {game.releaseDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/gaming/upcoming" className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors mt-4">
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
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Latest Gaming News</h2>
            <Link to="/gaming/news" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gameNews.map((news, index) => (
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
                  <Link to={`/gaming/news/${news.id}`}>{news.title}</Link>
                </h3>
                <p className="text-lbd-muted mb-4">{news.excerpt}</p>
                <Link to={`/gaming/news/${news.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Game Reviews Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Game Reviews</h2>
            <Link to="/gaming/reviews" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All Reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameReviews.map((review, index) => (
              <BlurCard 
                key={review.id} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={review.image} 
                    alt={review.game} 
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
                  <Link to={`/gaming/review/${review.id}`}>{review.game}</Link>
                </h3>
                <p className="text-lbd-muted text-sm mb-3">{review.excerpt}</p>
                <Link to={`/gaming/review/${review.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors text-sm">
                  Read Review <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <BlurCard className="glass-dark animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Gaming Community</h2>
                <p className="text-lbd-muted mb-6">
                  Connect with fellow gamers, share your experiences, discuss strategies, and stay updated with the latest in gaming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/gaming/community" className="bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Join Discord
                  </Link>
                  <Link to="/blog" className="bg-white/5 border border-white/10 hover:bg-white/10 font-medium py-2 px-6 rounded-lg transition-colors">
                    Read Gaming Blog
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <div className="relative w-full md:w-[300px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-lbd-accent to-lbd-accent2 rounded-lg blur opacity-30"></div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Gaming community" 
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlurCard>
        </div>
      </section>
    </div>
  );
};

export default Gaming;
