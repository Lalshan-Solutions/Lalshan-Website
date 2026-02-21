import React from "react";

interface BackgroundEffectProps {
  variant?: "blue" | "purple" | "cyan";
  opacity?: number;
  className?: string;
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({
  variant = "blue",
  opacity = 0.4,
  className = ""
}) => {
  return (
    <div className={`absolute inset-0 z-[-1] overflow-hidden pointer-events-none ${className}`}>

      {/* 1. Ambient Gradient Orbs (Animated) */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden opacity-${Math.floor(opacity * 100)} dark:opacity-20`}>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-600/40 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-purple-400/40 to-indigo-600/40 blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-blue-400/30 to-teal-400/30 blur-[80px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      </div>

      {/* 2. Hexagonal Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`hex-grid-${variant}`} width="60" height="104" patternUnits="userSpaceOnUse" patternTransform="scale(0.4)">
            <path d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-black dark:text-white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hex-grid-${variant})`} />
      </svg>

      {/* 3. Dynamic Circuitry Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        {/* Circuit paths vary slightly based on variant? For now simple */}
        <path d="M0 100 Q 200 150 400 500" fill="none" stroke={`url(#circuit-grad-${variant}-1)`} strokeWidth="1.5" strokeDasharray="10 20" />
        <path d="M100% 0 Q 80% 300 40% 600" fill="none" stroke={`url(#circuit-grad-${variant}-2)`} strokeWidth="1.5" strokeDasharray="15 15" />

        <defs>
          <linearGradient id={`circuit-grad-${variant}-1`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`circuit-grad-${variant}-2`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundEffect;
