import React, { useState } from "react";
import facebook from "../assets/icons/png/bxl-facebook.png";
import instagram from "../assets/icons/png/bxl-instagram.png";
import twitter from "../assets/icons/png/bxl-twitter.png";
import youtube from "../assets/icons/png/bxl-youtube.png";
import spotify from "../assets/icons/png/bxl-spotify.png";
import { toast } from "react-toastify";

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name && formData.email) {
      const alertMessage = `Hey ${formData.name}. Check ${formData.email} for newsletters`;
      toast.success(alertMessage);
      setFormData({
        name: "",
        email: "",
      });
    } else {
      toast.error("Please provide both name and email address.");
    }
  }

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
      <div className="flex flex-col text-lg text-center min-h-24 text-primary font-paragraph">
        <p>Subscribe to our newsletter</p>
        <form
          className="grid grid-cols-2 p-2 font-bold text-secondary"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-12 p-2 mr-2 rounded-md bg-primary placeholder:text-secondary"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="h-12 p-2 mr-2 rounded-md bg-primary placeholder:text-secondary"
          />
          <button className="col-span-2 p-2 my-2 border-4 rounded-md border-secondary hover:border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary font-main">
            Submit
          </button>
        </form>{" "}
      </div>
    </div>
  );
};

export default Contact;
