import React from "react";
import facebook from "../assets/icons/png/bxl-facebook.png";
import instagram from "../assets/icons/png/bxl-instagram.png";
import twitter from "../assets/icons/png/bxl-twitter.png";
import youtube from "../assets/icons/png/bxl-youtube.png";
import spotify from "../assets/icons/png/bxl-spotify.png";

const Contact = () => {
  const icons = [
    {
      name: "facebook",
      image: facebook,
      href: "",
    },
    {
      name: "instagram",
      image: instagram,
      href: "",
    },
    {
      name: "twitter",
      image: twitter,
      href: "",
    },
    {
      name: "youtube",
      image: youtube,
      href: "",
    },
    {
      name: "spotify",
      image: spotify,
      href: "",
    },
  ];
  return (
    <div className="bg-secondary">
      <header className="p-2 text-4xl text-center font-main text-primary">
        <span className="underline">Contact</span> us
        <p className="text-lg text-center text-primary font-paragraph">
          Feel free to reach out to us for any concern
        </p>
      </header>
      <div className="flex items-center justify-between p-2">
        {icons.map((icon, index) => (
          <a key={index} href={icon.href} className="">
            <img src={icon.image} alt={icon.name} className="" />
          </a>
        ))}
      </div>
      {/* newsletter section */}
      <div className="flex flex-col text-lg text-center min-h-24 text-primary font-paragraph">
        <p>Subscribe to our newsletter</p>
        <form className="grid grid-cols-2 p-2 font-bold text-secondary">
          <input
            type="text"
            placeholder="Name"
            className="h-12 p-2 mr-2 rounded-md bg-primary placeholder:text-secondary"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-12 p-2 mr-2 rounded-md bg-primary placeholder:text-secondary"
          />
          <button className="col-span-2 p-2 my-2 border-4 rounded-md border-secondary hover:border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary font-main">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
