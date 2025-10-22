import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Server, Code2, Sparkles, Rocket, Database, Network, Cpu } from "lucide-react";

const Interests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Exploring cutting-edge machine learning algorithms and neural networks",
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Building scalable and resilient cloud-native architectures",
    },
    {
      icon: Code2,
      title: "Open Source",
      description: "Contributing to community projects and sharing knowledge",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Creating next-generation solutions that push boundaries",
    },
    {
      icon: Rocket,
      title: "DevOps",
      description: "Automating workflows and optimizing development processes",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing efficient data pipelines and storage solutions",
    },
    {
      icon: Network,
      title: "Distributed Systems",
      description: "Architecting resilient microservices and event-driven systems",
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Optimizing performance at the network edge",
    },
  ];

  return (
    <section id="interests" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
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
            What Fuels My <span className="text-primary">Creativity</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passions and interests that drive my innovation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="glass rounded-xl p-6 text-center group cursor-pointer hover:glow-blue transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-4 glass-strong rounded-full flex items-center justify-center"
              >
                <interest.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {interest.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
