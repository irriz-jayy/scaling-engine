import React from "react";

const Menu = () => {
  const categories = [
    {
      name: "fries",
    },
    {
      name: "burgers",
    },
    {
      name: "soft drinks",
    },
    {
      name: "tacos",
    },
    {
      name: "chicken",
    },
    {
      name: "chicken wings",
    },
    {
      name: "pizza",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-secondary">
        <div className="fixed flex flex-col w-full border bg-primary">
          <header className="text-lg font-main">Categories</header>
          <div className="flex">
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
      </div>
    </>
  );
};

export default Menu;
