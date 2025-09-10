import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, TrendingDown, Minus, Crown, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface TeamData {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[];
  badge?: string;
}

const LeagueTable = () => {
  const [selectedCompetition, setSelectedCompetition] = useState("upl");

  const competitions = {
    upl: {
      name: "Uganda Premier League",
      teams: [
        {
          position: 1,
          name: "SC Villa",
          played: 15,
          won: 12,
          drawn: 2,
          lost: 1,
          goalsFor: 35,
          goalsAgainst: 8,
          goalDifference: 27,
          points: 38,
          form: ["W", "W", "W", "D", "W"],
          badge: "🏆"
        },
        {
          position: 2,
          name: "Vipers SC",
          played: 15,
          won: 11,
          drawn: 3,
          lost: 1,
          goalsFor: 32,
          goalsAgainst: 12,
          goalDifference: 20,
          points: 36,
          form: ["W", "D", "W", "W", "W"],
          badge: "⭐"
        },
        {
          position: 3,
          name: "KCCA FC",
          played: 15,
          won: 10,
          drawn: 4,
          lost: 1,
          goalsFor: 28,
          goalsAgainst: 15,
          goalDifference: 13,
          points: 34,
          form: ["D", "W", "W", "D", "W"],
          badge: ""
        },
        {
          position: 4,
          name: "Express FC",
          played: 15,
          won: 9,
          drawn: 3,
          lost: 3,
          goalsFor: 25,
          goalsAgainst: 18,
          goalDifference: 7,
          points: 30,
          form: ["W", "L", "W", "D", "W"],
          badge: ""
        },
        {
          position: 5,
          name: "URA FC",
          played: 15,
          won: 8,
          drawn: 4,
          lost: 3,
          goalsFor: 22,
          goalsAgainst: 16,
          goalDifference: 6,
          points: 28,
          form: ["D", "W", "L", "W", "D"],
          badge: ""
        }
      ]
    },
    stanbic: {
      name: "Stanbic Uganda Cup",
      teams: [
        {
          position: 1,
          name: "Express FC",
          played: 6,
          won: 5,
          drawn: 1,
          lost: 0,
          goalsFor: 15,
          goalsAgainst: 3,
          goalDifference: 12,
          points: 16,
          form: ["W", "W", "D", "W", "W"],
          badge: "🏆"
        },
        {
          position: 2,
          name: "KCCA FC",
          played: 6,
          won: 4,
          drawn: 2,
          lost: 0,
          goalsFor: 12,
          goalsAgainst: 4,
          goalDifference: 8,
          points: 14,
          form: ["D", "W", "W", "W", "D"],
          badge: "⭐"
        },
        {
          position: 3,
          name: "Vipers SC",
          played: 6,
          won: 4,
          drawn: 1,
          lost: 1,
          goalsFor: 11,
          goalsAgainst: 6,
          goalDifference: 5,
          points: 13,
          form: ["W", "L", "W", "W", "D"],
          badge: ""
        },
        {
          position: 4,
          name: "SC Villa",
          played: 6,
          won: 3,
          drawn: 2,
          lost: 1,
          goalsFor: 9,
          goalsAgainst: 7,
          goalDifference: 2,
          points: 11,
          form: ["W", "D", "L", "W", "D"],
          badge: ""
        }
      ]
    },
    bigLeague: {
      name: "FUFA Big League",
      teams: [
        {
          position: 1,
          name: "Kitara FC",
          played: 18,
          won: 14,
          drawn: 3,
          lost: 1,
          goalsFor: 42,
          goalsAgainst: 12,
          goalDifference: 30,
          points: 45,
          form: ["W", "W", "W", "W", "D"],
          badge: "🏆"
        },
        {
          position: 2,
          name: "Lugazi FC",
          played: 18,
          won: 12,
          drawn: 4,
          lost: 2,
          goalsFor: 35,
          goalsAgainst: 18,
          goalDifference: 17,
          points: 40,
          form: ["W", "D", "W", "W", "W"],
          badge: "⭐"
        },
        {
          position: 3,
          name: "Calvary FC",
          played: 18,
          won: 11,
          drawn: 5,
          lost: 2,
          goalsFor: 28,
          goalsAgainst: 15,
          goalDifference: 13,
          points: 38,
          form: ["D", "W", "W", "D", "W"],
          badge: ""
        }
      ]
    },
    women: {
      name: "FUFA Women's League",
      teams: [
        {
          position: 1,
          name: "Kawempe Muslim WFC",
          played: 14,
          won: 12,
          drawn: 2,
          lost: 0,
          goalsFor: 48,
          goalsAgainst: 8,
          goalDifference: 40,
          points: 38,
          form: ["W", "W", "D", "W", "W"],
          badge: "🏆"
        },
        {
          position: 2,
          name: "UCU Lady Cardinals",
          played: 14,
          won: 10,
          drawn: 3,
          lost: 1,
          goalsFor: 35,
          goalsAgainst: 12,
          goalDifference: 23,
          points: 33,
          form: ["W", "W", "W", "D", "W"],
          badge: "⭐"
        },
        {
          position: 3,
          name: "She Corporate FC",
          played: 14,
          won: 9,
          drawn: 2,
          lost: 3,
          goalsFor: 28,
          goalsAgainst: 18,
          goalDifference: 10,
          points: 29,
          form: ["W", "L", "W", "W", "D"],
          badge: ""
        }
      ]
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-gradient-primary mb-4">
            FUFA Competition Tables
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Track the performance across all FUFA competitions and leagues
          </p>
        </div>

        <Tabs value={selectedCompetition} onValueChange={setSelectedCompetition} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-2">
            <TabsTrigger 
              value="upl" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/10"
            >
              <Crown className="h-4 w-4 mr-2" />
              Premier League
            </TabsTrigger>
            <TabsTrigger 
              value="stanbic" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/10"
            >
              <Trophy className="h-4 w-4 mr-2" />
              Uganda Cup
            </TabsTrigger>
            <TabsTrigger 
              value="bigLeague" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/10"
            >
              <Award className="h-4 w-4 mr-2" />
              Big League
            </TabsTrigger>
            <TabsTrigger 
              value="women" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/10"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Women's League
            </TabsTrigger>
          </TabsList>

          {Object.entries(competitions).map(([key, competition]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <Card className="overflow-hidden shadow-elegant border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-b border-primary/20">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-xl">
                      <Trophy className="h-6 w-6 mr-3 text-primary" />
                      <span className="text-gradient-primary">{competition.name}</span>
                    </span>
                    <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary font-semibold">
                      2024/25 Season
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm">
                        <tr className="text-sm font-semibold text-foreground/80">
                          <th className="text-left p-4 border-r border-border/50">Position</th>
                          <th className="text-left p-4 border-r border-border/50">Club</th>
                          <th className="text-center p-4 border-r border-border/50">P</th>
                          <th className="text-center p-4 border-r border-border/50">W</th>
                          <th className="text-center p-4 border-r border-border/50">D</th>
                          <th className="text-center p-4 border-r border-border/50">L</th>
                          <th className="text-center p-4 border-r border-border/50">GF</th>
                          <th className="text-center p-4 border-r border-border/50">GA</th>
                          <th className="text-center p-4 border-r border-border/50">GD</th>
                          <th className="text-center p-4 border-r border-border/50">Pts</th>
                          <th className="text-center p-4">Form</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30">
                        {competition.teams.map((team, index) => (
                          <tr 
                            key={team.position}
                            className={cn(
                              "hover:bg-primary/5 transition-all duration-300 group",
                              index < 3 && "bg-gradient-to-r from-success/10 to-success/5",
                              index >= competition.teams.length - 3 && competition.teams.length > 5 && "bg-gradient-to-r from-destructive/10 to-destructive/5"
                            )}
                          >
                            <td className="p-4 border-r border-border/30">
                              <div className="flex items-center space-x-3">
                                <span className="font-bold text-lg text-foreground/90">{team.position}</span>
                                {team.badge && <span className="text-xl animate-bounce-subtle">{team.badge}</span>}
                                {index === 0 && <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>}
                              </div>
                            </td>
                            <td className="p-4 border-r border-border/30">
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {team.name}
                              </div>
                            </td>
                            <td className="text-center p-4 border-r border-border/30 font-medium">{team.played}</td>
                            <td className="text-center p-4 border-r border-border/30 font-medium text-success">{team.won}</td>
                            <td className="text-center p-4 border-r border-border/30 font-medium text-warning">{team.drawn}</td>
                            <td className="text-center p-4 border-r border-border/30 font-medium text-destructive">{team.lost}</td>
                            <td className="text-center p-4 border-r border-border/30 font-medium">{team.goalsFor}</td>
                            <td className="text-center p-4 border-r border-border/30 font-medium">{team.goalsAgainst}</td>
                            <td className="text-center p-4 border-r border-border/30">
                              <span className={cn(
                                "font-bold text-sm px-2 py-1 rounded-lg",
                                team.goalDifference > 0 && "text-success bg-success/10",
                                team.goalDifference < 0 && "text-destructive bg-destructive/10",
                                team.goalDifference === 0 && "text-muted-foreground bg-muted/20"
                              )}>
                                {team.goalDifference > 0 ? "+" : ""}{team.goalDifference}
                              </span>
                            </td>
                            <td className="text-center p-4 border-r border-border/30">
                              <span className="font-bold text-lg text-primary bg-primary/10 px-3 py-1 rounded-lg">
                                {team.points}
                              </span>
                            </td>
                            <td className="text-center p-4">
                              <div className="flex space-x-1 justify-center">
                                {team.form.map((result, i) => (
                                  <div
                                    key={i}
                                    className={cn(
                                      "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white transition-transform duration-200 hover:scale-110",
                                      result === "W" && "bg-success shadow-success/30",
                                      result === "D" && "bg-warning shadow-warning/30",
                                      result === "L" && "bg-destructive shadow-destructive/30"
                                    )}
                                    style={{ boxShadow: '0 4px 12px var(--tw-shadow-color)' }}
                                  >
                                    {result}
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default LeagueTable;