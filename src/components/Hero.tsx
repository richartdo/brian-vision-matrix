import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import heroTech1 from "@/assets/hero-tech-1.png";
import heroTech2 from "@/assets/hero-tech-2.png";
import heroTech3 from "@/assets/hero-tech-3.png";

const Hero = () => {
  const heroImages = [
    { src: heroTech1, label: "AI Projects" },
    { src: heroTech2, label: "Cloud Solutions" },
    { src: heroTech3, label: "Software Systems" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/cv/BRIAN RICHARD CV.pdf';
    link.download = 'BRIAN_RICHARD_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 217, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="block text-foreground">Brian Richard</span>
              <span className="block text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-4 font-medium">
                Software & AI Solutions Developer
              </span>
              <span className="block text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 font-medium">
                | Cloud Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8"
            >
              Find your tech solutions with me.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleDownloadCV}
                className="group w-full sm:w-auto touch-manipulation"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact} className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto touch-manipulation">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] hidden sm:block"
          >
            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, x: -100 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 3,
                  }}
                  className="relative group"
                >
                  <div className="glass-strong rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center glow-blue hover:glow-blue-strong transition-all duration-300 hover:scale-110">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="w-full h-full object-contain opacity-90"
                    />
                  </div>
                  <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs lg:text-sm font-medium text-primary whitespace-nowrap">
                      {image.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
