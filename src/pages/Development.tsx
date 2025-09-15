import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  Trophy, 
  BookOpen, 
  Waves, 
  Target, 
  Cpu, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Award,
  Lightbulb,
  Heart,
  Star
} from "lucide-react";

const developmentPrograms = [
  {
    id: "youth-football",
    title: "Youth Football",
    description: "Developing the next generation of Ugandan football talent through comprehensive youth programs",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    stats: {
      participants: "2,500+",
      centers: "45",
      coaches: "120"
    },
    features: [
      "U15, U17, U20 Development Programs",
      "Regional Training Centers",
      "Talent Identification Scouts",
      "Academic Support Integration"
    ],
    achievements: [
      "CECAFA U15 Champions 2023",
      "50+ Youth Players in Professional Clubs",
      "15 Youth Coaches Certified Annually"
    ],
    progress: 85,
    nextMilestone: "Expand to 60 training centers by 2025"
  },
  {
    id: "women-football",
    title: "Women's Football",
    description: "Empowering women through football and creating pathways for female participation at all levels",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    stats: {
      participants: "1,800+",
      teams: "28",
      leagues: "4"
    },
    features: [
      "Women's Premier League Development",
      "Girls' Grassroots Programs",
      "Female Coaching Certification",
      "Gender Equality Initiatives"
    ],
    achievements: [
      "Crested Cranes FIFA Ranking Improvement",
      "25% Increase in Female Participation",
      "First Female FIFA Instructor in Uganda"
    ],
    progress: 72,
    nextMilestone: "Launch Women's Football Academy 2024"
  },
  {
    id: "hr-capacity",
    title: "HR Capacity Building",
    description: "Building human resource capacity through education and continuous professional development",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
    stats: {
      graduates: "450+",
      courses: "12",
      institutions: "8"
    },
    features: [
      "Coach Education Programs (CAF A, B, C)",
      "Referee Training & Development",
      "Football Administration Courses",
      "Sports Science & Medicine Training"
    ],
    achievements: [
      "200+ Certified Coaches Annually",
      "FIFA Referee Development Program",
      "Partnership with 3 Universities"
    ],
    progress: 68,
    nextMilestone: "Launch Digital Learning Platform 2024"
  },
  {
    id: "beach-soccer",
    title: "Beach Soccer",
    description: "Developing beach soccer as an emerging sport and creating new opportunities for players",
    icon: Waves,
    color: "from-orange-500 to-amber-500",
    stats: {
      players: "150+",
      tournaments: "6",
      beaches: "4"
    },
    features: [
      "National Beach Soccer League",
      "Sand Cranes National Team",
      "Beach Soccer Festivals",
      "Coastal Community Engagement"
    ],
    achievements: [
      "AFCON Beach Soccer Qualification 2024",
      "First Beach Soccer League in East Africa",
      "International Tournament Hosting"
    ],
    progress: 45,
    nextMilestone: "Build dedicated beach soccer facility"
  },
  {
    id: "futsal",
    title: "Futsal",
    description: "Promoting futsal as a foundation sport for technical skill development and urban engagement",
    icon: Target,
    color: "from-purple-500 to-violet-500",
    stats: {
      players: "800+",
      courts: "15",
      clubs: "32"
    },
    features: [
      "National Futsal League",
      "School Futsal Programs",
      "Urban Community Outreach",
      "Referee & Coach Training"
    ],
    achievements: [
      "CAF Futsal Championship Participation",
      "50+ Schools Participating",
      "First FIFA Futsal Course in Uganda"
    ],
    progress: 58,
    nextMilestone: "Establish National Futsal Training Center"
  },
  {
    id: "science-technology",
    title: "Science & Technology",
    description: "Integrating modern technology and sports science to enhance performance and development",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
    stats: {
      projects: "8",
      partnerships: "5",
      innovations: "12"
    },
    features: [
      "Performance Analysis Systems",
      "Digital Scouting Platform",
      "Sports Medicine Integration",
      "Data-Driven Decision Making"
    ],
    achievements: [
      "First Digital Player Database",
      "Partnership with Technology Companies",
      "Sports Science Lab Establishment"
    ],
    progress: 35,
    nextMilestone: "Launch AI-powered talent identification system"
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
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fufa-blue via-primary to-indigo-600"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-fufa-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container-wide relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Lightbulb className="w-4 h-4 text-fufa-yellow" />
              <span className="text-sm font-medium">Football Development</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Building the
              <span className="block bg-gradient-to-r from-fufa-yellow via-yellow-300 to-fufa-yellow bg-clip-text text-transparent">
                Future of Football
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Comprehensive development programs creating pathways for excellence in Ugandan football
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-fufa-yellow mb-1">6</div>
                <div className="text-sm text-white/70">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fufa-yellow mb-1">5,000+</div>
                <div className="text-sm text-white/70">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fufa-yellow mb-1">150+</div>
                <div className="text-sm text-white/70">Coaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fufa-yellow mb-1">100+</div>
                <div className="text-sm text-white/70">Facilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentPrograms.map((program, index) => (
              <Card 
                key={program.id} 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/60 backdrop-blur-xl border-0 rounded-3xl overflow-hidden"
                onClick={() => setSelectedProgram(program.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Header with Icon */}
                  <div className={`bg-gradient-to-r ${program.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative z-10">
                      <program.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <div className="flex items-center gap-2">
                        <Progress value={program.progress} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{program.progress}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(program.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-foreground">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Next Milestone */}
                    <div className="bg-background/50 rounded-2xl p-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Clock className="w-4 h-4" />
                        Next Milestone
                      </div>
                      <p className="text-sm font-medium text-foreground">{program.nextMilestone}</p>
                    </div>

                    {/* View Details */}
                    <div className="flex items-center justify-center gap-2 text-fufa-blue group-hover:gap-4 transition-all duration-300">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgramData && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className={`bg-gradient-to-r ${selectedProgramData.color} p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <selectedProgramData.icon className="w-12 h-12" />
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{selectedProgramData.title}</h2>
                    <p className="text-white/90 text-lg">{selectedProgramData.description}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedProgram(null)}
                  className="text-white hover:bg-white/20 rounded-full w-12 h-12 p-0"
                >
                  ✕
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-border/50">
              <div className="flex gap-8 px-8">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "features", label: "Features" },
                  { id: "achievements", label: "Achievements" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 font-medium transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? "text-fufa-blue border-fufa-blue"
                        : "text-muted-foreground border-transparent hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-250px)]">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(selectedProgramData.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-6 bg-background/50 rounded-2xl">
                        <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
                        <div className="text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="bg-background/50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-fufa-blue" />
                      Development Progress
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Overall Progress</span>
                        <span className="font-bold text-fufa-blue">{selectedProgramData.progress}%</span>
                      </div>
                      <Progress value={selectedProgramData.progress} className="h-3" />
                      <p className="text-sm text-muted-foreground">
                        Next milestone: {selectedProgramData.nextMilestone}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "features" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProgramData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-2xl">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "achievements" && (
                <div className="space-y-4">
                  {selectedProgramData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-background/50 rounded-2xl">
                      <Award className="w-6 h-6 text-fufa-yellow mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="p-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 h-14 rounded-xl bg-fufa-blue hover:bg-fufa-blue/90">
                  Join Program
                </Button>
                <Button variant="outline" className="flex-1 h-14 rounded-xl border-fufa-blue text-fufa-blue hover:bg-fufa-blue hover:text-white">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}