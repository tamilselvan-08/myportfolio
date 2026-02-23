import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
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

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await emailjs.send(
      "service_zroczqw",
      "template_eff1jer",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      "IpzJoO0UpTFbjD0au"
    );

    console.log("SUCCESS!", response.status, response.text);
    alert("Message sent successfully 🚀");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error("FAILED...", error);
    alert("Failed to send message ❌");
  }
};

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000000",
        padding: "clamp(100px, 15vh, 160px) clamp(24px, 8vw, 120px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle animated gradient background */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(120px)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Statement */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(80px, 12vh, 120px)",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "clamp(40px, 8vw, 72px)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "40px",
            }}
          >
            Let's Build Something Impactful.
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
            Have a project, collaboration, or idea? Let's connect.
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "clamp(32px, 6vw, 40px)",
            marginBottom: "clamp(80px, 12vh, 100px)",
          }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink key={link.name} link={link} index={index} />
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#111111",
            borderRadius: "16px",
            padding: "clamp(32px, 6vw, 40px)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />

            <FormInput
              label="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />

            <FormTextarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me more about your project or idea..."
              required
            />

            <SubmitButton />
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          style={{
            textAlign: "center",
            marginTop: "clamp(60px, 10vh, 80px)",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#666666",
              letterSpacing: "0.02em",
            }}
          >
            © 2026 Tamil Selvan — Software Engineer
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  link,
  index,
}: {
  link: { name: string; icon: any; url: string };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* Icon */}
      <motion.div
        animate={{
          y: isHovered ? -4 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          color: isHovered ? "#FFFFFF" : "#BBBBBB",
          transition: "color 0.3s ease",
        }}
      >
        <Icon size={24} />
      </motion.div>

      {/* Link Name */}
      <div style={{ position: "relative" }}>
        <motion.span
          animate={{
            color: isHovered ? "#FFFFFF" : "#BBBBBB",
          }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          {link.name}
        </motion.span>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: "-4px",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(79, 70, 229, 0.8), rgba(139, 92, 246, 0.8))",
            transformOrigin: "left",
          }}
        />
      </div>

      {/* Subtle prism glow */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "80px",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.4), rgba(139, 92, 246, 0.2), transparent)",
            pointerEvents: "none",
            filter: "blur(20px)",
            zIndex: -1,
          }}
        />
      )}
    </motion.a>
  );
}

function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ marginBottom: "32px" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: "14px",
          fontWeight: 500,
          color: "#888888",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: "100%",
          padding: "12px 0",
          fontSize: "16px",
          fontWeight: 400,
          color: "#FFFFFF",
          backgroundColor: "transparent",
          border: "none",
          borderBottom: `1px solid ${
            isFocused ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)"
          }`,
          outline: "none",
          transition: "border-color 0.3s ease",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}

function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ marginBottom: "32px" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: "14px",
          fontWeight: 500,
          color: "#888888",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={5}
        style={{
          width: "100%",
          padding: "12px 0",
          fontSize: "16px",
          fontWeight: 400,
          color: "#FFFFFF",
          backgroundColor: "transparent",
          border: "none",
          borderBottom: `1px solid ${
            isFocused ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)"
          }`,
          outline: "none",
          transition: "border-color 0.3s ease",
          fontFamily: "inherit",
          resize: "vertical",
        }}
      />
    </div>
  );
}

function SubmitButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="submit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        width: "100%",
        padding: "16px 32px",
        fontSize: "16px",
        fontWeight: 500,
        color: isHovered ? "#000000" : "#FFFFFF",
        backgroundColor: isHovered ? "#FFFFFF" : "transparent",
        border: "1.5px solid #FFFFFF",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        letterSpacing: "0.02em",
        fontFamily: "inherit",
      }}
    >
      Send Message
    </motion.button>
  );
}
