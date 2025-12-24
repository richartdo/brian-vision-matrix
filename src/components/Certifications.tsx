import { motion } from "framer-motion";
import { Download, Award } from "lucide-react";
import { useState } from "react";

// Import certificate images from assets
import pythonCert from "@/assets/100DaysOfPython.jpg";
import fullStackCert from "@/assets/CompleteFullstack development.jpg";
import aiSoftwareCert from "@/assets/AI for Software Engineering Cert.png";
import cloudIBMCert from "@/assets/MailBrain.png"; // Replace with actual cloud IBM certificate when available
import awsCert from "@/assets/Bitflow.png"; // AWS in progress - using placeholder
import employabilityCert from "@/assets/campusdeal.png"; // Replace with actual employability certificate when available
import softwareTestingCert from "@/assets/crop.png"; // Replace with actual software testing certificate when available
import computerLiteracyCert from "@/assets/computer Literacy cert.png";
import socialMediaCert from "@/assets/social media management Cert.png";

const certifications = [
  {
    title: "100 Days of Python Programming",
    issuer: "Udemy",
    year: "2024",
    description: "Comprehensive Python programming bootcamp covering fundamentals to advanced topics including web development, data science, automation, and API integration.",
    link: "#",
    image: pythonCert,
    downloadUrl: "/certificates/100DaysOfPython.jpg",
  },
  {
    title: "Complete Full Stack Web Development",
    issuer: "Udemy",
    year: "2024",
    description: "Full-stack development covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and deployment strategies for modern web applications.",
    link: "#",
    image: fullStackCert,
    downloadUrl: "/certificates/CompleteFullstack development.jpg",
  },
  {
    title: "AI for Software Engineering",
    issuer: "Professional Certification",
    year: "2024",
    description: "Advanced AI integration in software engineering including machine learning models, LLMs, and AI-powered development tools.",
    link: "#",
    image: aiSoftwareCert,
    downloadUrl: "/certificates/AI for Software Engineering Cert.png",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM",
    year: "2024",
    description: "Foundational cloud computing concepts, architecture, services, and deployment models across major cloud platforms.",
    link: "#",
    image: cloudIBMCert,
    downloadUrl: "#",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    description: "AWS cloud services, architecture, security, and best practices. Currently in progress toward certification.",
    link: "#",
    image: awsCert,
    downloadUrl: "#",
    inProgress: true,
  },
  {
    title: "Employability Skills",
    issuer: "Professional Development",
    year: "2024",
    description: "Essential workplace skills including communication, teamwork, problem-solving, and professional development strategies.",
    link: "#",
    image: employabilityCert,
    downloadUrl: "#",
  },
  {
    title: "Software Testing & QA",
    issuer: "Professional Certification",
    year: "2024",
    description: "Testing methodologies, automation frameworks, continuous integration, and quality assurance best practices.",
    link: "#",
    image: softwareTestingCert,
    downloadUrl: "#",
  },
  {
    title: "Computer Literacy",
    issuer: "Professional Certification",
    year: "2023",
    description: "Fundamental computer skills, operating systems, office productivity tools, and digital communication.",
    link: "#",
    image: computerLiteracyCert,
    downloadUrl: "/certificates/computer Literacy cert.png",
  },
  {
    title: "Social Media Management",
    issuer: "Digital Marketing Institute",
    year: "2024",
    description: "Social media strategy, content creation, analytics, community management, and platform-specific best practices.",
    link: "#",
    image: socialMediaCert,
    downloadUrl: "/certificates/social media management Cert.png",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-28 relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(0, 217, 255, 0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(0, 217, 255, 0.12), transparent 30%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Verified credentials in Python, web development, AI, cloud computing, and digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="glass-strong rounded-2xl overflow-hidden flex flex-col cursor-pointer group hover:glow-blue transition-all h-full"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden bg-muted/20 flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4 sm:p-5 flex flex-col gap-3 flex-grow">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-primary/25 via-primary/15 to-accent/20 border border-primary/20 flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0">
                    {cert.year}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug line-clamp-2">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-grow">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-2 gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full border whitespace-nowrap ${
                    cert.inProgress 
                      ? "bg-accent/20 text-accent border-accent/40" 
                      : "bg-muted/60 text-foreground border-border/60"
                  }`}>
                    {cert.inProgress ? "In Progress" : "Verified"}
                  </span>
                  <a
                    href={cert.downloadUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-primary text-xs font-medium hover:underline flex-shrink-0"
                    aria-label={`Download ${cert.title} certificate`}
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-strong rounded-2xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{selectedCert.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{selectedCert.issuer} • {selectedCert.year}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="glass rounded-full p-2 hover:bg-muted transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-border/60 mb-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Description</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{selectedCert.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedCert.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="h-4 w-4" />
                  Download Certificate
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-full glass text-foreground font-medium hover:bg-muted transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
