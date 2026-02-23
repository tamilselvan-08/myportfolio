import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Certificate {
  name: string;
  platform: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    name: "Full Stack Development",
    platform: "Udemy",
    link: "#",
  },
  {
    name: "Ethical Hacking & Cyber Security",
    platform: "Online Course",
    link: "#",
  },
  {
    name: "Java Programming",
    platform: "NPTEL",
    link: "#",
  },
  {
    name: "CS50",
    platform: "Harvard University",
    link: "#",
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000000",
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 8vw, 120px)",
        position: "relative",
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontSize: "clamp(36px, 6vw, 48px)",
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "-0.02em",
          marginBottom: "clamp(60px, 10vh, 80px)",
          textAlign: "center",
        }}
      >
        Certifications & Courses
      </motion.h2>

      {/* Certificates Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(24px, 4vw, 32px)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.name} certificate={cert} index={index} />
        ))}
      </div>
    </section>
  );
}

function CertificateCard({
  certificate,
  index,
}: {
  certificate: Certificate;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#111111",
        borderRadius: "12px",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.6s ease, box-shadow 0.6s ease",
        boxShadow: isHovered
          ? "0 20px 60px rgba(79, 70, 229, 0.3), 0 8px 24px rgba(139, 92, 246, 0.2)"
          : "0 4px 12px rgba(0, 0, 0, 0.3)",
      }}
      onClick={() => {
        if (certificate.link) {
          window.open(certificate.link, "_blank");
        }
      }}
    >
      {/* Hover glow effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(79, 70, 229, 0.15), rgba(139, 92, 246, 0.08), transparent)",
            pointerEvents: "none",
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Course Name */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "12px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            {certificate.name}
          </h3>

          {/* External Link Icon */}
          {certificate.link && (
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0.5,
                x: isHovered ? 4 : 0,
                y: isHovered ? -4 : 0,
              }}
              transition={{ duration: 0.4 }}
              style={{
                flexShrink: 0,
                color: "#888888",
              }}
            >
              <ExternalLink size={18} />
            </motion.div>
          )}
        </div>

        {/* Platform Name */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#888888",
            letterSpacing: "0.02em",
          }}
        >
          {certificate.platform}
        </p>
      </div>
    </motion.div>
  );
}
