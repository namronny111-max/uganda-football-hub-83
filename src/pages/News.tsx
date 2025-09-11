import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search, 
  Calendar, 
  Eye, 
  Clock, 
  User, 
  Tag,
  ArrowRight,
  Filter,
  TrendingUp,
  Star
} from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  views: number;
  featured: boolean;
  trending: boolean;
  tags: string[];
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Uganda Cranes Qualify for AFCON 2025 in Morocco",
    excerpt: "The Uganda Cranes secured their spot in the 2025 Africa Cup of Nations with a crucial victory over Tanzania in the final qualifier.",
    content: "Full article content here...",
    author: "John Kamya",
    date: "2024-01-15",
    category: "National Teams",
    image: "/placeholder.svg",
    readTime: "5 min",
    views: 1250,
    featured: true,
    trending: true,
    tags: ["AFCON", "Qualifiers", "Uganda Cranes"]
  },
  {
    id: "2", 
    title: "FUFA Women Elite League Season Kicks Off This Weekend",
    excerpt: "The new season of the FUFA Women Elite League promises exciting matches as 12 teams compete for the championship title.",
    content: "Full article content here...",
    author: "Sarah Namubiru",
    date: "2024-01-14",
    category: "Women Football",
    image: "/placeholder.svg",
    readTime: "3 min",
    views: 890,
    featured: true,
    trending: false,
    tags: ["Women's Football", "Elite League", "Season Launch"]
  },
  {
    id: "3",
    title: "New Coaching Education Program Launched by FUFA",
    excerpt: "FUFA announces a comprehensive coaching education program aimed at developing local coaching talent across all levels.",
    content: "Full article content here...",
    author: "Moses Magogo",
    date: "2024-01-13",
    category: "Development",
    image: "/placeholder.svg",
    readTime: "4 min",
    views: 670,
    featured: false,
    trending: true,
    tags: ["Coaching", "Education", "Development"]
  },
  {
    id: "4",
    title: "Uganda Cup Round of 16 Draw Results",
    excerpt: "The draw for the Uganda Cup Round of 16 has been conducted, setting up exciting matchups for the next stage of the competition.",
    content: "Full article content here...",
    author: "David Ssali",
    date: "2024-01-12",
    category: "Competitions",
    image: "/placeholder.svg",
    readTime: "2 min",
    views: 540,
    featured: false,
    trending: false,
    tags: ["Uganda Cup", "Draw", "Competition"]
  },
  {
    id: "5",
    title: "Beach Soccer Team Prepares for Continental Championship",
    excerpt: "The Sand Cranes intensify preparations for the upcoming CAF Beach Soccer Championship with a training camp in Entebbe.",
    content: "Full article content here...",
    author: "Peter Lwanga",
    date: "2024-01-11",
    category: "Beach Soccer",
    image: "/placeholder.svg",
    readTime: "3 min",
    views: 320,
    featured: false,
    trending: false,
    tags: ["Beach Soccer", "Sand Cranes", "Training Camp"]
  },
  {
    id: "6",
    title: "Futsal League Expands to Include Youth Categories",
    excerpt: "FUFA announces the expansion of the national futsal league to include youth categories, promoting the growth of indoor football.",
    content: "Full article content here...",
    author: "Grace Nakimera",
    date: "2024-01-10",
    category: "Futsal",
    image: "/placeholder.svg",
    readTime: "4 min",
    views: 280,
    featured: false,
    trending: false,
    tags: ["Futsal", "Youth", "League Expansion"]
  }
];

const categories = [
  { id: "all", label: "All News", count: newsArticles.length },
  { id: "National Teams", label: "National Teams", count: newsArticles.filter(a => a.category === "National Teams").length },
  { id: "Women Football", label: "Women Football", count: newsArticles.filter(a => a.category === "Women Football").length },
  { id: "Competitions", label: "Competitions", count: newsArticles.filter(a => a.category === "Competitions").length },
  { id: "Development", label: "Development", count: newsArticles.filter(a => a.category === "Development").length },
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filteredArticles = useMemo(() => {
    let filtered = newsArticles;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);
  const trendingArticles = newsArticles.filter(article => article.trending).slice(0, 5);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "National Teams": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Women Football": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      case "Competitions": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Development": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Beach Soccer": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Futsal": return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-fufa-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-36 h-36 bg-fufa-yellow/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Football
              <span className="text-fufa-yellow block">News & Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Stay informed with the latest news, updates, and stories from Ugandan football
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search news, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Tabs */}
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex flex-col gap-1 text-xs">
                      <span className="hidden sm:inline">{category.label}</span>
                      <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                      <Badge variant="secondary" className="text-xs px-1">
                        {category.count}
                      </Badge>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Featured Articles */}
              {featuredArticles.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-6 h-6 text-fufa-yellow" />
                    <h2 className="text-3xl font-bold text-foreground">Featured Stories</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredArticles.map((article) => (
                      <Card 
                        key={article.id}
                        className="group cursor-pointer hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm border-0 overflow-hidden"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-4 left-4 flex gap-2">
                            <Badge className={getCategoryColor(article.category)}>
                              {article.category}
                            </Badge>
                            {article.trending && (
                              <Badge variant="secondary" className="bg-red-100 text-red-800">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(article.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Articles */}
              {regularArticles.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Latest News</h2>
                  <div className="space-y-6">
                    {regularArticles.map((article) => (
                      <Card 
                        key={article.id}
                        className="group cursor-pointer hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm border-0"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge className={getCategoryColor(article.category)}>
                                  {article.category}
                                </Badge>
                                {article.trending && (
                                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    Trending
                                  </Badge>
                                )}
                              </div>
                              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {article.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {article.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    <span>{article.author}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(article.date).toLocaleDateString()}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{article.views}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-48 h-32 bg-gradient-primary rounded-lg flex-shrink-0"></div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Trending Articles */}
              <Card className="mb-8 bg-card/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    <h3 className="text-lg font-bold text-foreground">Trending Now</h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {trendingArticles.map((article, index) => (
                      <div 
                        key={article.id}
                        className="cursor-pointer group"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="flex gap-3">
                          <div className="text-2xl font-bold text-fufa-yellow">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {article.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Eye className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{article.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-primary text-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Get the latest football news delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-primary relative">
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="sm" onClick={() => setSelectedArticle(null)} className="text-white hover:bg-white/20">
                    ✕
                  </Button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-2 mb-4">
                    <Badge className={getCategoryColor(selectedArticle.category)}>
                      {selectedArticle.category}
                    </Badge>
                    {selectedArticle.trending && (
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-4">{selectedArticle.title}</h1>
                  <div className="flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{selectedArticle.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed">
                    {selectedArticle.content || "Full article content would appear here with detailed information about the story, including quotes, statistics, and comprehensive coverage of the topic."}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}