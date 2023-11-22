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
      <div className="flex items-center justify-between w-full">
        {icons.map((icon, index) => (
          <a key={index} href={icon.href} className="">
            <img src={icon.image} alt={icon.name} className="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
