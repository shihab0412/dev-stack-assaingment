import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between container mx-auto px-4 py-3 bg-white ">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-[#1E1B4B]">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#E93655] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed font-normal max-w-142.5 py-8 ">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button className="bg-gradient-to-r from-[#FF5722] via-[#E93655] via-[#D81B7E] to-[#7C3AED] text-white font-medium text-sm md:text-base py-3 px-6 rounded-lg ">
            Explore Technologies
          </button>

          <button className="border-2 border-gray-300 text-gray-700 py-2.5 px-6 rounded-lg text-center">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={bannerImage}></img>
      </div>
    </div>
  );
};

export default Banner;
