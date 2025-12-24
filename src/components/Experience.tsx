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
      role: "AI Agents Developer",
      company: "Bitflow",
      duration: "2025",
      description: "Developed and deployed an advanced AI automation agent that streamlines and manages social media workflows for the company. The system enables full-cycle automation  from topic selection to content generation and publishing  leveraging artificial intelligence and n8n automation workflows.",
      achievements: [
        "Built an AI-driven agent that automatically generates captions, designs images, and posts to scheduled social media platforms based on predefined topics.",
        "Integrated n8n for workflow automation, scheduling, and platform connectivity (Instagram, X, Facebook, LinkedIn).",
        "Enhanced the company’s online engagement and brand consistency through intelligent automation.",
        "Reduced manual social media management time by 70%",
      ],
      icon: Cpu,
    },
    {
      role: "AI Automation Developer",
      company: "Lylop",
      duration: "2025",
      description: "Developed an AI-powered social media automation system for X and Facebook, using n8n and Google Sheets as the topic source. The workflow automatically triggers, fetches topics, generates AI captions and image prompts, creates images, and posts content to each platform according to its specific rules.",
      achievements: [
        "Automated end-to-end social media posting using AI and n8n",
        "Achieved 75% reduction in manual posting and 60% improvement in content consistency",
        "Enhanced content consistency and reduced manual posting efforts",
      ],
      icon: Cloud,
    },
    {
      role: "Full Stack Developer",
      company: "IBRAHSOFT SOLUTIONS",
      duration: "2025",
      description: "Developed WorkTrack, a full-stack employee management and attendance system integrated with ZKTeco biometric IoT devices for fingerprint-based tracking. The system included an admin dashboard and employee portal, capturing and syncing real-time check-in/out data to ensure accuracy and transparency.",
      achievements: [
        "Built and deployed a full-stack web app integrated with ZKTeco fingerprint devices",
        "Improved attendance accuracy by 90% and reduced manual record errors by 80%",
      ],
      icon: Code,
    },
    {
      role: "AI Engineer",
      company: "IBRAHSOFT SOLUTIONS",
      duration: "2025",
      description: "Developed an AI-powered Crop Recommendation System using Machine Learning to suggest the most suitable crop based on soil nutrients (N, P, K) and environmental factors (pH, rainfall, temperature, humidity). The model was trained and evaluated on the Crop Recommendation Dataset and deployed as a Flask REST API on Render.",
      achievements: [
        "Trained multiple models (Decision Tree, Random Forest, Logistic Regression, XGBoost) XGBoost achieved the best accuracy.",
        "Implemented data preprocessing using Label Encoding and StandardScaler for model optimization.",
        "Saved trained model, scaler, and encoder for reproducibility and future deployment.",
        "Achieved 94% model accuracy and enabled scalable access via API integration.",
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

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-6 lg:gap-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-left mb-6 md:mb-0`}>
                  <div className="glass-strong rounded-xl p-4 sm:p-5 lg:p-6 hover:glow-blue transition-all group h-full">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base text-primary font-medium mb-0.5">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{exp.duration}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                          } justify-start`}
                        >
                          <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                      {exp.achievements.length > 2 && (
                        <p className="text-xs text-primary/70 italic pt-1">
                          +{exp.achievements.length - 2} more achievements
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-6 md:top-8 hidden md:block">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary glow-blue-strong animate-glow-pulse" />
                </div>

                {/* Company Icon */}
                <div className="w-full md:w-5/12 flex md:justify-center justify-start mb-4 md:mb-0">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 glass-strong rounded-full flex items-center justify-center glow-blue flex-shrink-0">
                    <exp.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-primary" />
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
