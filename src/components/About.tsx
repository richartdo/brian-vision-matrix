import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import profilePhoto from "@/assets/profile-phot.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/richartdo", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/MadeBy_Richard", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:brianarichard14@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Centered narrow container */}
        <div className="max-w-3xl mx-auto">
          {/* Profile Image - Centered at top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-glow-pulse" />
              <div className="relative glass-strong rounded-full p-2 glow-blue">
                <img
                  src={profilePhoto}
                  alt="Brian Richard - Software Engineer"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text - Vertical stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="glass rounded-xl p-5 sm:p-6 space-y-3">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                I'm <span className="text-primary font-semibold">Brian Richard</span>, a full-stack web developer and software engineer based in Nairobi, Kenya. I specialize in building AI-powered automation systems, cloud-native applications, and modern web solutions using Python, React, Node.js, and cutting-edge technologies.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                With expertise in <span className="text-primary">artificial intelligence</span>, <span className="text-primary">cloud infrastructure</span>, and <span className="text-primary">software development</span>, I transform complex challenges into elegant, scalable solutions.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                I develop <span className="text-primary">AI models</span> and <span className="text-primary">AI agents</span> using <span className="text-primary">n8n</span> to automate workflows, helping businesses enhance productivity and streamline operations in the digital era.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                I help brands strengthen their <span className="text-primary">online presence</span> through <span className="text-primary">social media automation</span>, <span className="text-primary">SEO-optimized websites</span>, and <span className="text-primary">AI-driven insights</span> for data-informed decisions.
              </p>
            </div>

            {/* Social Links - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center gap-3 pt-2"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all group touch-manipulation"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
