import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Internship", href: "#internship" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function NavLink({ name, href }: { name: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontSize: "15px",
        fontWeight: 500,
        letterSpacing: "0.02em",
        textDecoration: "none",
        transition: "all 0.4s ease-in-out",
      }}
    >
      {/* Base white text */}
      <span
        style={{
          color: "#FFFFFF",
          position: "relative",
          zIndex: 1,
        }}
      >
        {name}
      </span>

      {/* Gradient text overlay */}
      <motion.span
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(139, 92, 246, 1) 0%, rgba(79, 70, 229, 1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          pointerEvents: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {name}
      </motion.span>

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(139, 92, 246, 1) 0%, rgba(79, 70, 229, 1) 100%)",
        }}
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </a>
  );
}

export default function Navbar() {
  const [logoHovered, setLogoHovered] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll values
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 12]);
  const height = useTransform(scrollY, [0, 100], [72, 60]);
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    [
      "0 0 0 rgba(0, 0, 0, 0)",
      "0 4px 20px rgba(0, 0, 0, 0.3)",
    ]
  );

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        height,
        boxShadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div
        className="flex items-center justify-between h-full"
        style={{
          paddingLeft: "clamp(20px, 5vw, 80px)",
          paddingRight: "clamp(20px, 5vw, 80px)",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="relative inline-block"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          style={{
            textDecoration: "none",
          }}
        >
          <motion.span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            TS.
          </motion.span>

          {/* Logo underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(139, 92, 246, 1) 0%, rgba(79, 70, 229, 1) 100%)",
            }}
            initial={{ width: 0 }}
            animate={{ width: logoHovered ? "100%" : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} />
          ))}
        </div>

        {/* Mobile Menu Button - Hidden for now, can be implemented later */}
        <button
          className="md:hidden"
          style={{
            color: "#FFFFFF",
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
    </motion.nav>
  );
}