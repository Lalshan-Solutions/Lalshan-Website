"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import BackgroundEffect from "@/components/Common/BackgroundEffect";

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [animState, setAnimState] = useState("visible"); // visible, exiting, hidden

  const titles = [
    { badge: "Future-Ready Tech", text: "Accelerate Growth with", highlight: "AI & Cloud Strategies" },
    { badge: "Innovation First", text: "Transform Your Business with", highlight: "Intelligent Solutions" },
    { badge: "Premium Engineering", text: "Elevate Your Brand with", highlight: "Custom Development" },
    { badge: "Efficiency at Scale", text: "Streamline Operations with", highlight: "Modern Technology" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("exiting");
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setAnimState("hidden");
        setTimeout(() => {
          setAnimState("visible");
        }, 50);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getAnimClass = () => {
    switch (animState) {
      case "exiting":
        return "opacity-0 -translate-y-4 transition-all duration-500 ease-in-out";
      case "hidden":
        return "opacity-0 translate-y-4 transition-none";
      default: // visible
        return "opacity-100 translate-y-0 transition-all duration-500 ease-in-out";
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center lg:mx-0 lg:text-left"
                data-wow-delay=".2s"
              >
                <div
                  className={`block transform ${getAnimClass()}`}
                  style={{ minHeight: "180px" }}
                >
                  <span className="mb-4 block text-lg font-bold uppercase tracking-wider text-primary">
                    {titles[titleIndex].badge}
                  </span>
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    {titles[titleIndex].text}{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {titles[titleIndex].highlight}
                    </span>
                  </h1>
                </div>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  We deliver cutting-edge software tailored to your needs. From custom web and mobile apps to powerful cloud systems and AI integration, we empower your digital growth.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-9 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-1"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-xl bg-gray-100 px-9 py-4 text-base font-bold text-black shadow-md transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[500px] lg:mr-0"
                data-wow-delay=".3s"
              >
                <div className="relative">
                  {/* Neural Network Abstract Graphic */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                  >
                    {/* Background Tech Glow */}
                    <circle cx="250" cy="250" r="180" fill="url(#neural-glow)" className="animate-pulse" style={{ animationDuration: '6s' }} />

                    {/* Rotating Tech Rings */}
                    <g opacity="0.15">
                      <circle cx="250" cy="250" r="200" stroke="url(#ring-gradient)" strokeWidth="1" strokeDasharray="10 5">
                        <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="20s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="250" r="160" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 8">
                        <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="15s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="250" r="120" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="20 4 4 4">
                        <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="30s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Neural Network Web */}
                    <g stroke="url(#net-gradient)" strokeWidth="1.5" opacity="0.6" className="animate-float" style={{ animationDuration: '8s' }}>
                      {/* Connections from Center */}
                      <path d="M250 250 L150 120" />
                      <path d="M250 250 L350 120" />
                      <path d="M250 250 L100 280" />
                      <path d="M250 250 L400 280" />
                      <path d="M250 250 L180 400" />
                      <path d="M250 250 L320 400" />

                      {/* Interconnections */}
                      <path d="M150 120 L350 120 L400 280 L320 400 L180 400 L100 280 Z" strokeDasharray="4 4" strokeWidth="1" opacity="0.4">
                        <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite" />
                      </path>

                      {/* Outer Ring Connections */}
                      <path d="M350 120 L420 80" />
                      <path d="M150 120 L80 80" />
                      <path d="M400 280 L450 320" />
                      <path d="M100 280 L50 320" />
                      <path d="M320 400 L380 450" />
                      <path d="M180 400 L120 450" />

                      {/* Extra Webbing */}
                      <path d="M150 120 L100 280" strokeWidth="0.5" opacity="0.3" />
                      <path d="M350 120 L400 280" strokeWidth="0.5" opacity="0.3" />
                      <path d="M100 280 L180 400" strokeWidth="0.5" opacity="0.3" />
                      <path d="M400 280 L320 400" strokeWidth="0.5" opacity="0.3" />
                    </g>

                    {/* Nodes (Neurons) */}
                    <g className="animate-float" style={{ animationDuration: '8s' }}>
                      {/* Core Node */}
                      <g>
                        <circle cx="250" cy="250" r="28" fill="#1E40AF" className="animate-pulse" style={{ animationDuration: '2s' }} />
                        <circle cx="250" cy="250" r="15" fill="#60A5FA" />
                        <circle cx="250" cy="250" r="6" fill="#FFFFFF" />
                        {/* Core Ripple */}
                        <circle cx="250" cy="250" r="0" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.8">
                          <animate attributeName="r" values="28;60" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                        </circle>
                      </g>

                      {/* Primary Nodes */}
                      <circle cx="150" cy="120" r="10" fill="#06B6D4" />
                      <circle cx="350" cy="120" r="10" fill="#3B82F6" />
                      <circle cx="100" cy="280" r="10" fill="#8B5CF6" />
                      <circle cx="400" cy="280" r="10" fill="#0EA5E9" />
                      <circle cx="180" cy="400" r="10" fill="#6366F1" />
                      <circle cx="320" cy="400" r="10" fill="#2563EB" />

                      {/* Node Halos */}
                      <circle cx="150" cy="120" r="16" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.5">
                        <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="400" cy="280" r="16" fill="none" stroke="#0EA5E9" strokeWidth="1" opacity="0.5">
                        <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="320" cy="400" r="16" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.5">
                        <animate attributeName="r" values="10;18;10" dur="4s" repeatCount="indefinite" />
                      </circle>

                      {/* Outer Nodes */}
                      <circle cx="420" cy="80" r="5" fill="#93C5FD" />
                      <circle cx="80" cy="80" r="5" fill="#67E8F9" />
                      <circle cx="450" cy="320" r="5" fill="#A78BFA" />
                      <circle cx="50" cy="320" r="5" fill="#7DD3FC" />
                      <circle cx="380" cy="450" r="5" fill="#818CF8" />
                      <circle cx="120" cy="450" r="5" fill="#93C5FD" />
                    </g>

                    {/* Data Packets (Flying blips) */}
                    <g className="animate-float" style={{ animationDuration: '8s' }}>
                      <circle cx="250" cy="250" r="3" fill="#FFFFFF" filter="url(#glow)">
                        <animate attributeName="cx" values="250;150" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="250;120" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="250" r="3" fill="#FFFFFF" filter="url(#glow)">
                        <animate attributeName="cx" values="250;400" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        <animate attributeName="cy" values="250;280" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
                      </circle>
                      <circle cx="350" cy="120" r="3" fill="#FFFFFF" filter="url(#glow)">
                        <animate attributeName="cx" values="350;250" dur="1.8s" repeatCount="indefinite" begin="1s" />
                        <animate attributeName="cy" values="120;250" dur="1.8s" repeatCount="indefinite" begin="1s" />
                        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="1s" />
                      </circle>
                      <circle cx="180" cy="400" r="3" fill="#FFFFFF" filter="url(#glow)">
                        <animate attributeName="cx" values="180;320" dur="2.5s" repeatCount="indefinite" begin="0.2s" />
                        <animate attributeName="cy" values="400;400" dur="2.5s" repeatCount="indefinite" begin="0.2s" />
                        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.2s" />
                      </circle>
                      <circle cx="100" cy="280" r="3" fill="#FFFFFF" filter="url(#glow)">
                        <animate attributeName="cx" values="100;250" dur="1.2s" repeatCount="indefinite" begin="0.8s" />
                        <animate attributeName="cy" values="280;250" dur="1.2s" repeatCount="indefinite" begin="0.8s" />
                        <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.8s" />
                      </circle>
                    </g>

                    {/* Definitions */}
                    <defs>
                      <radialGradient id="neural-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(220)">
                        <stop stopColor="#3B82F6" stopOpacity="0.2" />
                        <stop offset="0.6" stopColor="#06B6D4" stopOpacity="0.05" />
                        <stop offset="1" stopColor="#000000" stopOpacity="0" />
                      </radialGradient>

                      <linearGradient id="ring-gradient" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563EB" />
                        <stop offset="0.5" stopColor="#06B6D4" stopOpacity="0.2" />
                        <stop offset="1" stopColor="#8B5CF6" />
                      </linearGradient>

                      <linearGradient id="net-gradient" x1="100" y1="120" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="0.5" stopColor="#06B6D4" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#2563EB" stopOpacity="0.8" />
                      </linearGradient>

                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BackgroundEffect />
      </section>
    </>
  );
};

export default Hero;
