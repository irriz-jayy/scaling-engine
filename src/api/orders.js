// order.js

const API_URL = "https://scaling-api-0df9.onrender.com/api/v1/orders";

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
export const removeOrder = async (orderId) => {
  try {
    const response = await fetch(`${API_URL}/${orderId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to remove order");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
