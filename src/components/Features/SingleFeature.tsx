import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp group relative overflow-hidden rounded-xl bg-white px-8 py-10 shadow-one duration-300 hover:shadow-two dark:bg-[#1D2144] dark:hover:shadow-gray-dark" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
          {paragraph}
        </p>

        {/* Decorative corner flash */}
        <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default SingleFeature;
