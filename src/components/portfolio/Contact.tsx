import { motion } from "framer-motion";
import { useState, type ChangeEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { MagneticButton } from "./MagneticButton";

function Field({
  label,
  type = "text",
  textarea = false,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [val, setVal] = useState("");
  const [focus, setFocus] = useState(false);
  const active = focus || val.length > 0;
  const props = {
    value: val,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setVal(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    suppressHydrationWarning: true,
    className:
      "peer w-full bg-transparent px-4 pt-6 pb-2 text-foreground outline-none placeholder-transparent",
  };
  return (
    <div className="glass relative rounded-2xl transition-all focus-within:border-white/30 focus-within:shadow-[0_0_40px_-20px_var(--neon-violet)]">
      {textarea ? (
        <textarea rows={4} {...props} placeholder={label} />
      ) : (
        <input type={type} {...props} placeholder={label} />
      )}
      <label
        className={`pointer-events-none absolute left-4 transition-all duration-300 ${active ? "top-1.5 text-[10px] uppercase tracking-widest text-[var(--neon-cyan)]" : "top-4 text-sm text-muted-foreground"}`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I will get back to you soon.");
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div
        className="absolute inset-x-0 top-20 mx-auto h-[300px] max-w-3xl rounded-full bg-[var(--neon-violet)]/20 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            09 — Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something <span className="text-gradient">exceptional</span>!
          </h2>
          <p className="mt-5 text-muted-foreground">
            Have a project in mind, or just want to say hi? My inbox is open!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass-strong mt-14 grid gap-4 rounded-3xl p-8 sm:p-10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" />
            <Field label="Email" type="email" />
          </div>
          <Field label="Subject" />
          <Field label="Tell me about your project" textarea />

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-sm text-muted-foreground">
              or email me at{" "}
              <a
                href="mailto:sudhanshuagasti588@gmail.com"
                className="text-foreground underline underline-offset-4"
              >
                sudhanshuagasti588@gmail.com
              </a>
            </p>
            <MagneticButton className="group rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)]">
              Send Message{"  "}
              <Send size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
