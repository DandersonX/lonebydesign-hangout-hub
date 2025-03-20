
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Shop", path: "/shop" },
    { name: "My Music", path: "/music" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "backdrop-blur-xl bg-black/60 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-white flex items-center gap-1"
        >
          <span className="text-gradient">Lone</span>
          <span>By</span>
          <span className="text-gradient">Design</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "text-lbd-accent"
                  : "text-lbd-text hover:text-lbd-accent",
                "hover:scale-105 transition-transform"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/shop/cart"
            className="p-2 rounded-full hover:bg-lbd-accent/10 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-dark animate-fade-in">
          <nav className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  location.pathname === item.path
                    ? "text-lbd-accent"
                    : "text-lbd-text"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/shop/cart"
              className="flex items-center gap-2 py-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
