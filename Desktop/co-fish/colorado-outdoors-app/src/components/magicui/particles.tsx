'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
}

export default function Particles({
  className = '',
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = '#ffffff',
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const [canvasSize, setCanvasSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [dpr, setDpr] = useState<number>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCanvasSize = () => {
      if (typeof window !== 'undefined') {
        setCanvasSize({ w: window.innerWidth, h: window.innerHeight });
        setDpr(window.devicePixelRatio || 1);
      }
    };

    updateCanvasSize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateCanvasSize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateCanvasSize);
      }
    };
  }, []);

  const particles = useMemo(() => {
    const particleArray = [];
    for (let i = 0; i < quantity; i++) {
      const particle = {
        id: i,
        x: Math.random() * canvasSize.w,
        y: Math.random() * canvasSize.h,
        translateX: 0,
        translateY: 0,
        size: Math.random() * 2 + 0.1,
        alpha: Math.random() * 0.5 + 0.1,
        targetAlpha: Math.random() * 0.5 + 0.1,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
        magnetism: 0.1 + Math.random() * 4,
      };
      particleArray.push(particle);
    }
    return particleArray;
  }, [quantity, canvasSize.w, canvasSize.h, refresh]);

  const rgb = useMemo(() => hexToRgb(color), [color]);

  if (!mounted || canvasSize.w === 0 || canvasSize.h === 0) {
    return null;
  }

  return (
    <div className={className}>
      <canvas
        style={{
          width: canvasSize.w,
          height: canvasSize.h,
        }}
        width={canvasSize.w * dpr}
        height={canvasSize.h * dpr}
        className="pointer-events-none absolute inset-0"
      />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${particle.alpha})`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [particle.alpha, particle.targetAlpha, particle.alpha],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}