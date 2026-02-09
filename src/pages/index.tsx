import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* <Methodology /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;