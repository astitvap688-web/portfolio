import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Services, Process, Software, Team, CTA, Footer, Divider } from "./components/Sections";
import { Cursor, Preloader, Marquee } from "./components/ui";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [started, setStarted] = useState(false);

  /* smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.14, wheelMultiplier: 1.1 });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // anchor handling for lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.2 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // lock scroll during preload
    document.body.style.overflow = loaded ? "" : "hidden";
    if (loaded) {
      const t = setTimeout(() => setStarted(true), 100);
      return () => clearTimeout(t);
    }
  }, [loaded]);

  return (
    <div className="relative min-h-screen bg-[#050508] text-[#f5f5f7] antialiased selection:bg-violet-500/30">
      {/* Lightweight hardware-accelerated ambient aurora background */}
      <div className="aurora-mesh" />

      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Navbar />

      <main>
        <Hero started={started || loaded} />
        <Marquee outline />
        <Work />
        <Divider />
        <Services />
        <Process />
        <Software />
        <Team />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
