const API_URL = "http://localhost:3000/api/v1/foods/";

export const fetchFoods = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch foods");
    }
    const foods = await response.json();
    return foods;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
