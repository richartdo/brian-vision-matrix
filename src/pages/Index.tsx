import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Portfolio from "@/components/Portfolio";
import Study from "@/components/Study";
import Experience from "@/components/Experience";
import CurrentWork from "@/components/CurrentWork";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Portfolio />
        <Study />
        <Experience />
        <CurrentWork />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
