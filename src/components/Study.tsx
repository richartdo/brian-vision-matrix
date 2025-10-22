import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, BookOpen, FileCheck } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Study = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      title: "BSc Mathematics and Computer Science",
      level: "Undergraduate",
      institution: "JKUAT",
      date: "2023 - Current",
      description: "A program developing strong analytical, programming, and problem-solving skills for real-world technological solutions.",
      icon: BookOpen,
      // icon: GraduationCap,
    },
    {
      title: "PLP AI / ML Certification Power Learn Project",
      level: "Professional Certification",
      institution: "Power Learn Project",
      date: "Feb 2025 – July 2025",
      description: "Focused on software engineering, artificial intelligence, and startup development, gaining hands-on experience in building practical, AI-driven solutions.",
      icon: Award,
      // icon: BookOpen,
    },
    {
      title: "Ultimate AWS Certified Solutions Architect Associate 2025 Professional Certification",
      level: "Professional Certification",
      institution: "Amazon Web Services",
      date: "2025 - Present",
      description: "Comprehensive training in designing, deploying, and managing scalable, secure, and reliable cloud solutions on AWS.",
      icon: Award,
    },
    {
      title: "Complete Fullstack Web Development & 100 Days of Complete Python Bootcamp Professional Certification",
      level: "Professional Certification",
      institution: "Udemy",
      date: "2023-2024",
      description: "Comprehensive mastery of fullstack development and Python programming through hands-on projects and real-world applications.",
      icon: FileCheck,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="study" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
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
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-left mb-8 md:mb-0`}>
                  <div className="glass-strong rounded-xl p-6 hover:glow-blue transition-all group">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-start`}>
                      <item.icon className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium text-accent">{item.level}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{item.date}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-primary glow-blue-strong animate-glow-pulse" />
                </div>

                {/* Icon Circle (on mobile, shows on left) */}
                <div className="w-full md:w-5/12 flex md:justify-center justify-start mb-4 md:mb-0">
                  <div className="w-16 h-16 glass-strong rounded-full flex items-center justify-center glow-blue">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-6 mt-20"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 glass-strong rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all group"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Study;
