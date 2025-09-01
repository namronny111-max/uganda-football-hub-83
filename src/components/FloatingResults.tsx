import { Badge } from "@/components/ui/badge";

const FloatingResults = () => {
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
    <div className="hidden xl:block fixed right-4 top-32 z-40 bg-card border border-border rounded-lg shadow-elegant p-4 w-72 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm font-display">Latest Results</h3>
        <Badge variant="secondary" className="text-xs">Live</Badge>
      </div>
      
      <div className="space-y-2">
        {recentResults.map((match, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-2 flex-1">
              <div className="text-xs font-medium truncate flex-1">
                {match.homeTeam}
              </div>
              <div className="flex items-center space-x-1 text-sm font-bold">
                <span>{match.homeScore}</span>
                <span className="text-muted-foreground">-</span>
                <span>{match.awayScore}</span>
              </div>
              <div className="text-xs font-medium truncate flex-1 text-right">
                {match.awayTeam}
              </div>
            </div>
            <Badge variant="outline" className="ml-2 text-xs">
              {match.status}
            </Badge>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-border">
        <button className="w-full text-xs text-primary hover:text-primary-glow transition-colors font-medium">
          View all results →
        </button>
      </div>
    </div>
  );
};

export default FloatingResults;