
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlurCard from '@/components/ui/BlurCard';
import { ArrowRight, Star, Clock } from 'lucide-react';

const Anime = () => {
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

  // Sample featured anime data
  const featuredAnime = {
    title: "Demon Slayer: Kimetsu no Yaiba",
    description: "A boy raised by boars, who wears a boar's head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    season: "Spring 2023",
    episodes: 26
  };

  // Sample anime news data
  const animeNews = [
    {
      id: 1,
      title: "Attack on Titan Final Season Part 3 Announced",
      excerpt: "The epic saga continues with a new installment coming this fall.",
      date: "May 14, 2023",
      image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      title: "Jujutsu Kaisen Season 2 Release Date Confirmed",
      excerpt: "The popular supernatural anime returns this summer with new adventures.",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Studio Ghibli Announces New Film Project",
      excerpt: "The legendary animation studio reveals their latest work in progress.",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1595586964632-b215dfbc064a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80"
    }
  ];

  // Sample anime reviews data
  const animeReviews = [
    {
      id: 1,
      title: "Chainsaw Man",
      rating: 4.8,
      excerpt: "A groundbreaking adaptation that perfectly captures the manga's chaotic energy.",
      image: "https://images.unsplash.com/photo-1617686693347-5d3d5d87aaad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Spy x Family",
      rating: 4.7,
      excerpt: "A perfect blend of action, comedy, and heartwarming family moments.",
      image: "https://images.unsplash.com/photo-1605903443039-67ea667a0505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 3,
      title: "Bocchi the Rock!",
      rating: 4.9,
      excerpt: "A surprisingly deep and relatable portrayal of social anxiety through music.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Cyberpunk: Edgerunners",
      rating: 4.8,
      excerpt: "A stunning visual feast that expands on the Cyberpunk universe in meaningful ways.",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Sample currently airing anime data
  const airingAnime = [
    {
      id: 1,
      title: "One Piece",
      day: "Sundays",
      episodes: "1000+",
      image: "https://images.unsplash.com/photo-1640951612000-c416deb6a7f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "My Hero Academia",
      day: "Saturdays",
      episodes: "138",
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 3,
      title: "Demon Slayer",
      day: "Sundays",
      episodes: "43",
      image: "https://images.unsplash.com/photo-1593439411281-6500cf61961c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-600/20 blur-3xl opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={featuredAnime.image}
                  alt={featuredAnime.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-lbd-accent">Featured Anime</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{featuredAnime.title}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(featuredAnime.rating)
                              ? 'text-lbd-highlight fill-lbd-highlight'
                              : i < featuredAnime.rating
                              ? 'text-lbd-highlight fill-lbd-highlight/50'
                              : 'text-lbd-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-lbd-muted">({featuredAnime.rating})</span>
                  </div>
                  <p className="text-white/80 mb-4 line-clamp-3 md:line-clamp-none">
                    {featuredAnime.description}
                  </p>
                  <div className="flex gap-4 mb-4 text-sm text-white/80">
                    <div>Season: {featuredAnime.season}</div>
                    <div>Episodes: {featuredAnime.episodes}</div>
                  </div>
                  <Link to="/anime/demon-slayer" className="inline-flex items-center bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Read Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-6">
              <BlurCard className="animate-on-scroll">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-lbd-accent" />
                  Currently Airing
                </h2>
                <div className="space-y-4">
                  {airingAnime.map((anime) => (
                    <div key={anime.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-lbd-surface flex-shrink-0">
                        <img 
                          src={anime.image} 
                          alt={anime.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium hover:text-lbd-accent transition-colors">
                          <Link to={`/anime/${anime.id}`}>{anime.title}</Link>
                        </h3>
                        <div className="text-xs text-lbd-muted flex flex-col">
                          <span>New Episodes: {anime.day}</span>
                          <span>Total Episodes: {anime.episodes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/anime/airing" className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors mt-4">
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
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Latest Anime News</h2>
            <Link to="/anime/news" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {animeNews.map((news, index) => (
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
                  <Link to={`/anime/news/${news.id}`}>{news.title}</Link>
                </h3>
                <p className="text-lbd-muted mb-4">{news.excerpt}</p>
                <Link to={`/anime/news/${news.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Anime Reviews Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Anime Reviews</h2>
            <Link to="/anime/reviews" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All Reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {animeReviews.map((review, index) => (
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
                  <Link to={`/anime/review/${review.id}`}>{review.title}</Link>
                </h3>
                <p className="text-lbd-muted text-sm mb-3">{review.excerpt}</p>
                <Link to={`/anime/review/${review.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors text-sm">
                  Read Review <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-on-scroll">Anime Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Must-Watch Classics",
                description: "Essential anime series that have defined the medium and stood the test of time.",
                image: "https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                link: "/anime/collections/classics"
              },
              {
                title: "Hidden Gems",
                description: "Underrated series and films that deserve more attention from anime fans.",
                image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                link: "/anime/collections/hidden-gems"
              },
            ].map((collection, index) => (
              <BlurCard 
                key={collection.title} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="rounded-lg overflow-hidden bg-lbd-surface h-full">
                      <img 
                        src={collection.image} 
                        alt={collection.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-lbd-muted mb-4">{collection.description}</p>
                    <Link to={collection.link} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                      Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anime;
