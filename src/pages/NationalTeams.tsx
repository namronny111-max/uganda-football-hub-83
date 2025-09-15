import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Trophy, Calendar, MapPin, Star, Search, Filter, ChevronRight, Award, Shield } from "lucide-react";

const nationalTeams = [
  {
    id: "uganda-cranes",
    name: "Uganda Cranes",
    category: "senior",
    gender: "men",
    description: "Uganda's senior men's national football team",
    founded: "1924",
    coach: "Paul Put",
    captain: "Emmanuel Okwi",
    fifaRanking: "85",
    achievements: ["AFCON 1978 Runners-up", "CECAFA Cup Winners 15 times"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "vs Kenya - March 25, 2024",
    players: 26,
    gradient: "from-fufa-yellow via-yellow-400 to-amber-500"
  },
  {
    id: "crested-cranes",
    name: "Crested Cranes",
    category: "senior",
    gender: "women",
    description: "Uganda's senior women's national football team",
    founded: "1999",
    coach: "George Lutalo",
    captain: "Phiona Nabbumba",
    fifaRanking: "54",
    achievements: ["AWCON 2006 4th Place", "CECAFA Women's Cup Winners"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "vs Tanzania - April 8, 2024",
    players: 23,
    gradient: "from-pink-400 via-rose-400 to-red-400"
  },
  {
    id: "sand-cranes",
    name: "Sand Cranes",
    category: "beach",
    gender: "mixed",
    description: "Uganda's beach soccer national team",
    founded: "2018",
    coach: "Moses Nsereko",
    captain: "Hassan Wasswa",
    fifaRanking: "N/A",
    achievements: ["AFCON Beach Soccer 2024 Participants"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "Beach Cup - May 15, 2024",
    players: 12,
    gradient: "from-orange-400 via-amber-400 to-yellow-400"
  },
  {
    id: "kobs-u23",
    name: "Kobs (U23)",
    category: "youth",
    gender: "men",
    description: "Uganda's Under-23 men's national team",
    founded: "2010",
    coach: "Morley Byekwaso",
    captain: "Bobosi Byaruhanga",
    fifaRanking: "N/A",
    achievements: ["AFCON U23 2019 Participants"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "U23 AFCON Qualifiers - June 2, 2024",
    players: 23,
    gradient: "from-blue-400 via-cyan-400 to-teal-400"
  },
  {
    id: "men-u20",
    name: "Men (U20)",
    category: "youth",
    gender: "men",
    description: "Uganda's Under-20 men's national team",
    founded: "2008",
    coach: "Jackson Mayanja",
    captain: "Ivan Asaba",
    fifaRanking: "N/A",
    achievements: ["AFCON U20 2021 Round of 16"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "CECAFA U20 - July 14, 2024",
    players: 21,
    gradient: "from-green-400 via-emerald-400 to-teal-400"
  },
  {
    id: "men-u17",
    name: "Men (U17)",
    category: "youth",
    gender: "men",
    description: "Uganda's Under-17 men's national team",
    founded: "2005",
    coach: "Peter Onen",
    captain: "John Revita",
    fifaRanking: "N/A",
    achievements: ["AFCON U17 2019 Participants"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "U17 Development Cup - August 3, 2024",
    players: 20,
    gradient: "from-purple-400 via-violet-400 to-indigo-400"
  },
  {
    id: "women-u20",
    name: "Women (U20)",
    category: "youth",
    gender: "women",
    description: "Uganda's Under-20 women's national team",
    founded: "2010",
    coach: "Ayub Khalifa",
    captain: "Sumaya Komuntale",
    fifaRanking: "N/A",
    achievements: ["AWCON U20 2022 Participants"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "CECAFA U20 Women - September 12, 2024",
    players: 20,
    gradient: "from-pink-400 via-fuchsia-400 to-purple-400"
  },
  {
    id: "women-u17",
    name: "Women (U17)",
    category: "youth",
    gender: "women",
    description: "Uganda's Under-17 women's national team",
    founded: "2008",
    coach: "Shafik Bisaso",
    captain: "Shamirah Nalugya",
    fifaRanking: "N/A",
    achievements: ["AWCON U17 2022 Quarter-finals"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "Regional Championships - October 5, 2024",
    players: 18,
    gradient: "from-rose-400 via-pink-400 to-fuchsia-400"
  },
  {
    id: "boys-u15",
    name: "Boys (U15)",
    category: "youth",
    gender: "men",
    description: "Uganda's Under-15 boys' national team",
    founded: "2015",
    coach: "Wasswa Bbosa",
    captain: "Kenneth Ssemakula",
    fifaRanking: "N/A",
    achievements: ["CECAFA U15 Challenge Cup Winners 2023"],
    colors: ["#FFD700", "#000000", "#DC2626"],
    nextMatch: "Youth Festival - November 18, 2024",
    players: 16,
    gradient: "from-indigo-400 via-blue-400 to-cyan-400"
  }
];

export default function NationalTeams() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Teams", count: nationalTeams.length },
    { id: "senior", label: "Senior", count: nationalTeams.filter(t => t.category === "senior").length },
    { id: "youth", label: "Youth", count: nationalTeams.filter(t => t.category === "youth").length },
    { id: "beach", label: "Beach Soccer", count: nationalTeams.filter(t => t.category === "beach").length }
  ];

  const filteredTeams = nationalTeams.filter(team => {
    const categoryMatch = selectedCategory === "all" || team.category === selectedCategory;
    const searchMatch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       team.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const selectedTeamData = nationalTeams.find(team => team.id === selectedTeam);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Modern Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-fufa-blue via-primary to-fufa-blue/80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-fufa-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-fufa-yellow rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
        
        <div className="container-wide relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Shield className="w-4 h-4 text-fufa-yellow" />
              <span className="text-sm font-medium">9 National Teams</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Uganda's
              <span className="block bg-gradient-to-r from-fufa-yellow via-yellow-300 to-fufa-yellow bg-clip-text text-transparent">
                National Teams
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Representing the Pearl of Africa with pride, passion, and excellence on the global stage
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-fufa-yellow mb-1">9</div>
                <div className="text-sm text-white/70">Teams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fufa-yellow mb-1">100+</div>
                <div className="text-sm text-white/70">Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fufa-yellow mb-1">50+</div>
                <div className="text-sm text-white/70">Trophies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container-wide">
          {/* Modern Search & Filter */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 mb-16 border border-border/50 shadow-elegant">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search teams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 bg-background/50 border-border/50 text-lg rounded-2xl"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-fufa-blue text-white shadow-lg shadow-fufa-blue/25"
                        : "bg-background/50 text-muted-foreground hover:bg-background hover:text-foreground"
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-sm opacity-70">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeams.map((team, index) => (
              <Card 
                key={team.id} 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/60 backdrop-blur-xl border-0 rounded-3xl overflow-hidden"
                onClick={() => setSelectedTeam(team.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${team.gradient}`}></div>
                
                <CardContent className="p-8">
                  {/* Team Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${team.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    {team.fifaRanking !== "N/A" && (
                      <div className="absolute -top-2 -right-2 bg-fufa-blue text-white text-xs font-bold px-2 py-1 rounded-full">
                        #{team.fifaRanking}
                      </div>
                    )}
                  </div>

                  {/* Team Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-fufa-blue transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {team.description}
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="flex justify-center gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{team.players}</div>
                        <div className="text-muted-foreground text-xs">Players</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{team.founded}</div>
                        <div className="text-muted-foreground text-xs">Founded</div>
                      </div>
                    </div>
                  </div>

                  {/* Next Match */}
                  <div className="bg-background/50 rounded-2xl p-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-fufa-blue" />
                      <span className="text-muted-foreground">Next Match:</span>
                    </div>
                    <div className="font-medium text-foreground mt-1">{team.nextMatch}</div>
                  </div>

                  {/* View Details */}
                  <div className="flex items-center justify-center gap-2 text-fufa-blue group-hover:gap-4 transition-all duration-300">
                    <span className="font-medium">View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Team Detail Modal */}
      {selectedTeamData && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className={`bg-gradient-to-r ${selectedTeamData.gradient} p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h2 className="text-4xl font-bold mb-2">{selectedTeamData.name}</h2>
                  <p className="text-white/90 text-lg">{selectedTeamData.description}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedTeam(null)}
                  className="text-white hover:bg-white/20 rounded-full w-12 h-12 p-0"
                >
                  ✕
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Team Info */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-fufa-blue" />
                      Team Information
                    </h4>
                    <div className="space-y-4">
                      {[
                        { label: "Founded", value: selectedTeamData.founded },
                        { label: "Coach", value: selectedTeamData.coach },
                        { label: "Captain", value: selectedTeamData.captain },
                        { label: "Squad Size", value: `${selectedTeamData.players} players` }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-muted-foreground font-medium">{item.label}</span>
                          <span className="font-semibold">{item.value}</span>
                        </div>
                      ))}
                      {selectedTeamData.fifaRanking !== "N/A" && (
                        <div className="flex justify-between items-center py-2">
                          <span className="text-muted-foreground font-medium">FIFA Ranking</span>
                          <Badge variant="outline" className="text-fufa-blue border-fufa-blue">
                            #{selectedTeamData.fifaRanking}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-fufa-yellow" />
                    Major Achievements
                  </h4>
                  <div className="space-y-3">
                    {selectedTeamData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                        <Trophy className="w-5 h-5 text-fufa-yellow mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Match Highlight */}
              <div className="bg-gradient-to-r from-fufa-blue/10 to-transparent rounded-2xl p-6 mb-8">
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-fufa-blue" />
                  Upcoming Match
                </h4>
                <p className="text-foreground font-medium">{selectedTeamData.nextMatch}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 h-14 rounded-xl bg-fufa-blue hover:bg-fufa-blue/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  View Full Schedule
                </Button>
                <Button variant="outline" className="flex-1 h-14 rounded-xl border-fufa-blue text-fufa-blue hover:bg-fufa-blue hover:text-white">
                  <Users className="w-5 h-5 mr-2" />
                  Full Squad List
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}