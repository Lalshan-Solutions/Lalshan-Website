"use client";

import Link from "next/link";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary/[.03] px-8 py-16 shadow-one dark:bg-dark md:px-[70px] md:py-[60px] lg:px-[90px] lg:py-[70px] xl:p-[90px]">
          {/* Decorative Corner Blob */}
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 blur-3xl"></div>

          <div className="wow fadeInUp relative z-10 mx-auto max-w-[800px] text-center" data-wow-delay=".15s">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Scale Your Business?</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Our team of experts is standing by to analyze your needs, design a tailored roadmap, and implement the solutions that drive real results. Let&apos;s build something great together.
            </p>

            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-primary/30 hover:-translate-y-1"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl bg-gray-100 px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
