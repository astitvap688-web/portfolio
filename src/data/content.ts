/* ============================================================
   FRAMEFLOW — CENTRAL CONTENT FILE
   Edit all text, projects, team, links here. No code changes needed.
   ============================================================ */

export const site = {
  name: "FRAMEFLOW",
  tagline: "SHORT FORM. BUILT TO FLOW.",
  support: "We turn raw footage into scroll-stopping short-form content.",
  email: "flowframe03@gmail.com",
  location: "Working worldwide / Remote-first",
  stats: [
    { value: "01", label: "Creative Team", highlight: "Creative Editing" },
    { value: "100%", label: "Focus on Quality", highlight: "Clean Motion Graphics" },
    { value: "Fast", label: "Turnaround", highlight: "Creator-focused" },
    { value: "Growing", label: "Every Project", highlight: "Engaging Story" },
  ],
};

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Software", href: "#software" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Start a project",
  status: "Open for projects",
};

/* ---------------- WORK ---------------- */

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  views: string;
  duration: string;
  retention: string;
  thumbnail: string; // <-- replace with your own 9:16 thumbnail
  tags: string[];
  video?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "paris-reel",
    index: "01",
    title: "Paris — Cinematic Travel Reel",
    category: "Cinematic",
    description: "Moody night-walk through Paris. Film grain, masked transitions, amber cafe glow & immersive sound design.",
    views: "1.2M views",
    duration: "0:23",
    retention: "94% retention",
    thumbnail: "/reels/paris_thumb.jpg",
    video: "/reels/paris.mp4",
    badge: "• FIRST REEL • FEATURED",
    tags: ["Cinematic", "Paris", "Color Grade", "Sound Design"],
  },
  {
    id: "talk-head-reel",
    index: "02",
    title: "Talking Head — Viral Retention Cut",
    category: "Creator",
    description: "Talking-head to viral short. Dynamic animated captions, b-roll pops, sound design & hook reset.",
    views: "2.8M views",
    duration: "0:26",
    retention: "91% retention",
    thumbnail: "/reels/talk-head-thumb.jpg",
    video: "/reels/talk-head.mp4",
    badge: "• MASTER REEL",
    tags: ["Talking Head", "Captions", "Hooks", "Motion"],
  },
  {
    id: "luminescence-reel",
    index: "03",
    title: "Luminescence — Cinematic VFX Short",
    category: "Cinematic",
    description: "Atmospheric narrative visual with luminous silhouettes, custom glow isolation, immersive spatial sound & evocative pacing.",
    views: "3.9M views",
    duration: "0:32",
    retention: "95% retention",
    thumbnail: "/reels/wa-reel-thumb.jpg",
    video: "/reels/wa-reel.mp4",
    badge: "• NEW RELEASE • VFX MASTER",
    tags: ["Cinematic VFX", "Spatial Audio", "Color Grade", "Neon Glow"],
  },
  {
    id: "podcast-reel",
    index: "04",
    title: "Marketing Mindset — Podcast Cut",
    category: "Podcast",
    description: "Multi-angle podcast short with animated kinetic type, hook emphasis, audio enhancement & punchy pacing.",
    views: "3.1M views",
    duration: "0:25",
    retention: "90% retention",
    thumbnail: "/reels/podcast-thumb.jpg",
    video: "/reels/podcast.mp4",
    badge: "• VIRAL PODCAST",
    tags: ["Podcast", "Kinetic Type", "Interview", "Subtitles"],
  },
  {
    id: "harshit-reel",
    index: "05",
    title: "Harshit Patel — Studio Master & Grade",
    category: "Creator",
    description: "Multi-cam studio cut with clean typography, precision audio leveling and rich color grading.",
    views: "4.6M views",
    duration: "1:42",
    retention: "93% retention",
    thumbnail: "/reels/harshit-thumb.jpg",
    video: "/reels/harshit-patel.mp4",
    badge: "• STUDIO GRADE",
    tags: ["Color Grade", "Studio Cut", "Retention", "Audio Master"],
  },
  {
    id: "surrey-reel",
    index: "06",
    title: "Surrey City Centre — Property Showcase",
    category: "Commercial",
    description: "High-impact on-location commercial cut with kinetic subtitles, zoom ramps & punchy sound effects.",
    views: "3.5M views",
    duration: "0:55",
    retention: "89% retention",
    thumbnail: "/reels/surrey-thumb.jpg",
    video: "/reels/surrey-city-centre.mp4",
    badge: "• 4K COMMERCIAL",
    tags: ["Commercial", "Real Estate", "Kinetic Type", "Pacing"],
  },
];

