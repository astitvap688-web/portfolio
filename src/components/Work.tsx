import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Pause,
  X,
  Eye,
  Clock,
  Gauge,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { projects, type Project } from "../data/content";
import { Reveal, SectionHead, Magnetic } from "./ui";

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function Card({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!p.video || !videoRef.current) return;
    if (hovered) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [hovered, p.video]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative aspect-[9/16] overflow-hidden rounded-[28px] border border-white/14 bg-[#0a0a0f] transition-all duration-500 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.3)] cursor-pointer"
      data-hover
      onClick={onOpen}
    >
      {/* thumbnail */}
      <img
        src={p.thumbnail}
        alt={p.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.07]"
      />

      {/* hover video preview for attached reel */}
      {p.video && (
        <video
          ref={videoRef}
          src={p.video}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      )}

      {/* overlays - pure neutral, completely transparent in the center when video plays */}
      <div
        className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
          p.video && hovered
            ? "bg-gradient-to-t from-black/85 via-transparent to-black/35"
            : "bg-gradient-to-t from-[#050508]/90 via-black/20 to-black/40"
        }`}
      />

      {/* Specular hairline inner edge */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.22)]" />

      {/* top row with Apple Glass pills */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="apple-glass-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-white/95 uppercase">
            {p.category}
          </span>
          {p.badge && (
            <span className="apple-glass-pill-active rounded-full px-2.5 py-1 font-mono text-[9px] tracking-[0.16em] text-violet-200">
              {p.badge}
            </span>
          )}
        </div>
        <span className="flex items-center gap-1.5 rounded-full apple-glass-pill px-3 py-1 font-mono text-[10px] text-white/85">
          <Clock className="h-3 w-3 text-violet-400" /> {p.duration}
        </span>
      </div>

      {/* index watermark */}
      <span className="font-display absolute top-14 right-5 text-5xl font-black text-white/[0.08] transition-colors duration-500 group-hover:text-white/20 pointer-events-none">
        {p.index}
      </span>

      {/* center play frosted pill only when NOT playing */}
      {!(p.video && hovered) && (
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <span className="grid h-14 w-14 scale-75 place-items-center rounded-full border border-white/25 bg-black/40 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          </span>
        </div>
      )}

      {/* bottom info with Apple Glass aesthetics */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 transition-transform duration-500 md:translate-y-2 md:group-hover:translate-y-0 pointer-events-none">
        <div className="font-mono mb-2 flex items-center gap-2 text-[10px] tracking-[0.2em] text-violet-300 uppercase transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
          <Eye className="h-3 w-3 text-violet-400" /> {p.views} · {p.retention}
        </div>
        <h3 className="font-display text-2xl font-extrabold tracking-tight text-white">{p.title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-white/65 transition-all duration-500 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100">
          {p.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-white/12 pt-4">
          <span className="font-mono text-[11px] tracking-[0.22em] text-white/75 uppercase">
            {p.video ? "Play reel" : "View edit"}
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ReelPlayer({ p }: { p: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          v.muted = true;
          setIsMuted(true);
          v.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        });
    }
  }, [p.video]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          v.muted = true;
          setIsMuted(true);
          v.play().catch(() => {});
        });
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    if (!duration && v.duration) setDuration(v.duration);
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) {
      if (v.duration) setDuration(v.duration);
      if (v.videoWidth && v.videoHeight) {
        setIsWide(v.videoWidth > v.videoHeight);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pos * duration;
    setCurrentTime(pos * duration);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const restartVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className="group/player relative aspect-[9/16] max-h-[72vh] w-full overflow-hidden bg-black md:aspect-auto md:min-h-[560px] select-none flex items-center justify-center"
    >
      {/* Ambient background for wide videos */}
      {isWide && (
        <video
          src={p.video}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
        />
      )}

      {/* HTML5 Video element */}
      <video
        ref={videoRef}
        src={p.video}
        poster={p.thumbnail}
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        className={`relative z-10 h-full w-full ${
          isWide ? "object-contain" : "object-cover"
        } cursor-pointer`}
      />

      {/* Apple glass gradient shadows */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-transparent to-black/60" />

      {/* Top bar indicators */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full apple-glass-pill px-3 py-1 font-mono text-[10px] tracking-wider text-white/95">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {isWide ? "MASTER COMMERCIAL CUT" : "9:16 PRO REEL"}
          </span>
        </div>
        <button
          onClick={toggleFullscreen}
          className="grid h-8 w-8 place-items-center rounded-full apple-glass-pill text-white/80 transition hover:text-white"
          title="Toggle Fullscreen"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Big center play icon when paused */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-20 grid place-items-center bg-black/40 backdrop-blur-[3px] cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="grid h-20 w-20 place-items-center rounded-full border border-white/35 bg-violet-600/80 text-white shadow-[0_0_50px_rgba(139,92,246,0.65),inset_0_1px_1px_rgba(255,255,255,0.45)] backdrop-blur-2xl transition hover:scale-105"
          >
            <Play className="ml-1 h-8 w-8 fill-white" />
          </motion.div>
        </div>
      )}

      {/* Apple TV+ / QuickTime style bottom glass player bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 space-y-3">
        {/* Scrubber timeline */}
        <div
          onClick={handleSeek}
          className="group/seek relative h-3 flex items-center cursor-pointer"
        >
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/25 backdrop-blur-md transition-all group-hover/seek:h-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div
            className="absolute h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-violet-500 shadow-[0_0_12px_#8b5cf6] transition-transform group-hover/seek:scale-125"
            style={{ left: `${progressPercent}%` }}
          />
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <button
              onClick={togglePlay}
              className="grid h-9 w-9 place-items-center rounded-full apple-glass-pill text-white transition hover:scale-105"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-white" />
              ) : (
                <Play className="ml-0.5 h-4 w-4 fill-white" />
              )}
            </button>
            <button
              onClick={restartVideo}
              className="grid h-9 w-9 place-items-center rounded-full apple-glass-pill text-white/80 transition hover:text-white"
              title="Replay from start"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
            <div className="font-mono text-[11px] text-white/80 tabular-nums">
              <span>{formatTime(currentTime)}</span>
              <span className="mx-1 text-white/40">/</span>
              <span>{p.duration || formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="flex items-center gap-1.5 rounded-full apple-glass-pill px-3 py-1.5 font-mono text-[10px] text-white transition"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="h-3.5 w-3.5 text-rose-300" />
                  <span className="text-rose-200">MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-3.5 w-3.5 text-emerald-300" />
                  <span className="text-emerald-200">AUDIO</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] grid place-items-center overflow-y-auto bg-black/85 p-4 backdrop-blur-2xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="grid w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/18 bg-[#0c0c14]/95 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.95),inset_0_1px_1.5px_rgba(255,255,255,0.35)] backdrop-blur-3xl md:grid-cols-[1fr_1.1fr]"
      >
        {/* Real ReelPlayer */}
        <ReelPlayer p={p} />

        {/* details */}
        <div className="flex flex-col p-7 md:p-9">
          <div className="flex items-start justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full apple-glass-pill-active px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-violet-200 uppercase">
                {p.category}
              </span>
              {p.badge && (
                <span className="rounded-full apple-glass-pill px-2.5 py-1 font-mono text-[9px] tracking-[0.15em] text-white/85">
                  {p.badge}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full apple-glass-pill text-white/70 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <h3 className="font-display mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight">{p.title}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-white/65">{p.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: Eye, k: "Views", v: p.views },
              { icon: Gauge, k: "Retention", v: p.retention },
            ].map((s) => (
              <div key={s.k} className="apple-glass-card rounded-2xl p-4">
                <s.icon className="h-4 w-4 text-violet-400" />
                <div className="font-display mt-2 text-lg font-bold">{s.v}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-white/45 uppercase">{s.k}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full apple-glass-pill px-3 py-1 text-[11px] text-white/75">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <Magnetic strength={0.2} className="w-full">
              <a
                href="#contact"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 py-4 text-[12px] font-bold tracking-[0.15em] text-white uppercase shadow-[0_0_35px_rgba(124,58,237,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(139,92,246,0.7)] hover:scale-[1.01]"
              >
                I want this style <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.2em] text-violet-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse" />
              Attached Reel · 9:16 Master Playback
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative bg-[#050508] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHead
            index="01"
            label="Portfolio"
            title="SELECTED WORK"
            sub="Short-form edits designed to stop the scroll. Cinematic cuts, viral hooks & retention-optimized content — all delivered in 9:16 master format."
          />
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2 rounded-full apple-glass-pill px-4 py-2">
              <Sparkles className="h-3 w-3 text-violet-400" />
              <p className="font-mono text-[11px] leading-relaxed tracking-[0.15em] text-white/70 uppercase">
                Featured 9:16 Master Reels
              </p>
            </div>
          </Reveal>
        </div>

        {/* grid with all real project reels */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((p) => (
              <Card key={p.id} p={p} onOpen={() => setActive(p)} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-14 text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">
            + 200 more edits delivered — full archive available on request
          </p>
        </Reveal>
      </div>

      <AnimatePresence>{active && <Modal p={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
