import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="my-10 md:my-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build Your Ideal
              <br />
              <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-[550px] mx-auto md:mx-0">
              Explore frontend, backend, database, and tooling options,
              <br className="hidden md:block" />
              compare them side by side, and put together the stack that fits
              your
              <br className="hidden md:block" />
              next project.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-center md:justify-start gap-3">
              {/* Explore Technologies */}
              <button className="w-[145px] bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white text-xs py-2 rounded-md font-semibold">
                Explore Technologies
              </button>

              {/* Learn More */}
              <button className="w-[145px] border border-gray-200 text-gray-600 text-xs py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-2 md:mt-0">
            <img
              src={BannerImage}
              alt="Development Stack"
              className="w-[340px] md:w-[400px] lg:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
