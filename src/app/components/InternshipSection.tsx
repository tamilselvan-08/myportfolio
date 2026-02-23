import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Internship {
  title: string;
  role: string;
  description: string;
  duration?: string;
}

const internships: Internship[] = [
  {
    title: "Rinex Internship",
    role: "Artificial Intelligence Intern",
    description:
      "Worked on Artificial Intelligence fundamentals, machine learning concepts, and applied problem-solving techniques to real-world scenarios.",
    duration: "June 2024 – August 2024",
  },
];

export default function InternshipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000000",
        padding: "clamp(100px, 15vh, 160px) clamp(24px, 8vw, 120px)",
        position: "relative",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          marginBottom: "clamp(80px, 12vh, 120px)",
          textAlign: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: "clamp(40px, 7vw, 56px)",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Internship
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#BBBBBB",
            letterSpacing: "0.01em",
          }}
        >
          Professional Experience & Industry Exposure
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div
        ref={timelineRef}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          paddingLeft: "clamp(40px, 8vw, 80px)",
        }}
      >
        {/* Vertical Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "clamp(16px, 4vw, 32px)",
            top: "0",
            width: "1px",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
          }}
        >
          {/* Animated growing line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={
              timelineInView ? { scaleY: 1 } : { scaleY: 0 }
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              transformOrigin: "top",
            }}
          />
        </div>

        {/* Timeline Dot (Start) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            timelineInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: "clamp(12px, 4vw, 28px)",
            top: "0",
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            zIndex: 2,
          }}
        />

        {/* Internship Entries */}
        {internships.map((internship, index) => (
          <InternshipCard
            key={internship.title}
            internship={internship}
            index={index}
          />
        ))}

        {/* Timeline Dot (End) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            timelineInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: "clamp(12px, 4vw, 28px)",
            bottom: "0",
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            zIndex: 2,
          }}
        />
      </div>
    </section>
  );
}

function InternshipCard({
  internship,
  index,
}: {
  internship: Internship;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: 0.5 + index * 0.2,
        ease: "easeOut",
      }}
      style={{
        position: "relative",
        marginBottom: "clamp(60px, 10vh, 80px)",
      }}
    >
      {/* Timeline Connector Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.7 + index * 0.2,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          left: "clamp(-29px, -5.5vw, -53px)",
          top: "8px",
          width: "13px",
          height: "13px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          border: "3px solid #000000",
          zIndex: 3,
        }}
      />

      {/* Card Content */}
      <div
        style={{
          backgroundColor: "#111111",
          borderRadius: "12px",
          padding: "clamp(24px, 5vw, 32px)",
          position: "relative",
        }}
      >
        {/* Duration */}
        {internship.duration && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.9 + index * 0.2,
              ease: "easeOut",
            }}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#888888",
              letterSpacing: "0.05em",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}
          >
            {internship.duration}
          </motion.p>
        )}

        {/* Internship Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.6,
            delay: 1 + index * 0.2,
            ease: "easeOut",
          }}
          style={{
            fontSize: "clamp(20px, 3vw, 24px)",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            marginBottom: "8px",
            lineHeight: 1.3,
          }}
        >
          {internship.title}
        </motion.h3>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.6,
            delay: 1.1 + index * 0.2,
            ease: "easeOut",
          }}
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#AAAAAA",
            letterSpacing: "0.01em",
            marginBottom: "16px",
          }}
        >
          {internship.role}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.6,
            delay: 1.2 + index * 0.2,
            ease: "easeOut",
          }}
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#BBBBBB",
            lineHeight: 1.6,
            letterSpacing: "0.01em",
            maxWidth: "600px",
          }}
        >
          {internship.description}
        </motion.p>
      </div>
    </motion.div>
  );
}
