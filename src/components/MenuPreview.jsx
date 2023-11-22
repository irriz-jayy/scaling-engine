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
    <div className="h-screen bg-secondary">
      <div className="my-2">
        <header className="p-2 text-4xl text-center font-main text-primary">
          Our <span className="underline">menu</span>
        </header>
        <p className="text-lg text-center text-primary font-paragraph">
          Feast on our favourite bites
        </p>
      </div>
      {food.map((item, index) => (
        <MealCard key={index} data={item} />
      ))}
    </div>
  );
};

export default MenuPreview;
