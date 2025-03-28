import { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername(""); // Clear input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default Search;
