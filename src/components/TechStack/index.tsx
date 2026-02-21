import { Brand } from "@/types/brand";
import techStackData from "./techStackData";
import BackgroundEffect from "@/components/Common/BackgroundEffect";

const TechStack = () => {
  return (
    <section className="pt-16 pb-16 md:pb-20 lg:pb-28 bg-[#ffffff] dark:bg-dark relative z-10 overflow-hidden">
      <div className="container">

        <div className="mx-auto mb-14 max-w-[800px] text-center">
          <span className="mb-4 block text-lg font-bold uppercase tracking-wider text-primary">
            Our Technology Stack
          </span>
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
            Built with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Modern Tech</span>
          </h2>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            We utilize the latest frameworks and tools to deliver high-performance, scalable, and secure applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {techStackData.map((brand) => (
            <SingleTech key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
      <BackgroundEffect className="opacity-30" />
    </section>
  );
};

export default TechStack;

const SingleTech = ({ brand }: { brand: Brand }) => {
  const { href, icon: Icon, name, color } = brand;
  const isBlack = color === "#000000" || color === "black";

  return (
    <div className="flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="group relative flex h-32 w-full flex-col items-center justify-center rounded-xl bg-gray-light dark:bg-gray-dark hover:bg-white dark:hover:bg-[#2C303B] shadow-sm hover:shadow-two transition-all duration-300 hover:-translate-y-1 p-4"
      >
        <div
          className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-dark shadow-sm group-hover:shadow-md transition-all duration-300"
          style={{ borderColor: !isBlack ? color : undefined }}
        >
          {Icon && (
            <Icon
              className={`h-8 w-8 transition-colors duration-300 ${isBlack ? "text-black dark:text-white" : ""}`}
              style={!isBlack ? { color: color } : {}}
            />
          )}
        </div>
        <span className="text-lg font-semibold text-body-color dark:text-body-color-dark group-hover:text-black dark:group-hover:text-white transition-colors">{name}</span>
      </a>
    </div>
  );
};
