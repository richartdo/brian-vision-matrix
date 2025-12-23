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
            Skills & Stacks
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Languages, cloud, AI, automation, and product-ready web stacks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="glass-strong rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              variants={itemVariants}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item, i) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 bg-muted/60 text-foreground border border-border/60 backdrop-blur-sm"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold text-xs">
                      {item.tag}
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </span>
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
