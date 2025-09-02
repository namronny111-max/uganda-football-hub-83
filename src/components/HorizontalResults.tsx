import { Badge } from "@/components/ui/badge";

const HorizontalResults = () => {
  const recentResults = [
    { 
      homeTeam: "KCCA FC", 
      awayTeam: "Vipers SC", 
      homeScore: 2, 
      awayScore: 1, 
      status: "FT" 
    },
    { 
      homeTeam: "SC Villa", 
      awayTeam: "Express FC", 
      homeScore: 0, 
      awayScore: 3, 
      status: "FT" 
    },
    { 
      homeTeam: "BUL FC", 
      awayTeam: "URA FC", 
      homeScore: 1, 
      awayScore: 1, 
      status: "FT" 
    },
    { 
      homeTeam: "Wakiso Giants", 
      awayTeam: "Arua Hill", 
      homeScore: 2, 
      awayScore: 0, 
      status: "FT" 
    },
    { 
      homeTeam: "Police FC", 
      awayTeam: "Mbarara City", 
      homeScore: 1, 
      awayScore: 2, 
      status: "FT" 
    }
  ];

  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center py-3">
            <div className="flex items-center space-x-2 mr-4">
              <h3 className="text-sm font-semibold font-display">Latest Results</h3>
              <Badge variant="secondary" className="text-xs">Live</Badge>
            </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center space-x-6 animate-scroll-horizontal">
              {recentResults.concat(recentResults).map((match, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 whitespace-nowrap min-w-fit bg-background/50 rounded-lg px-4 py-2 hover:bg-background/80 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{match.homeTeam}</span>
                    <div className="flex items-center space-x-1 text-sm font-bold">
                      <span className="text-primary">{match.homeScore}</span>
                      <span className="text-muted-foreground">-</span>
                      <span className="text-primary">{match.awayScore}</span>
                    </div>
                    <span className="text-sm font-medium">{match.awayTeam}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {match.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalResults;