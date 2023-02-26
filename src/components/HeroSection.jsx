const HeroSection = () => {
    return (
        
      <div className="bg-[#FAF7FF] pt-10 md:pt-5 bg-hero-pattern">
        <div className="container mx-2 px-10 lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:mt-0 mt-8 lg:hidden">
            <div className="hero-image w-full">
              <img src="IllustrationHeroSection.svg" alt="" className="w-72" />
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-full">
            <h1 className="text-3xl md:text-5xl sm:text-3xl font-bold text-black-800 mb-4 ">
              We help you grow your
               <span className="text-violet-600"> conversions.</span>
            </h1>
            <p className="text-black-600 font-semibold mb-6">
              Featured in leading publications around the world
            </p>
            <div className="flex space-x-4 mb-8">
              <img src="Market-watch.png" alt="" className="h-5 md:h-8" />
              <img src="saas-insider.png" alt="" className="h-5 md:h-8" />
              <img src="Fiverr-Pro.png" alt="" className="h-5 md:h-8 " />
            </div>
            <button className="bg-violet-700 hover:bg-violet-900 shadow-lg shadow-violet-500 shadow-blur-md text-white font-semibold py-4 px-8 rounded-lg">
              Contact Us
            </button>
          </div>
          <div className="lg:w-1/2 w-full lg:mt-0 mt-8 hidden lg:flex">
            <div className="hero-image w-full">
              <img src="IllustrationHeroSection.svg" alt="" />
            </div>
          </div>
        </div>
        <img src="Wave.png" alt="" />
      </div>
    );
  };
  
  export default HeroSection;
  