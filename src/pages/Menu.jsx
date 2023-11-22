import React from "react";
import chicken from "../assets/food assets/chicken.jpg";
import chover from "../assets/food assets/chickenhover.jpg";
import taco from "../assets/food assets/taco.jpg";
import thover from "../assets/food assets/tacohover.jpg";
import fries from "../assets/food assets/fries.jpg";
import fhover from "../assets/food assets/frieshover.jpg";
import MealCard from "../components/MealCard";

const Menu = () => {
  const categories = [
    {
      name: "fries",
    },
    {
      name: "burgers",
    },

    {
      name: "tacos",
    },
    {
      name: "chicken",
    },

    {
      name: "pizza",
    },
  ];
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
    <>
      <div className="min-h-screen bg-secondary">
        {/* category section */}
        <div className="sticky z-10 flex flex-col w-full border top-14 bg-primary ">
          <header className="text-lg font-main">Categories</header>
          <div className="flex justify-between">
            {categories.map((category, index) => (
              <button
                key={index}
                className="w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* menu section */}
        <div className="flex flex-col flex-wrap items-center justify-center min-h-screen gap-4 p-2 md:flex-row">
          {food.map((item, index) => (
            <MealCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
