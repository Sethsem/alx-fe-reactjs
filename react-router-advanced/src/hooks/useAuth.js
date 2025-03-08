import { useState, useEffect } from "react";

// Simulating authentication
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for auth status (this could be from localStorage, API, etc.)
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user); // Convert to boolean
  }, []);

  return { isAuthenticated };
};
