import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  GraduationCap, 
  Trophy, 
  Target, 
  BookOpen, 
  Waves,
  Gamepad2,
  Laptop,
  ArrowRight,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";

const developmentPrograms = [
  {
    id: "youth-football",
    title: "Youth Football",
    description: "Developing the next generation of Ugandan football talent",
    icon: Users,
    color: "bg-blue-500",
    stats: { participants: "5,000+", centers: "120", coaches: "300+" },
    programs: [
      {
        name: "FUFA Juniors League",
        ageGroup: "U-13 to U-17",
        description: "Competitive league structure for youth development",
        participants: "2,500+",
        locations: "All regions"
      },
      {
        name: "School Football Program",
        ageGroup: "Primary & Secondary",
        description: "Integrating football into school curricula",
        participants: "1,800+",
        locations: "200+ schools"
      },
      {
        name: "Talent Identification",
        ageGroup: "U-15 to U-20",
        description: "Scouting and nurturing exceptional talent",
        participants: "500+",
        locations: "Regional centers"
      }
    ]
  },
  {
    id: "women-football",
    title: "Women Football",
    description: "Empowering women through football and creating opportunities",
    icon: Target,
    color: "bg-pink-500",
    stats: { participants: "3,000+", teams: "80", leagues: "4" },
    programs: [
      {
        name: "FUFA Women Elite League",
        ageGroup: "Senior",
        description: "Top-tier women's football competition",
        participants: "400+",
        locations: "National"
      },
      {
        name: "Women's Development League",
        ageGroup: "U-20 & Senior",
        description: "Second tier development competition",
        participants: "600+",
        locations: "Regional"
      },
      {
        name: "Girls' Football Initiative",
        ageGroup: "U-13 to U-17",
        description: "Grassroots girls' football development",
        participants: "1,200+",
        locations: "Community level"
      }
    ]
  },
  {
    id: "hr-capacity",
    title: "HR Capacity Building",
    description: "Education and professional development for football stakeholders",
    icon: GraduationCap,
    color: "bg-green-500",
    stats: { graduates: "2,000+", courses: "25", instructors: "50+" },
    programs: [
      {
        name: "Coaching Education",
        ageGroup: "All levels",
        description: "CAF and FIFA certified coaching courses",
        participants: "800+",
        locations: "Training centers"
      },
      {
        name: "Referee Development",
        ageGroup: "All levels",
        description: "Professional referee training and certification",
        participants: "600+",
        locations: "Regional hubs"
      },
      {
        name: "Administration Training",
        ageGroup: "Officials",
        description: "Football administration and management courses",
        participants: "400+",
        locations: "FUFA House"
      }
    ]
  },
  {
    id: "beach-soccer",
    title: "Beach Soccer",
    description: "Developing beach soccer as an alternative football discipline",
    icon: Waves,
    color: "bg-orange-500",
    stats: { players: "200+", venues: "5", tournaments: "8" },
    programs: [
      {
        name: "National Beach Soccer League",
        ageGroup: "Senior",
        description: "Competitive beach soccer championship",
        participants: "120+",
        locations: "Coastal areas"
      },
      {
        name: "Beach Soccer Development",
        ageGroup: "Youth & Senior",
        description: "Skills development and training camps",
        participants: "80+",
        locations: "Beach facilities"
      }
    ]
  },
  {
    id: "futsal",
    title: "Futsal",
    description: "Indoor football development and competition structure",
    icon: Gamepad2,
    color: "bg-purple-500",
    stats: { teams: "60", venues: "12", players: "800+" },
    programs: [
      {
        name: "FUFA Futsal League",
        ageGroup: "Senior",
        description: "National futsal championship",
        participants: "300+",
        locations: "Indoor facilities"
      },
      {
        name: "Schools Futsal Program",
        ageGroup: "Youth",
        description: "School-based futsal development",
        participants: "500+",
        locations: "School halls"
      }
    ]
  },
  {
    id: "science-technology",
    title: "Science and Technology",
    description: "Leveraging technology for football development and analysis",
    icon: Laptop,
    color: "bg-indigo-500",
    stats: { systems: "15", users: "500+", analytics: "24/7" },
    programs: [
      {
        name: "Performance Analysis",
        ageGroup: "Professional",
        description: "Video analysis and performance tracking",
        participants: "100+",
        locations: "Elite clubs"
      },
      {
        name: "Digital Football Platform",
        ageGroup: "All levels",
        description: "Online learning and management system",
        participants: "1,000+",
        locations: "Online"
      }
    ]
  }
];