export const marqueeWords = ["EDIT", "MOTION", "STORY", "FLOW", "SHORT FORM"];

/* ---------------- SERVICES ---------------- */

export const services = [
  {
    index: "01",
    title: "SHORT FORM EDITING",
    description: "High-retention edits for Reels, Shorts & TikTok.",
    detail: "Hooks in the first second, pattern-interrupts every 2–3s, captions engineered for sound-off viewing.",
    tags: ["Reels", "Shorts", "TikTok"],
  },
  {
    index: "02",
    title: "MOTION DESIGN",
    description: "Clean motion graphics, typography and transitions.",
    detail: "Kinetic type, logo stings, lower-thirds and seamless masked transitions that feel native — not templated.",
    tags: ["Kinetic Type", "Transitions", "Visual FX"],
  },
  {
    index: "03",
    title: "RETENTION EDITING",
    description: "Fast pacing, hooks, captions and visual storytelling.",
    detail: "We study drop-off graphs and re-cut for rewatchability — loops, open loops and payoff structuring.",
    tags: ["Hooks", "Pacing", "Analytics"],
  },
  {
    index: "04",
    title: "CREATOR CONTENT",
    description: "Consistent short-form content systems for creators and channels.",
    detail: "Weekly pipelines: raw folder in, ready-to-post pack out. Calendars, variants and posting systems.",
    tags: ["Systems", "Volume", "Strategy"],
  },
];

/* ---------------- PROCESS ---------------- */

export const processSteps = [
  {
    index: "01",
    title: "SEND FOOTAGE",
    description: "Drop raw clips in a shared folder. No structure needed — messy is fine.",
    time: "Day 00",
    meta: "Drive / Dropbox / Frame.io",
  },
  {
    index: "02",
    title: "WE EDIT",
    description: "We cut, caption, design motion and mix sound for maximum retention.",
    time: "Day 01–02",
    meta: "Hook + pacing + sound",
  },
  {
    index: "03",
    title: "YOU REVIEW",
    description: "Review a private link. Time-stamped comments, fast revisions.",
    time: "Day 02–03",
    meta: "2 revision rounds incl.",
  },
  {
    index: "04",
    title: "WE DELIVER",
    description: "Final masters in 9:16, captioned + clean. Ready to post everywhere.",
    time: "Day 03",
    meta: "Reels / Shorts / TikTok",
  },
];

/* ---------------- SOFTWARE WE USE ---------------- */

export interface SoftwareTool {
  id: string;
  name: string;
  role: string;
  icon: string;
}

export const softwareStack: SoftwareTool[] = [
  {
    id: "after-effects",
    name: "Adobe After Effects",
    role: "Motion Design & VFX",
    icon: "/after-effects.png",
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    role: "Color Grading & Audio",
    icon: "/davinci-resolve.png",
  },
  {
    id: "premiere-pro",
    name: "Adobe Premiere Pro",
    role: "Timeline Video Editing",
    icon: "/premiere-pro.png",
  },
];

/* ---------------- TEAM ---------------- */

export const team = {
  heading: "THE EDITORS BEHIND THE FLOW",
  text: "FrameFlow is a focused creative video editing studio driven by 3 dedicated video editors. We turn raw clips into high-retention, scroll-stopping masterpieces.",
  members: [
    {
      initials: "AS",
      name: "Astitva",
      role: "Video Editor",
      specialty: "High-Retention Pacing & Visual FX",
      software: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
      badge: "Lead Editor",
    },
    {
      initials: "NA",
      name: "Naitik",
      role: "Video Editor",
      specialty: "Kinetic Motion Design & Hooks",
      software: ["Premiere Pro", "After Effects"],
      badge: "Motion Editor",
    },
    {
      initials: "NI",
      name: "Nimish",
      role: "Video Editor",
      specialty: "Cinematic Color Grade & Audio",
      software: ["DaVinci Resolve", "Premiere Pro"],
      badge: "Colorist & Editor",
    },
  ],
};

/* ---------------- CTA / FOOTER ---------------- */

export const cta = {
  line1: "GOT RAW FOOTAGE?",
  line2: "LET'S MAKE IT FLOW.",
  button: "START A PROJECT",
  note: "Fast 48-hour delivery · 2 revision rounds included · 9:16 master files",
};

export const footer = {
  tagline: "Short-form editing studio.",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Software", href: "#software" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "Email", href: "mailto:flowframe03@gmail.com" },
  ],
  copyright: "© 2026 FrameFlow. All rights reserved.",
};
