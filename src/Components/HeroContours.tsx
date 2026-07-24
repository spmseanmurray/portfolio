import React, { useEffect, useRef } from "react";

const MOSS = "140, 154, 107";
const LINES = 16;
/** Horizontal sampling step. Coarser than it looks — the curves are smooth. */
const STEP = 6;

/**
 * Slow-drifting contour lines behind the hero.
 *
 * Layered sines rather than a noise library: cheap, dependency-free, and at
 * this amplitude they read as terrain. The point is to occupy the wide empty
 * right-hand side of the hero, so the stroke is a gradient that stays nearly
 * invisible behind the text column and only gains presence out in the void.
 *
 * Decorative, so it is aria-hidden and never takes pointer events.
 */
const HeroContours: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;

    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, `rgba(${MOSS}, 0.015)`);
      gradient.addColorStop(0.4, `rgba(${MOSS}, 0.05)`);
      gradient.addColorStop(1, `rgba(${MOSS}, 0.2)`);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;

      for (let i = 0; i < LINES; i++) {
        const base = height * 0.16 + (i / LINES) * height * 0.98;
        ctx.globalAlpha = 0.35 + 0.65 * (i / LINES);
        ctx.beginPath();
        for (let x = 0; x <= width; x += STEP) {
          const y =
            base +
            Math.sin(x * 0.0055 + time * 0.00022 + i * 0.42) * 20 +
            Math.sin(x * 0.0131 - time * 0.00015 + i * 0.23) * 9;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    measure();

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced motion still gets the composition, just held still.
    if (reduced) {
      draw(3000);
      const onResizeStatic = () => {
        measure();
        draw(3000);
      };
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    // Paint once up front so the composition exists even if the animation
    // loop never starts — some renderers never fire rAF or the observer, and
    // the effect silently vanishing there is worse than it not moving.
    draw(performance.now());

    const loop = (now: number) => {
      draw(now);
      frame = window.requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(loop);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      window.cancelAnimationFrame(frame);
    };

    const onResize = () => {
      measure();
      if (!running) draw(performance.now());
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    // Don't burn frames once the hero has scrolled away.
    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            entry.isIntersecting ? start() : stop()
          );
        },
        { rootMargin: "100px" }
      );
      observer.observe(canvas);
    } else {
      start();
    }

    return () => {
      stop();
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export default HeroContours;
