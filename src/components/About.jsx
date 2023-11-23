import React from "react";
import aboutimg from "../assets/aboutmain.png";
import news from "../assets/news.jpg";

const About = () => {
  return (
    <>
      <div className="flex min-h-[80vh] md:h-[80vh] lg:h-[80vh] flex-col md:flex-row lg:flex-row bg-primary">
        <div
          className="flex flex-col items-center justify-center lg:flex-col h-1/2 md:h-full lg:h-full md:w-1/2 lg:w-1/2"
          id="overview"
        >
          <p className="p-2 text-6xl font-main">
            The<span className="underline"> taco </span>that started it all
          </p>
          <p className="p-2 font-paragraph">
            Our visionary founder's tantalizing taco ignited the Chutney
            fast-food revolution, blending flavors that sparked a culinary
            sensation. With innovative zest, this taco masterpiece set the stage
            for a new era, crafting a delectable journey that reshaped fast-food
            cultures worldwide. Taste the legacy that began our flavorful
            adventure!
          </p>
        </div>
        <img
          src={aboutimg}
          alt="chutney taco"
          className="object-contain w-full h-1/2 md:h-full lg:h-full md:w-1/2 lg:w-1/2"
        />
      </div>
      <div className="bg-primary text-secondary">
        <header className="p-2 text-2xl font-main">
          Latest chutney <span className="underline">news</span>
        </header>
        {/* card section */}
        <div className="flex flex-col items-center justify-center gap-2 p-2 border-2 md:flex-row md:justify-between">
          {/* cards */}
          <div className="w-80">
            <img className="object-cover w-full h-80" src={news} alt="" />
            <div className="p-2 h-30">
              <p className="text-lg font-main">Lorem, ipsum dolor.</p>
              <p className="text-sm font-paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <button className="w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main">
                read more
              </button>
            </div>
          </div>
          <div className="w-80">
            <img className="object-cover w-full h-80" src={news} alt="" />
            <div className="p-2 h-30">
              <p className="text-lg font-main">Lorem, ipsum dolor.</p>
              <p className="text-sm font-paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <button className="w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main">
                read more
              </button>
            </div>
          </div>
          <div className="w-80">
            <img className="object-cover w-full h-80" src={news} alt="" />
            <div className="p-2 h-30">
              <p className="text-lg font-main">Lorem, ipsum dolor.</p>
              <p className="text-sm font-paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <button className="w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
