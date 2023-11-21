import React from "react";
import Hero from "../components/Hero";
import MenuPreview from "../components/MenuPreview";

export const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <Hero />
        <MenuPreview />
      </div>
    </>
  );
};
