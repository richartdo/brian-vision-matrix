import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Rocket, Zap, Target } from "lucide-react";

const CurrentWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      title: "MailBrain",
      status: "In Development",
      description: "AI agent that scans email history and monitors new incoming mails, extracts and organizes content into a structured database, and enables easy retrieval of key information.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker","n8n","AI Agent"],
      progress: 40,
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Campus Deals Web",
      status: "Ongoing",
      description: "A secure platform connecting campus students for safe and trusted service or product exchanges, solving the challenge of trust and prepayment risks.",
      tech: ["Node.js", "React", "js"],
      progress: 60,
      icon: Zap,
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    },
    {
      title: "HELB Finance Tracker",
      status: "Active",
      description: "An application that helps students monitor and manage government loans throughout the semester, featuring investment insights and simple earning opportunities.",
      tech: ["Python", "MLflow", "FastAPI", "Redis", "Celery"],
      progress: 45,
      icon: Target,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      title: "E-commerce Website",
      status: "Active",
      description: "A full-featured online store with secure payments, user authentication, and an intuitive admin dashboard for seamless product and order management.",
      tech: ["Python", "MLflow", "FastAPI", "Redis", "Celery"],
      progress: 45,
      icon: Target,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      title: "Employees Attendance Management",
      status: "Active",
      description: "System for tracking employee attendance, working hours, and performance analytics with secure authentication and real-time reporting.",
      tech: ["Python", "MLflow", "FastAPI", "Redis", "Celery"],
      progress: 45,
      icon: Target,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      title: "Library Management System",
      status: "Active",
      description: "A digital system that simplifies library operations managing books, tracking borrowers, and automating fine calculations and notifications.",
      tech: ["Python", "MLflow", "FastAPI", "Redis", "Celery"],
      progress: 45,
      icon: Target,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      title: "AI-Powered Notes App",
      status: "Active",
      description: "An intelligent note-taking app that uses AI to summarize, organize, and recommend insights based on stored content.",
      tech: ["Python", "MLflow", "FastAPI", "Redis", "Celery"],
      progress: 45,
      icon: Target,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="current-work" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 217, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Current <span className="text-primary">Work</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Active projects and ongoing collaborations
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-2xl glass-strong p-6 sm:p-8 lg:p-12 min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-6 sm:p-8 lg:p-12 transition-all duration-500 ${
                    index === activeSlide
                      ? "opacity-100 translate-x-0"
                      : index < activeSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center h-full">
                    {/* Project Image */}
                    <div className="relative h-48 sm:h-56 lg:h-72 rounded-xl overflow-hidden glow-blue group order-2 lg:order-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <div className="glass-strong rounded-full p-3 sm:p-4">
                          <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                      <div>
                        <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                          {project.status}
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs sm:text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-primary font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${project.progress}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-muted text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-muted text-primary font-medium">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-strong rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all z-10 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-strong rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all z-10 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6 flex-wrap">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-muted hover:bg-primary/50 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
