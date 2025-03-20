
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlurCard from '@/components/ui/BlurCard';
import { ArrowRight, Music as MusicIcon, Disc, Headphones, Calendar, Clock } from 'lucide-react';

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

  // Sample featured track data
  const featuredTrack = {
    title: "Midnight Dreams",
    description: "An atmospheric electronic track with deep bass lines and ethereal vocals. Created during a late-night inspiration session, this track reflects the quiet energy of city nights.",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    releaseDate: "October 21, 2023",
    genre: "Electronic/Ambient"
  };

  // Sample music updates
  const musicUpdates = [
    {
      id: 1,
      title: "New EP Coming Soon",
      excerpt: "I'm working on a 5-track EP that explores downtempo electronic themes with organic instruments.",
      date: "May 14, 2023",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Studio Session Highlights",
      excerpt: "Behind-the-scenes look at my recent recording session with local string musicians.",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1603048588665-711bd59e3ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "New Collaboration Announced",
      excerpt: "Excited to share that I'll be working with vocalist Sarah James on an upcoming track.",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  // Sample tracks
  const myTracks = [
    {
      id: 1,
      title: "Urban Echoes",
      genre: "Downtempo",
      duration: "4:35",
      releaseDate: "March 2023",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Sunset Drive",
      genre: "Synthwave",
      duration: "3:48",
      releaseDate: "January 2023",
      image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 3,
      title: "Digital Dreams",
      genre: "Electronic",
      duration: "5:12",
      releaseDate: "November 2022",
      image: "https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Neon Nights",
      genre: "Ambient",
      duration: "6:03",
      releaseDate: "August 2022",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Sample upcoming performances/releases
  const upcomingEvents = [
    {
      id: 1,
      title: "Live Streaming Session",
      date: "June 15, 2023",
      time: "8:00 PM EST",
      platform: "Twitch",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 2,
      title: "New Single Release",
      date: "July 3, 2023",
      platform: "All platforms",
      image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
    },
    {
      id: 3,
      title: "Local Club Performance",
      date: "July 21, 2023",
      time: "10:00 PM",
      venue: "The Sound Room",
      image: "https://images.unsplash.com/photo-1642055514517-7ac447b3bbb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    }
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
                  src={featuredTrack.image}
                  alt={featuredTrack.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Disc className="h-5 w-5 text-lbd-accent" />
                    <span className="text-sm text-lbd-accent">Featured Track</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{featuredTrack.title}</h1>
                  <div className="flex gap-4 mb-4 text-sm text-white/80">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredTrack.releaseDate}
                    </div>
                    <div>{featuredTrack.genre}</div>
                  </div>
                  <p className="text-white/80 mb-4 line-clamp-3 md:line-clamp-none">
                    {featuredTrack.description}
                  </p>
                  <div className="flex gap-4">
                    <Link to="/music/track/midnight-dreams" className="inline-flex items-center bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      Listen Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center">
                      <Headphones className="mr-2 h-4 w-4" /> Stream
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-6">
              <BlurCard className="animate-on-scroll">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-lbd-accent" />
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-lbd-surface flex-shrink-0">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium hover:text-lbd-accent transition-colors">
                          <Link to={`/music/event/${event.id}`}>{event.title}</Link>
                        </h3>
                        <div className="text-xs text-lbd-muted flex flex-col">
                          <span>{event.date}</span>
                          {event.time && <span>{event.time}</span>}
                          {event.venue && <span>at {event.venue}</span>}
                          {event.platform && <span>via {event.platform}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/music/events" className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors mt-4">
                  All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">Latest Updates</h2>
            <Link to="/music/updates" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All Updates <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {musicUpdates.map((update, index) => (
              <BlurCard 
                key={update.id} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={update.image} 
                    alt={update.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="text-xs text-lbd-muted mb-2">{update.date}</div>
                <h3 className="text-xl font-bold mb-2 hover:text-lbd-accent transition-colors">
                  <Link to={`/music/update/${update.id}`}>{update.title}</Link>
                </h3>
                <p className="text-lbd-muted mb-4">{update.excerpt}</p>
                <Link to={`/music/update/${update.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* My Tracks Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold animate-on-scroll">My Tracks</h2>
            <Link to="/music/tracks" className="text-lbd-accent hover:text-lbd-accent/80 transition-colors flex items-center animate-on-scroll">
              All Tracks <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {myTracks.map((track, index) => (
              <BlurCard 
                key={track.id} 
                className="h-full animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
                hoverEffect
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-lbd-surface">
                  <img 
                    src={track.image} 
                    alt={track.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-lbd-accent">{track.genre}</span>
                  <div className="flex items-center text-xs text-lbd-muted">
                    <Clock className="h-3 w-3 mr-1" />
                    {track.duration}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 hover:text-lbd-accent transition-colors">
                  <Link to={`/music/track/${track.id}`}>{track.title}</Link>
                </h3>
                <p className="text-sm text-lbd-muted mb-3">Released: {track.releaseDate}</p>
                <div className="flex gap-2">
                  <Link to={`/music/track/${track.id}`} className="inline-flex items-center text-lbd-accent hover:text-lbd-accent/80 transition-colors text-sm">
                    Listen <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </BlurCard>
            ))}
          </div>
        </div>
      </section>

      {/* Music Production Blog */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-on-scroll">Music Production Blog</h2>
          
          <BlurCard className="animate-on-scroll">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1526394931762-8a4116f6e2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80" 
                    alt="Music production setup" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">My Production Process</h3>
                <p className="text-lbd-muted mb-4">
                  I often get asked about my music production process and the equipment I use. In this ongoing blog series, I'll be sharing insights into my creative workflow, from initial inspiration to final mastering.
                </p>
                <p className="text-lbd-muted mb-6">
                  Whether you're a fellow producer or just curious about how electronic music is made, you'll find detailed breakdowns of my techniques, favorite plugins, hardware setup, and the stories behind specific tracks.
                </p>
                <Link to="/music/production-blog" className="inline-flex items-center bg-lbd-accent hover:bg-lbd-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Read the Production Blog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </BlurCard>
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          <BlurCard className="animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-lbd-muted mb-6">
                  Subscribe to receive notifications about new music releases, upcoming performances, behind-the-scenes content, and exclusive tracks.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
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
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Music equipment" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </BlurCard>
        </div>
      </section>
    </div>
  );
};

export default Music;
