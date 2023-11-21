import React from "react";
import logo from "../assets/logo.jpeg";

export const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <div className="flex border h-[80vh]">
          <div className="flex flex-col items-center justify-center w-1/2 border">
            <p className="p-2 text-6xl border font-main">
              Welcome to the home of flavour
            </p>
            <p className="p-2 font-paragraph">
              At Chutney Bites, we're passionate about delivering mouthwatering
              bites that tantalize your taste buds.Browse our menu, place your
              order, and experience the irresistible charm of Chutney Bites.
              Good food, great taste, and convenience – that's the Chutney Bites
              promise
            </p>
            <button className="w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main">
              Order Now 🍔
            </button>
          </div>
          <img src={logo} alt="chutney taco" className="" />
        </div>
      </div>
    </>
  );
};
