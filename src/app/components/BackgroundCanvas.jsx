'use client';

// ─────────────────────────────────────────────────────────────
// BackgroundCanvas.jsx
//
// A full-viewport canvas animation that renders behind ALL page
// content. Lives in layout.js so it persists across sections.
//
// What it does:
//  - Spawns N dots (60 desktop, 30 mobile) at random positions
//  - Each dot drifts slowly in a random direction
//  - Dots bounce off all four viewport edges
//  - When two dots are within CONNECTION_DISTANCE (120px),
//    a line is drawn between them — opacity scales with proximity
//    so close dots = solid line, far dots = barely visible
//  - Everything renders in maroon at low opacity so it sits
//    quietly behind content without competing with it
//
// Tech: pure canvas + requestAnimationFrame — no Framer Motion,
// no DOM elements, no layout thrashing. Smooth and performant.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';

// ── Config ────────────────────────────────────────────────────
const DOT_COLOR           = '94, 42, 58';   // #5e2a3a as RGB for rgba()
const DOT_OPACITY         = 0.25;           // dot fill opacity
const LINE_MAX_OPACITY    = 0.12;           // max line opacity (at closest distance)
const DOT_RADIUS          = 2;             // dot size in px
const CONNECTION_DISTANCE = 130;           // max px between dots to draw a line
const SPEED               = 0.4;           // max drift speed per frame
const DOT_COUNT_DESKTOP   = 70;
const DOT_COUNT_MOBILE    = 35;

// ── Dot factory ───────────────────────────────────────────────
const createDot = (w, h) => ({
  x:  Math.random() * w,
  y:  Math.random() * h,
  vx: (Math.random() - 0.5) * SPEED * 2,
  vy: (Math.random() - 0.5) * SPEED * 2,
});

// ── Component ─────────────────────────────────────────────────
const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let dots = [];

    // ── Setup: size canvas + spawn dots ──────────────────────
    const init = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = window.innerWidth < 640 ? DOT_COUNT_MOBILE : DOT_COUNT_DESKTOP;
      dots = Array.from({ length: count }, () =>
        createDot(canvas.width, canvas.height)
      );
    };

    // ── Draw one frame ────────────────────────────────────────
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Update positions + bounce off edges
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > w) dot.vx *= -1;
        if (dot.y < 0 || dot.y > h) dot.vy *= -1;

        // Clamp inside bounds
        dot.x = Math.max(0, Math.min(w, dot.x));
        dot.y = Math.max(0, Math.min(h, dot.y));
      });

      // Draw lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x;
          const dy   = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            // Opacity increases as dots get closer
            const opacity = LINE_MAX_OPACITY * (1 - dist / CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${DOT_COLOR}, ${opacity})`;
            ctx.lineWidth   = 0.8;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots on top of lines
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT_COLOR}, ${DOT_OPACITY})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    // ── Handle resize: reinit canvas size, keep dots ──────────
    // Debounced so it doesn't fire 60 times during a drag-resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redistribute any dots that are now off-screen
        dots.forEach((dot) => {
          dot.x = Math.min(dot.x, canvas.width);
          dot.y = Math.min(dot.y, canvas.height);
        });
      }, 150);
    };

    init();
    draw();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default BackgroundCanvas;