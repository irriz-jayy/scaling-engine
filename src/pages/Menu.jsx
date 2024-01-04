import React, { useState, useEffect } from "react";
import MealCard from "../components/MealCard";
import { fetchFoods } from "../api/food";

const Menu = () => {
  const categories = [
    { name: "All", id: "all" },
    { name: "fries 🍟", id: "fries" },
    { name: "burgers 🍔", id: "burgers" },
    { name: "tacos 🌮", id: "tacos" },
    { name: "chicken 🍗", id: "chicken" },
    { name: "pizza 🍕", id: "pizza" },
  ];

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFoods = await fetchFoods();
        setFoods(fetchedFoods);
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error("Error fetching foods:", error.message);
      }
    };

    fetchData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFoods =
    selectedCategory === "all"
      ? foods
      : foods.filter((item) =>
          item.name.toLowerCase().includes(selectedCategory)
        );

  return (
    <>
      <div className="min-h-screen bg-secondary">
        {/* category section */}
        <div className="sticky z-10 flex flex-col w-full border top-14 bg-primary ">
          <header className="text-lg font-main">Categories</header>
          <div className="flex justify-between">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`w-48 h-12 p-2 my-2 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main ${
                  selectedCategory === category.id
                    ? "bg-primary text-secondary"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* menu section */}
        <div className="flex flex-col flex-wrap items-center justify-center min-h-screen gap-4 p-2 md:flex-row">
          {filteredFoods.length === 0 ? (
            <p className="text-lg text-center text-primary font-paragraph">
              Food not currently available for this category.
            </p>
          ) : (
            filteredFoods.map((item, index) => (
              <MealCard key={index} data={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
