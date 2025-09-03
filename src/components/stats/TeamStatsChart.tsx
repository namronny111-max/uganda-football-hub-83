import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp, Activity, Target } from "lucide-react";

const TeamStatsChart = () => {
  const possessionData = [
    { name: 'KCCA FC', value: 58, color: 'hsl(var(--primary))' },
    { name: 'Vipers SC', value: 62, color: 'hsl(var(--accent))' },
    { name: 'SC Villa', value: 55, color: 'hsl(var(--success))' },
    { name: 'Express FC', value: 48, color: 'hsl(var(--warning))' },
    { name: 'Others', value: 45, color: 'hsl(var(--muted-foreground))' }
  ];

  const formData = [
    { matchweek: 1, kcca: 3, vipers: 1, villa: 2, express: 1 },
    { matchweek: 2, kcca: 2, vipers: 3, villa: 1, express: 2 },
    { matchweek: 3, kcca: 1, vipers: 2, villa: 3, express: 0 },
    { matchweek: 4, kcca: 3, vipers: 1, villa: 2, express: 1 },
    { matchweek: 5, kcca: 2, vipers: 2, villa: 1, express: 2 },
  ];

  const teamStats = [
    {
      team: "KCCA FC",
      shots: 156,
      shotsOnTarget: 72,
      passes: 2340,
      passAccuracy: 84,
      color: "text-primary"
    },
    {
      team: "Vipers SC", 
      shots: 142,
      shotsOnTarget: 68,
      passes: 2180,
      passAccuracy: 81,
      color: "text-accent"
    },
    {
      team: "SC Villa",
      shots: 138,
      shotsOnTarget: 61,
      passes: 2020,
      passAccuracy: 78,
      color: "text-success"
    },
    {
      team: "Express FC",
      shots: 124,
      shotsOnTarget: 55,
      passes: 1890,
      passAccuracy: 76,
      color: "text-warning"
    }
  ];

  const chartConfig = {
    kcca: { label: "KCCA FC", color: "hsl(var(--primary))" },
    vipers: { label: "Vipers SC", color: "hsl(var(--accent))" },
    villa: { label: "SC Villa", color: "hsl(var(--success))" },
    express: { label: "Express FC", color: "hsl(var(--warning))" },
  };

  const COLORS = possessionData.map(entry => entry.color);

  return (
    <div className="space-y-8">
      {/* Possession Chart */}
      <Card className="card-uganda">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Average Possession %
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={possessionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  className="drop-shadow-lg"
                >
                  {possessionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value) => [`${value}%`, 'Possession']}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Goals Form */}
      <Card className="card-uganda">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Goals Scored (Last 5 Matches)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={formData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="matchweek" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="kcca"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="vipers"
                  stroke="hsl(var(--accent))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--accent))", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="villa"
                  stroke="hsl(var(--success))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--success))", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="express"
                  stroke="hsl(var(--warning))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--warning))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Team Performance Stats */}
      <Card className="card-uganda">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Team Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamStats.map((team) => (
              <div key={team.team} className="space-y-4 p-4 rounded-lg bg-muted/20 border border-border/50">
                <div className="flex items-center justify-between">
                  <h4 className={`font-semibold ${team.color}`}>{team.team}</h4>
                  <div className="w-3 h-3 rounded-full bg-gradient-primary"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Shots</div>
                    <div className="font-bold text-lg">{team.shots}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">On Target</div>
                    <div className="font-bold text-lg">{team.shotsOnTarget}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Passes</div>
                    <div className="font-bold text-lg">{team.passes.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Pass Accuracy</div>
                    <div className="font-bold text-lg">{team.passAccuracy}%</div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Shot Accuracy</span>
                      <span>{Math.round((team.shotsOnTarget / team.shots) * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(team.shotsOnTarget / team.shots) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Pass Accuracy</span>
                      <span>{team.passAccuracy}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${team.passAccuracy}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamStatsChart;