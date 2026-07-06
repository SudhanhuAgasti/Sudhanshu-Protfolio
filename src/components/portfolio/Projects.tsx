import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import studentManagement from "@/assets/student_management.png";
import bankingLedger from "@/assets/banking_ledger.png";
import ecommerceClone from "@/assets/ecommerce_clone.png";
import portfolioWebsite from "@/assets/portfolio_website.png";

const projects = [
  {
    name: "Student Management System",
    tag: "Full-Stack Web App · MERN",
    desc: "Developed a full-stack student system featuring an AI-powered face recognition attendance system via OpenAI, automated notifications via Node-Cron, and role-based access control.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "jsPDF"],
    grad: "from-[#7C3AED] via-[#3B82F6] to-[#06B6D4]",
    img: studentManagement,
    live: "https://student-management-system-ivory-pi.vercel.app/",
    code: "https://github.com/SudhanhuAgasti/student-management-system",
  },
  {
    name: "Banking Ledger and Transaction System",
    tag: "Backend & System Design · Transactions",
    desc: "A production-grade banking backend with double-entry ledger architecture, ACID transactions, and idempotency. Uses MongoDB sessions and rollback mechanisms for fault-tolerant transfers.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "ACID", "REST APIs"],
    grad: "from-[#EC4899] via-[#8B5CF6] to-[#6366F1]",
    img: bankingLedger,
    live: "https://github.com/SudhanhuAgasti/BANKING-SYSTEM",
    code: "https://github.com/SudhanhuAgasti/BANKING-SYSTEM",
  },
  {
    name: "Ecommerce Clone",
    tag: "Frontend Web App · E-commerce",
    desc: "A responsive e-commerce web application with product filtering, dynamic search, and optimized user interfaces across multiple device sizes.",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    grad: "from-[#F59E0B] via-[#EF4444] to-[#EC4899]",
    img: ecommerceClone,
    live: "https://github.com/SudhanhuAgasti/luxerious-e-commerce-web",
    code: "https://github.com/SudhanhuAgasti/luxerious-e-commerce-web",
  },
  {
    name: "Personal Portfolio Website",
    tag: "Portfolio · Design & Animation",
    desc: "Built and deployed a responsive personal portfolio website showcasing modern UI/UX design, interactive GSAP layouts, and sleek Framer Motion transitions.",
    tech: ["React.js", "GSAP", "Framer Motion", "Tailwind CSS", "Versal"],
    grad: "from-[#10B981] via-[#3B82F6] to-[#6366F1]",
    img: portfolioWebsite,
    live: "",
    code: "https://github.com/SudhanhuAgasti/Sudhanshu-Protfolio",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
              03 — Selected Work
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Featured <span className="text-gradient">projects</span>!
            </h2>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass-strong relative overflow-hidden rounded-3xl"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.grad}`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <motion.div
                  className="absolute inset-6 grid place-items-center"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="font-display text-5xl font-bold tracking-tighter text-white/90 mix-blend-overlay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
                <div className="absolute right-4 top-4 flex gap-2 md:opacity-0 md:translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-100 translate-y-0 z-10">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-white/20 text-white"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-black hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ boxShadow: "0 40px 120px -30px rgba(140,120,255,0.5)" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
