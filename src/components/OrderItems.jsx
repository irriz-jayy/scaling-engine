import React, { useState } from "react";
import { Link } from "react-router-dom";
import chicken from "../assets/food assets/chicken.jpg";
import taco from "../assets/food assets/taco.jpg";
import fries from "../assets/food assets/fries.jpg";

const OrderItems = () => {
  const [orders, setOrders] = useState([
    {
      image: chicken,
      name: "Fried Chicken",
      price: 320,
      quantity: 2,
    },
    {
      image: taco,
      name: "Beef Tacos",
      price: 250,
      quantity: 10,
    },
    {
      image: fries,
      name: "Fries",
      price: 200,
      quantity: 2,
    },
  ]);

  function handleAdd(index) {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity += 1;
    setOrders(updatedOrders);
  }

  function handleDelete(index) {
    const updatedOrders = [...orders];
    if (updatedOrders[index].quantity > 1) {
      updatedOrders[index].quantity -= 1;
      setOrders(updatedOrders);
    }
  }

  const totalAmount = orders.reduce(
    (total, order) => total + order.quantity * order.price,
    0
  );

  function handleRemove(index) {
    const confirmation = window.confirm(
      `Do you want to remove ${orders[index].name}?`
    );

    if (confirmation) {
      const updatedOrders = [...orders];
      updatedOrders.splice(index, 1); // Remove the item at the specified index
      setOrders(updatedOrders);
    }
  }

  return (
    <>
      <div className="bg-secondary text-primary">
        {/* header */}
        <header className="p-2 ">
          <p className="text-2xl font-main">My orders</p>
        </header>
        {/* button section */}
        <div className="p-2 ">
          <Link
            to="/menu"
            className="w-48 h-12 p-2 border-4 rounded-md border-secondary hover:border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary font-main"
          >
            Add to order 🍔
          </Link>
        </div>
      </div>
      {/* cart section */}
      <div className="pt-2 bg-secondary text-primary min-h-[70vh]">
        {/* card */}
        {orders.map((order, index) => (
          <div
            className="flex items-center w-full h-48 gap-2 border"
            key={index}
          >
            {/* Product Image */}
            <img
              src={order.image}
              className="w-40 h-40 ml-2 border rounded-md md:w-1/4"
            />

            {/* Product Details Container */}
            <div className="flex flex-col justify-between w-3/4 h-40 p-2 mr-2 border font-main">
              {/* Product Name */}
              <p className="text-lg">{order.name}</p>

              {/* Quantity and Price Container */}
              <div className="grid grid-cols-2 gap-2">
                {/* Quantity Section */}
                <div className="flex items-center col-span-1">
                  {/* Minus Button */}
                  <button
                    className="w-8 h-8 mr-2 border rounded-md hover:bg-primary hover:text-secondary"
                    onClick={() => handleDelete(index)}
                  >
                    -
                  </button>

                  {/* Quantity Display */}
                  <div className="w-12 text-center">{order.quantity}</div>

                  {/* Plus Button */}
                  <button
                    className="w-8 h-8 ml-2 border rounded-md hover:bg-primary hover:text-secondary"
                    onClick={() => handleAdd(index)}
                  >
                    +
                  </button>
                </div>

                {/* Price Section */}
                <div className="col-span-1 text-right ">
                  {/* Price Display */}
                  {order.quantity * order.price} ksh
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="w-full h-8 mt-2 text-white bg-red-500 rounded-md hover:bg-red-400"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* total section */}
      <div className="flex items-center justify-center border bg-primary text-secondary">
        <div className="grid w-3/4 h-24 grid-cols-2 border">
          <div className="w-1/2 text-center font-main">Total</div>
          <div className="w-1/2">
            <p className="font-main">{totalAmount} ksh</p>
          </div>
          <button className="h-12 col-span-2 mx-16 border-4 rounded-md border-primary hover:border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary font-main">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderItems;
