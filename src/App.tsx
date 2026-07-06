import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { Projects } from "@/components/portfolio/Projects";
import { ExperienceEducation } from "@/components/portfolio/ExperienceEducation";
import { GithubDashboard } from "@/components/portfolio/GithubDashboard";
import { Certificates } from "@/components/portfolio/Certificates";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster />
      <CustomCursor />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <GithubDashboard />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
