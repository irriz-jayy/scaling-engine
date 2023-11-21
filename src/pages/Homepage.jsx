import React from "react";
import Hero from "../components/Hero";

export const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-primary">
        {/* hero section */}
        <Hero />
        <div className="h-screen bg-secondary"></div>
      </div>
    </>
  );
};
