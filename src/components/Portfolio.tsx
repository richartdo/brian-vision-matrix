import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      github: "#",
      demo: "#",
    },
    {
      title: "Campus Deals App",
      category: "Web",
      description: "Secure campus marketplace where students buy and sell services safely through verified profiles and escrow payments.",
      tech: ["React Native", "Node.js", "Express", "Firebase",  "M-Pesa API"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      github: "#",
      demo: "#",
    },
    {
      title: "Personal Finance Tracker (HELB Student Edition)",
      category: "Web",
      description: "A budgeting platform that helps students track their income, expenses, and HELB loan spending with clear analytics.",
      tech: ["React", "Django REST", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Powered Notes App",
      category: "AI",
      description: "Smart note-taking application that uses AI to summarize notes, tag topics automatically, and enable natural language search.",
      tech: ["Python", "FastAPI", "React", "Firebase", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Website",
      category: "Web",
      description: "A scalable e-commerce platform supporting product management, shopping carts, and integrated payments.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      github: "#",
      demo: "#",
    },
    {
      title: "M-Pesa Payment Checkout",
      category: "Web",
      description: "A plug-and-play M-Pesa integration for businesses to accept mobile payments securely via STK Push API.",
      tech: ["Node.js", "Express", "React", "MongoDB", "M-Pesa API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "#",
      demo: "#",
    },
    {
      title: "Bike Spare Parts Website",
      category: "Web",
      description: "Niche e-commerce store for motorcycle parts with advanced search, filtering, and payment checkout.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "#",
      demo: "#",
    },
    {
      title: "Hotel Management Website",
      category: "Web",
      description: "Comprehensive system for managing hotel reservations, room status, and guest payments.",
      tech: ["React", "Django", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "#",
      demo: "#",
    },
    {
      title: "Car Hire Website",
      category: "Web",
      description: "Online system for browsing, booking, and managing vehicle rentals with real-time availability tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "#",
      demo: "#",
    },
    {
      title: "Employees Attendance Management System",
      category: "Web",
      description: "A cloud-based platform to record employee attendance, leave requests, and generate attendance analytics.",
      tech: ["React", "Django REST", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "#",
      demo: "#",
    },
    {
      title: "Library Management System",
      category: "Web",
      description: "An efficient platform to manage books, members, and transactions for libraries with easy record retrieval.",
      tech: ["Python", "Django", "SQLite", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
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
