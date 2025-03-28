import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import { fetchGitHubUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await fetchGitHubUser(username);
    setUser(data);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && <UserProfile user={user} />}
    </div>
  );
}

export default App;
