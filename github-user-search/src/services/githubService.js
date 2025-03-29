import axios from "axios";

const BASE_URL = "https://api.github.com/users";
["https://api.github.com/search/users?q", "location", "minRepos"]
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null; // Return null if user not found
  }
};
