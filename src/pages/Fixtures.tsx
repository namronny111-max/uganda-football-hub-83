import { useState, useMemo } from "react";
import { Calendar, Search, Filter, Clock, MapPin, Trophy, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  competition: string;
  status: "upcoming" | "live" | "completed";
  homeScore?: number;
  awayScore?: number;
  liveMinute?: number;
}

const Fixtures = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompetition, setSelectedCompetition] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const mockFixtures: Match[] = [
    {
      id: "1",
      date: "2024-01-15",
      time: "15:00",
      homeTeam: "KCCA FC",
      awayTeam: "Vipers SC",
      venue: "MTN Omondi Stadium",
      competition: "Uganda Premier League",
      status: "live",
      homeScore: 1,
      awayScore: 0,
      liveMinute: 78
    },
    {
      id: "2",
      date: "2024-01-15",
      time: "17:30",
      homeTeam: "SC Villa",
      awayTeam: "Express FC",
      venue: "Mandela National Stadium",
      competition: "Uganda Premier League",
      status: "upcoming"
    },
    {
      id: "3",
      date: "2024-01-16",
      time: "15:00",
      homeTeam: "BUL FC",
      awayTeam: "URA FC",
      venue: "FUFA Technical Centre",
      competition: "Uganda Premier League",
      status: "upcoming"
    },
    {
      id: "4",
      date: "2024-01-16",
      time: "17:30",
      homeTeam: "Wakiso Giants",
      awayTeam: "Arua Hill",
      venue: "Kabaka Kyabaggu Stadium",
      competition: "Uganda Premier League",
      status: "upcoming"
    },
    {
      id: "5",
      date: "2024-01-14",
      time: "15:00",
      homeTeam: "Police FC",
      awayTeam: "Mbarara City",
      venue: "Police Grounds",
      competition: "Uganda Premier League",
      status: "completed",
      homeScore: 1,
      awayScore: 2
    },
    {
      id: "6",
      date: "2024-01-17",
      time: "19:00",
      homeTeam: "KCCA FC",
      awayTeam: "Al Hilal",
      venue: "MTN Omondi Stadium",
      competition: "CAF Champions League",
      status: "upcoming"
    }
  ];

  const filteredFixtures = useMemo(() => {
    return mockFixtures.filter(match => {
      const matchesSearch = 
        match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.venue.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCompetition = selectedCompetition === "all" || match.competition === selectedCompetition;
      const matchesStatus = selectedStatus === "all" || match.status === selectedStatus;
      
      return matchesSearch && matchesCompetition && matchesStatus;
    });
  }, [searchTerm, selectedCompetition, selectedStatus, mockFixtures]);

  const getStatusBadge = (match: Match) => {
    switch (match.status) {
      case "live":
        return (
          <Badge variant="destructive" className="pulse-live text-xs font-medium">
            LIVE {match.liveMinute}'
          </Badge>
        );
      case "upcoming":
        return (
          <Badge variant="secondary" className="text-xs font-medium">
            <Clock className="w-3 h-3 mr-1" />
            {match.time}
          </Badge>
        );
      case "completed":
        return (
          <Badge variant="outline" className="text-xs font-medium">
            FT
          </Badge>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const groupedFixtures = useMemo(() => {
    const groups: Record<string, Match[]> = {};
    filteredFixtures.forEach(match => {
      if (!groups[match.date]) {
        groups[match.date] = [];
      }
      groups[match.date].push(match);
    });
    return Object.entries(groups).sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());
  }, [filteredFixtures]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-4">
            Fixtures & Results
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with all upcoming matches, live scores, and recent results from the Uganda Premier League
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 card-uganda">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search teams, venues..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Select value={selectedCompetition} onValueChange={setSelectedCompetition}>
                  <SelectTrigger className="w-full sm:w-56">
                    <Trophy className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Competition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Competitions</SelectItem>
                    <SelectItem value="Uganda Premier League">Uganda Premier League</SelectItem>
                    <SelectItem value="CAF Champions League">CAF Champions League</SelectItem>
                    <SelectItem value="Uganda Cup">Uganda Cup</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full sm:w-44">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Matches</SelectItem>
                    <SelectItem value="live">Live</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fixtures List */}
        {groupedFixtures.length > 0 ? (
          <div className="space-y-8">
            {groupedFixtures.map(([date, matches]) => (
              <div key={date} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">
                    {formatDate(date)}
                  </h2>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="grid gap-4">
                  {matches.map((match) => (
                    <Card key={match.id} className="card-uganda hover:shadow-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          {/* Match Info */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <Badge variant="outline" className="text-xs">
                                {match.competition}
                              </Badge>
                              {getStatusBadge(match)}
                            </div>

                            {/* Teams */}
                            <div className="flex items-center justify-between gap-4 mb-4">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {match.homeTeam.charAt(0)}
                                </div>
                                <span className="font-semibold text-foreground">
                                  {match.homeTeam}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 px-4">
                                {match.status === "completed" || match.status === "live" ? (
                                  <div className="text-2xl font-bold text-primary">
                                    {match.homeScore} - {match.awayScore}
                                  </div>
                                ) : (
                                  <div className="text-lg font-medium text-muted-foreground">
                                    VS
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center gap-3 flex-1 justify-end">
                                <span className="font-semibold text-foreground text-right">
                                  {match.awayTeam}
                                </span>
                                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {match.awayTeam.charAt(0)}
                                </div>
                              </div>
                            </div>

                            {/* Venue */}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{match.venue}</span>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="lg:ml-6">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full lg:w-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              View Details
                              <ChevronDown className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                <Calendar className="w-16 h-16 mx-auto text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No fixtures found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Fixtures;