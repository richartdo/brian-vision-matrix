import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Code, Cloud, Cpu } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      role: "Senior AI Solutions Architect",
      company: "TechCorp Solutions",
      duration: "2022 - Present",
      description: "Leading AI implementation projects for Fortune 500 clients, architecting scalable machine learning pipelines, and mentoring junior developers.",
      achievements: [
        "Architected AI solutions serving 10M+ users",
        "Reduced infrastructure costs by 40%",
        "Led team of 8 ML engineers",
      ],
      icon: Cpu,
    },
    {
      role: "Cloud Engineer",
      company: "CloudNative Inc",
      duration: "2020 - 2022",
      description: "Designed and implemented cloud infrastructure solutions on AWS and Azure, automated deployment pipelines, and ensured high availability.",
      achievements: [
        "Migrated 50+ microservices to Kubernetes",
        "Achieved 99.99% uptime SLA",
        "Implemented CI/CD for 30+ projects",
      ],
      icon: Cloud,
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations",
      duration: "2018 - 2020",
      description: "Developed responsive web applications using React and Node.js, integrated third-party APIs, and optimized application performance.",
      achievements: [
        "Built 15+ production applications",
        "Improved page load times by 60%",
        "Mentored 5 junior developers",
      ],
      icon: Code,
    },
    {
      role: "Software Engineer Intern",
      company: "StartupHub",
      duration: "2017 - 2018",
      description: "Contributed to full-stack development, participated in code reviews, and learned agile methodologies in a fast-paced startup environment.",
      achievements: [
        "Shipped 3 major features",
        "Fixed 100+ bugs",
        "Improved code coverage by 25%",
      ],
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
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
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My career journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-left mb-8 md:mb-0`}>
                  <div className="glass-strong rounded-xl p-6 hover:glow-blue transition-all group">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.duration}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                          } justify-start`}
                        >
                          <span className="text-accent mt-1">▹</span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-primary glow-blue-strong animate-glow-pulse" />
                </div>

                {/* Company Icon */}
                <div className="w-full md:w-5/12 flex md:justify-center justify-start mb-4 md:mb-0">
                  <div className="w-20 h-20 glass-strong rounded-full flex items-center justify-center glow-blue">
                    <exp.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
