import React from "react";

const MenuPreview = () => {
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
    </div>
  );
};

export default MenuPreview;
