import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { marqueeWords } from "../data/content";

/* ---------------- Custom Cursor (Frosted Glass Refraction) ---------------- */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    if (!mq.matches) return;
    document.documentElement.classList.add("cursor-none-fine");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-hover]"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [x, y]);

  if (!fine) return null;
  return (
    <>
      {/* dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200]"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      >
        <div className="-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
      </motion.div>
      {/* ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[199]"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="-ml-5 -mt-5 rounded-full backdrop-blur-[2px]"
          animate={{
            width: hovering ? 64 : 40,
            height: hovering ? 64 : 40,
            marginLeft: hovering ? -32 : -20,
            marginTop: hovering ? -32 : -20,
            backgroundColor: hovering ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.02)",
            borderColor: hovering ? "rgba(255, 255, 255, 0.55)" : "rgba(255, 255, 255, 0.25)",
            boxShadow: hovering
              ? "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)"
              : "none",
          }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        />
      </motion.div>
    </>
  );
}

/* ---------------- Magnetic wrapper ---------------- */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Masked line reveal ---------------- */
export function MaskReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHead({
  index,
  label,
  title,
  sub,
  align = "left",
}: {
  index: string;
  label: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : ""}>
      <Reveal>
        <div
          className={`flex items-center gap-4 font-mono text-[12px] tracking-[0.3em] text-white/50 uppercase ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="text-violet-400 font-bold text-[13px]">{index}</span>
          <span className="h-px w-12 bg-white/20" />
          <span>{label}</span>
          {centered && <span className="h-px w-12 bg-white/20" />}
        </div>
      </Reveal>
      <h2 className="font-display mt-5 text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.92] font-black tracking-[-0.03em] text-white">
        <MaskReveal>{title}</MaskReveal>
      </h2>
      {sub && (
        <Reveal delay={0.15}>
          <p className={`mt-6 max-w-2xl text-[16px] leading-relaxed text-white/60 md:text-[18px] ${centered ? "mx-auto" : ""}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Marquee with Apple Glass Border ---------------- */
export function Marquee({
  outline = false,
  slow = false,
  className = "",
}: {
  outline?: boolean;
  slow?: boolean;
  className?: string;
}) {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className={`relative overflow-hidden border-y border-white/10 bg-[#050508]/80 py-5 backdrop-blur-xl ${className}`}>
      <div className={`flex w-max items-center gap-0 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex w-max shrink-0 items-center" aria-hidden={half === 1}>
            {row.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span
                  className={`font-display px-6 text-[clamp(1.2rem,2.6vw,2rem)] font-extrabold tracking-tight whitespace-nowrap ${
                    outline && i % 2 === 1 ? "text-outline" : "text-white/90"
                  } ${!outline && i % 2 === 1 ? "text-white/30" : ""}`}
                >
                  {w}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Preloader with Apple Glass Progress Pill ---------------- */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let v = 0;
    const t = setInterval(() => {
      v += Math.floor(Math.random() * 14) + 5;
      if (v >= 100) {
        v = 100;
        clearInterval(t);
        setTimeout(() => setExit(true), 350);
        setTimeout(() => onDone(), 1050);
      }
      setCount(v);
    }, 90);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#050508]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle ambient blur behind brand */}
          <div className="absolute h-64 w-64 rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />

          <div className="flex overflow-hidden relative z-10">
            {"FRAMEFLOW".split("").map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(2.2rem,7vw,4.8rem)] font-black tracking-tight text-white"
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* Apple Glass Progress Capsule */}
          <div className="mt-8 relative z-10 apple-glass-pill rounded-full p-1.5 w-64 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-300 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                animate={{ width: `${count}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 relative z-10">
            <p className="font-mono text-[10px] tracking-[0.35em] text-white/40 uppercase">
              Loading timeline
            </p>
            <span className="font-mono text-[11px] text-violet-300 font-semibold tabular-nums">
              {count}%
            </span>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[300] bg-[#050508]"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
