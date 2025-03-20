
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lbd-darker border-t border-white/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold flex items-center gap-1">
              <span className="text-gradient">Lone</span>
              <span className="text-white">By</span>
              <span className="text-gradient">Design</span>
            </Link>
            <p className="text-lbd-muted text-sm">
              A cool hangout for blog content, my personal music, and shop.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-lbd-muted hover:text-lbd-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-lbd-muted hover:text-lbd-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-lbd-muted hover:text-lbd-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-lbd-muted hover:text-lbd-accent transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Content</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-lbd-muted hover:text-lbd-accent transition-colors">Blog</Link></li>
              <li><Link to="/music" className="text-lbd-muted hover:text-lbd-accent transition-colors">My Music</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/computer-parts" className="text-lbd-muted hover:text-lbd-accent transition-colors">Computer Parts</Link></li>
              <li><Link to="/shop/pcs" className="text-lbd-muted hover:text-lbd-accent transition-colors">PCs</Link></li>
              <li><Link to="/shop/books" className="text-lbd-muted hover:text-lbd-accent transition-colors">Books</Link></li>
              <li><Link to="/shop/journals" className="text-lbd-muted hover:text-lbd-accent transition-colors">Journals</Link></li>
              <li><Link to="/shop/vinyl" className="text-lbd-muted hover:text-lbd-accent transition-colors">Vinyl</Link></li>
              <li><Link to="/shop/music" className="text-lbd-muted hover:text-lbd-accent transition-colors">Music</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Info</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-lbd-muted hover:text-lbd-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-lbd-muted hover:text-lbd-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-lbd-muted hover:text-lbd-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-lbd-muted hover:text-lbd-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-lbd-muted text-sm">
          <p>© {currentYear} LoneByDesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
