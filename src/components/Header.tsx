import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import uplLogo from "@/assets/upl-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Fixtures", href: "/fixtures" },
    { name: "Results", href: "/results" },
    { name: "League Table", href: "/table" },
    { name: "Clubs", href: "/clubs" },
    { name: "Players", href: "/players" },
    { name: "News", href: "/news" },
    { name: "Statistics", href: "/stats" },
    { name: "Live", href: "/live", isLive: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
        {/* Top social bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <span>Follow UPL:</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">TikTok</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Bell className="h-4 w-4 mr-1" />
              Notifications
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Search className="h-4 w-4 mr-1" />
              Search
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={uplLogo} alt="UPL Logo" className="h-12 w-12" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-display text-gradient-primary">
                Uganda Premier League
              </h1>
              <p className="text-xs text-muted-foreground">StarTimes Uganda Premier League</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  item.isLive &&
                    "bg-gradient-primary text-primary-foreground animate-pulse-glow font-bold"
                )}
              >
                {item.name}
                {item.isLive && (
                  <span className="ml-1 inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300",
                    "hover:bg-primary/10 hover:text-primary",
                    item.isLive &&
                      "bg-gradient-primary text-primary-foreground animate-pulse-glow font-bold"
                  )}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {item.isLive && (
                      <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                    )}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
        </div>
    </header>
  );
};

export default Header;