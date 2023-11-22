import React, { useState } from "react";

const MealCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-80 bg-primary">
      <img
        className="object-contain w-full transition-opacity duration-300 h-60"
        src={isHovered ? data.images.hover : data.images.default}
        alt="chicken"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="text-center min-h-40">
        <p className="text-lg font-main">{data.name}</p>
        <p className="font-paragraph">{data.text}</p>
        <p className="text-lg font-main">{data.price}</p>
        <button className="h-10 my-2 border rounded-md font-main w-36 bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-4 hover:border-secondary">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default MealCard;
