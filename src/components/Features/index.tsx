import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import BackgroundEffect from "@/components/Common/BackgroundEffect";

const Features = () => {
  return (
    <>
      <section id="features" className="relative py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark z-10 overflow-hidden">
        {/* Background Gradients */}
        <BackgroundEffect />

        <div className="container">
          <div className="mx-auto mb-14 max-w-[800px] text-center">
            <span className="mb-4 block text-lg font-bold uppercase tracking-wider text-primary">
              End-to-End Ecosystem
            </span>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Scalable <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Digital Solutions</span>
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Comprehensive technology services designed to elevate your business operations and digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
