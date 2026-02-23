import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/tamilselvan-08",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/tamil-selvan-0847tam01",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/cyber_tamil1",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:tamilselvancsbs08@gmail.com",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll to scale and opacity
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#000000", position: "relative" }}
    >
      {/* Subtle radial gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col items-center justify-center px-8"
        >
          {/* Small text "I'm" */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-[0.3em] mb-6"
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "0.3em",
            }}
          >
            I'm
          </motion.p>

          {/* Main title "TAMIL SELVAN" */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-center"
            style={{
              fontSize: "clamp(56px, 10vw, 140px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            TAMIL SELVAN
          </motion.h1>

          {/* Subtitle "Software Engineer" */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#AAAAAA",
              letterSpacing: "0.02em",
            }}
          >
            Software Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-10"
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#BBBBBB",
              letterSpacing: "0.01em",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            I architect scalable systems and craft seamless digital experiences.
          </motion.p>

          {/* Founder Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              opacity: 0.8,
              marginBottom: "48px",
            }}
          >
            <span style={{ color: "#AAAAAA" }}>Founder — </span>
            <span
              className="relative inline-block"
              style={{
                color: "#FFFFFF",
                background:
                  "linear-gradient(90deg, rgba(139, 92, 246, 0.8) 0%, rgba(79, 70, 229, 0.8) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Habitary
            </span>
          </motion.div>

          {/* Floating Social Dock */}
          <SocialDock />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
        <motion.p
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="uppercase tracking-widest"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.2em",
          }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  );
}

function SocialDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      style={{
        position: "relative",
      }}
    >
      {/* Floating animation container */}
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onMouseEnter={() => { }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "clamp(20px, 3vw, 24px)",
          padding: "12px 28px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "40px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          cursor: "default",
        }}
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          const isHovered = hoveredIndex === index;

          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                opacity: 0.7,
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
              whileHover={{
                scale: 1.1,
                opacity: 1,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              {/* Prism glow on hover */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "50px",
                    height: "50px",
                    background:
                      "radial-gradient(circle, rgba(79, 70, 229, 0.6), rgba(139, 92, 246, 0.4), transparent)",
                    pointerEvents: "none",
                    filter: "blur(16px)",
                    zIndex: -1,
                  }}
                />
              )}

              <Icon size={window.innerWidth < 768 ? 18 : 22} strokeWidth={2} />
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}