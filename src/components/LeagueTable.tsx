import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  change: 'up' | 'down' | 'same';
  changePositions?: number;
}

const LeagueTable = () => {
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
      change: 'same'
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
      changePositions: 1
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
      changePositions: 1
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
      changePositions: 2
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
      change: 'same'
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
      changePositions: 1
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

  const getPositionBadge = (position: number) => {
    if (position <= 3) return 'bg-accent text-accent-foreground';
    if (position <= 6) return 'bg-primary/20 text-primary';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <section className="py-12 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-gradient-primary mb-2 flex items-center justify-center">
            <Trophy className="h-6 w-6 mr-2" />
            Competition Standings
          </h2>
          <p className="text-muted-foreground text-base">
            FUFA Competition Standings 2025/26 Season
          </p>
        </div>

        <Card className="card-uganda p-6 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Standings</h3>
            <div className="text-sm text-muted-foreground">
              Last updated: 2 hours ago
            </div>
          </div>

          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-border text-sm font-medium text-muted-foreground">
            <div className="col-span-1">Pos</div>
            <div className="col-span-3">Club</div>
            <div className="col-span-1">P</div>
            <div className="col-span-1">W</div>
            <div className="col-span-1">D</div>
            <div className="col-span-1">L</div>
            <div className="col-span-1">GD</div>
            <div className="col-span-1">Pts</div>
            <div className="col-span-2">Form</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {teams.map((team) => (
              <div
                key={team.position}
                className="grid grid-cols-12 gap-4 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
              >
                {/* Position */}
                <div className="col-span-1 flex items-center">
                  <div className="flex items-center space-x-2">
                    <span className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                      getPositionBadge(team.position)
                    )}>
                      {team.position}
                    </span>
                    {getChangeIcon(team.change)}
                  </div>
                </div>

                {/* Club Name */}
                <div className="col-span-5 md:col-span-3 flex items-center">
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {team.name}
                    </div>
                    {team.changePositions && (
                      <div className="text-xs text-muted-foreground">
                        {team.change === 'up' ? '+' : '-'}{team.changePositions}
                      </div>
                    )}
                  </div>
                </div>

                {/* Stats - Responsive layout */}
                <div className="col-span-6 md:col-span-6 grid grid-cols-2 md:grid-cols-6 gap-2 items-center text-sm">
                  <div className="text-center">
                    <div className="font-medium">{team.played}</div>
                    <div className="text-xs text-muted-foreground md:hidden">P</div>
                  </div>
                  <div className="text-center hidden md:block">{team.won}</div>
                  <div className="text-center hidden md:block">{team.drawn}</div>
                  <div className="text-center hidden md:block">{team.lost}</div>
                  <div className="text-center">
                    <div className={cn(
                      "font-medium",
                      team.goalDifference > 0 ? "text-success" : 
                      team.goalDifference < 0 ? "text-destructive" : "text-muted-foreground"
                    )}>
                      {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                    </div>
                    <div className="text-xs text-muted-foreground md:hidden">GD</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{team.points}</div>
                    <div className="text-xs text-muted-foreground md:hidden">Pts</div>
                  </div>
                </div>

                {/* Form - Hidden on mobile, shown on larger screens */}
                <div className="col-span-2 hidden md:flex justify-end space-x-1">
                  {team.form.map((result, index) => (
                    <span
                      key={index}
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                        getFormColor(result)
                      )}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="hover:bg-primary/10">
              View Full Table
            </Button>
          </div>
        </Card>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-accent"></div>
            <span>Top 3 (Continental Competition)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-primary/20"></div>
            <span>Continental Competition Qualifying</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeagueTable;