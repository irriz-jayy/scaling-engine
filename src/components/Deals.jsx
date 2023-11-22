import React from "react";
import deals from "../assets/food assets/deals.jpg";

const Deals = () => {
  return (
    <div className="bg-primary ">
      <div className="flex flex-col p-2 m-2 h-96 md:flex-row md:justify-center md:items-center">
        <img src={deals} alt="deal" className="object-contain w-full h-1/2" />
        <div className="text-center md:text-left">
          <p className="text-4xl font-main text-secondary">Deals for days!</p>
          <p className="text-lg font-paragraph text-secondary">
            Get exclusive deals on your Chutney Bites favorites in the app with
            contactless Mobile Order & Pay* and convenient Drive Thru or
            Curbside pickup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deals;