export default function Development() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const selectedProgramData = developmentPrograms.find(p => p.id === selectedProgram);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-16 right-16 w-40 h-40 bg-fufa-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-fufa-yellow/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Football
              <span className="text-fufa-yellow block">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Building the future of Ugandan football through comprehensive development programs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Users className="w-5 h-5 mr-2" />
                10,000+ Participants
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Trophy className="w-5 h-5 mr-2" />
                6 Key Areas
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Development Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to develop football at all levels in Uganda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentPrograms.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card 
                  key={program.id}
                  className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-0"
                  onClick={() => setSelectedProgram(program.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${program.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(program.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-foreground">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full group-hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgramData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="bg-gradient-primary text-white p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="sm" onClick={() => setSelectedProgram(null)} className="text-white hover:bg-white/20">
                    ✕
                  </Button>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full ${selectedProgramData.color} flex items-center justify-center`}>
                    <selectedProgramData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedProgramData.title}</h2>
                    <p className="text-white/90">{selectedProgramData.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(selectedProgramData.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-fufa-yellow">{value}</div>
                      <div className="text-white/80 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="programs">Programs</TabsTrigger>
                    <TabsTrigger value="impact">Impact</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-foreground">Program Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProgramData.description}. This comprehensive program is designed to develop 
                        football at all levels, ensuring sustainable growth and excellence in Ugandan football.
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Objectives</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Develop technical skills and knowledge</li>
                            <li>• Create pathways for progression</li>
                            <li>• Ensure quality standards</li>
                            <li>• Foster inclusive participation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Target Outcomes</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Increased participation rates</li>
                            <li>• Improved technical standards</li>
                            <li>• Enhanced competition quality</li>
                            <li>• Sustainable development</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="programs" className="mt-6">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-foreground">Active Programs</h3>
                      <div className="space-y-4">
                        {selectedProgramData.programs.map((program, index) => (
                          <Card key={index} className="border border-border/50">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h4 className="font-semibold text-foreground">{program.name}</h4>
                                  <p className="text-sm text-muted-foreground">{program.description}</p>
                                </div>
                                <Badge variant="outline">{program.ageGroup}</Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-muted-foreground" />
                                  <span>{program.participants} participants</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-muted-foreground" />
                                  <span>{program.locations}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="impact" className="mt-6">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-foreground">Program Impact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border border-border/50">
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-foreground mb-4">Success Stories</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <Trophy className="w-5 h-5 text-fufa-yellow mt-1" />
                                <div>
                                  <p className="text-sm font-medium">National Team Graduates</p>
                                  <p className="text-xs text-muted-foreground">Over 50 players progressed to national teams</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <GraduationCap className="w-5 h-5 text-fufa-blue mt-1" />
                                <div>
                                  <p className="text-sm font-medium">Certified Professionals</p>
                                  <p className="text-xs text-muted-foreground">2,000+ coaches and officials certified</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Target className="w-5 h-5 text-green-500 mt-1" />
                                <div>
                                  <p className="text-sm font-medium">Community Impact</p>
                                  <p className="text-xs text-muted-foreground">Programs active in all 4 regions</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-border/50">
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-foreground mb-4">Future Plans</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-fufa-yellow mt-1" />
                                <div>
                                  <p className="text-sm font-medium">2024-2027 Strategy</p>
                                  <p className="text-xs text-muted-foreground">Expanding reach to rural communities</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Laptop className="w-5 h-5 text-fufa-blue mt-1" />
                                <div>
                                  <p className="text-sm font-medium">Digital Innovation</p>
                                  <p className="text-xs text-muted-foreground">Online learning platforms and apps</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-green-500 mt-1" />
                                <div>
                                  <p className="text-sm font-medium">Sustainability</p>
                                  <p className="text-xs text-muted-foreground">Self-sustaining program models</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}