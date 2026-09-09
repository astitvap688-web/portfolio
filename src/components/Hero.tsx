import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Flame,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { site } from "../data/content";
import { Magnetic } from "./ui";

/* Showcase reel items with real project videos & thumbnails */
const showcaseReels = [
  {
    id: "luminescence",
    label: "VFX Master",
    title: "Luminescence — Cinematic VFX Short",
    category: "Cinematic VFX & Grade",
    video: "/reels/wa-reel.mp4",
    thumbnail: "/reels/wa-reel-thumb.jpg",
    retention: "95% Retention",
    views: "3.9M Views",
    tagline: "Luminous silhouette isolation & spatial sound",
  },
  {
    id: "paris",
    label: "Cinematic",
    title: "Paris — Cinematic Night Walk",
    category: "Cinematic Grade",
    video: "/reels/paris.mp4",
    thumbnail: "/reels/paris_thumb.jpg",
    retention: "94% Retention",
    views: "1.2M Views",
    tagline: "Atmospheric pace & seamless masking",
  },
  {
    id: "talk-head",
    label: "Creator",
    title: "Talking Head — Viral Retention Cut",
    category: "Viral Hook Architecture",
    video: "/reels/talk-head.mp4",
    thumbnail: "/reels/talk-head-thumb.jpg",
    retention: "91% Retention",
    views: "2.8M Views",
    tagline: "Kinetic type, sound pops & hook reset",
  },
  {
    id: "podcast",
    label: "Podcast",
    title: "Marketing Mindset — Studio Cut",
    category: "Multi-Angle Short",
    video: "/reels/podcast.mp4",
    thumbnail: "/reels/podcast-thumb.jpg",
    retention: "90% Retention",
    views: "3.1M Views",
    tagline: "Dynamic zooms & enhanced audio",
  },
  {
    id: "surrey",
    label: "Showcase",
    title: "Surrey City Centre — Property Showcase",
    category: "4K Architecture & Motion",
    video: "/reels/surrey-city-centre.mp4",
    thumbnail: "/reels/surrey-thumb.jpg",
    retention: "89% Retention",
    views: "3.5M Views",
    tagline: "High-impact speed ramps & kinetic type",
  },
];

