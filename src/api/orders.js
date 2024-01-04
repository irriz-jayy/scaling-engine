// order.js

const API_URL = "http://localhost:3001/orders";

// Function to fetch orders
export const fetchOrders = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    const orders = await response.json();
    return orders;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to add an order
export const addOrder = async (newOrder) => {
  try {
    // Add a unique 'id' property to the new order
    newOrder.id = Date.now(); // You can use a better way to generate IDs

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    if (!response.ok) {
      throw new Error("Failed to add order");
    }

    const addedOrder = await response.json();
    return addedOrder;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Add other functions (update, delete, etc.) as needed
