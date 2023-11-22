import React from "react";
import MealCard from "./MealCard";
import chicken from "../assets/food assets/chicken.jpg";
import chover from "../assets/food assets/chickenhover.jpg";
import taco from "../assets/food assets/taco.jpg";
import thover from "../assets/food assets/tacohover.jpg";
import fries from "../assets/food assets/fries.jpg";
import fhover from "../assets/food assets/frieshover.jpg";

const MenuPreview = () => {
  const food = [
    {
      images: {
        default: chicken,
        hover: chover,
      },
      name: "Fried chicken",
      text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, excepturi.",
      price: "320 ksh",
      buttonText: "Order 🍗",
    },
    {
      images: {
        default: taco,
        hover: thover,
      },
      name: "Beef tacos",
      text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, excepturi.",
      price: "250 ksh",
      buttonText: "Order 🌮",
    },
    {
      images: {
        default: fries,
        hover: fhover,
      },
      name: "Fries",
      text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, excepturi.",
      price: "200 ksh",
      buttonText: "Order 🍟",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <div className="my-2">
        <header className="p-2 text-4xl text-center font-main text-primary">
          Our <span className="underline">menu</span>
        </header>
        <p className="text-lg text-center text-primary font-paragraph">
          Feast on our favourite bites
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-2 md:flex-row">
        {food.map((item, index) => (
          <MealCard key={index} data={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="w-48 h-12 p-2 my-2 border-4 rounded-md border-secondary hover:border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary font-main">
          View menu 🍔
        </button>
      </div>
    </div>
  );
};

export default MenuPreview;
