import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  download?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  strength = 25,
  as = "button",
  href,
  download,
  onClick,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: Event) => {
      const ev = e as unknown as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left - rect.width / 2;
      const y = ev.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
    };
    const reset = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);

  if (as === "a") {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        download={download}
        suppressHydrationWarning
        className={`inline-flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
        whileTap={{ scale: 0.96 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      suppressHydrationWarning
      className={`inline-flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}
