import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import InternshipSection from "./components/InternshipSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      
      <div id="home">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Selected Work Section */}
      <div id="work">
        <WorkSection />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* Internship Section */}
      <div id="internship">
        <InternshipSection />
      </div>

      {/* Certifications Section */}
      <div id="certifications">
        <CertificationsSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}