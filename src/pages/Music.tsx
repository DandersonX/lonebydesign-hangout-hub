
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlurCard from '@/components/ui/BlurCard';
import { ArrowRight, Star, Music as MusicIcon, Disc, Headphones, Radio } from 'lucide-react';

const Music = () => {
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

  // Sample featured album data
  const featuredAlbum = {
    title: "Midnights",
    artist: "Taylor Swift",
    description: "The tenth studio album by American singer-songwriter Taylor Swift, released on October 21, 2022, via Republic Records. A departure from the alternative folk sound of Swift's preceding studio albums, Midnights is an electronica, synth-pop, and R&B record.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    releaseDate: "October 21, 2022",
    genre: "Pop, Synth-pop"
  };

  // Sample music news data
  const musicNews = [
    {
      id: 1,
      title: "Kendrick Lamar Announces World Tour Dates",
      excerpt: "The rapper will embark on a global tour in support of his latest album.",
      date: "May 14, 2023",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Vinyl Sales Hit 30-Year High in 2023",
      excerpt: "The resurgence of vinyl records continues as sales reach levels not seen since the early 1990s.",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1603048588665-711bd59e3ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Beyoncé Breaks Grammy Record",
      excerpt: "The iconic artist becomes the most decorated Grammy winner of all time.",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  // Sample album reviews data
  const albumReviews = [
    {
      id: 1,
      title: "SOS",
      artist: "SZA",
      rating: 4.8,
      excerpt: "A masterful R&B album that showcases SZA's artistic growth and versatility.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Un Verano Sin Ti",
      artist: "Bad Bunny",
      rating: 4.7,
      excerpt: "A vibrant celebration of Caribbean music that pushes genre boundaries.",
      image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 3,
      title: "Renaissance",
      artist: "Beyoncé",
      rating: 4.9,
      excerpt: "A triumphant ode to dance music history and Black queer culture.",
      image: "https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Harry's House",
      artist: "Harry Styles",
      rating: 4.6,
      excerpt: "A warm, intimate album that showcases Styles' continued artistic evolution.",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Sample upcoming albums data
  const upcomingAlbums = [
    {
      id: 1,
      title: "The Rise and Fall",
      artist: "Arctic Monkeys",
      date: "August 2023",
      image: "https://images.unsplash.com/photo-1452639608291-23cd58f6864c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "The Weeknd",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
    },
    {
      id: 3,
      title: "Tomorrow's Yesterday",
      artist: "Frank Ocean",
      date: "TBA 2023",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    }
  ];

  // Sample vinyl collections
  const vinylCollections = [
    {
      title: "Classic Rock Essentials",
      description: "Iconic albums from the golden age of rock, from Led Zeppelin to Pink Floyd.",
      image: "https://images.unsplash.com/photo-1526394931762-8a4116f6e2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
      link: "/music/vinyl/classic-rock"
    },
    {
      title: "Jazz Masterpieces",
      description: "Seminal works from legends like Miles Davis, John Coltrane, and Thelonious Monk.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/music/vinyl/jazz"
    },
    {
      title: "Hip-Hop Landmarks",
      description: "Groundbreaking albums that defined and transformed hip-hop culture.",
      image: "https://images.unsplash.com/photo-1551887196-9b7a72032ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/music/vinyl/hip-hop"
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 blur-3xl opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={featuredAlbum.image}
                  alt={featuredAlbum.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Disc className="h-5 w-5 text-lbd-accent" />
                    <span className="text-sm text-lbd-accent">Featured Album</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{featuredAlbum.title}</h1>
                  <h2 className="text-xl text-white/90 mb-2">{featuredAlbum.artist}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(featuredAlbum.rating)
                              ? 'text-lbd-highlight fill-lbd-highlight'
                              : i < featuredAlbum.rating
                              ? 'text-lbd-highlight fill-lbd-highlight/50'
                              : 'text-lbd-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-lbd-muted">({featuredAlbum.rating})</span>
                  </div>
                  <p className="text-white/80 mb-4 line-clamp-3 md:line-clamp-none">
                    {featuredAlbum.description}
                  </p>
                  <div className="flex gap-4 mb-4 text-sm text-white/80">
                    <div>Release: {featuredAlbum.releaseDate}</div>
                    <div>Genre: {featuredAlbum.genre}</div>
                  </div>
                  <Link to="/music/album/midnights" className="inline-flex items-center bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Read Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-6">
              <BlurCard className="animate-on-scroll">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Radio className="h-5 w-5 mr-2 text-lbd-accent" />
                  Coming Soon
                </h2>
                <div className="space-y-4">
                  {upcomingAlbums.map((album) => (
                    <div key={album.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-lbd-surface flex-shrink-0">
                        <img 
                          src={album.image} 
                          alt={album.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium hover:text-lbd-accent transition-colors">
                          <Link to={`/music/upcoming/${album.id}`}>{album.title}</Link>
                        </h3>
                        <div className="text-xs text-lbd-muted flex flex-col">
                          <span>{album.artist}</span>
                          <span>Expected: {album.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/music/upcoming" className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors mt-4">
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
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Latest Music News</h2>
            <Link to="/music/news" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {musicNews.map((news, index) => (
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
                  <Link to={`/music/news/${news.id}`}>{news.title}</Link>
                </h3>
                <p className="text-lbd-muted mb-4">{news.excerpt}</p>
                <Link to={`/music/news/${news.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Album Reviews Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Album Reviews</h2>
            <Link to="/music/reviews" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All Reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {albumReviews.map((review, index) => (
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
                <h3 className="text-lg font-bold mb-1 hover:text-lbd-accent transition-colors">
                  <Link to={`/music/review/${review.id}`}>{review.title}</Link>
                </h3>
                <h4 className="text-sm text-lbd-muted mb-2">{review.artist}</h4>
                <p className="text-lbd-muted text-sm mb-3">{review.excerpt}</p>
                <Link to={`/music/review/${review.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors text-sm">
                  Read Review <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Vinyl Collections */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Vinyl Collections</h2>
            <Link to="/music/vinyl" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              Shop Vinyl <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vinylCollections.map((collection, index) => (
              <BlurCard 
                key={collection.title} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-lbd-muted mb-4">{collection.description}</p>
                <Link to={collection.link} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
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
            {["Pop", "Rock", "Hip-Hop", "R&B", "Electronic", "Jazz", "Classical", "Alternative"].map((genre, index) => (
              <Link 
                key={genre} 
                to={`/music/genre/${genre.toLowerCase()}`}
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

export default Music;
