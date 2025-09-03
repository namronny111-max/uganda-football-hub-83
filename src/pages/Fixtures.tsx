import { useState, useMemo } from "react";
import { Calendar, Search, Filter, Clock, MapPin, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [selectedWeek, setSelectedWeek] = useState("current");

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
      
      {/* Gradient Hero Header */}
      <div className="relative bg-gradient-to-r from-primary via-primary-glow to-primary-accent text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Matches</h1>
        </div>
      </div>
      
      <main className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 py-8">
        {/* Compact Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Select value={selectedCompetition} onValueChange={setSelectedCompetition}>
            <SelectTrigger className="w-48 h-9 text-sm">
              <SelectValue placeholder="Premier League" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Competitions</SelectItem>
              <SelectItem value="Uganda Premier League">Uganda Premier League</SelectItem>
              <SelectItem value="CAF Champions League">CAF Champions League</SelectItem>
              <SelectItem value="Uganda Cup">Uganda Cup</SelectItem>
            </SelectContent>
          </Select>

          <Select value="2025/26" onValueChange={() => {}}>
            <SelectTrigger className="w-24 h-9 text-sm">
              <SelectValue placeholder="2025/26" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025/26">2025/26</SelectItem>
              <SelectItem value="2024/25">2024/25</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-32 h-9 text-sm">
              <SelectValue placeholder="Matchweek 2" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Matchweek 2</SelectItem>
              <SelectItem value="1">Matchweek 1</SelectItem>
              <SelectItem value="3">Matchweek 3</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-20 h-9 text-sm">
              <SelectValue placeholder="Clubs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" className="h-9 px-3 text-sm">
            Reset
          </Button>
        </div>

        {/* Week Navigation */}
        <div className="flex items-center justify-center mb-8">
          <Button variant="ghost" size="sm" className="p-2">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="mx-8 text-center">
            <h2 className="text-lg font-semibold">Matchweek 2</h2>
            <p className="text-sm text-muted-foreground">Fri 22 Aug - Mon 25 Aug</p>
          </div>
          <Button variant="ghost" size="sm" className="p-2">
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="ml-8 text-sm">
            See all →
          </Button>
        </div>

        {/* Fixtures List */}
        {groupedFixtures.length > 0 ? (
          <div className="space-y-8">
            {groupedFixtures.map(([date, matches]) => (
              <div key={date} className="space-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-medium text-foreground">
                    {formatDate(date)}
                  </h3>
                  <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground">
                    See all →
                  </Button>
                </div>

                <div className="space-y-1">
                  {matches.map((match) => (
                    <div key={match.id} className="bg-card hover:bg-muted/50 transition-colors rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 min-w-[60px]">
                          {match.status === "completed" ? (
                            <span className="text-xs text-muted-foreground font-medium">FT</span>
                          ) : match.status === "live" ? (
                            <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                              LIVE
                            </Badge>
                          ) : (
                            <span className="text-xs text-muted-foreground font-medium">{match.time}</span>
                          )}
                        </div>

                        {/* Teams and Score */}
                        <div className="flex-1 flex items-center justify-center gap-6">
                          <div className="flex items-center gap-2 min-w-[140px] justify-end">
                            <span className="text-sm font-medium">{match.homeTeam}</span>
                            <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {match.homeTeam.charAt(0)}
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            {match.status === "completed" || match.status === "live" ? (
                              <div className="text-lg font-bold text-center">
                                <span className="text-foreground">{match.homeScore}</span>
                                <span className="text-muted-foreground mx-2">-</span>
                                <span className="text-foreground">{match.awayScore}</span>
                              </div>
                            ) : (
                              <div className="text-sm text-muted-foreground font-medium">vs</div>
                            )}
                          </div>

                          <div className="flex items-center gap-2 min-w-[140px] justify-start">
                            <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {match.awayTeam.charAt(0)}
                            </div>
                            <span className="text-sm font-medium">{match.awayTeam}</span>
                          </div>
                        </div>

                        {/* Empty space for alignment */}
                        <div className="min-w-[60px]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No fixtures found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Fixtures;