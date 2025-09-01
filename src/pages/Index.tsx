import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LeagueTable from "@/components/LeagueTable";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LeagueTable />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
