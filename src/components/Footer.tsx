import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import uplLogo from "@/assets/upl-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Fixtures", href: "/fixtures" },
    { name: "Results", href: "/results" },
    { name: "League Table", href: "/table" },
    { name: "Clubs", href: "/clubs" },
    { name: "Players", href: "/players" },
    { name: "Statistics", href: "/stats" }
  ];

  const aboutLinks = [
    { name: "About UPL", href: "/about" },
    { name: "Board Members", href: "/board" },
    { name: "Staff", href: "/staff" },
    { name: "History", href: "/history" },
    { name: "Rules & Regulations", href: "/rules" },
    { name: "Media Center", href: "/media" }
  ];

  const partners = [
    { name: "StarTimes", logo: "https://via.placeholder.com/120x60/666/fff?text=StarTimes" },
    { name: "FUFA", logo: "https://via.placeholder.com/120x60/666/fff?text=FUFA" },
    { name: "Coca Cola", logo: "https://via.placeholder.com/120x60/666/fff?text=Coca+Cola" },
    { name: "MTN", logo: "https://via.placeholder.com/120x60/666/fff?text=MTN" },
    { name: "Airtel", logo: "https://via.placeholder.com/120x60/666/fff?text=Airtel" },
    { name: "Nile Breweries", logo: "https://via.placeholder.com/120x60/666/fff?text=Nile" }
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-card to-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={uplLogo} alt="UPL Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold font-display text-gradient-primary">
                  Uganda Premier League
                </h3>
                <p className="text-sm text-muted-foreground">StarTimes UPL</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The official website of the StarTimes Uganda Premier League - Uganda's premier football competition, showcasing the best of Ugandan football talent and passion.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-display">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-display">About</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-display">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Uganda Premier League Offices</p>
                  <p>FUFA House, Mengo</p>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>+256 414 505 500</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>info@upl.co.ug</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="font-medium text-sm mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h4 className="text-center text-lg font-semibold font-display mb-6 text-gradient-accent">
            Our Partners & Sponsors
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>&copy; 2025 Uganda Premier League. All rights reserved.</p>
              <p className="mt-1">Powered by passion for Ugandan football</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="/accessibility" className="hover:text-primary transition-colors">Accessibility</a>
              <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;