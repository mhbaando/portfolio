"use client";

import { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      time += 0.0004;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const orbs = [
        {
          x: w * 0.15 + Math.sin(time * 0.7) * 60,
          y: h * 0.2 + Math.cos(time * 0.5) * 40,
          r: Math.max(w, h) * 0.38,
          color: "59, 130, 246",
          opacity: 0.08,
        },
        {
          x: w * 0.78 + Math.cos(time * 0.6) * 70,
          y: h * 0.6 + Math.sin(time * 0.8) * 50,
          r: Math.max(w, h) * 0.32,
          color: "99, 102, 241",
          opacity: 0.06,
        },
        {
          x: w * 0.5 + Math.sin(time * 0.9) * 50,
          y: h * 0.85 + Math.cos(time * 0.4) * 30,
          r: Math.max(w, h) * 0.35,
          color: "139, 92, 246",
          opacity: 0.05,
        },
      ];

      for (const orb of orbs) {
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r
        );
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.opacity * 1.5})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.opacity})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default Background;
