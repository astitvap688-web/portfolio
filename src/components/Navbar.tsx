import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X, Play, Sparkles } from "lucide-react";
import { nav } from "../data/content";
import { Magnetic } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 25);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top micro-thin Apple glass scroll progress indicator */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[130] h-[2px] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 opacity-90 shadow-[0_0_12px_rgba(168,85,247,0.75)]"
        style={{ scaleX: progress }}
      />

      {/* Floating Apple Glass Dynamic Island Container */}
      <header className="fixed inset-x-0 top-3 z-[115] flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-500">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full apple-glass-dock max-w-[1240px] w-full transition-all duration-500 ${
            scrolled
              ? "shadow-[0_24px_60px_-10px_rgba(0,0,0,0.85),0_0_35px_rgba(139,92,246,0.18)] border-white/20 bg-[#0d0d12]/85"
              : "border-white/12 bg-[#0c0c12]/65"
          }`}
        >
          {/* Logo with Apple-style rounded specular icon */}
          <a href="#top" className="group flex items-center gap-3 pl-1" data-hover>
            <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl bg-gradient-to-b from-white/95 to-white/75 text-black shadow-[0_2px_10px_rgba(255,255,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(139,92,246,0.65)]">
              <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-[14px] sm:text-[15px] font-black tracking-[0.06em] text-white">
                FRAMEFLOW
              </span>
              <span className="font-mono text-[8px] tracking-[0.24em] text-white/40 uppercase -mt-0.5 hidden sm:block">
                STUDIO · 9:16
              </span>
            </div>
          </a>

          {/* Desktop Nav Items as Apple Frosted Glass Pills */}
          <nav className="hidden items-center gap-1 lg:flex bg-white/[0.03] p-1 rounded-full border border-white/8 backdrop-blur-xl">
            {nav.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] tracking-[0.16em] text-white/65 uppercase px-4 py-1.5 rounded-full transition-all duration-200 hover:text-white hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 pr-1">
            {/* Live Availability Glass Pill */}
            <div className="hidden items-center gap-2 rounded-full border border-violet-400/25 bg-violet-950/30 px-3.5 py-1.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_15px_rgba(139,92,246,0.15)] md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-violet-200/90 uppercase">
                {nav.status}
              </span>
            </div>

            {/* Apple Keynote Glass CTA Button */}
            <Magnetic strength={0.25} className="hidden sm:inline-block">
              <a
                href="#contact"
                className="group relative flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 text-[12px] font-bold tracking-wide shadow-[0_2px_12px_rgba(255,255,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.65)] hover:scale-[1.02]"
              >
                <span>{nav.cta}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black/70 group-hover:text-white" />
              </a>
            </Magnetic>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white transition-all hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Glass Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] flex flex-col justify-end bg-[#050508]/92 pb-12 px-6 lg:hidden"
          >
            <div className="pt-24 space-y-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-950/40 px-3.5 py-1.5 backdrop-blur-xl">
                <Sparkles className="h-3 w-3 text-violet-300" />
                <span className="font-mono text-[10px] tracking-wider text-violet-200 uppercase">
                  Accepting New Projects
                </span>
              </div>
              {nav.links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between border-b border-white/10 py-4"
                >
                  <span className="font-display text-3xl font-extrabold tracking-tight text-white transition-colors group-hover:text-violet-300">
                    {l.label}
                  </span>
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.5)]"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
