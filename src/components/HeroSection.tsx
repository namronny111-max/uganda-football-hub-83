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
      title: "2025/26 Season Fixtures Released", 
      subtitle: "Round 1 starts September 26th",
      description: "The StarTimes Uganda Premier League 2025/26 season fixtures have officially been released with exciting matchups planned.",
      image: heroImage,
      category: "FIXTURES",
      date: "29/08/2025",
      isBreaking: true
    },
    {
      id: 2,
      title: "Villa and URA Advance in FUFA Super 8",
      subtitle: "First leg advantage secured",
      description: "SC Villa and URA FC earned crucial first leg advantages in the ongoing FUFA Super 8 competition.",
      image: heroImage,
      category: "MATCH REPORT",
      date: "28/08/2025"
    },
    {
      id: 3,
      title: "Onyango Returns to National Squad",
      subtitle: "2026 World Cup Qualifiers",
      description: "Captain Denis Onyango has been recalled to the Uganda Cranes squad for the upcoming World Cup qualifiers.",
      image: heroImage,
      category: "INTERNATIONAL",
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
    <section className="relative">
      <HorizontalResults />
      <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${currentNews.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                <span className="text-gradient-primary">{currentNews.title}</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-accent font-semibold">
                {currentNews.subtitle}
              </h2>
              <p className="text-lg text-foreground/90 max-w-2xl leading-relaxed">
                {currentNews.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-hero">
                Read Full Story
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Watch Highlights
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

          {/* Upcoming Fixtures Sidebar */}
          <div className="space-y-4">
            <div className="card-uganda p-6 space-y-4">
              <h3 className="text-xl font-bold font-display text-gradient-accent flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Fixtures
              </h3>
              
              <div className="space-y-3">
                {upcomingFixtures.map((fixture) => (
                  <Card key={fixture.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">
                          {fixture.homeTeam} vs {fixture.awayTeam}
                        </div>
                        {fixture.isLive && (
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full animate-pulse">
                            LIVE
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-xs text-muted-foreground space-x-3">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {fixture.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {fixture.time}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {fixture.venue}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All Fixtures
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;