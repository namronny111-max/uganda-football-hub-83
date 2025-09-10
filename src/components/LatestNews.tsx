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
      title: "Uganda Cranes Qualify for AFCON 2025",
      excerpt: "The Uganda national team has successfully secured their place in the 2025 Africa Cup of Nations with a decisive victory in the final qualifying match.",
      author: "FUFA Communications",
      date: "29/08/2025",
      category: "NATIONAL TEAM",
      image: heroImage,
      readTime: "3 min read",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "FUFA Women's League Gets Major Boost",
      excerpt: "The Federation announces significant investment in women's football with league expansion, new clubs, and enhanced development programs across the country.",
      author: "FUFA Development",
      date: "28/08/2025",
      category: "DEVELOPMENT",
      image: heroImage,
      readTime: "4 min read",
      views: 980,
      featured: true
    },
    {
      id: 3,
      title: "New Regional Development Centers Launch",
      excerpt: "FUFA officially opens five new regional development centers aimed at nurturing young talent and promoting grassroots football development nationwide.",
      author: "FUFA Communications",
      date: "27/08/2025",
      category: "GRASSROOTS",
      image: heroImage,
      readTime: "5 min read",
      views: 1450
    },
    {
      id: 4,
      title: "FUFA Strategic Plan 2024-2028 Unveiled",
      excerpt: "The Federation presents its comprehensive four-year strategic plan focusing on infrastructure development, talent nurturing, and football governance improvements.",
      author: "FUFA Executive",
      date: "26/08/2025",
      category: "GOVERNANCE",
      image: heroImage,
      readTime: "6 min read",
      views: 890
    },
    {
      id: 5,
      title: "Referee Development Program Launched",
      excerpt: "FUFA introduces comprehensive training program for match officials aimed at improving officiating standards across all levels of Ugandan football.",
      author: "FUFA Technical",
      date: "25/08/2025",
      category: "OFFICIALS",
      image: heroImage,
      readTime: "4 min read",
      views: 650
    },
    {
      id: 6,
      title: "Community Football Initiative Expansion",
      excerpt: "FUFA partners with local communities to establish grassroots football programs in rural areas, promoting inclusivity and talent discovery.",
      author: "FUFA Community",
      date: "24/08/2025",
      category: "COMMUNITY",
      image: heroImage,
      readTime: "3 min read",
      views: 420
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
        case 'NATIONAL TEAM': return 'bg-primary text-primary-foreground';
        case 'DEVELOPMENT': return 'bg-accent text-accent-foreground';
        case 'GRASSROOTS': return 'bg-success text-success-foreground';
        case 'GOVERNANCE': return 'bg-secondary text-secondary-foreground';
        case 'OFFICIALS': return 'bg-warning text-warning-foreground';
        case 'COMMUNITY': return 'bg-fufa-red text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <section className="py-12 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-gradient-primary mb-2">
            Latest News & Media
          </h2>
          <p className="text-muted-foreground text-base">
            Stay updated with the latest developments in Ugandan football
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
            Get the latest FUFA news and football developments delivered straight to your inbox
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