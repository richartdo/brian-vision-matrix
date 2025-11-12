import { useState } from "react";
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



const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "Web", "Cloud"];

  const projects = [
    {
      title: "MailBrain (AI Email Organizer)",
      category: "AI",
      description: "An intelligent system that scans email history, extracts and organizes content into a searchable database — enabling quick insights, categorization, and automated follow-ups.",
      tech: ["Python", "FastAPI", "PostgreSQL", "OpenAI API", "React", "n8n"],
      image: MailBrainImg,
      github: "#",
      demo: "#",
    },
    {
      title: "Campus Deals App",
      category: "Web",
      description: "Secure campus marketplace where students buy and sell services safely through verified profiles and escrow payments.",
      tech: ["React Native", "Node.js", "Express", "Firebase",  "M-Pesa API"],
      image: CampusDealsImg,
      github: "#",
      demo: "#",
    },
    {
      title: "Bitflow — Social Media Automation Agent",
      category: "AI",
      description: "An AI-powered automation system that manages social media content creation and posting. It fetches topics from Google Sheets, generates captions and images using AI, and automatically posts to Facebook, X, and LinkedIn based on platform-specific rules and schedules.",
      tech: ["n8n", "OpenAI", "Blotato", "Social Media API Integrations (Facebook, X, LinkedIn)"],
      image: BitflowImg,
      github: "#",
      demo: "https://drive.google.com/drive/folders/1ROXRHTZLaXBYyUIomnJREYeQOk4cbiEq?usp=sharing",
    },
    {
      title: "Lylop — Social Media Automation AI Agent",
      category: "AI",
      description: "An AI-driven automation system designed for Facebook and X, enabling full-cycle content automation. It fetches topics from Google Sheets, generates captions and image prompts using AI, creates visuals, and posts automatically to each platform based on their rules and schedule.",
      tech: ["n8n", "OpenAI", "Blotato", "Social Media API Integrations (Facebook, X)", "OpenAI API"],
      image: LylopImg,
      github: "#",
      demo: "https://drive.google.com/drive/folders/1ROXRHTZLaXBYyUIomnJREYeQOk4cbiEq?usp=sharing",
    },
    {
      title: "Crop Recommendation AI Model",
      category: "AI",
      description: "An AI-powered system that predicts the most suitable crops for specific areas based on soil nutrients, rainfall, temperature, and humidity. Designed to help farmers and agricultural planners make data-driven decisions using machine learning.",
      tech: ["Google Colab", "Kaggle Dataset", "Machine Learning Models: Decision Tree, Random Forest, Logistic Regression, XGBoost"],
      image: cropImg,
      github: "https://github.com/richartdo/crop-recommendation.git",
      demo: "#",
    },
    {
      title: "Salary Predictor AI Model",
      category: "AI",
      description: "An AI-driven system that predicts employee salaries based on factors like experience, education, skills, and job role, helping organizations make data-driven compensation decisions.",
      tech: ["Python", "Scikit-Learn", "Pandas & NumPy", "Machine Learning Models: Linear Regression, Random Forest, XGBoost"],
      image: SalaryImg,
      github: "https://github.com/richartdo/salary-predictor-app.git",
      demo: "#",
    },
    {
      title: "WorkTrack — Employee Attendance Management System",
      category: "Web",
      description: "A full-stack web application integrated with ZKTeco biometric IoT devices for fingerprint-based employee attendance tracking. Features include an admin dashboard and employee portal, capturing real-time check-in/out data and automating attendance",
      tech: ["React", "Node.js", "MongoDB", "IoT Integration: ZKTeco Biometric Devices"],
      image: EmployImg,
      github: "#",
      demo: "#",
    },
    {
      title: "Library Management System",
      category: "Web",
      description: "A full-stack web application for managing books, users, and borrowing activities. Features include book cataloging, availability tracking, user roles, and automated borrow/return management to streamline library operations.",
      tech: ["React", "Node.js", "MongoDB", "REST API Integration"],
      image: LibraryImg,
      github: "#",
      demo: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" ref={ref} className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects and solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="w-12 h-12 glass-strong rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all"
                    aria-label="View GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="w-12 h-12 glass-strong rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all"
                    aria-label="View Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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
