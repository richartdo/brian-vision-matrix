import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, X, ChevronDown, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FloatingFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/254795594142?text=Hello%20Brian%2C%20I%20have%20a%20question";

  const faqCategories = [
    {
      category: "General About Me",
      icon: "👤",
      questions: [
        {
          q: "Who are you and what do you do?",
          a: "I'm Brian Richard, a Software Engineer and CTO/Founder of IBRAHSOFT SOLUTIONS. I specialize in AI-driven automation, cloud infrastructure, and full-stack web development. I help businesses and individuals transform ideas into scalable, innovative tech solutions.",
        },
        {
          q: "What technologies do you specialize in?",
          a: "I specialize in Python, TypeScript/JavaScript, React, Node.js, AI/ML (OpenAI, XGBoost, Scikit-Learn), cloud platforms (AWS, GCP), automation with n8n, Docker, PostgreSQL, MongoDB, and modern web frameworks like Next.js and Tailwind CSS.",
        },
        {
          q: "What kind of projects do you work on?",
          a: "I work on AI automation systems, social media management agents, full-stack web applications, cloud infrastructure, employee management systems, e-commerce platforms, machine learning models, and custom software solutions.",
        },
        {
          q: "Are you a freelancer or do you work with a team?",
          a: "I work both independently and with my team at IBRAHSOFT SOLUTIONS. For larger projects, I collaborate with skilled developers and designers to deliver exceptional results.",
        },
        {
          q: "Do you work with clients outside Kenya?",
          a: "Yes! I work with clients globally. Distance is no barrier—I've successfully delivered projects for clients across different time zones using modern collaboration tools.",
        },
      ],
    },
    {
      category: "Services & Skills",
      icon: "💼",
      questions: [
        {
          q: "What services do you offer?",
          a: "I offer full-stack web development, AI automation solutions, cloud infrastructure setup, mobile app development, API integration, social media automation, SEO optimization, custom software development, and ongoing maintenance & support.",
        },
        {
          q: "Do you build both frontend and backend systems?",
          a: "Absolutely! I'm a full-stack developer proficient in both frontend (React, Next.js, Tailwind CSS) and backend (Node.js, Python, FastAPI, databases) development. I build complete end-to-end solutions.",
        },
        {
          q: "Can you redesign or improve an existing website?",
          a: "Yes! I can redesign outdated websites, improve performance, enhance UI/UX, add new features, optimize for SEO, and modernize the tech stack while preserving your existing data and functionality.",
        },
        {
          q: "Do you offer website maintenance and updates?",
          a: "Yes, I provide ongoing maintenance packages including bug fixes, security updates, content updates, feature additions, performance optimization, and technical support.",
        },
        {
          q: "Do you develop mobile applications as well?",
          a: "Yes! I develop cross-platform mobile applications using React Native and Flutter, as well as progressive web apps (PWAs) that work seamlessly on mobile devices.",
        },
      ],
    },
    {
      category: "Pricing",
      icon: "💰",
      questions: [
        {
          q: "How much does a website cost?",
          a: "Website costs vary based on complexity, features, and requirements. A simple portfolio site starts around KES 15,000-30,000, while custom web applications range from KES 50,000-500,000+.",
          contact: true,
        },
        {
          q: "What factors determine the price of a website?",
          a: "Pricing depends on: project complexity, number of pages, custom features (e-commerce, dashboards, AI integration), design requirements, third-party integrations, timeline urgency, and ongoing maintenance needs.",
          contact: true,
        },
        {
          q: "Do you offer different pricing packages?",
          a: "Yes! I offer tiered packages: Basic (landing pages, portfolios), Standard (business websites with CMS), Premium (e-commerce, custom platforms), and Enterprise (AI systems, complex integrations).",
          contact: true,
        },
        {
          q: "Is there a payment plan or deposit option?",
          a: "Yes, I offer flexible payment plans. Typically: 50% deposit to start, 30% at milestone delivery, and 20% upon final delivery. Custom payment schedules can be arranged for larger projects.",
          contact: true,
        },
        {
          q: "Are hosting and domain costs included?",
          a: "Domain and hosting are typically separate. I can help you purchase them (KES 1,500-3,000/year for domain, KES 5,000-20,000/year for hosting) or you can provide your own. Some packages include first-year hosting.",
        },
      ],
    },
    {
      category: "Project Process",
      icon: "🔄",
      questions: [
        {
          q: "How long does it take to build a website?",
          a: "Timelines vary by project: Simple websites (1-2 weeks), Business websites (2-4 weeks), E-commerce platforms (4-8 weeks), Custom applications (8-16 weeks). Rush delivery available for urgent projects.",
        },
        {
          q: "What do you need from a client before starting?",
          a: "I need: project goals and requirements, content (text, images, logos), brand guidelines (colors, fonts), reference websites you like, access credentials (if redesigning), and any specific functionality requirements.",
        },
        {
          q: "How many revisions do you allow?",
          a: "I include 2-3 major revision rounds in most projects. Additional revisions beyond scope may incur extra charges. I work collaboratively to minimize revisions through clear communication.",
        },
        {
          q: "Will I be able to update my website after delivery?",
          a: "Yes! I build websites with user-friendly Content Management Systems (CMS) like WordPress, or custom admin dashboards. I also provide training documentation and videos so you can manage content independently.",
        },
        {
          q: "Do you provide documentation or training?",
          a: "Absolutely! Every project includes comprehensive documentation, video tutorials, and a live training session to ensure you're comfortable managing your website or system.",
        },
      ],
    },
    {
      category: "Programming & Learning",
      icon: "📚",
      questions: [
        {
          q: "How do I start programming?",
          a: "Start with the basics: Choose a beginner-friendly language (Python or JavaScript), learn fundamentals (variables, loops, functions), practice on platforms like FreeCodeCamp or Codecademy, build small projects, and join coding communities.",
        },
        {
          q: "How do I learn web development?",
          a: "Roadmap: Learn HTML/CSS basics → JavaScript fundamentals → Choose a framework (React recommended) → Learn backend (Node.js/Python) → Study databases (MongoDB/PostgreSQL) → Build projects → Deploy online. Resources: MDN Web Docs, freeCodeCamp, YouTube tutorials.",
        },
        {
          q: "Which programming language should I learn first?",
          a: "I recommend Python for beginners (simple syntax, versatile) or JavaScript (immediate results in browsers, essential for web development). Both are highly demanded and beginner-friendly.",
        },
        {
          q: "How long does it take to become a web developer?",
          a: "With consistent practice: Basic skills (3-6 months), Job-ready (6-12 months), Advanced proficiency (1-2 years). The key is daily practice, building real projects, and continuous learning.",
        },
        {
          q: "Do I need a computer science degree to code?",
          a: "No! Many successful developers are self-taught. What matters is your portfolio, problem-solving skills, and practical experience. I can guide you through effective self-learning paths.",
        },
        {
          q: "Can I learn programming for free?",
          a: "Absolutely! Free resources: freeCodeCamp, The Odin Project, MDN Web Docs, YouTube channels (Traversy Media, Programming with Mosh), GitHub documentation, and official framework docs. A laptop and internet are all you need.",
        },
        {
          q: "What tools do beginners need to start coding?",
          a: "Essential tools: A laptop (any OS works), Code editor (VS Code - free), Web browser (Chrome/Firefox), Git for version control, and Terminal/Command Prompt. All free and beginner-friendly!",
        },
      ],
    },
    {
      category: "Career & Guidance",
      icon: "🎯",
      questions: [
        {
          q: "Can you mentor beginners in programming?",
          a: "Yes! I offer mentorship for aspiring developers. We can work on learning roadmaps, code reviews, project guidance, and career advice. Reach out to discuss mentorship options.",
          contact: true,
        },
        {
          q: "Do you offer internships or training opportunities?",
          a: "I occasionally offer internship positions and training programs at IBRAHSOFT SOLUTIONS. These opportunities are posted on my social media. Stay connected for updates!",
          contact: true,
        },
        {
          q: "Can you help build a portfolio for beginners?",
          a: "Absolutely! I can help you design and build a professional developer portfolio website to showcase your projects and skills to potential employers or clients.",
          contact: true,
        },
        {
          q: "What advice do you give new developers?",
          a: "My top advice: Build projects constantly (learning by doing), contribute to open source, network with other developers, focus on problem-solving over syntax memorization, don't fear errors (they teach you), and stay consistent—small daily progress compounds into mastery.",
        },
      ],
    },
    {
      category: "Communication & Support",
      icon: "💬",
      questions: [
        {
          q: "How can I contact you?",
          a: "You can reach me via WhatsApp (+254 795 594 142), Email (brianarichard14@gmail.com), or through the contact form on this website. WhatsApp is fastest for urgent matters!",
          contact: true,
        },
        {
          q: "How fast do you respond to messages?",
          a: "I typically respond within 2-4 hours during business hours (8 AM - 8 PM EAT). For urgent matters, WhatsApp is the quickest channel. Weekend responses may take slightly longer.",
        },
        {
          q: "Do you offer ongoing support after project delivery?",
          a: "Yes! All projects include 30 days of free post-launch support for bug fixes. After that, I offer monthly maintenance packages or pay-as-you-go support for updates and technical assistance.",
        },
        {
          q: "What happens if a bug is found after launch?",
          a: "Bugs identified within the 30-day warranty period are fixed free of charge. I also conduct thorough testing before delivery to minimize issues. Post-warranty bugs are fixed at reasonable rates.",
        },
      ],
    },
    {
      category: "Trust & Professionalism",
      icon: "🤝",
      questions: [
        {
          q: "Can I see your previous projects?",
          a: "Absolutely! Check out my Portfolio section on this website showcasing AI automation systems, web applications, and real client projects. I can also share case studies and testimonials upon request.",
        },
        {
          q: "Do you sign contracts or agreements?",
          a: "Yes, for professional projects I provide written agreements outlining scope, deliverables, timelines, payment terms, and intellectual property rights. This protects both parties and ensures clarity.",
        },
        {
          q: "Is my project idea safe and confidential?",
          a: "100% confidential. I sign NDAs (Non-Disclosure Agreements) when required and maintain strict confidentiality for all client projects. Your intellectual property is fully protected.",
        },
        {
          q: "Why should I choose you over other developers?",
          a: "I combine technical expertise with reliability: proven track record, cutting-edge AI/automation skills, clear communication, transparent pricing, post-launch support, and genuine commitment to your success. Plus, I deliver on time and within budget.",
        },
      ],
    },
    {
      category: "Extras",
      icon: "✨",
      questions: [
        {
          q: "Do you integrate payment systems like M-Pesa?",
          a: "Yes! I have extensive experience integrating M-Pesa (STK Push, B2C, C2B), Stripe, PayPal, and other payment gateways into websites and mobile apps for seamless transactions.",
        },
        {
          q: "Can you add SEO to my website?",
          a: "Absolutely! All my websites are built with SEO best practices: fast loading, mobile responsiveness, proper meta tags, structured data, sitemap generation, and performance optimization for higher search rankings.",
        },
        {
          q: "Do you build custom systems like dashboards or APIs?",
          a: "Yes! I specialize in custom admin dashboards, REST/GraphQL APIs, data analytics platforms, CRM systems, inventory management, and internal business tools tailored to your specific workflow.",
        },
        {
          q: "Can you deploy my project online?",
          a: "Yes! I handle complete deployment on platforms like Vercel, Netlify, AWS, GCP, or custom servers. This includes domain setup, SSL certificates, CI/CD pipelines, and monitoring.",
        },
      ],
    },
  ];

  return (
    <>
      {/* Floating FAQ Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-110 glow-blue"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open FAQ"
      >
        <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* FAQ Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            {/* FAQ Panel */}
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-full sm:w-[450px] md:w-[500px] glass-strong border-r border-border z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">FAQ</h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">Frequently Asked Questions</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full glass hover:bg-muted transition-colors flex items-center justify-center"
                  aria-label="Close FAQ"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* FAQ Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
                {faqCategories.map((category, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.category}
                    </h3>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq, qIdx) => (
                        <AccordionItem
                          key={qIdx}
                          value={`${idx}-${qIdx}`}
                          className="glass rounded-lg px-4 border-none"
                        >
                          <AccordionTrigger className="text-sm sm:text-base font-medium text-foreground hover:text-primary py-3 hover:no-underline">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-3">
                            {faq.a}
                            {faq.contact && (
                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium transition-colors"
                              >
                                <MessageCircle className="w-4 h-4" />
                                Contact me on WhatsApp
                              </a>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-5 sm:p-6 border-t border-border/50 bg-muted/30">
                <p className="text-xs sm:text-sm text-muted-foreground text-center mb-3">
                  Still have questions?
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFAQ;
