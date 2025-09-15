import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  TrendingUp, 
  ArrowRight,
  Eye,
  MessageCircle,
  Tag,
  Filter,
  ChevronRight
} from "lucide-react";

const newsCategories = [
  { id: "all", label: "All News", count: 45 },
  { id: "national-teams", label: "National Teams", count: 12 },
  { id: "competitions", label: "Competitions", count: 8 },
  { id: "development", label: "Development", count: 15 },
  { id: "announcements", label: "Announcements", count: 10 }
];

const trendingTopics = [
  "Uganda Cranes",
  "AFCON Qualifiers", 
  "Women's Football",
  "Youth Development",
  "Beach Soccer"
];

const newsArticles = [
  {
    id: 1,
    title: "Uganda Cranes Secure Historic Victory Against Kenya in AFCON Qualifiers",
    excerpt: "The national team delivered a masterclass performance at Mandela National Stadium, securing their spot in the next round of qualifications with a commanding 3-1 victory.",
    category: "national-teams",
    author: "FUFA Media Team",
    date: "2024-03-15",
    readTime: "4 min read",
    views: 2840,
    comments: 47,
    tags: ["Uganda Cranes", "AFCON", "Qualifiers", "Victory"],
    featured: true,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Crested Cranes Captain Phiona Nabbumba Wins CAF Women's Player of the Month",
    excerpt: "The midfielder's exceptional performances have earned her continental recognition, marking a significant milestone for Ugandan women's football.",
    category: "national-teams",
    author: "Sports Desk",
    date: "2024-03-12",
    readTime: "3 min read",
    views: 1920,
    comments: 28,
    tags: ["Crested Cranes", "Awards", "Women's Football"],
    featured: false,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "FUFA Launches Revolutionary Youth Development Program Across 10 Regions",
    excerpt: "The comprehensive initiative aims to identify and nurture young talent through state-of-the-art training facilities and expert coaching programs.",
    category: "development",
    author: "Development Team",
    date: "2024-03-10",
    readTime: "6 min read",
    views: 3150,
    comments: 65,
    tags: ["Youth Development", "Training", "Grassroots"],
    featured: true,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Uganda Premier League Season Kicks Off with Record-Breaking Attendance",
    excerpt: "Football fans across Uganda showed unprecedented support as the new season commenced with thrilling matches and spectacular goals.",
    category: "competitions",
    author: "League Officials",
    date: "2024-03-08",
    readTime: "5 min read",
    views: 2100,
    comments: 33,
    tags: ["UPL", "Season Launch", "Attendance"],
    featured: false,
    image: "/placeholder.svg"
  }
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const filteredArticles = newsArticles.filter(article => {
    const categoryMatch = selectedCategory === "all" || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);
  const selectedArticleData = newsArticles.find(article => article.id === selectedArticle);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fufa-blue via-primary to-indigo-600"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container-wide relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <TrendingUp className="w-4 h-4 text-fufa-yellow" />
              <span className="text-sm font-medium">Latest Updates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Football
              <span className="block bg-gradient-to-r from-fufa-yellow via-yellow-300 to-fufa-yellow bg-clip-text text-transparent">
                News Hub
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Stay updated with the latest news, match reports, and developments in Ugandan football
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container-wide">
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-elegant border border-border/50">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              {/* Search */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search news, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 bg-background/50 border-border/50 text-lg rounded-2xl"
                />
              </div>
              
              {/* Categories */}
              <div className="flex gap-3 flex-wrap">
                {newsCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
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

            {/* Trending Topics */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground mr-2">Trending:</span>
              {trendingTopics.map((topic, index) => (
                <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-fufa-blue hover:text-white transition-colors">
                  <Tag className="w-3 h-3 mr-1" />
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Featured Stories</h2>
              <div className="flex items-center gap-2 text-fufa-blue">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Trending Now</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-card/60 backdrop-blur-xl border-0 rounded-3xl overflow-hidden"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <div className="aspect-video bg-gradient-to-br from-fufa-blue/20 to-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-fufa-yellow text-black font-semibold">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/80 text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {article.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="text-fufa-blue border-fufa-blue">
                        {newsCategories.find(cat => cat.id === article.category)?.label}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-fufa-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {article.author}</span>
                      <div className="flex items-center gap-2 text-fufa-blue group-hover:gap-4 transition-all duration-300">
                        <span className="font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
            <Button variant="outline" className="rounded-xl">
              <Filter className="w-4 h-4 mr-2" />
              Filter & Sort
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/60 backdrop-blur-xl border-0 rounded-2xl overflow-hidden"
                onClick={() => setSelectedArticle(article.id)}
              >
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="absolute bottom-3 right-3 text-white/80 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {article.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {article.comments}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {newsCategories.find(cat => cat.id === article.category)?.label}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-fufa-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <ChevronRight className="w-4 h-4 text-fufa-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="rounded-xl px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}