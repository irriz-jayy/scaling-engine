import React, { useState } from "react";
import { addOrder } from "../api/orders";
import { toast } from "react-toastify";

const MealCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToOrder = async () => {
    try {
      // Call the addOrder function to add the item to orders
      const addedOrder = await addOrder({
        name: data.name,
        image: data.default_image,
        price: data.price,
        quantity: 1, // You can set the initial quantity here
      });

      // Log the added order (you can handle it as needed)
      toast.success(`Added ${addedOrder.name} to your orders`);
    } catch (error) {
      console.log("Error adding item to orders:", error);
    }
  };

  return (
    <div className="w-80 bg-primary">
      <img
        className="object-contain w-full transition-opacity duration-300 h-60"
        src={isHovered ? data.hover_image : data.default_image}
        alt={data.name}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="text-center min-h-40">
        <p className="text-lg font-main">{data.name}</p>
        <p className="font-paragraph">{data.text}</p>
        <p className="text-lg font-main">{data.price} ksh</p>
        <button
          className="h-10 my-2 border rounded-md font-main w-36 bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-4 hover:border-secondary"
          onClick={handleAddToOrder}
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default MealCard;
