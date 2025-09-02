import { useState } from "react";
import { Trophy, TrendingUp, TrendingDown, Minus, Filter, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TeamData {
  position: number;
  name: string;
  logo?: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[];
  change: 'up' | 'down' | 'same';
  changePositions?: number;
  nextOpponent: string;
}

const LeagueTable = () => {
  const [selectedSeason, setSelectedSeason] = useState("2025/26");
  const [selectedMatchweek, setSelectedMatchweek] = useState("4");
  const [selectedView, setSelectedView] = useState("all");

  const teams: TeamData[] = [
    {
      position: 1,
      name: "Vipers SC",
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 8,
      goalsAgainst: 2,
      goalDifference: 6,
      points: 10,
      form: ['W', 'W', 'D', 'W'],
      change: 'same',
      nextOpponent: "URA FC"
    },
    {
      position: 2,
      name: "SC Villa",
      played: 4,
      won: 3,
      drawn: 0,
      lost: 1,
      goalsFor: 7,
      goalsAgainst: 3,
      goalDifference: 4,
      points: 9,
      form: ['W', 'L', 'W', 'W'],
      change: 'up',
      changePositions: 1,
      nextOpponent: "KCCA FC"
    },
    {
      position: 3,
      name: "KCCA FC",
      played: 4,
      won: 2,
      drawn: 2,
      lost: 0,
      goalsFor: 6,
      goalsAgainst: 3,
      goalDifference: 3,
      points: 8,
      form: ['D', 'W', 'D', 'W'],
      change: 'down',
      changePositions: 1,
      nextOpponent: "SC Villa"
    },
    {
      position: 4,
      name: "URA FC",
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
      goalsFor: 5,
      goalsAgainst: 4,
      goalDifference: 1,
      points: 7,
      form: ['W', 'D', 'L', 'W'],
      change: 'up',
      changePositions: 2,
      nextOpponent: "Vipers SC"
    },
    {
      position: 5,
      name: "Express FC",
      played: 4,
      won: 2,
      drawn: 0,
      lost: 2,
      goalsFor: 4,
      goalsAgainst: 5,
      goalDifference: -1,
      points: 6,
      form: ['L', 'W', 'L', 'W'],
      change: 'same',
      nextOpponent: "BUL FC"
    },
    {
      position: 6,
      name: "BUL FC",
      played: 4,
      won: 1,
      drawn: 2,
      lost: 1,
      goalsFor: 3,
      goalsAgainst: 3,
      goalDifference: 0,
      points: 5,
      form: ['D', 'L', 'W', 'D'],
      change: 'down',
      changePositions: 1,
      nextOpponent: "Express FC"
    },
    {
      position: 7,
      name: "Busoga United",
      played: 4,
      won: 1,
      drawn: 1,
      lost: 2,
      goalsFor: 3,
      goalsAgainst: 5,
      goalDifference: -2,
      points: 4,
      form: ['L', 'W', 'L', 'D'],
      change: 'down',
      changePositions: 2,
      nextOpponent: "Wakiso Giants"
    },
    {
      position: 8,
      name: "Wakiso Giants",
      played: 4,
      won: 1,
      drawn: 1,
      lost: 2,
      goalsFor: 2,
      goalsAgainst: 4,
      goalDifference: -2,
      points: 4,
      form: ['D', 'L', 'L', 'W'],
      change: 'up',
      changePositions: 1,
      nextOpponent: "Busoga United"
    }
  ];

  const getFormColor = (result: string) => {
    switch (result) {
      case 'W': return 'bg-success text-success-foreground';
      case 'D': return 'bg-warning text-warning-foreground';
      case 'L': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getChangeIcon = (change: 'up' | 'down' | 'same') => {
    switch (change) {
      case 'up': return <TrendingUp className="h-3 w-3 text-success" />;
      case 'down': return <TrendingDown className="h-3 w-3 text-destructive" />;
      default: return <Minus className="h-3 w-3 text-muted-foreground" />;
    }
  };

  const getPositionStyle = (position: number) => {
    if (position <= 3) return 'border-l-4 border-l-accent bg-accent/5';
    if (position <= 6) return 'border-l-4 border-l-primary/50 bg-primary/5';
    return 'border-l-4 border-l-muted bg-background';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      {/* Hero Header */}
      <div className="bg-gradient-primary text-white py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold font-display">Table</h1>
        </div>
      </div>

      <div className="container-custom py-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value="upl" disabled>
              <SelectTrigger className="w-[180px] text-sm">
                <SelectValue placeholder="League" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upl">Uganda Premier League</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={selectedSeason} onValueChange={setSelectedSeason}>
            <SelectTrigger className="w-[120px] text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025/26">2025/26</SelectItem>
              <SelectItem value="2024/25">2024/25</SelectItem>
              <SelectItem value="2023/24">2023/24</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedMatchweek} onValueChange={setSelectedMatchweek}>
            <SelectTrigger className="w-[130px] text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Matchweek 1</SelectItem>
              <SelectItem value="2">Matchweek 2</SelectItem>
              <SelectItem value="3">Matchweek 3</SelectItem>
              <SelectItem value="4">Matchweek 4</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedView} onValueChange={setSelectedView}>
            <SelectTrigger className="w-[140px] text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Home & Away</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="away">Away</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>

        {/* Table Card */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-[40px_1fr_repeat(10,60px)_100px_80px] gap-2 p-4 bg-muted/30 border-b text-xs font-medium text-muted-foreground min-w-[800px]">
              <div>Pos</div>
              <div>Team</div>
              <div className="text-center">Pl</div>
              <div className="text-center">W</div>
              <div className="text-center">D</div>
              <div className="text-center">L</div>
              <div className="text-center">GF</div>
              <div className="text-center">GA</div>
              <div className="text-center">GD</div>
              <div className="text-center">Pts</div>
              <div className="text-center">Form</div>
              <div className="text-center">Next</div>
            </div>

            {/* Table Rows */}
            <div>
              {teams.map((team) => (
                <div
                  key={team.position}
                  className={cn(
                    "grid grid-cols-[40px_1fr_repeat(10,60px)_100px_80px] gap-2 p-4 hover:bg-muted/30 transition-colors min-w-[800px]",
                    getPositionStyle(team.position)
                  )}
                >
                  {/* Position */}
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-sm">{team.position}</span>
                      <div className="flex items-center mt-1">
                        {getChangeIcon(team.change)}
                        {team.changePositions && (
                          <span className="text-xs text-muted-foreground ml-1">
                            {team.changePositions}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Team Name */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                      {team.name.charAt(0)}
                    </div>
                    <span className="font-medium text-sm truncate">{team.name}</span>
                  </div>

                  {/* Stats */}
                  <div className="text-center text-sm font-medium">{team.played}</div>
                  <div className="text-center text-sm">{team.won}</div>
                  <div className="text-center text-sm">{team.drawn}</div>
                  <div className="text-center text-sm">{team.lost}</div>
                  <div className="text-center text-sm">{team.goalsFor}</div>
                  <div className="text-center text-sm">{team.goalsAgainst}</div>
                  <div className={cn(
                    "text-center text-sm font-medium",
                    team.goalDifference > 0 ? "text-success" : 
                    team.goalDifference < 0 ? "text-destructive" : "text-muted-foreground"
                  )}>
                    {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                  </div>
                  <div className="text-center text-sm font-bold text-primary">{team.points}</div>

                  {/* Form */}
                  <div className="flex justify-center space-x-1">
                    {team.form.slice(-3).map((result, index) => (
                      <span
                        key={index}
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold",
                          getFormColor(result)
                        )}
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Next Opponent */}
                  <div className="flex items-center justify-center">
                    <Badge variant="outline" className="text-xs">
                      {team.nextOpponent}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-1 bg-accent rounded"></div>
            <span>Continental Competition (Top 3)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-1 bg-primary/50 rounded"></div>
            <span>Continental Qualifying (4-6)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-success"></div>
            <span>Win</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-warning"></div>
            <span>Draw</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-destructive"></div>
            <span>Loss</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LeagueTable;