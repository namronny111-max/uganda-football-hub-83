import { Clock, User, ArrowRight, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/upl-hero-main.jpg";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  views: number;
  featured?: boolean;
}

const LatestNews = () => {
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Fixtures for 2025/26 Season Released",
      excerpt: "The StarTimes Uganda Premier League 2025/26 season fixtures have officially been released with Round 1 scheduled to run from 26th September 2025 to 14th February 2026.",
      author: "Bonaventure Binoti Ewo",
      date: "29/08/2025",
      category: "FIXTURES",
      image: heroImage,
      readTime: "3 min read",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "Villa, URA earn first leg advantage in Fufa Super 8",
      excerpt: "SC Villa and URA FC secured important first leg advantages in their respective FUFA Super 8 semi-final encounters, setting up exciting return fixtures.",
      author: "Ismael Kiyonga",
      date: "28/08/2025",
      category: "MATCH REPORT",
      image: heroImage,
      readTime: "4 min read",
      views: 980,
      featured: true
    },
    {
      id: 3,
      title: "Onyango back as Put names 2026 FWCQ squad",
      excerpt: "Captain Denis Onyango returns to the Uganda Cranes squad as coach Milutin Sredojevic names his team for the upcoming 2026 FIFA World Cup qualifiers.",
      author: "Andrew Mwanguhya",
      date: "27/08/2025",
      category: "INTERNATIONAL",
      image: heroImage,
      readTime: "5 min read",
      views: 1450
    },
    {
      id: 4,
      title: "Transfer Deadline Day: All the Moves",
      excerpt: "A comprehensive roundup of all the last-minute transfers and signings across Uganda Premier League clubs on deadline day.",
      author: "Sarah Nakitto",
      date: "26/08/2025",
      category: "TRANSFERS",
      image: heroImage,
      readTime: "6 min read",
      views: 890
    },
    {
      id: 5,
      title: "Youth Development: UPL's Future Stars",
      excerpt: "Meet the promising young talents making their mark in Uganda's top flight and what the future holds for local football.",
      author: "David Isabirye",
      date: "25/08/2025",
      category: "YOUTH",
      image: heroImage,
      readTime: "4 min read",
      views: 650
    },
    {
      id: 6,
      title: "Stadium Infrastructure Updates Across Uganda",
      excerpt: "Latest developments in stadium infrastructure improvements and their impact on the Uganda Premier League experience.",
      author: "Grace Nakimuli",
      date: "24/08/2025",
      category: "INFRASTRUCTURE",
      image: heroImage,
      readTime: "3 min read",
      views: 420
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'FIXTURES': return 'bg-accent text-accent-foreground';
      case 'MATCH REPORT': return 'bg-primary text-primary-foreground';
      case 'INTERNATIONAL': return 'bg-success text-success-foreground';
      case 'TRANSFERS': return 'bg-warning text-warning-foreground';
      case 'YOUTH': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <section className="py-12 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient-primary mb-2">
            Latest News
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest from Uganda Premier League
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Featured Stories</h3>
              <Button variant="ghost" className="text-primary hover:bg-primary/10">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="space-y-6">
              {featuredNews.map((article, index) => (
                <Card key={article.id} className={`card-uganda overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className={`grid ${index === 0 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                    {/* Image */}
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold font-display leading-tight hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-auto text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {article.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {article.views}
                          </span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar News */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">More Stories</h3>
            </div>

            <div className="space-y-4">
              {regularNews.map((article) => (
                <Card key={article.id} className="card-uganda p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex space-x-4">
                    {/* Small Image */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <Badge className={`${getCategoryColor(article.category)} text-xs`}>
                        {article.category}
                      </Badge>
                      <h4 className="font-semibold text-sm leading-tight hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground space-x-2">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full hover:bg-primary/10">
              Load More Stories
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="card-uganda mt-12 p-8 text-center bg-gradient-to-r from-primary/5 to-accent/5">
          <h3 className="text-2xl font-bold font-display text-gradient-primary mb-2">
            Never Miss a Story
          </h3>
          <p className="text-muted-foreground mb-6">
            Get the latest Uganda Premier League news delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="btn-hero">
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LatestNews;