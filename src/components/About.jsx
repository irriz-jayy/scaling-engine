import React from "react";
import aboutimg from "../assets/aboutmain.png";
import news from "../assets/news.jpg";
import employee from "../assets/employee.jpg";
import community from "../assets/community.jpg";
import energy from "../assets/energy.jpg";
import kids from "../assets/kids.jpg";
import inclusivity from "../assets/inclusivity.jpg";

const About = () => {
  const newsItems = [
    {
      image: news,
      title: "News & Notifications",
      text: "Follow us, like us, read about us.",
    },
    {
      image: employee,
      title: "Franchise Info",
      text: "Learn about Owner/Operator opportunities.",
    },
    {
      image: community,
      title: "Community Connection",
      text: "Supporting people when and where they need it most.",
    },
  ];
  const values = [
    {
      image: energy,
      title: "Our Planet",
      text: "Building climate resiliency and protecting nature.",
    },
    {
      image: kids,
      title: "Food Quality & Sourcing",
      text: "Creating a future of secure and sustainable food that has a positive impact.",
    },
    {
      image: inclusivity,
      title: "Jobs, Inclusion & Empowerment",
      text: "Helping build bright futures through education, training and accelerating equity.",
    },
  ];
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
      {/* values section */}
      <div className="bg-primary text-secondary" id="news">
        <header className="p-2 text-2xl font-main">
          Our <span className="underline">values</span>
          <p className="text-base font-paragraph">
            We believe in using our influence, size and reach, and engaging with
            customers, staff, Franchisees, suppliers and partners, as a
            responsible business with a positive impact on communities globally.
            We’re proud of the work we do to help make a difference—and will
            continue working to deliver progress in the communities in which we
            operate. We’re driving impact by living our purpose. The actions we
            continue to take today across people, communities and our planet
            will ensure we’re building a better business and a more trusted
            brand for generations to come.
          </p>
        </header>
        {/* card section */}
        <div className="flex flex-col items-center justify-center gap-2 p-2 md:flex-row md:justify-between">
          {/* cards */}
          {values.map((value, index) => (
            <div className="w-80" key={index}>
              <img
                className="object-cover w-full h-80"
                src={value.image}
                alt=""
              />
              <div className="p-2 h-30">
                <p className="text-lg font-main">{value.title}</p>
                <p className="text-sm font-paragraph">{value.text}</p>
                <button className="w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main">
                  read more
                </button>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
      {/* news section */}
      <div className="bg-primary text-secondary" id="news">
        <header className="p-2 text-2xl font-main">
          Latest chutney <span className="underline">news</span>
        </header>
        {/* card section */}
        <div className="flex flex-col items-center justify-center gap-2 p-2 md:flex-row md:justify-between">
          {/* cards */}
          {newsItems.map((newsItem, index) => (
            <div className="w-80" key={index}>
              <img
                className="object-cover w-full h-80"
                src={newsItem.image}
                alt=""
              />
              <div className="p-2 h-30">
                <p className="text-lg font-main">{newsItem.title}</p>
                <p className="text-sm font-paragraph">{newsItem.text}</p>
                <button className="w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main">
                  read more
                </button>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
