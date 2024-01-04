import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { Link } from "react-router-dom";
import { fetchFoods } from "../api/food";

const MenuPreview = () => {
  const [foods, setFoods] = useState([]);
  const [displayedFoods, setDisplayedFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFoods = await fetchFoods();
        setFoods(fetchedFoods);
        setDisplayedFoods(fetchedFoods.slice(0, 3)); // Display only the first three items
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error("Error fetching foods:", error.message);
      }
    };

    fetchData();
  }, []);

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
        {displayedFoods.map((item, index) => (
          <MealCard key={index} data={item} />
        ))}
      </div>
      <div className="flex items-center justify-center h-12 text-center ">
        <Link
          to="/menu"
          className="w-48 h-12 p-2 my-2 border-4 rounded-md border-secondary hover:border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary font-main"
        >
          View menu 🍔
        </Link>
      </div>
    </div>
  );
};

export default MenuPreview;
