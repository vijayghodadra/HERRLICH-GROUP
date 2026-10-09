import React, { useState, useEffect, useRef } from 'react';
import logoWordmarkImg from '../assets/logo-wordmark.png';
import '../styles/splash.css';

// Exact ray geometry measured from the original Herrlich Group logo asset (1792 x 878)
interface RayProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strokeWidth: number;
  length: number;
  delayMs: number;
}

const RayBase: React.FC<RayProps> = ({ x1, y1, x2, y2, strokeWidth, length, delayMs }) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#531454"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className="splash-ray-line animate"
      style={{
        strokeDasharray: length,
        strokeDashoffset: length,
        animationDelay: `${delayMs}ms`,
        animationDuration: '280ms',
        '--ray-length': `${length}`
      } as React.CSSProperties}
    />
  );
};

// 8 Dedicated Ray Components
export const Ray1: React.FC<{ delayMs?: number }> = ({ delayMs = 900 }) => (
  <RayBase x1={1156.7} y1={283.9} x2={1120.2} y2={41.0} strokeWidth={16.5} length={246} delayMs={delayMs} />
);

export const Ray2: React.FC<{ delayMs?: number }> = ({ delayMs = 1020 }) => (
  <RayBase x1={1259.9} y1={290.2} x2={1349.4} y2={61.7} strokeWidth={16.5} length={246} delayMs={delayMs} />
);

export const Ray3: React.FC<{ delayMs?: number }> = ({ delayMs = 1140 }) => (
  <RayBase x1={1353.0} y1={341.8} x2={1543.1} y2={174.8} strokeWidth={16.5} length={253} delayMs={delayMs} />
);

export const Ray4: React.FC<{ delayMs?: number }> = ({ delayMs = 1260 }) => (
  <RayBase x1={1396.3} y1={431.0} x2={1669.4} y2={365.0} strokeWidth={17.0} length={281} delayMs={delayMs} />
);

export const Ray5: React.FC<{ delayMs?: number }> = ({ delayMs = 1380 }) => (
  <RayBase x1={1395.0} y1={521.9} x2={1664.6} y2={578.1} strokeWidth={17.5} length={276} delayMs={delayMs} />
);

export const Ray6: React.FC<{ delayMs?: number }> = ({ delayMs = 1500 }) => (
  <RayBase x1={1362.1} y1={610.2} x2={1532.8} y2={752.7} strokeWidth={17.0} length={223} delayMs={delayMs} />
);

export const Ray7: React.FC<{ delayMs?: number }> = ({ delayMs = 1620 }) => (
  <RayBase x1={1291.1} y1={639.3} x2={1354.0} y2={830.0} strokeWidth={17.0} length={201} delayMs={delayMs} />
);

export const Ray8: React.FC<{ delayMs?: number }> = ({ delayMs = 1740 }) => (
  <RayBase x1={1183.0} y1={647.3} x2={1144.9} y2={829.7} strokeWidth={16.5} length={187} delayMs={delayMs} />
);

// Container for the 8 Animated Rays
export const AnimatedRays: React.FC = () => {
  return (
    <svg 
      className="splash-rays-svg" 
      viewBox="0 0 1792 878" 
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <Ray1 />
      <Ray2 />
      <Ray3 />
      <Ray4 />
      <Ray5 />
      <Ray6 />
      <Ray7 />
      <Ray8 />
    </svg>
  );
};

// Wordmark and Tagline Layer
export const LogoWordmark: React.FC = () => {
  return (
    <div className="splash-wordmark-container">
      <img
        src={logoWordmarkImg}
        alt="Herrlich Group - Uncovering Truths. Ensuring Justice"
        className="splash-wordmark-img"
      />
    </div>
  );
};

// Main SplashScreen Component
export const SplashScreen: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    // Always show on fresh page load and on page refresh
    return true;
  });

  const [isFading, setIsFading] = useState(false);
  const fadeTimerRef = useRef<number | null>(null);
  const unmountTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any previous session lock so refresh always plays
    try {
      sessionStorage.removeItem('herrlich_splash_shown');
    } catch {}

    if (!mounted) return;

    // Sequence timing:
    // 0ms..700ms: Logo wordmark fade in + scale 0.96 -> 1
    // 700ms..900ms: 200ms pause
    // 900ms..2020ms: 8 lines draw sequentially (120ms gap, 280ms duration)
    // 2020ms..2550ms: Complete logo visible for ~530ms
    // 2550ms: Fade out splash screen (600ms transition)
    // 3150ms: Unmount
    fadeTimerRef.current = window.setTimeout(() => {
      setIsFading(true);
    }, 2550);

    unmountTimerRef.current = window.setTimeout(() => {
      setMounted(false);
    }, 3150);

    // Escape key skips splash screen
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissImmediately();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (unmountTimerRef.current) clearTimeout(unmountTimerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mounted]);

  const dismissImmediately = () => {
    setIsFading(true);
    setTimeout(() => {
      setMounted(false);
    }, 300);
  };

  if (!mounted) return null;

  return (
    <div 
      className={`splash-screen-overlay ${isFading ? 'fading-out' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Herrlich Group Splash Screen"
    >
      <div className="splash-stage">
        <LogoWordmark />
        <AnimatedRays />
      </div>

      <button 
        type="button" 
        className="splash-skip-btn" 
        onClick={dismissImmediately}
        aria-label="Skip splash screen"
      >
        Skip
      </button>
    </div>
  );
};
