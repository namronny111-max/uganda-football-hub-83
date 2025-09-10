import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/upl-hero-main.jpg";
import HorizontalResults from "@/components/HorizontalResults";

interface NewsSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  date: string;
  isBreaking?: boolean;
}

interface Fixture {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  isLive?: boolean;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsSlides: NewsSlide[] = [
    {
      id: 1,
      title: "Uganda Cranes Qualify for AFCON 2025", 
      subtitle: "Historic qualification secured",
      description: "The Uganda National Team has successfully qualified for the 2025 Africa Cup of Nations after a decisive victory in the final qualifier.",
      image: heroImage,
      category: "NATIONAL TEAM",
      date: "29/08/2025",
      isBreaking: true
    },
    {
      id: 2,
      title: "FUFA Women's League Expansion",
      subtitle: "Major investment in women's football",
      description: "FUFA announces significant expansion of the women's league with new clubs and enhanced development programs.",
      image: heroImage,
      category: "DEVELOPMENT",
      date: "28/08/2025"
    },
    {
      id: 3,
      title: "New Football Development Centers",
      subtitle: "Grassroots program expansion",
      description: "FUFA opens five new regional development centers to nurture young talent and promote football across Uganda.",
      image: heroImage,
      category: "GRASSROOTS",
      date: "27/08/2025"
    }
  ];

  const upcomingFixtures: Fixture[] = [
    {
      id: 1,
      homeTeam: "SC Villa",
      awayTeam: "KCCA FC",
      date: "Sep 1",
      time: "16:00",
      venue: "Mandela National Stadium"
    },
    {
      id: 2,
      homeTeam: "Vipers SC",
      awayTeam: "Express FC",
      date: "Sep 2", 
      time: "15:30",
      venue: "St. Mary's Stadium"
    },
    {
      id: 3,
      homeTeam: "URA FC",
      awayTeam: "BUL FC",
      date: "Sep 3",
      time: "16:00",
      venue: "Arena of Visions",
      isLive: true
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [newsSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsSlides.length) % newsSlides.length);
  };

  const currentNews = newsSlides[currentSlide];

  return (
    <section className="relative overflow-hidden">
      <HorizontalResults />
      <div className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center">
        {/* Modern Hero Background with floating elements */}
        <div className="absolute inset-0">
          {/* Primary background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10s] ease-out"
            style={{ backgroundImage: `url(${currentNews.image})` }}
          />
          {/* Modern gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          {/* Floating geometric elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl rotate-45 blur-lg animate-bounce-subtle"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-full animate-pulse-glow"></div>
        </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            {/* Category and Breaking News Badge */}
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground animate-bounce-subtle">
                {currentNews.category}
              </span>
              {currentNews.isBreaking && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-primary text-primary-foreground animate-pulse-glow">
                  BREAKING NEWS
                </span>
              )}
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display leading-tight">
                <span className="text-gradient-primary">{currentNews.title}</span>
              </h1>
              <h2 className="text-lg md:text-xl text-accent font-semibold">
                {currentNews.subtitle}
              </h2>
              <p className="text-base text-foreground/90 max-w-2xl leading-relaxed">
                {currentNews.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Button size="sm" className="btn-hero">
                Read Full Story
              </Button>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                View Programs
              </Button>
            </div>

            {/* Slide Navigation */}
            <div className="flex items-center space-x-4 pt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-2">
                {newsSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentSlide
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/50 hover:bg-primary/50"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="hover:bg-primary/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Modern Upcoming Matches Sidebar */}
          <div className="space-y-6">
            <div className="relative">
              {/* Glassmorphism container */}
              <div className="relative backdrop-blur-md bg-card/60 border border-primary/20 rounded-3xl p-6 shadow-elegant overflow-hidden">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-display text-gradient-primary flex items-center">
                      <div className="p-2 bg-primary/10 rounded-xl mr-3">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      Next Matches
                    </h3>
                    <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingFixtures.map((fixture, index) => (
                      <div key={fixture.id} className="group relative">
                        <div className="relative p-4 rounded-2xl bg-gradient-to-r from-card to-card/80 border border-border/50 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:scale-[1.02]">
                          {/* Match teams */}
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-foreground/90 mb-1">
                                {fixture.homeTeam}
                              </div>
                              <div className="text-xs text-muted-foreground">vs</div>
                              <div className="text-sm font-semibold text-foreground/90">
                                {fixture.awayTeam}
                              </div>
                            </div>
                            {fixture.isLive && (
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold text-primary">LIVE</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Match details */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-3">
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1 text-primary/60" />
                                {fixture.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1 text-accent/60" />
                                {fixture.time}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-2 flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1 text-secondary/60" />
                            <span className="truncate">{fixture.venue}</span>
                          </div>
                          
                          {/* Decorative line */}
                          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30 hover:bg-primary/10 transition-all duration-300">
                    View All Fixtures
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;