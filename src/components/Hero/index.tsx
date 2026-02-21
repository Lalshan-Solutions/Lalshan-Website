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
                  {/* Main Abstract Graphic */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                  >
                    {/* Background Glow */}
                    <circle cx="250" cy="250" r="200" fill="url(#hero-glow)" opacity="0.4" className="animate-pulse" style={{ animationDuration: '4s' }} />

                    {/* Central Hexagon Structure */}
                    <g className="animate-float" style={{ animationDuration: '6s' }}>
                      <path d="M250 80 L397 165 V335 L250 420 L103 335 V165 Z" stroke="url(#hex-gradient)" strokeWidth="2" fill="url(#hex-fill)" />
                      <path d="M250 120 L363 185 V315 L250 380 L137 315 V185 Z" stroke="url(#hex-gradient)" strokeWidth="1" opacity="0.5" />

                      {/* Connecting Lines */}
                      <path d="M250 250 L250 80" stroke="#4A6CF7" strokeWidth="1" opacity="0.3" />
                      <path d="M250 250 L397 335" stroke="#4A6CF7" strokeWidth="1" opacity="0.3" />
                      <path d="M250 250 L103 335" stroke="#4A6CF7" strokeWidth="1" opacity="0.3" />

                      {/* Core Node */}
                      <circle cx="250" cy="250" r="20" fill="#4A6CF7">
                        <animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.8;1" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="250" r="35" stroke="#4A6CF7" strokeWidth="1" opacity="0.5">
                        <animate attributeName="r" values="35;45;35" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Orbiting Satellite Nodes */}
                    <g>
                      <circle cx="250" cy="80" r="8" fill="#06B6D4" className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }} />
                      <circle cx="397" cy="335" r="8" fill="#3B82F6" className="animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
                      <circle cx="103" cy="335" r="8" fill="#8B5CF6" className="animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }} />
                    </g>

                    {/* Data Streams */}
                    <g opacity="0.4">
                      <circle cx="250" cy="180" r="2" fill="white">
                        <animate attributeName="cy" values="80;250" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="300" cy="300" r="2" fill="white">
                        <animate attributeName="cx" values="397;250" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="335;250" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    <defs>
                      <radialGradient id="hero-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(200)">
                        <stop stopColor="#06B6D4" stopOpacity="0.3" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="hex-gradient" x1="103" y1="80" x2="397" y2="420" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563EB" />
                        <stop offset="1" stopColor="#06B6D4" />
                      </linearGradient>
                      <linearGradient id="hex-fill" x1="250" y1="80" x2="250" y2="420" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563EB" stopOpacity="0.05" />
                        <stop offset="1" stopColor="#06B6D4" stopOpacity="0.05" />
                      </linearGradient>
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