export default function Hero({ started }: { started: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeReel = showcaseReels[activeIdx];

  // Smooth switch on active index change
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setProgress(0);
    const p = v.play();
    if (p !== undefined) {
      p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [activeIdx]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const nextMuted = !v.muted;
    v.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      v.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#050508] pt-28 pb-16 md:pt-36 md:pb-20"
    >
      {/* Precision ambient lighting grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none opacity-35" />

      {/* Cinematic ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-600/25 via-purple-600/15 to-indigo-700/20 blur-[170px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-violet-700/18 via-fuchsia-600/10 to-blue-700/15 blur-[160px]" />

      {/* Main hero grid */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ================= LEFT COLUMN: Value Proposition & Apple Glass Bento ================= */}
          <div className="order-2 flex flex-col items-start text-left lg:order-1 lg:col-span-7 lg:pt-8">
            {/* Apple Vision Pro Glass Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full apple-glass-pill px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.24em] text-violet-200/90 uppercase sm:text-[11px]">
                FrameFlow Studio · Apple-Grade Post Production
              </span>
            </motion.div>

            {/* Main Headline with Refined Specular Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-6 text-[clamp(2.75rem,5.8vw,5.5rem)] font-black leading-[0.95] tracking-[-0.035em] text-white"
            >
              WE CRAFT SHORT FORM THAT{" "}
              <span className="bg-gradient-to-r from-white via-[#f3e8ff] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.45)]">
                COMMANDS
              </span>{" "}
              THE FEED.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#f5f5f7]/70 md:text-[17px]"
            >
              {site.support} Built for world-class creators, visionary founders & digital storytellers. Engineered with obsessive retention pacing, spatial audio & cinematic grade.
            </motion.p>



            {/* CTA Group with Apple Keynote Aesthetics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Magnetic strength={0.25}>
                <a
                  href="#work"
                  className="group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-white text-black px-5 py-3 text-[12px] font-extrabold tracking-[0.12em] uppercase sm:px-8 sm:py-4 sm:text-[13px] sm:gap-3 shadow-[0_4px_25px_rgba(255,255,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 hover:text-white hover:shadow-[0_0_45px_rgba(139,92,246,0.6)]"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Explore Selected Work
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full apple-glass-btn px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-white uppercase sm:px-7 sm:py-4 sm:text-[13px] sm:gap-2.5"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-violet-300" />
                </a>
              </Magnetic>
            </motion.div>

            {/* Quick availability note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={started ? { opacity: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="mt-4 flex items-center gap-2 text-[12px] text-white/55"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Sprint delivery in 48 hours · Open for new creator projects</span>
            </motion.div>

            {/* Apple Bento Glass Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-10 w-full border-t border-white/10 pt-6"
            >
              <div className="font-mono mb-4 flex items-center gap-2 text-[10px] tracking-[0.24em] text-violet-300/85 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                What we bring · Studio Standards
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {site.stats.map((s) => (
                  <div
                    key={s.label}
                    className="apple-glass-card rounded-2xl p-4 text-left"
                  >
                    <div className="font-display text-2xl font-black tracking-tight text-transparent bg-gradient-to-br from-white via-[#f3e8ff] to-[#a855f7] bg-clip-text sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="font-mono mt-1 text-[11px] font-semibold text-white/95">
                      {s.label}
                    </div>
                    {s.highlight && (
                      <div className="font-mono mt-1 text-[9px] tracking-wider text-violet-300/80 uppercase">
                        {s.highlight}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: Apple Vision / iPhone Pro Glass Device Showcase ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={started ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 flex flex-col items-center justify-start lg:order-2 lg:col-span-5"
          >
            {/* The 9:16 Device Frame */}
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Refractive aurora back-glow */}
              <div className="absolute -inset-4 rounded-[44px] bg-gradient-to-b from-violet-600/35 via-purple-600/20 to-cyan-500/25 blur-3xl pointer-events-none" />

              {/* Apple Specular Bezel Container */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[36px] apple-device-glass ring-1 ring-white/20">
                {/* Active Video Player */}
                <video
                  ref={videoRef}
                  src={activeReel.video}
                  poster={activeReel.thumbnail}
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onClick={togglePlay}
                  className="h-full w-full object-cover cursor-pointer"
                />

                {/* Ambient Top & Bottom Glass Vignette */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/85 via-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

                {/* Top Controls Overlay with Apple Glass Pills */}
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
                  {/* Apple Dynamic Live Status Pill */}
                  <div className="flex items-center gap-2 rounded-full apple-glass-pill px-3 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-white/95 uppercase">
                      4K MASTER · 60FPS
                    </span>
                  </div>

                  {/* Sound Toggle Apple Glass Button */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute reel" : "Mute reel"}
                    className="flex items-center gap-1.5 rounded-full apple-glass-pill px-3 py-1.5 text-white/90 hover:border-violet-400/50"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="h-3.5 w-3.5 text-white/70" />
                        <span className="font-mono text-[9px] tracking-[0.16em] uppercase">Sound On</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3.5 w-3.5 text-violet-400 animate-pulse" />
                        <span className="font-mono text-[9px] tracking-[0.16em] text-violet-200 uppercase">Playing</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Center Play/Pause Glass Icon on Pause */}
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 z-10 grid place-items-center cursor-pointer"
                >
                  <AnimatePresence>
                    {!isPlaying && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-black/65 backdrop-blur-2xl shadow-[0_0_35px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                      >
                        <Play className="ml-1 h-6 w-6 fill-white text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom QuickTime Style Glass HUD */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  {/* Floating Metric Badges */}
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full apple-glass-pill px-2.5 py-1 font-mono text-[9px] tracking-[0.15em] text-violet-200 shadow-[0_0_15px_rgba(124,58,237,0.35)]">
                      <Flame className="h-3 w-3 text-amber-400" />
                      {activeReel.retention}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full apple-glass-pill px-2.5 py-1 font-mono text-[9px] tracking-[0.15em] text-white/95">
                      <TrendingUp className="h-3 w-3 text-emerald-400" />
                      {activeReel.views}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="text-left">
                    <div className="font-mono text-[9px] tracking-[0.22em] text-violet-300 uppercase">
                      {activeReel.category}
                    </div>
                    <div className="font-display mt-0.5 text-base font-extrabold text-white truncate">
                      {activeReel.title}
                    </div>
                    <p className="mt-0.5 text-[11px] text-white/70 line-clamp-1">
                      {activeReel.tagline}
                    </p>
                  </div>

                  {/* Apple Glass Progress Scrubber */}
                  <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/20 backdrop-blur-sm">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-300 transition-[width] duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Showcase Reel Selector Glass Pills */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                {showcaseReels.map((reel, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={reel.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`font-mono relative rounded-full px-3 py-1.5 text-[10px] tracking-[0.14em] uppercase transition-all duration-300 ${
                        isActive
                          ? "apple-glass-pill-active font-bold text-white shadow-[0_0_24px_rgba(139,92,246,0.6)]"
                          : "apple-glass-pill text-white/65 hover:text-white"
                      }`}
                    >
                      {reel.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
