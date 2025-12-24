import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    description: "Foundation across backend, frontend, and scripting.",
    items: [
      { name: "Python", tag: "Py" },
      { name: "TypeScript", tag: "TS" },
      { name: "JavaScript", tag: "JS" },
      { name: "SQL", tag: "SQL" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Deployments, observability, and scalable infrastructure.",
    items: [
      { name: "AWS", tag: "AWS" },
      { name: "GCP", tag: "GCP" },
      { name: "Docker", tag: "🐳" },
      { name: "CI/CD", tag: "CI" },
    ],
  },
  {
    title: "AI & Data",
    description: "Modeling, agents, and data workflows.",
    items: [
      { name: "OpenAI / LLMs", tag: "AI" },
      { name: "Vector DBs", tag: "DB" },
      { name: "Pandas & NumPy", tag: "Py" },
      { name: "XGBoost / Sklearn", tag: "ML" },
    ],
  },
  {
    title: "Automation (n8n)",
    description: "AI-driven automation with robust orchestration.",
    items: [
      { name: "n8n Agents", tag: "n8n" },
      { name: "Webhook Flows", tag: "API" },
      { name: "Multi-app RPA", tag: "RPA" },
      { name: "Scheduling", tag: "CRON" },
    ],
  },
  {
    title: "Frontend",
    description: "Product-level UI systems and interactions.",
    items: [
      { name: "React", tag: "⚛" },
      { name: "MERN / PERN", tag: "Full" },
      { name: "Tailwind CSS", tag: "TW" },
      { name: "HTML / CSS", tag: "</>" },
      { name: "Figma", tag: "Fig" },
    ],
  },
  {
    title: "Backend",
    description: "APIs, auth, and data services.",
    items: [
      { name: "Node.js", tag: "Node" },
      { name: "FastAPI", tag: "Py" },
      { name: "PostgreSQL", tag: "PG" },
      { name: "MongoDB", tag: "MG" },
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.4 },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-28 relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 217, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Technical Skills & <span className="text-primary">Tech Stack</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Expertise in Python, React, Node.js, AI/ML, cloud platforms, and modern web development frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="glass-strong rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 h-full hover:glow-blue transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.span
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 bg-muted/60 text-foreground border border-border/60 backdrop-blur-sm hover:border-primary/50 transition-colors"
                  >
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold text-xs flex-shrink-0">
                      {item.tag}
                    </span>
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{item.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
