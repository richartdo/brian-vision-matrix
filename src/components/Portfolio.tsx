import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import MailBrainImg from "@/assets/MailBrain.png";
import CampusDealsImg from "@/assets/campusdeal.png";
import cropImg from "@/assets/crop.png";
import EmployImg from "@/assets/Employee.png";
import SalaryImg from "@/assets/salary.png";
import LibraryImg from "@/assets/Library.png";
import BitflowImg from "@/assets/Bitflow.png";
import LylopImg from "@/assets/lylop.png";



type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  media?: MediaItem[];
};

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "Web", "Cloud"];

  const projects: Project[] = [
    {
      title: "MailBrain (AI Email Organizer)",
      category: "AI",
      description: "An intelligent system that scans email history, extracts and organizes content into a searchable database — enabling quick insights, categorization, and automated follow-ups.",
      tech: ["Python", "FastAPI", "PostgreSQL", "OpenAI API", "React", "n8n"],
      image: MailBrainImg,
      github: "#",
      demo: "#",
      media: [
        { type: "image", src: MailBrainImg },
        // Add demo video: { type: "video", src: "/path/to/mailbrain-demo.mp4", poster: MailBrainImg },
        // Add screenshots: { type: "image", src: "/path/to/screenshot1.png" },
      ],
    },
    {
      title: "Campus Deals App",
      category: "Web",
      description: "Secure campus marketplace where students buy and sell services safely through verified profiles and escrow payments.",
      tech: ["React Native", "Node.js", "Express", "Firebase",  "M-Pesa API"],
      image: CampusDealsImg,
      github: "#",
      demo: "#",
      media: [
        { type: "image", src: CampusDealsImg },
        // Add demo video: { type: "video", src: "/path/to/campusdeals-demo.mp4", poster: CampusDealsImg },
      ],
    },
    {
      title: "Bitflow — Social Media Automation Agent",
      category: "AI",
      description: "An AI-powered automation system that manages social media content creation and posting. It fetches topics from Google Sheets, generates captions and images using AI, and automatically posts to Facebook, X, and LinkedIn based on platform-specific rules and schedules.",
      tech: ["n8n", "OpenAI", "Blotato", "Social Media API Integrations (Facebook, X, LinkedIn)"],
      image: BitflowImg,
      github: "https://github.com/richartdo/n8n-agents.git",
      demo: "https://drive.google.com/drive/folders/1ROXRHTZLaXBYyUIomnJREYeQOk4cbiEq?usp=sharing",
      media: [
        { type: "image", src: BitflowImg },
        // Replace with actual video from Google Drive or add locally:
        // { type: "video", src: "/videos/bitflow-demo.mp4", poster: BitflowImg },
      ],
    },
    {
      title: "Lylop — Social Media Automation AI Agent",
      category: "AI",
      description: "An AI-driven automation system designed for Facebook and X, enabling full-cycle content automation. It fetches topics from Google Sheets, generates captions and image prompts using AI, creates visuals, and posts automatically to each platform based on their rules and schedule.",
      tech: ["n8n", "OpenAI", "Blotato", "Social Media API Integrations (Facebook, X)", "OpenAI API"],
      image: LylopImg,
      github: "https://github.com/richartdo/n8n-agents.git",
      demo: "https://drive.google.com/drive/folders/1ROXRHTZLaXBYyUIomnJREYeQOk4cbiEq?usp=sharing",
      media: [
        { type: "image", src: LylopImg },
        // Add video: { type: "video", src: "/videos/lylop-demo.mp4", poster: LylopImg },
      ],
    },
    {
      title: "Crop Recommendation AI Model",
      category: "AI",
      description: "An AI-powered system that predicts the most suitable crops for specific areas based on soil nutrients, rainfall, temperature, and humidity. Designed to help farmers and agricultural planners make data-driven decisions using machine learning.",
      tech: ["Google Colab", "Kaggle Dataset", "Machine Learning Models: Decision Tree, Random Forest, Logistic Regression, XGBoost"],
      image: cropImg,
      github: "https://github.com/richartdo/crop-recommendation.git",
      demo: "#",
      media: [
        { type: "image", src: cropImg },
        // Add more screenshots or demo
      ],
    },
    {
      title: "Salary Predictor AI Model",
      category: "AI",
      description: "An AI-driven system that predicts employee salaries based on factors like experience, education, skills, and job role, helping organizations make data-driven compensation decisions.",
      tech: ["Python", "Scikit-Learn", "Pandas & NumPy", "Machine Learning Models: Linear Regression, Random Forest, XGBoost"],
      image: SalaryImg,
      github: "https://github.com/richartdo/salary-predictor-app.git",
      demo: "#",
      media: [
        { type: "image", src: SalaryImg },
      ],
    },
    {
      title: "WorkTrack — Employee Attendance Management System",
      category: "Web",
      description: "A full-stack web application integrated with ZKTeco biometric IoT devices for fingerprint-based employee attendance tracking. Features include an admin dashboard and employee portal, capturing real-time check-in/out data and automating attendance",
      tech: ["React", "Node.js", "MongoDB", "IoT Integration: ZKTeco Biometric Devices"],
      image: EmployImg,
      github: "#",
      demo: "#",
      media: [
        { type: "image", src: EmployImg },
        // Add dashboard screenshots and demo video
      ],
    },
    {
      title: "Library Management System",
      category: "Web",
      description: "A full-stack web application for managing books, users, and borrowing activities. Features include book cataloging, availability tracking, user roles, and automated borrow/return management to streamline library operations.",
      tech: ["React", "Node.js", "MongoDB", "REST API Integration"],
      image: LibraryImg,
      github: "#",
      demo: "#",
      media: [
        { type: "image", src: LibraryImg },
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const currentMedia = selectedProject.media?.[selectedMediaIndex] ?? {
    type: "image",
    src: selectedProject.image,
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
    
    // Scroll to featured preview card
    setTimeout(() => {
      featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleMediaNext = () => {
    if (!selectedProject.media || selectedProject.media.length === 0) return;
    setSelectedMediaIndex((prev) => (prev + 1) % selectedProject.media!.length);
  };

  const handleMediaPrev = () => {
    if (!selectedProject.media || selectedProject.media.length === 0) return;
    setSelectedMediaIndex((prev) =>
      prev === 0 ? selectedProject.media!.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" ref={ref} className="py-12 sm:py-16 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Web Development & AI <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Featured projects showcasing full-stack web development, AI automation, and cloud solutions
          </p>
        </motion.div>

        {/* Featured Preview */}
        <motion.div
          ref={featuredRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong rounded-2xl p-4 sm:p-6 lg:p-8 mb-10 sm:mb-12 lg:mb-14 scroll-mt-20"
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left side - Media viewer */}
            <div className="w-full lg:w-3/5 lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-xl bg-muted/40 border border-border/60">
                {currentMedia.type === "video" ? (
                  <video
                    controls
                    poster={currentMedia.poster}
                    className="w-full h-full max-h-[420px] object-cover"
                  >
                    <source src={currentMedia.src} />
                  </video>
                ) : (
                  <img
                    src={currentMedia.src}
                    alt={selectedProject.title}
                    className="w-full h-full max-h-[420px] object-cover"
                  />
                )}

                {selectedProject.media && selectedProject.media.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-3">
                    <button
                      onClick={handleMediaPrev}
                      className="glass rounded-full px-3 py-2 text-sm text-foreground hover:text-primary transition"
                      aria-label="Previous media"
                    >
                      ◀
                    </button>
                    <button
                      onClick={handleMediaNext}
                      className="glass rounded-full px-3 py-2 text-sm text-foreground hover:text-primary transition"
                      aria-label="Next media"
                    >
                      ▶
                    </button>
                  </div>
                )}
              </div>

              {selectedProject.media && selectedProject.media.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                  {selectedProject.media.map((media, idx) => (
                    <button
                      key={`${selectedProject.title}-${idx}`}
                      onClick={() => setSelectedMediaIndex(idx)}
                      className={`relative h-16 w-24 rounded-lg overflow-hidden border transition-all ${
                        idx === selectedMediaIndex
                          ? "border-primary ring-2 ring-primary/40"
                          : "border-border/60"
                      }`}
                    >
                      {media.type === "video" ? (
                        <div className="w-full h-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                          Video
                        </div>
                      ) : (
                        <img
                          src={media.src}
                          alt={`${selectedProject.title} media ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right side - Scrollable details */}
            <div className="w-full lg:w-2/5 space-y-4 max-h-[600px] lg:overflow-y-auto lg:pr-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Selected</p>
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.github}
                  className="glass rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition"
                  aria-label="View GitHub"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </span>
                </a>
                <a
                  href={selectedProject.demo}
                  className="glass rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition"
                  aria-label="View Demo"
                >
                  <span className="inline-flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live / Demo
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-10 sm:mb-12 px-2"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all touch-manipulation active:scale-95 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground glow-blue"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col hover:glow-blue transition-all duration-300"
              onClick={() => handleSelectProject(project)}
            >
              <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 sm:w-11 sm:h-11 glass-strong rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all touch-manipulation active:scale-95"
                    aria-label="View GitHub"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 sm:w-11 sm:h-11 glass-strong rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all touch-manipulation active:scale-95"
                    aria-label="View Demo"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-2 flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-full bg-muted text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-primary font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
