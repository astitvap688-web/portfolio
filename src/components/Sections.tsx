import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Sparkles,
  TrendingUp,
  Users,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  FolderInput,
  Clapperboard,
  MessageSquareText,
  Rocket,
  Camera,
  MonitorPlay,
  MessagesSquare,
  AtSign,
  Layers,
  Zap,
  Check,
  Copy,
  Film,
  Mic,
  Volume2,
  Flame,
  CheckCircle2,
  SlidersHorizontal,
  Palette,
  Cpu,
  Wand2,
} from "lucide-react";
import { services, processSteps, softwareStack, team, cta, footer, site } from "../data/content";
import { Reveal, SectionHead, Magnetic, Marquee, MaskReveal } from "./ui";

const serviceIcons = [Scissors, Sparkles, TrendingUp, Users];
const processIcons = [FolderInput, Clapperboard, MessageSquareText, Rocket];

/* ================= SERVICES ================= */
export function Services() {
  return (
    <section id="services" className="relative bg-[#050508] py-24 md:py-36">
      {/* faint side label */}
      <span className="font-mono pointer-events-none absolute top-28 left-6 hidden origin-top-left rotate-90 text-[10px] tracking-[0.4em] text-white/25 uppercase xl:block">
        Craft · 9:16 native architecture
      </span>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHead
          index="02"
          label="Services"
          title="WHAT WE DO"
          sub="Four focused disciplines. One standard: short-form that commands attention."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={s.index}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[28px] apple-glass-card p-8 transition-all duration-500 hover:-translate-y-1.5 md:p-11"
                data-hover
              >
                {/* subtle corner glow */}
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-600/0 blur-[80px] transition-all duration-700 group-hover:bg-violet-600/25" />

                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-xl transition-all duration-500 group-hover:border-violet-400 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-purple-600 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <span className="font-display text-5xl font-black text-white/[0.08] transition-colors duration-500 group-hover:text-violet-400/30 md:text-6xl">
                    {s.index}
                  </span>
                </div>

                <h3 className="font-display mt-8 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] font-medium text-white/80">{s.description}</p>
                <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/55">{s.detail}</p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-[0.16em] text-white/45 uppercase"
                      >
                        {t}
                        <span className="ml-2 text-violet-400">·</span>
                      </span>
                    ))}
                  </div>
                  <span className="grid h-8 w-8 place-items-center rounded-full apple-glass-pill text-white/40 transition-all duration-300 group-hover:text-violet-200 group-hover:border-violet-400/50">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 45%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const pct = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative overflow-hidden bg-[#050508] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            index="03"
            label="Process"
            title="FROM RAW TO READY"
            sub="A precision pipeline engineered for turnaround — without compromising cinematic craft."
          />
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-3 rounded-full apple-glass-pill px-5 py-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/80 uppercase">
                Sprint Delivery — 48 hours
              </span>
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* progress track (desktop) */}
          <div className="absolute top-[52px] right-0 left-0 z-0 hidden h-px bg-white/10 lg:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
              style={{ scaleX: line }}
            />
          </div>
          {/* progress track (mobile) */}
          <div className="absolute top-2 bottom-2 left-[27px] w-px bg-white/10 lg:hidden">
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-violet-500 to-purple-500"
              style={{ height: pct }}
            />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((s, i) => {
              const Icon = processIcons[i];
              return (
                <motion.div
                  key={s.index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-20 lg:pl-0 lg:pt-24"
                >
                  {/* node */}
                  <div className="absolute top-0 left-0 z-10 lg:top-[34px] lg:left-0">
                    <span className="relative grid h-14 w-14 place-items-center rounded-2xl apple-glass-pill shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      <Icon className="h-5 w-5 text-white/90" />
                      <span className="font-mono absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-[10px] font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                        {i + 1}
                      </span>
                    </span>
                  </div>

                  <div className="font-mono text-[10px] tracking-[0.3em] text-violet-300 uppercase">
                    {s.time}
                  </div>
                  <div className="font-display mt-2 flex items-baseline gap-3">
                    <span className="text-outline text-4xl font-black">{s.index}</span>
                  </div>
                  <h3 className="font-display mt-1 text-xl font-extrabold tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[260px] text-[13px] leading-relaxed text-white/55">
                    {s.description}
                  </p>
                  <p className="font-mono mt-3 text-[10px] tracking-[0.2em] text-white/35 uppercase">
                    {s.meta}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SOFTWARE WE USE ================= */
export function Software() {
  return (
    <section id="software" className="relative bg-[#050508] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHead
          index="04"
          label="Software"
          title="SOFTWARE WE USE"
          sub="Our production stack powered by original industry-standard creative tools."
          align="center"
        />

        {/* 3 Software Cards with Original PNGs */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-[960px] mx-auto">
          {softwareStack.map((sw, i) => (
            <motion.div
              key={sw.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center justify-center rounded-[28px] apple-glass-card p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-1.5"
              data-hover
            >
              {/* Original Software PNG Logo */}
              <div className="relative grid h-28 w-28 place-items-center">
                <img
                  src={sw.icon}
                  alt={sw.name}
                  className="relative h-20 w-20 sm:h-24 sm:w-24 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                  loading="lazy"
                />
              </div>

              {/* Title & Single-Line Role */}
              <h3 className="font-display mt-6 text-xl font-bold tracking-tight text-white">
                {sw.name}
              </h3>
              <p className="font-mono mt-1.5 text-[11px] tracking-[0.2em] text-violet-300/85 uppercase font-medium">
                {sw.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TEAM ================= */
export function Team() {
  return (
    <section id="team" className="relative bg-[#050508] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead
            index="05"
            label="The Team"
            title="THE EDITORS BEHIND THE FLOW"
            sub="FrameFlow is driven by 3 dedicated video editors. We turn raw clips into high-retention, scroll-stopping visual masters."
          />
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-3 rounded-full apple-glass-pill px-5 py-2.5 shadow-[0_0_20px_rgba(52,211,153,0.15)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/85 uppercase font-medium">
                3 Dedicated Video Editors · Studio Active
              </span>
            </div>
          </Reveal>
        </div>

        {/* 3 Dedicated Video Editor Cards: Astitva, Naitik, Nimish */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.members.map((m, i) => {
            const glowStyles = [
              "group-hover:bg-violet-600/30 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]",
              "group-hover:bg-pink-600/30 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]",
              "group-hover:bg-amber-600/30 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]",
            ];
            const borderColors = [
              "group-hover:border-violet-400/50",
              "group-hover:border-pink-400/50",
              "group-hover:border-amber-400/50",
            ];
            const textGlows = [
              "group-hover:text-violet-300",
              "group-hover:text-pink-300",
              "group-hover:text-amber-300",
            ];

            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] apple-glass-card p-8 md:p-9 transition-all duration-500 hover:-translate-y-2 ${borderColors[i]}`}
                data-hover
              >
                {/* Ambient dynamic glow orb */}
                <div
                  className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-600/0 blur-[80px] transition-all duration-700 ${glowStyles[i]}`}
                />

                <div>
                  {/* Top Bar: Monogram Avatar + Live Status */}
                  <div className="flex items-start justify-between">
                    <div className="relative">
                      <span className="font-display grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/02 text-2xl font-black text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500 group-hover:scale-105">
                        {m.initials}
                      </span>
                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                        <span className="h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="h-full w-full rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[10px] tracking-wider text-white/80 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {m.badge}
                      </span>
                      <span className="font-mono text-[9px] tracking-wider text-white/35 uppercase">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-8">
                    <h3 className={`font-display text-2xl md:text-3xl font-black tracking-tight text-white transition-colors duration-300 ${textGlows[i]}`}>
                      {m.name}
                    </h3>
                    {/* Clear Video Editor Label */}
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="font-mono text-[12px] font-bold tracking-[0.24em] text-violet-300 uppercase">
                        {m.role}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="font-mono text-[10px] text-white/50 tracking-wider">
                        Full-Time
                      </span>
                    </div>

                    <p className="mt-3.5 text-[13px] leading-relaxed text-white/60">
                      {m.specialty}
                    </p>
                  </div>

                  {/* Software Mastery Chips */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase block mb-2.5">
                      Software Mastery
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {m.software.map((sw) => (
                        <span
                          key={sw}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 font-mono text-[10px] text-white/75 transition-colors group-hover:border-white/20 group-hover:text-white"
                        >
                          <span className="h-1 w-1 rounded-full bg-violet-400" />
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Studio Action Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] tracking-wider text-emerald-400/90 flex items-center gap-1.5 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Projects
                  </span>
                  <a
                    href={`mailto:${site.email}?subject=FrameFlow%20Project%20Inquiry%20-%20${encodeURIComponent(m.name)}`}
                    className="group/btn flex items-center gap-1.5 rounded-full apple-glass-pill px-3 py-1 font-mono text-[10px] tracking-wider text-white/70 uppercase transition-all hover:text-white hover:border-violet-400/50 hover:bg-white/[0.08]"
                    title={`Send email inquiry to ${site.email}`}
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="h-3 w-3 text-violet-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= CTA (CREATIVE APPLE KEYNOTE GLASS STAGE) ================= */
const ctaWorkflows = [
  {
    id: "viral",
    label: "Viral Creator Reel",
    icon: Zap,
    retention: "94% Target",
    pacing: "High-Velocity Hook Reset",
    audio: "Kinetic SFX & Beat Drops",
    delivery: "48h Sprint Master",
    desc: "Engineered for maximum watch-time, pattern interrupts every 2s, and kinetic captions.",
  },
  {
    id: "cinematic",
    label: "Cinematic Reel",
    icon: Film,
    retention: "96% Target",
    pacing: "Atmospheric Pace & Film Tone",
    audio: "Spatial Soundscape & Ambience",
    delivery: "Color Graded Master",
    desc: "Rich filmic color grade, masked transitions, moody light flares, and immersive sound design.",
  },
  {
    id: "podcast",
    label: "Podcast Studio Cut",
    icon: Mic,
    retention: "92% Target",
    pacing: "Multi-Angle Hook Emphasis",
    audio: "Vocal Isolation & EQ Leveling",
    delivery: "Subtitled Short Master",
    desc: "Instant hook reset, automated kinetic subtitles, multi-cam switches, and vocal sweetening.",
  },
];

export function CTA() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = ctaWorkflows[activeWorkflow];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050508] py-24 md:py-36">
      {/* Background kinetic typographic marquees */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 opacity-100">
        {[0, 1, 2].map((r) => (
          <div
            key={r}
            className={`flex w-max whitespace-nowrap ${
              r === 1 ? "animate-marquee-slow" : "animate-marquee"
            }`}
          >
            {[0, 1].map((h) => (
              <span key={h} className="flex w-max shrink-0" aria-hidden={h === 1}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className={`font-display px-4 text-[clamp(4rem,10vw,9rem)] leading-none font-black tracking-tight ${
                      r === 1
                        ? "text-outline-faint"
                        : i % 2
                        ? "text-outline-faint"
                        : "text-white/[0.025]"
                    }`}
                  >
                    FRAMEFLOW
                  </span>
                ))}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Radiant aurora center backdrop */}
      <div className="absolute top-1/2 left-1/2 h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-violet-600/25 via-purple-600/15 to-cyan-500/20 blur-[170px] pointer-events-none" />

      {/* Main Apple Keynote Glass Stage */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] apple-glass-card p-6 sm:p-10 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),0_0_50px_rgba(139,92,246,0.2)] text-center"
        >
          {/* Specular hairline inner border */}
          <div className="pointer-events-none absolute inset-0 rounded-[36px] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.35)]" />

          {/* Section pill */}
          <div className="inline-flex items-center gap-2 rounded-full apple-glass-pill px-4 py-1.5 font-mono text-[10px] tracking-[0.3em] text-violet-200 uppercase">
            <Sparkles className="h-3 w-3 text-violet-400" />
            06 — Start a Project · Studio Pipeline
          </div>

          {/* Headline (reliably rendered) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display mt-6 text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[0.96] font-black tracking-tight text-white"
          >
            GOT RAW FOOTAGE?{" "}
            <span className="block sm:inline bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
              LET'S MAKE IT FLOW.
            </span>
          </motion.h2>

          <p className="mx-auto mt-4 max-w-xl text-[14px] sm:text-[16px] leading-relaxed text-white/65">
            Turn messy clips into high-retention 9:16 viral masters. Engineered for creators, founders & modern channels who refuse to blend in.
          </p>

          {/* ================= CREATIVE INTERACTIVE STUDIO CONSOLE ================= */}
          <div className="mt-10 rounded-[28px] border border-white/12 bg-black/40 p-5 sm:p-7 backdrop-blur-2xl text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] tracking-[0.24em] text-violet-300 uppercase block">
                  Interactive Studio Engine
                </span>
                <span className="font-display text-base sm:text-lg font-bold text-white">
                  Select Your Project Style
                </span>
              </div>

              {/* Dynamic Soundwave Visualizer Bars */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full apple-glass-pill self-start sm:self-auto">
                <Volume2 className="h-3.5 w-3.5 text-violet-400" />
                <div className="flex items-center gap-[3px] h-4 px-1">
                  {[40, 75, 100, 60, 85, 30, 95, 70, 45, 90, 65, 80].map((h, idx) => (
                    <motion.div
                      key={idx}
                      className="w-[2.5px] rounded-full bg-gradient-to-t from-violet-500 to-cyan-400"
                      animate={{
                        height: [
                          `${Math.max(20, (h * 0.4))}%`,
                          `${Math.min(100, (h * 1.1))}%`,
                          `${Math.max(20, (h * 0.6))}%`,
                        ],
                      }}
                      transition={{
                        duration: 0.8 + (idx % 4) * 0.25,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[9px] tracking-wider text-violet-200">
                  AUDIO SFX ACTIVE
                </span>
              </div>
            </div>

            {/* Workflow Style Selector Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {ctaWorkflows.map((w, idx) => {
                const Icon = w.icon;
                const isActive = idx === activeWorkflow;
                return (
                  <button
                    key={w.id}
                    onClick={() => setActiveWorkflow(idx)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "apple-glass-pill-active font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                        : "apple-glass-pill text-white/60 hover:text-white"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-violet-300" : "text-white/50"}`} />
                    <span>{w.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Workflow Details Dashboard */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
                <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase block">
                  Retention Target
                </span>
                <span className="font-display text-base font-extrabold text-emerald-400 mt-0.5 block flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  {current.retention}
                </span>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
                <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase block">
                  Turnaround
                </span>
                <span className="font-display text-base font-extrabold text-white mt-0.5 block">
                  {current.delivery}
                </span>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5 col-span-2 sm:col-span-2">
                <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase block">
                  Editing Strategy
                </span>
                <span className="text-[12px] font-medium text-white/80 line-clamp-1 mt-0.5 block">
                  {current.pacing}
                </span>
              </div>
            </div>

            {/* Live Pipeline Chips Visualizer */}
            <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
              <span className="font-mono text-[9px] tracking-widest text-violet-300 uppercase">
                Pipeline:
              </span>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[9px] text-white/75">
                Raw Footage In
              </span>
              <span className="text-white/30 text-xs">➔</span>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[9px] text-white/75">
                Hook Architecture
              </span>
              <span className="text-white/30 text-xs">➔</span>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[9px] text-white/75">
                Spatial Audio & Color
              </span>
              <span className="text-white/30 text-xs">➔</span>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-950/40 px-2.5 py-1 font-mono text-[9px] text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                9:16 Master Out
              </span>
            </div>
          </div>

          {/* Action Hub */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Magnetic strength={0.25}>
                <a
                  href={`mailto:${site.email}?subject=FrameFlow%20Project%20Inquiry%20[${encodeURIComponent(current.label)}]`}
                  className="group flex items-center gap-4 rounded-full bg-white text-black px-10 py-4 text-[14px] font-black tracking-[0.12em] uppercase shadow-[0_4px_30px_rgba(255,255,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 hover:text-white hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] hover:scale-[1.02] md:px-12 md:py-5 md:text-[15px]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Magnetic>

              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-2.5 rounded-full apple-glass-btn px-6 py-4 text-[13px] font-bold tracking-[0.1em] text-white transition-all hover:border-violet-400/50 hover:bg-white/[0.12]"
                title="Click to send email to flowframe03@gmail.com"
              >
                <AtSign className="h-4 w-4 text-violet-300 transition-transform group-hover:scale-110" />
                <span className="font-mono text-white/90">{site.email}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-violet-300 transition-colors" />
              </a>
            </div>

            {/* Quality Commitments */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-white/50 font-mono tracking-wider uppercase">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                48-Hour Sprint Turnaround
              </span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                2 Revision Rounds Included
              </span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                9:16 Master Files
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
const socialIcons: Record<string, typeof Camera> = {
  Discord: MessagesSquare,
  Email: AtSign,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040407]">
      <div className="mx-auto max-w-[1400px] px-5 pt-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* brand */}
          <div>
            <a href="#top" className="font-display text-3xl font-black tracking-tight text-white">
              FRAMEFLOW
            </a>
            <p className="mt-2 text-[14px] text-white/55">{footer.tagline}</p>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                Accepting new cohort projects
              </span>
            </div>
          </div>

          {/* nav */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Navigation
            </p>
            <nav className="mt-5 space-y-3">
              {footer.nav.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="group flex w-fit items-center gap-2 text-[15px] font-medium text-white/70 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-4" />
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* socials */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">Socials</p>
            <div className="mt-5 space-y-3">
              {footer.socials.map((s) => {
                const Icon = socialIcons[s.label] ?? ArrowUpRight;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-fit items-center gap-3 text-[15px] font-medium text-white/70 transition-colors hover:text-white"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full apple-glass-pill transition-all duration-300 group-hover:border-violet-400 group-hover:text-violet-300">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 py-7 sm:flex-row">
          <p className="font-mono text-[11px] tracking-[0.1em] text-white/40">
            {footer.copyright}
          </p>
          <p className="font-mono hidden text-[11px] tracking-[0.25em] text-white/30 uppercase md:block">
            Engineered for high retention — 9:16 master format
          </p>
          <Magnetic strength={0.35}>
            <a
              href="#top"
              className="group flex items-center gap-2 rounded-full apple-glass-pill px-5 py-2 font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase transition-all hover:text-white"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* giant clipped watermark */}
      <div className="pointer-events-none relative -mb-[2.5vw] overflow-hidden select-none">
        <div className="font-display mask-fade-x text-center text-[18.5vw] leading-[0.8] font-black tracking-tight text-white/[0.03]">
          FRAMEFLOW
        </div>
      </div>
    </footer>
  );
}

/* marquee divider export */
export function Divider() {
  return <Marquee outline slow={false} />;
}
