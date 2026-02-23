import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for each statement
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0.8]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [0.8, 1, 0.8]);

  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0, 1, 1]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0.8, 1, 1]);

  return (
    <div ref={containerRef} style={{ backgroundColor: "#000000" }}>
      {/* Section 1 — Bold Statement Scroll */}
      <div style={{ height: "300vh", position: "relative" }}>
        {/* Sticky container for the three statements */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Statement 1 */}
          <motion.h2
            style={{
              position: "absolute",
              fontSize: "clamp(48px, 10vw, 120px)",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              opacity: opacity1,
              scale: scale1,
              padding: "0 24px",
            }}
          >
            I build systems.
          </motion.h2>

          {/* Statement 2 */}
          <motion.h2
            style={{
              position: "absolute",
              fontSize: "clamp(48px, 10vw, 120px)",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              opacity: opacity2,
              scale: scale2,
              padding: "0 24px",
            }}
          >
            That scale.
          </motion.h2>

          {/* Statement 3 */}
          <motion.h2
            style={{
              position: "absolute",
              fontSize: "clamp(48px, 10vw, 120px)",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              opacity: opacity3,
              scale: scale3,
              padding: "0 24px",
              maxWidth: "1200px",
            }}
          >
            And experiences that matter.
          </motion.h2>
        </div>
      </div>

      {/* Section 2 — Identity Block */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%" }}>
          {/* Headline */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "clamp(32px, 5vw, 40px)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}
          >
            Tamil Selvan
          </motion.h3>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#888888",
              marginBottom: "40px",
              letterSpacing: "0.02em",
            }}
          >
            Software Engineer · Freelance Developer · Founder of Habitary
          </motion.p>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#BBBBBB",
              lineHeight: 1.7,
              maxWidth: "600px",
              letterSpacing: "0.01em",
            }}
          >
            I specialize in backend architecture, mobile applications, and
            scalable digital systems. I've delivered production-ready solutions
            at Aipixture Company and continue building impactful products
            through Habitary.
          </motion.p>
        </div>
      </section>

      {/* Section 3 — Minimal Role Grid */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px 120px",
        }}
      >
        {/* Subtle background radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(80px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            maxWidth: "900px",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#666666",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "clamp(80px, 10vw, 100px)",
            }}
          >
            Roles & Focus
          </motion.div>

          {/* Grid container */}
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "0",
              padding: "60px 0",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Left Column - Roles */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(24px, 4vw, 32px)",
                paddingRight: "clamp(40px, 8vw, 80px)",
              }}
            >
              <ColumnHeader label="Role" delay={0.1} />
              <RoleRow label="Founder" index={0} side="left" />
              <RoleRow label="Freelancer" index={1} side="left" />
              <RoleRow label="Engineer" index={2} side="left" />
            </div>

            {/* Vertical Divider Line */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "100%", opacity: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{
                width: "1px",
                backgroundColor: "#FFFFFF",
                alignSelf: "stretch",
              }}
            />

            {/* Right Column - Focus */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(24px, 4vw, 32px)",
                paddingLeft: "clamp(40px, 8vw, 80px)",
              }}
            >
              <ColumnHeader label="Focus" delay={0.15} />
              <RoleRow label="Habitary" index={0} side="right" />
              <RoleRow label="Aipixture Company" index={1} side="right" />
              <RoleRow label="Backend & Mobile Systems" index={2} side="right" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ColumnHeader({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{
        fontSize: "12px",
        fontWeight: 600,
        color: "#666666",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: "8px",
      }}
    >
      {label}
    </motion.div>
  );
}

function RoleRow({
  label,
  index,
  side,
}: {
  label: string;
  index: number;
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        duration: 0.7,
        delay: 0.3 + index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        color: "#FFFFFF",
        x: side === "left" ? 4 : -4,
      }}
      style={{
        fontSize: "16px",
        fontWeight: 500,
        color: "rgba(255, 255, 255, 0.7)",
        letterSpacing: "0.03em",
        cursor: "default",
        transition: "color 0.6s ease, transform 0.6s ease",
      }}
      data-pair-index={index}
    >
      {label}
    </motion.div>
  );
}