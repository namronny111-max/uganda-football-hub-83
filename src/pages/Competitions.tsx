import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Search, 
  Filter,
  Crown,
  Award,
  TrendingUp,
  Clock,
  Target,
  Medal
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Competition {
  id: string;
  name: string;
  description: string;
  season: string;
  teams: number;
  status: "active" | "upcoming" | "completed";
  icon: React.ReactNode;
  color: string;
  matches: number;
  startDate: string;
  endDate: string;
  prize: string;
  lastWinner?: string;
}

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
  status: "scheduled" | "live" | "completed";
  homeScore?: number;
  awayScore?: number;
}

const Competitions = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("2024-25");

  const competitions: Competition[] = [
    {
      id: "upl",
      name: "Uganda Premier League",
      description: "Uganda's top-tier professional football league featuring the country's best clubs competing for the championship.",
      season: "2024/25",
      teams: 16,
      status: "active",
      icon: <Crown className="h-8 w-8" />,
      color: "from-primary to-primary-glow",
      matches: 240,
      startDate: "Aug 2024",
      endDate: "May 2025",
      prize: "UGX 500M",
      lastWinner: "SC Villa"
    },
    {
      id: "stanbic-cup",
      name: "Stanbic Uganda Cup",
      description: "The premier knockout cup competition open to all registered football clubs in Uganda.",
      season: "2024/25",
      teams: 64,
      status: "active",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-accent to-accent-glow",
      matches: 63,
      startDate: "Sep 2024",
      endDate: "Jul 2025",
      prize: "UGX 300M",
      lastWinner: "Express FC"
    },
    {
      id: "big-league",
      name: "FUFA Big League",
      description: "The second-tier league providing a pathway for clubs to reach the Uganda Premier League.",
      season: "2024/25",
      teams: 20,
      status: "active",
      icon: <Award className="h-8 w-8" />,
      color: "from-secondary to-primary",
      matches: 380,
      startDate: "Aug 2024",
      endDate: "Jun 2025",
      prize: "UGX 200M"
    },
    {
      id: "women-league",
      name: "FUFA Women's League",
      description: "The top division for women's football in Uganda, promoting gender equality in sports.",
      season: "2024/25",
      teams: 12,
      status: "active",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-primary to-accent",
      matches: 132,
      startDate: "Sep 2024",
      endDate: "May 2025",
      prize: "UGX 150M",
      lastWinner: "Kawempe Muslim WFC"
    },
    {
      id: "juniors-league",
      name: "FUFA Juniors League",
      description: "Youth development competition fostering the next generation of Ugandan football talent.",
      season: "2024/25",
      teams: 24,
      status: "active",
      icon: <Star className="h-8 w-8" />,
      color: "from-accent to-secondary",
      matches: 276,
      startDate: "Sep 2024",
      endDate: "Apr 2025",
      prize: "UGX 100M"
    },
    {
      id: "beach-soccer",
      name: "Beach Soccer Championship",
      description: "Exciting beach soccer competition showcasing skills on sand with fast-paced action.",
      season: "2025",
      teams: 8,
      status: "upcoming",
      icon: <Target className="h-8 w-8" />,
      color: "from-warning to-accent",
      matches: 24,
      startDate: "Mar 2025",
      endDate: "Apr 2025",
      prize: "UGX 75M"
    }
  ];

  const upcomingMatches: Match[] = [
    {
      id: "1",
      homeTeam: "SC Villa",
      awayTeam: "KCCA FC",
      date: "Sep 15, 2024",
      time: "16:00",
      venue: "Mandela National Stadium",
      competition: "Uganda Premier League",
      status: "scheduled"
    },
    {
      id: "2",
      homeTeam: "Vipers SC",
      awayTeam: "Express FC",
      date: "Sep 16, 2024",
      time: "15:30",
      venue: "St. Mary's Stadium",
      competition: "Uganda Premier League",
      status: "scheduled"
    },
    {
      id: "3",
      homeTeam: "URA FC",
      awayTeam: "BUL FC",
      date: "Sep 17, 2024",
      time: "16:00",
      venue: "Arena of Visions",
      competition: "Uganda Premier League",
      status: "live",
      homeScore: 1,
      awayScore: 0
    }
  ];

  const filteredCompetitions = competitions.filter(comp => {
    const matchesFilter = selectedFilter === "all" || comp.status === selectedFilter;
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comp.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl rotate-45 blur-2xl animate-bounce-subtle"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-display text-gradient-primary mb-6">
                FUFA Competitions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover all the exciting football competitions organized by the Federation of Uganda Football Associations. 
                From premier leagues to grassroots tournaments, follow the action across all levels.
              </p>
              
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search competitions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 bg-card/60 backdrop-blur-sm border-primary/20 rounded-xl"
                  />
                </div>
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-full md:w-48 h-12 bg-card/60 backdrop-blur-sm border-primary/20 rounded-xl">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Competitions</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Competitions Grid */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCompetitions.map((competition) => (
                <Card key={competition.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="relative p-6">
                    <div className={cn(
                      "absolute inset-0 opacity-10 bg-gradient-to-br transition-opacity duration-500 group-hover:opacity-20",
                      competition.color
                    )}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "p-3 rounded-2xl bg-gradient-to-br text-white shadow-lg",
                          competition.color
                        )}>
                          {competition.icon}
                        </div>
                        <Badge 
                          variant={competition.status === "active" ? "default" : "secondary"}
                          className={cn(
                            "capitalize font-semibold",
                            competition.status === "active" && "bg-success text-success-foreground",
                            competition.status === "upcoming" && "bg-warning text-warning-foreground",
                            competition.status === "completed" && "bg-muted text-muted-foreground"
                          )}
                        >
                          {competition.status}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {competition.name}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {competition.description}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-4">
                      {/* Competition Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-muted/20 rounded-xl">
                          <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
                          <div className="text-lg font-bold">{competition.teams}</div>
                          <div className="text-xs text-muted-foreground">Teams</div>
                        </div>
                        <div className="text-center p-3 bg-muted/20 rounded-xl">
                          <Calendar className="h-4 w-4 mx-auto mb-1 text-accent" />
                          <div className="text-lg font-bold">{competition.matches}</div>
                          <div className="text-xs text-muted-foreground">Matches</div>
                        </div>
                      </div>
                      
                      {/* Competition Details */}
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Season:</span>
                          <span className="font-semibold">{competition.season}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-semibold">{competition.startDate} - {competition.endDate}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Prize Pool:</span>
                          <span className="font-bold text-primary">{competition.prize}</span>
                        </div>
                        {competition.lastWinner && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Last Winner:</span>
                            <span className="font-semibold flex items-center">
                              <Medal className="h-3 w-3 mr-1 text-accent" />
                              {competition.lastWinner}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <Button className="w-full mt-4 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Matches */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display text-gradient-primary mb-4">
                Upcoming Matches
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Don't miss the exciting upcoming fixtures across all FUFA competitions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 border-primary/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Match Header */}
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="text-xs bg-primary/10 border-primary/30 text-primary">
                          {match.competition}
                        </Badge>
                        {match.status === "live" && (
                          <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                            LIVE
                          </Badge>
                        )}
                      </div>
                      
                      {/* Teams */}
                      <div className="text-center space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg">{match.homeTeam}</span>
                          {match.status === "live" && (
                            <span className="text-2xl font-bold text-primary">
                              {match.homeScore} - {match.awayScore}
                            </span>
                          )}
                          {match.status === "scheduled" && (
                            <span className="text-muted-foreground text-sm">vs</span>
                          )}
                          <span className="font-semibold text-lg">{match.awayTeam}</span>
                        </div>
                      </div>
                      
                      {/* Match Details */}
                      <div className="space-y-2 pt-2 border-t border-border/50">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {match.date}
                          <Clock className="h-4 w-4 ml-4 mr-2" />
                          {match.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {match.venue}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-4 hover:bg-primary/10">
                        {match.status === "live" ? "Watch Live" : "Match Details"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                View All Fixtures
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Competitions;