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
    <section id="about" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
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
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-glow-pulse" />
              <div className="relative glass-strong rounded-full p-2 glow-blue">
                <img
                  src={profilePhoto}
                  alt="Brian Richard"
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Brian Richard</span>, a passionate{" "}
                <span className="text-accent">Software & AI Solutions Developer</span> and{" "}
                <span className="text-accent">Cloud Engineer</span> dedicated to creating innovative
                technological solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in <span className="text-primary">artificial intelligence</span>,{" "}
                <span className="text-primary">cloud infrastructure</span>, and{" "}
                <span className="text-primary">software development</span>, I transform complex
                challenges into elegant, scalable solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in developing <span className="text-primary">AI models</span>,{" "}
                from training datasets for machine learning, creating
                <span className="text-primary">AI agents</span>, and leveraging{" "}
                <span className="text-primary">n8n</span>, to automate diverse workflows. My focus is on using <span className="text-primary">AI automation</span> to help businesses enhance productivity, 
                streamline operations, and stay ahead in the digital era.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Additionally, I help brands and organizations strengthen their <span className="text-primary">online presence</span>,{" "}
                by automating their
                <span className="text-primary">social media platforms</span>, and developing{" "}
                <span className="text-primary">SEO-optimized websites</span>, and integrating <span className="text-primary">AI-driven insights</span> to analyze markets, identify trends, and guide data-informed decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My mission is to leverage cutting-edge technologies to drive innovation,
                enhance efficiency, and deliver exceptional results that exceed expectations.
              </p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary hover:glow-blue transition-all group"
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
