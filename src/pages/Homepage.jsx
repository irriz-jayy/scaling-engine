import React from "react";
import Hero from "../components/Hero";
import MenuPreview from "../components/MenuPreview";
import Contact from "../components/Contact";

export const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <Hero />
        <MenuPreview />
        <Contact />
      </div>
    </>
  );
};
