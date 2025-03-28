import { useState } from "react";
import Search from "./components/Search"; // Updated import
import UserProfile from "./components/UserProfile";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    const data = await fetchUserData(username);

    if (data) {
      setUser(data);
    } else {
      setError(true);
      setUser(null);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} /> {/* Updated component name */}
      <UserProfile user={user} loading={loading} error={error} />
    </div>
  );
}

export default App;
