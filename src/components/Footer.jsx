import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Quick",
      underlined: "links",
      items: [
        { text: "Menu", href: "/menu" },
        { text: "Locate restaraunts", href: "/maps" },
        { text: "Check orders", href: "/orders" },
      ],
    },
    {
      title: "Contact",
      underlined: "us",
      items: [
        { text: "Contact Us Overview", href: "/contact-us#overview" },
        { text: "Customer feedback", href: "/contact-us#feedback" },
        { text: "Frequently Asked Questions", href: "/contact-us#FAQs" },
      ],
    },
    {
      title: "About",
      underlined: "us",

      items: [
        { text: "About Us Overview", href: "/about-us#overview" },
        { text: "News", href: "/about-us#news" },
        { text: "Our values", href: "/about-us#values" },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-row h-48 bg-primary text-secondary">
        {sections.map((section, index) => (
          <div key={index} className="w-1/3 p-4 bg-primary text-secondary">
            <h2 className="text-lg font-bold font-main">
              {section.title}{" "}
              <span className="underline">{section.underlined}</span>
            </h2>
            <ul className="font-paragraph">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="hover:font-bold">
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center bg-primary text-secondary">
        <p className="text-lg font-main text-secondary">
          &copy; {new Date().getFullYear()} Chutney bites. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
