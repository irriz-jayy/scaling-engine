import React from "react";
import Hero from "../components/Hero";
import MenuPreview from "../components/MenuPreview";
import Contact from "../components/Contact";
import Deals from "../components/Deals";

export const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <Hero />
        <MenuPreview />
        <Deals />
        <Contact />
      </div>
    </>
  );
};
