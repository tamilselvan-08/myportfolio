import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Aipixture Company Project",
    description:
      "AI-powered creative platform delivering intelligent visual solutions for modern digital products.",
    image:
      "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNjIwMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    name: "Habitary App",
    description:
      "A productivity-driven digital platform helping users build better habits and achieve their goals.",
    image:
      "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNjgyNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    name: "Backend System Architecture",
    description:
      "Scalable server infrastructure powering high-performance applications with real-time data processing.",
    image:
      "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTY4MjY1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    name: "Mobile Application",
    description:
      "Cross-platform mobile experience with seamless navigation and intuitive user interfaces.",
    image:
      "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzcxNjA3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    name: "Web Application Platform",
    description:
      "Modern web solution featuring responsive design, real-time updates, and seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzE2MDQ5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position to update counter and progress
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const maxScroll = container.scrollWidth - container.offsetWidth;
      
      // Update active slide
      const activeIndex = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(activeIndex);
      
      // Update progress bar
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000000",
        paddingTop: "clamp(140px, 20vh, 200px)",
        paddingBottom: "clamp(100px, 15vh, 160px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          paddingLeft: "clamp(24px, 8vw, 120px)",
          paddingRight: "clamp(24px, 8vw, 120px)",
          marginBottom: "clamp(100px, 12vh, 120px)",
          position: "relative",
        }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: "clamp(48px, 7vw, 64px)",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Selected Work
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#BBBBBB",
            letterSpacing: "0.01em",
            maxWidth: "600px",
            marginBottom: "32px",
          }}
        >
          A curated collection of production-ready systems and digital products.
        </motion.p>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{
            position: "relative",
            width: "clamp(200px, 40%, 400px)",
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          {/* Progress fill */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${scrollProgress}%`,
              backgroundColor: "#FFFFFF",
              transition: "width 0.3s ease-out",
            }}
          />
        </motion.div>
      </div>

      {/* Slider Container Wrapper */}
      <div style={{ position: "relative" }}>
        {/* Slide Counter - Aligned with slider */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "-60px",
            right: "clamp(24px, 8vw, 120px)",
            fontSize: "16px",
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
            fontVariantNumeric: "tabular-nums",
            zIndex: 10,
          }}
        >
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollContainerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            gap: "clamp(30px, 5vw, 60px)",
            paddingLeft: "clamp(24px, 8vw, 120px)",
            paddingRight: "clamp(24px, 8vw, 120px)",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          {projects.map((project, index) => (
            <ProjectSlide 
              key={index} 
              project={project} 
              index={index}
              isActive={currentSlide === index}
            />
          ))}
        </motion.div>

        {/* Mobile Dot Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "48px",
          }}
          className="mobile-dots"
        >
          {projects.map((_, index) => (
            <div
              key={index}
              style={{
                width: currentSlide === index ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  currentSlide === index
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.3)",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @media (min-width: 768px) {
          .mobile-dots {
            display: none;
          }
        }
        
        @media (max-width: 767px) {
          .project-slide {
            min-width: 90vw !important;
          }
        }
        
        @media (min-width: 768px) {
          .project-slide {
            min-width: 88vw !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectSlide({
  project,
  index,
  isActive,
}: {
  project: Project;
  index: number;
  isActive: boolean;
}) {
  const slideRef = useRef<HTMLDivElement>(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={slideRef}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.6,
      }}
      style={{
        minWidth: "clamp(90%, 95vw, 100vw)",
        minHeight: "80vh",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        position: "relative",
        transition: "transform 0.6s ease, opacity 0.6s ease",
      }}
      className="project-slide"
    >
      {/* Subtle radial glow behind active slide */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(40px, 8vw, 80px)",
          maxWidth: "1400px",
          width: "100%",
          alignItems: "center",
          paddingLeft: "clamp(24px, 4vw, 60px)",
          paddingRight: "clamp(24px, 4vw, 60px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Project Image */}
        <motion.div
          style={{
            position: "relative",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 20px 60px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.3)",
              aspectRatio: "16 / 10",
              backgroundColor: "#111111",
            }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          style={{
            position: "relative",
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {project.name}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#BBBBBB",
              lineHeight: 1.6,
              maxWidth: "400px",
              marginBottom: "32px",
              letterSpacing: "0.01em",
            }}
          >
            {project.description}
          </motion.p>

          <motion.a
            href={project.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            style={{
              display: "inline-block",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: 500,
              color: buttonHovered ? "#000000" : "#FFFFFF",
              backgroundColor: buttonHovered ? "#FFFFFF" : "transparent",
              border: "1.5px solid #FFFFFF",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.5s ease",
              letterSpacing: "0.02em",
              cursor: "pointer",
            }}
          >
            View Project
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}