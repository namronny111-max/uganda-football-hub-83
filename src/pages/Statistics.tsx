import { useState } from "react";
import { Trophy, TrendingUp, Users, Target, Filter, Calendar, Search, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LeagueStandingsChart from "@/components/stats/LeagueStandingsChart";
import TopPlayersSection from "@/components/stats/TopPlayersSection";
import TeamStatsChart from "@/components/stats/TeamStatsChart";
import MatchInsightsCarousel from "@/components/stats/MatchInsightsCarousel";

const Statistics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("2024");
  const [selectedTeam, setSelectedTeam] = useState("all");

  const statsCards = [
    {
      title: "Total Goals",
      value: "847",
      change: "+12%",
      icon: Target,
      trend: "up",
      color: "text-primary"
    },
    {
      title: "Total Matches",
      value: "156",
      change: "+8%", 
      icon: Trophy,
      trend: "up",
      color: "text-accent"
    },
    {
      title: "Active Players",
      value: "420",
      change: "+5%",
      icon: Users,
      trend: "up",
      color: "text-success"
    },
    {
      title: "Avg Goals/Match",
      value: "2.4",
      change: "+0.2",
      icon: TrendingUp,
      trend: "up",
      color: "text-warning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-4">
            League Statistics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics and insights from the Uganda Premier League with interactive charts and detailed player statistics
          </p>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-uganda group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {stat.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </h3>
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-success/10 text-success border-success/20"
                        >
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full bg-primary/10 ${stat.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Filters */}
        <Card className="mb-8 card-uganda">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search players, teams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                  <SelectTrigger className="w-full sm:w-40">
                    <Calendar className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024 Season</SelectItem>
                    <SelectItem value="2023">2023 Season</SelectItem>
                    <SelectItem value="2022">2022 Season</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Team" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Teams</SelectItem>
                    <SelectItem value="kcca">KCCA FC</SelectItem>
                    <SelectItem value="vipers">Vipers SC</SelectItem>
                    <SelectItem value="villa">SC Villa</SelectItem>
                    <SelectItem value="express">Express FC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Statistics Tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="players" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Players
            </TabsTrigger>
            <TabsTrigger value="teams" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Teams
            </TabsTrigger>
            <TabsTrigger value="matches" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Matches
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <LeagueStandingsChart />
              <TeamStatsChart />
            </div>
            <MatchInsightsCarousel />
          </TabsContent>

          <TabsContent value="players">
            <TopPlayersSection searchTerm={searchTerm} selectedTeam={selectedTeam} />
          </TabsContent>

          <TabsContent value="teams">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TeamStatsChart />
              <Card className="card-uganda">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Team Performance Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Team comparison charts coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="matches">
            <MatchInsightsCarousel />
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-12 card-uganda">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Quick Actions</span>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                <Trophy className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">League Table</div>
                  <div className="text-sm opacity-75">View current standings</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                <Calendar className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Fixtures</div>
                  <div className="text-sm opacity-75">Upcoming matches</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                <Target className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Top Scorers</div>
                  <div className="text-sm opacity-75">Leading goal scorers</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Statistics;