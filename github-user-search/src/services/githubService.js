import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to search GitHub users based on advanced criteria
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct the search query
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // API endpoint with advanced search parameters
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    throw error;
  }
};
