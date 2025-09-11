import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Trophy, Calendar, MapPin, Star } from "lucide-react";

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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
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
    colors: ["Yellow", "Black", "Red"],
    image: "/placeholder.svg"
  }
];

export default function NationalTeams() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Teams", count: nationalTeams.length },
    { id: "senior", label: "Senior Teams", count: nationalTeams.filter(t => t.category === "senior").length },
    { id: "youth", label: "Youth Teams", count: nationalTeams.filter(t => t.category === "youth").length },
    { id: "beach", label: "Beach Soccer", count: nationalTeams.filter(t => t.category === "beach").length }
  ];

  const filteredTeams = selectedCategory === "all" 
    ? nationalTeams 
    : nationalTeams.filter(team => team.category === selectedCategory);

  const selectedTeamData = nationalTeams.find(team => team.id === selectedTeam);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-fufa-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-fufa-yellow/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Uganda's
              <span className="text-fufa-yellow block">National Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Representing the Pearl of Africa on the global stage
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Trophy className="w-5 h-5 mr-2" />
                9 National Teams
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Star className="w-5 h-5 mr-2" />
                All Age Categories
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex flex-col gap-1">
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeams.map((team) => (
              <Card 
                key={team.id} 
                className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-0"
                onClick={() => setSelectedTeam(team.id)}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{team.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{team.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Coach:</span>
                      <span className="text-sm font-medium">{team.coach}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Captain:</span>
                      <span className="text-sm font-medium">{team.captain}</span>
                    </div>
                    {team.fifaRanking !== "N/A" && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">FIFA Ranking:</span>
                        <Badge variant="outline">#{team.fifaRanking}</Badge>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex gap-2 justify-center">
                      {team.colors.map((color, index) => (
                        <div 
                          key={index}
                          className={`w-6 h-6 rounded-full ${
                            color === "Yellow" ? "bg-fufa-yellow" :
                            color === "Black" ? "bg-black" :
                            color === "Red" ? "bg-red-500" : "bg-white border"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Detail Modal */}
      {selectedTeamData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{selectedTeamData.name}</h2>
                  <p className="text-muted-foreground">{selectedTeamData.description}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedTeam(null)}>
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Team Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Founded:</span>
                        <span>{selectedTeamData.founded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Coach:</span>
                        <span>{selectedTeamData.coach}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Captain:</span>
                        <span>{selectedTeamData.captain}</span>
                      </div>
                      {selectedTeamData.fifaRanking !== "N/A" && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">FIFA Ranking:</span>
                          <Badge variant="outline">#{selectedTeamData.fifaRanking}</Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Team Colors</h4>
                  <div className="flex gap-3 mb-4">
                    {selectedTeamData.colors.map((color, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className={`w-8 h-8 rounded-full mx-auto mb-1 ${
                            color === "Yellow" ? "bg-fufa-yellow" :
                            color === "Black" ? "bg-black" :
                            color === "Red" ? "bg-red-500" : "bg-white border-2 border-gray-300"
                          }`}
                        ></div>
                        <span className="text-xs text-muted-foreground">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Major Achievements</h4>
                <div className="space-y-2">
                  {selectedTeamData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-fufa-yellow" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Fixtures
                </Button>
                <Button variant="outline" className="flex-1">
                  <Users className="w-4 h-4 mr-2" />
                  Squad List
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}