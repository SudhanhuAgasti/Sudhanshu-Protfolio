import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Download, Mail } from "lucide-react";
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiExpress } from "react-icons/si";
import { MagneticButton } from "./MagneticButton";
import heroOrb from "@/assets/hero-orb.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const floatingIcons = [
  { Icon: SiHtml5, color: "#E34F26", x: "8%", y: "18%", d: 0 },
  { Icon: SiCss, color: "#1572B6", x: "88%", y: "22%", d: 0.6 },
  { Icon: SiJavascript, color: "#F7DF1E", x: "12%", y: "78%", d: 1.2 },
  { Icon: SiReact, color: "#61DAFB", x: "84%", y: "72%", d: 0.9 },
  { Icon: SiNodedotjs, color: "#339933", x: "6%", y: "48%", d: 0.3 },
  { Icon: SiExpress, color: "#FFFFFF", x: "92%", y: "48%", d: 1.5 },
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on orb
      gsap.to(orbRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Only attach mouse parallax on desktop screens to prevent lag on mobile emulation
      const isMobile =
        window.matchMedia("(max-width: 768px)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      if (isMobile) return;

      const onMove = (e: MouseEvent) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        gsap.to(orbRef.current, { x: dx * 30, y: dy * 30, duration: 1.2, ease: "power3.out" });
        gsap.to(".floating-icon", {
          x: (i) => dx * (10 + i * 4),
          y: (i) => dy * (10 + i * 4),
          duration: 1.2,
          ease: "power3.out",
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-mesh pointer-events-none" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--neon-violet)] opacity-30 blur-[120px] animate-blob pointer-events-none hidden sm:block will-change-transform"
        aria-hidden
      />
      <div
        className="absolute top-40 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--neon-cyan)] opacity-25 blur-[120px] animate-blob [animation-delay:-6s] pointer-events-none hidden sm:block will-change-transform"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[var(--neon-pink)] opacity-20 blur-[120px] animate-blob [animation-delay:-12s] pointer-events-none hidden sm:block will-change-transform"
        aria-hidden
      />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, x, y }, i) => (
        <motion.div
          key={i}
          className="floating-icon absolute hidden md:flex glass h-14 w-14 items-center justify-center rounded-2xl"
          style={{ left: x, top: y, boxShadow: `0 0 30px -10px ${color}` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { delay: 1 + i * 0.1 },
            scale: { delay: 1 + i * 0.1 },
            y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={26} color={color} />
        </motion.div>
      ))}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects ! 2026 !
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.3,
                },
              },
            }}
            className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-gradient sm:text-6xl lg:text-7xl xl:text-[5.25rem] sm:leading-[0.98]"
          >
            {"Crafting scalable web systems with clean architecture !!"
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block mr-[0.18em]">
                  <motion.span
                    className="inline-block"
                    variants={{
                      hidden: { y: 12, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            I'm <span className="text-foreground font-medium">Sudhanshu Kumar Agasti</span> — a Full Stack
            Developer crafting clean, responsive, and high-performance web applications using the MERN stack!!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="group relative rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)]"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/sudhanshu_resume.pdf"
              download="Sudhanshu_Kumar_Agasti_Resume.pdf"
              className="glass rounded-full px-7 py-3.5 text-sm font-medium text-foreground hover:bg-white/10"
            >
              <Download size={16} className="mr-2" /> Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Mail size={16} className="mr-2" /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-14 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div>
              <span className="block text-2xl font-semibold text-foreground">MCA</span>Student
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="block text-2xl font-semibold text-foreground">4+</span>Projects
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="block text-2xl font-semibold text-foreground">1</span>Internship
            </div>
          </motion.div>
        </div>

        {/* Hero glass card with orb */}
        <motion.div
          ref={orbRef}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-6 glow-violet">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="font-mono">sudhanshu.dev</span>
            </div>
            <div className="relative mt-4 aspect-square overflow-hidden rounded-2xl">
              <img
                src={heroOrb}
                alt="Iridescent 3D orb representing Sudhanshu's design aesthetic"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="mt-4 rounded-xl bg-black/40 p-4 font-mono text-[11px] leading-relaxed">
              <span className="text-[var(--neon-pink)]">const</span>{" "}
              <span className="text-[var(--neon-cyan)]">dev</span> = {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-muted-foreground">name:</span>{" "}
              <span className="text-emerald-300">"Sudhanshu Kumar Agasti"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-muted-foreground">stack:</span>{" "}
              <span className="text-amber-300">["React.js", "Node.js", "Express.js", "MongoDB"]</span>,
              <br />
              &nbsp;&nbsp;<span className="text-muted-foreground">focus:</span>{" "}
              <span className="text-emerald-300">"clean code + scalable backends"</span>
              <br />
              {"}"}
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[var(--neon-violet)]/30 via-transparent to-[var(--neon-cyan)]/30 blur-2xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
