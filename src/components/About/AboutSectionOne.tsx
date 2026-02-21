import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <div className="mb-5 flex items-center group rounded-xl p-3 bg-transparent hover:bg-primary/5 transition-colors duration-300 border border-transparent hover:border-primary/10">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
        {checkIcon}
      </span>
      <p className="text-lg font-medium text-body-color group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Column: Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-auto mb-10 max-w-[600px] text-left">
                  <span className="mb-4 block text-lg font-bold uppercase tracking-wider text-primary">
                    Business Growth
                  </span>
                  <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                    Engineered for <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Rapid Scale</span>
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We build digital platforms designed to grow with you. From MVP to IPO, our scalable architecture ensures you never hit a ceiling.
                  </p>
                </div>

                <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Scalable Architecture" />
                      <List text="High-Performance Core" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Seamless Integration" />
                      <List text="User-Centric Design" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0 h-[400px] w-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Background Glow */}
                  <div className="absolute top-[20%] right-[20%] w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

                  {/* Chart Container */}
                  <div className="relative z-10 w-full max-w-[400px] h-[300px] bg-white dark:bg-[#1e232e] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 flex flex-col justify-end overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                    {/* Grid Lines */}
                    <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between pointer-events-none opacity-10">
                      <div className="w-full h-px bg-black dark:bg-white"></div>
                      <div className="w-full h-px bg-black dark:bg-white"></div>
                      <div className="w-full h-px bg-black dark:bg-white"></div>
                      <div className="w-full h-px bg-black dark:bg-white"></div>
                      <div className="w-full h-px bg-black dark:bg-white"></div>
                    </div>

                    {/* Bars Group */}
                    <div className="flex items-end justify-between w-full h-[80%] z-10 px-2 space-x-4">
                      {/* Bar 1 */}
                      <div className="w-1/5 bg-gray-100 dark:bg-gray-700 rounded-t-lg relative overflow-hidden h-[40%] group-hover:h-[45%] transition-all duration-700">
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-500/10 to-blue-500/5"></div>
                      </div>
                      {/* Bar 2 */}
                      <div className="w-1/5 bg-gray-100 dark:bg-gray-700 rounded-t-lg relative overflow-hidden h-[55%] group-hover:h-[60%] transition-all duration-700 delay-100">
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-500/20 to-blue-500/10"></div>
                      </div>
                      {/* Bar 3 */}
                      <div className="w-1/5 bg-gray-100 dark:bg-gray-700 rounded-t-lg relative overflow-hidden h-[70%] group-hover:h-[75%] transition-all duration-700 delay-200">
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-500/30 to-blue-500/20"></div>
                      </div>
                      {/* Bar 4 */}
                      <div className="w-1/5 bg-gradient-to-t from-cyan-600 to-blue-500 rounded-t-lg relative overflow-hidden shadow-lg h-[90%] group-hover:h-[95%] transition-all duration-700 delay-300">
                        <div className="absolute top-0 w-full h-[2px] bg-white opacity-50"></div>
                      </div>
                    </div>

                    {/* Floating Trend Line (SVG overlay) */}
                    <svg className="absolute top-0 left-0 w-full h-full p-6 z-20 overflow-visible" preserveAspectRatio="none">
                      <path d="M 20 250 Q 100 200 180 150 T 360 40" fill="none" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" className="drop-shadow-lg path-animate" />
                      {/* Points */}
                      <circle cx="20" cy="250" r="4" fill="white" stroke="#06B6D4" strokeWidth="2" />
                      <circle cx="180" cy="150" r="4" fill="white" stroke="#06B6D4" strokeWidth="2" />
                      <circle cx="360" cy="40" r="6" fill="#06B6D4" stroke="white" strokeWidth="2" className="animate-ping opacity-75" />
                      <circle cx="360" cy="40" r="6" fill="#06B6D4" stroke="white" strokeWidth="2" />
                    </svg>

                    {/* Floating Badge */}
                    <div className="absolute top-8 right-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 px-4 flex items-center space-x-2 animate-bounce" style={{ animationDuration: '3s' }}>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-bold text-gray-800 dark:text-white">+240% Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
