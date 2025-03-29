import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to search GitHub users with advanced criteria
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct the search query string
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // GitHub Search API endpoint
    const url = `${BASE_URL}/search/users?q=${query}`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
