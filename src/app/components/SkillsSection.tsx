import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Code2,
  Database,
  Server,
  Cloud,
  FileCode,
  GitBranch,
  Github,
  Rocket,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const frontendSkills: Skill[] = [
  { name: "HTML", icon: <FileCode size={32} /> },
  { name: "CSS", icon: <FileCode size={32} /> },
  { name: "JavaScript", icon: <Code2 size={32} /> },
  { name: "React", icon: <Code2 size={32} /> },
  { name: "Angular", icon: <Code2 size={32} /> },
  { name: "Bootstrap", icon: <Code2 size={32} /> },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: <Server size={32} /> },
  { name: "Express", icon: <Server size={32} /> },
  { name: "MERN Stack", icon: <Server size={32} /> },
];

const dataSkills: Skill[] = [
  { name: "PostgreSQL", icon: <Database size={32} /> },
  { name: "SQL", icon: <Database size={32} /> },
  { name: "Supabase", icon: <Database size={32} /> },
  { name: "Firebase", icon: <Cloud size={32} /> },
  { name: "Vercel", icon: <Cloud size={32} /> },
  { name: "Render", icon: <Cloud size={32} /> },
];

const toolsSkills: Skill[] = [
  { name: "VS Code", icon: <Code2 size={28} /> },
  { name: "Git", icon: <GitBranch size={28} /> },
  { name: "GitHub", icon: <Github size={28} /> },
  { name: "Antigravity", icon: <Rocket size={28} /> },
];

export default function SkillsSection() {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle animated background grid (optional) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Section 1 — Identity */}
      <IdentitySection />

      {/* Section 2 — Core Stack */}
      <CoreStackSection />

      {/* Section 3 — Databases & Cloud */}
      <DataSection />

      {/* Section 4 — Tools */}
      <ToolsSection />
    </section>
  );
}

function IdentitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  const roles = [
    "Full Stack Developer",
    "Backend Developer",
    "Mobile Application Engineer",
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "clamp(60px, 12vh, 120px) clamp(24px, 8vw, 120px)",
      }}
    >
      {/* Subtle radial gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "1200px",
        }}
      >
        {roles.map((role, index) => (
          <motion.h1
            key={role}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            style={{
              fontSize: "clamp(40px, 8vw, 96px)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "clamp(32px, 6vh, 60px)",
            }}
          >
            {role}
          </motion.h1>
        ))}
      </div>
    </section>
  );
}

function CoreStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 8vw, 120px)",
        position: "relative",
      }}
    >
      {/* Floating gradient blob */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

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
        Core Technologies
      </motion.h2>

      {/* Frontend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ marginBottom: "clamp(60px, 10vh, 80px)" }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#888888",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Frontend
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {frontendSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#888888",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Backend
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {backendSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function DataSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "80vh",
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 8vw, 120px)",
        position: "relative",
      }}
    >
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
        Data & Infrastructure
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "clamp(20px, 3vw, 32px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {dataSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

function ToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "80vh",
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 8vw, 120px)",
        position: "relative",
      }}
    >
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
        Tools & Workflow
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "clamp(20px, 3vw, 32px)",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {toolsSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} smaller />
        ))}
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  smaller = false,
}: {
  skill: Skill;
  index: number;
  smaller?: boolean;
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
        delay: index * 0.1,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#111111",
        borderRadius: "12px",
        padding: smaller ? "clamp(24px, 4vw, 32px)" : "clamp(32px, 5vw, 48px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.6s ease, box-shadow 0.6s ease",
        boxShadow: isHovered
          ? "0 20px 60px rgba(79, 70, 229, 0.4), 0 8px 24px rgba(139, 92, 246, 0.3)"
          : "0 4px 12px rgba(0, 0, 0, 0.3)",
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
              "radial-gradient(circle at center, rgba(79, 70, 229, 0.2), rgba(139, 92, 246, 0.1), transparent)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Icon */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0.7,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
        style={{
          color: "#FFFFFF",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skill.icon}
      </motion.div>

      {/* Skill Name */}
      <motion.span
        animate={{
          color: isHovered ? "#FFFFFF" : "#BBBBBB",
        }}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: smaller ? "14px" : "16px",
          fontWeight: 500,
          letterSpacing: "0.02em",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
}
