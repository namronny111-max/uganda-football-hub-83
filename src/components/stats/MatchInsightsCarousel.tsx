import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Trophy } from "lucide-react";

const MatchInsightsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingMatches = [
    {
      id: 1,
      homeTeam: "KCCA FC",
      awayTeam: "Vipers SC",
      date: "2024-01-20",
      time: "15:00",
      venue: "MTN Omondi Stadium",
      competition: "Uganda Premier League",
      prediction: "Close match",
      lastMeetingResult: "1-2"
    },
    {
      id: 2,
      homeTeam: "SC Villa",
      awayTeam: "Express FC", 
      date: "2024-01-21",
      time: "17:30",
      venue: "Mandela National Stadium",
      competition: "Uganda Premier League",
      prediction: "Home advantage",
      lastMeetingResult: "2-1"
    },
    {
      id: 3,
      homeTeam: "URA FC",
      awayTeam: "BUL FC",
      date: "2024-01-22",
      time: "15:00",
      venue: "FUFA Technical Centre",
      competition: "Uganda Premier League",
      prediction: "High scoring",
      lastMeetingResult: "3-0"
    }
  ];

  const recentResults = [
    {
      id: 1,
      homeTeam: "KCCA FC",
      awayTeam: "Police FC",
      homeScore: 2,
      awayScore: 0,
      date: "2024-01-14",
      venue: "MTN Omondi Stadium",
      highlights: ["Mukwala 23'", "Aheebwa 67'"]
    },
    {
      id: 2,
      homeTeam: "Vipers SC", 
      awayTeam: "Mbarara City",
      homeScore: 3,
      awayScore: 1,
      date: "2024-01-14",
      venue: "St. Mary's Stadium",
      highlights: ["Karisa 12'", "Mukwala 45'", "Karisa 78'"]
    },
    {
      id: 3,
      homeTeam: "SC Villa",
      awayTeam: "Arua Hill",
      homeScore: 1,
      awayScore: 1,
      date: "2024-01-13",
      venue: "Mandela National Stadium", 
      highlights: ["Ssekiganda 34'", "Okello 89'"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingMatches.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingMatches.length) % upcomingMatches.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Upcoming Fixtures Carousel */}
      <Card className="card-uganda">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Upcoming Fixtures
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={prevSlide}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={nextSlide}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingMatches.map((match, index) => (
              <div
                key={match.id}
                className={`transition-all duration-300 ${
                  index === currentSlide ? 'block' : 'hidden'
                }`}
              >
                <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {match.competition}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {match.prediction}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {match.homeTeam.split(' ')[0].charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{match.homeTeam}</div>
                        <div className="text-xs text-muted-foreground">Home</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-muted-foreground">VS</div>
                      <div className="text-xs text-muted-foreground">
                        Last: {match.lastMeetingResult}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-semibold">{match.awayTeam}</div>
                        <div className="text-xs text-muted-foreground">Away</div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold">
                        {match.awayTeam.split(' ')[0].charAt(0)}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{formatDate(match.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{match.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {upcomingMatches.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Results */}
      <Card className="card-uganda">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Recent Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentResults.map((result) => (
              <div key={result.id} className="p-4 rounded-lg bg-muted/20 border border-border/30 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">
                    {formatDate(result.date)}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    FT
                  </Badge>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {result.homeTeam.charAt(0)}
                    </div>
                    <span className="font-medium">{result.homeTeam}</span>
                  </div>

                  <div className="px-4 py-2 bg-primary/10 rounded-lg">
                    <span className="text-xl font-bold text-primary">
                      {result.homeScore} - {result.awayScore}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-medium">{result.awayTeam}</span>
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {result.awayTeam.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{result.venue}</span>
                </div>

                <div className="mt-3 pt-3 border-t border-border/30">
                  <div className="text-xs text-muted-foreground mb-1">Key moments:</div>
                  <div className="flex flex-wrap gap-2">
                    {result.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchInsightsCarousel;