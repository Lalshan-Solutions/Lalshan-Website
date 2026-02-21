import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="container">
        {/* Centered Title */}
        <div className="mx-auto mb-14 max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Built for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
            We architect robust digital foundations. Our commitment to code quality, security, and scalability ensures your business is future-proof.
          </p>
        </div>

        {/* Grid Layout of Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Feature 1: Bug free code (Blue) */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark border border-transparent hover:border-blue-500/20">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-blue-500/10 blur-2xl transition-all duration-300 group-hover:bg-blue-500/20"></div>
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Bug Free Code</h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-body-color group-hover:text-black dark:group-hover:text-white transition-colors">
              Rigorous testing and clean architecture deliver reliable, high-performance software.
            </p>
          </div>

          {/* Feature 2: Premier support (Purple) */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark border border-transparent hover:border-purple-500/20">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-purple-500/10 blur-2xl transition-all duration-300 group-hover:bg-purple-500/20"></div>
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Premier Support</h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-body-color group-hover:text-black dark:group-hover:text-white transition-colors">
              Expert technical assistance available 24/7 to keep your operations running smoothly.
            </p>
          </div>

          {/* Feature 3: Next.js (Black/White) */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark border border-transparent hover:border-gray-500/20">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-gray-500/10 blur-2xl transition-all duration-300 group-hover:bg-gray-500/20"></div>
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-black/5 text-black dark:bg-white/10 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Next.js</h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-body-color group-hover:text-black dark:group-hover:text-white transition-colors">
              Server-rendered React applications for exceptional speed, SEO, and scalability.
            </p>
          </div>

          {/* Feature 4: Cloud Native (Cyan) */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark border border-transparent hover:border-cyan-500/20">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-500/20"></div>
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Cloud Native</h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-body-color group-hover:text-black dark:group-hover:text-white transition-colors">
              Scalable microservices and serverless architectures on AWS, Azure, and Google Cloud.
            </p>
          </div>

          {/* Feature 5: Agile Process (Green) */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark border border-transparent hover:border-green-500/20">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-green-500/10 blur-2xl transition-all duration-300 group-hover:bg-green-500/20"></div>
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Agile Process</h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-body-color group-hover:text-black dark:group-hover:text-white transition-colors">
              Iterative development cycles ensuring faster delivery and flexibility to changing needs.
            </p>
          </div>

          {/* Feature 6: Enterprise Security (Red) */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark border border-transparent hover:border-red-500/20">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 rounded-full bg-red-500/10 blur-2xl transition-all duration-300 group-hover:bg-red-500/20"></div>
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Enterprise Security</h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-body-color group-hover:text-black dark:group-hover:text-white transition-colors">
              Bank-grade security protocols and compliance standards protecting your critical data.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
