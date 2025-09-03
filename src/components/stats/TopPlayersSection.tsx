import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronUp, ChevronDown, Target, Zap, Shield, ArrowUpDown } from "lucide-react";

interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  goals: number;
  assists: number;
  cleanSheets: number;
  matches: number;
  rating: number;
}

interface TopPlayersSectionProps {
  searchTerm: string;
  selectedTeam: string;
}

const TopPlayersSection = ({ searchTerm, selectedTeam }: TopPlayersSectionProps) => {
  const [sortBy, setSortBy] = useState<'goals' | 'assists' | 'rating'>('goals');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const players: Player[] = [
    {
      id: "1",
      name: "Steven Mukwala",
      team: "Vipers SC",
      position: "Forward",
      goals: 18,
      assists: 7,
      cleanSheets: 0,
      matches: 22,
      rating: 8.4
    },
    {
      id: "2", 
      name: "Brian Aheebwa",
      team: "KCCA FC",
      position: "Midfielder",
      goals: 12,
      assists: 15,
      cleanSheets: 0,
      matches: 24,
      rating: 8.1
    },
    {
      id: "3",
      name: "Denis Onyango",
      team: "Mamelodi Sundowns",
      position: "Goalkeeper",
      goals: 0,
      assists: 0,
      cleanSheets: 16,
      matches: 20,
      rating: 8.7
    },
    {
      id: "4",
      name: "Milton Karisa",
      team: "Vipers SC",
      position: "Winger",
      goals: 14,
      assists: 9,
      cleanSheets: 0,
      matches: 23,
      rating: 7.9
    },
    {
      id: "5",
      name: "Fahad Bayo",
      team: "KCCA FC",
      position: "Forward",
      goals: 16,
      assists: 4,
      cleanSheets: 0,
      matches: 21,
      rating: 8.2
    },
    {
      id: "6",
      name: "Sadam Juma",
      team: "Express FC",
      position: "Defender",
      goals: 3,
      assists: 2,
      cleanSheets: 12,
      matches: 25,
      rating: 7.6
    }
  ];

  const filteredAndSortedPlayers = useMemo(() => {
    let filtered = players.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           player.team.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTeam = selectedTeam === 'all' || player.team.toLowerCase().includes(selectedTeam);
      return matchesSearch && matchesTeam;
    });

    return filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      return sortOrder === 'desc' ? bValue - aValue : aValue - bValue;
    });
  }, [players, searchTerm, selectedTeam, sortBy, sortOrder]);

  const handleSort = (field: 'goals' | 'assists' | 'rating') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getPositionIcon = (position: string) => {
    switch (position.toLowerCase()) {
      case 'forward':
        return <Target className="w-4 h-4 text-primary" />;
      case 'midfielder':
      case 'winger':
        return <Zap className="w-4 h-4 text-accent" />;
      case 'defender':
      case 'goalkeeper':
        return <Shield className="w-4 h-4 text-success" />;
      default:
        return <Target className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getSortIcon = (field: 'goals' | 'assists' | 'rating') => {
    if (sortBy !== field) return <ArrowUpDown className="w-3 h-3" />;
    return sortOrder === 'desc' ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />;
  };

  const topScorers = filteredAndSortedPlayers.slice(0, 5);
  const topAssisters = [...filteredAndSortedPlayers].sort((a, b) => b.assists - a.assists).slice(0, 5);
  const topRated = [...filteredAndSortedPlayers].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="space-y-8">
      <Tabs defaultValue="scorers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="scorers">Top Scorers</TabsTrigger>
          <TabsTrigger value="assisters">Assists Leaders</TabsTrigger>
          <TabsTrigger value="rated">Highest Rated</TabsTrigger>
        </TabsList>

        <TabsContent value="scorers">
          <Card className="card-uganda">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Top Goal Scorers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topScorers.map((player, index) => (
                  <div key={player.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-gradient-primary text-white' :
                        index === 1 ? 'bg-gradient-accent text-white' :
                        index === 2 ? 'bg-muted-foreground text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{player.name}</h4>
                        {getPositionIcon(player.position)}
                      </div>
                      <p className="text-sm text-muted-foreground">{player.team}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{player.goals}</div>
                      <div className="text-xs text-muted-foreground">goals</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assisters">
          <Card className="card-uganda">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Assist Leaders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topAssisters.map((player, index) => (
                  <div key={player.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-gradient-primary text-white' :
                        index === 1 ? 'bg-gradient-accent text-white' :
                        index === 2 ? 'bg-muted-foreground text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-accent text-white font-semibold">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{player.name}</h4>
                        {getPositionIcon(player.position)}
                      </div>
                      <p className="text-sm text-muted-foreground">{player.team}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{player.assists}</div>
                      <div className="text-xs text-muted-foreground">assists</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rated">
          <Card className="card-uganda">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Highest Rated Players
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topRated.map((player, index) => (
                  <div key={player.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-gradient-primary text-white' :
                        index === 1 ? 'bg-gradient-accent text-white' :
                        index === 2 ? 'bg-muted-foreground text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-success to-success/80 text-white font-semibold">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{player.name}</h4>
                        {getPositionIcon(player.position)}
                      </div>
                      <p className="text-sm text-muted-foreground">{player.team}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-success">{player.rating}</div>
                      <div className="text-xs text-muted-foreground">rating</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Detailed Players Table */}
      <Card className="card-uganda">
        <CardHeader>
          <CardTitle>All Players Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Player</th>
                  <th className="text-left py-3 px-4 font-semibold">Team</th>
                  <th className="text-left py-3 px-4 font-semibold">Position</th>
                  <th 
                    className="text-center py-3 px-4 font-semibold cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort('goals')}
                  >
                    <div className="flex items-center justify-center gap-1">
                      Goals {getSortIcon('goals')}
                    </div>
                  </th>
                  <th 
                    className="text-center py-3 px-4 font-semibold cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort('assists')}
                  >
                    <div className="flex items-center justify-center gap-1">
                      Assists {getSortIcon('assists')}
                    </div>
                  </th>
                  <th 
                    className="text-center py-3 px-4 font-semibold cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort('rating')}
                  >
                    <div className="flex items-center justify-center gap-1">
                      Rating {getSortIcon('rating')}
                    </div>
                  </th>
                  <th className="text-center py-3 px-4 font-semibold">Matches</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedPlayers.map((player) => (
                  <tr key={player.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-primary text-white text-xs">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{player.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{player.team}</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="text-xs">
                        {player.position}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">{player.goals}</td>
                    <td className="py-4 px-4 text-center font-semibold">{player.assists}</td>
                    <td className="py-4 px-4 text-center">
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        {player.rating}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{player.matches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopPlayersSection;