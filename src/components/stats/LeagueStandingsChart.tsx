import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Trophy } from "lucide-react";

const LeagueStandingsChart = () => {
  const standingsData = [
    { team: "KCCA FC", points: 45, position: 1, form: "WWWDW" },
    { team: "Vipers SC", points: 42, position: 2, form: "WWDWW" },
    { team: "SC Villa", points: 38, position: 3, form: "WDWWL" },
    { team: "Express FC", points: 35, position: 4, form: "DWWDW" },
    { team: "URA FC", points: 32, position: 5, form: "WLDWW" },
    { team: "BUL FC", points: 28, position: 6, form: "LDWDL" },
  ];

  const chartConfig = {
    points: {
      label: "Points",
      color: "hsl(var(--primary))",
    },
  };

  const getFormColor = (result: string) => {
    switch (result) {
      case 'W': return 'bg-success';
      case 'D': return 'bg-warning';
      case 'L': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  return (
    <Card className="card-uganda">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          League Standings Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Chart */}
          <ChartContainer config={chartConfig} className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={standingsData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="team" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="points" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Mini Table */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Top 6 Teams</h4>
            <div className="space-y-2">
              {standingsData.map((team) => (
                <div key={team.team} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary text-white text-xs font-bold flex items-center justify-center">
                      {team.position}
                    </div>
                    <span className="font-medium text-foreground">{team.team}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                      {team.form.split('').map((result, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${getFormColor(result)}`}
                          title={result === 'W' ? 'Win' : result === 'D' ? 'Draw' : 'Loss'}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-primary text-lg">{team.points}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeagueStandingsChart;