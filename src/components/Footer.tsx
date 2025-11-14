import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border/50">
      {/* Glowing Line Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground"
          >
            © {new Date().getFullYear()} Brian Richard | Software & AI Solutions Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-muted-foreground/60 mt-2"
          >
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
