/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = async (query) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUsers(response.data.items);
    
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let query = username ? `${username} in:login` : '';
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;
    fetchUsers(query);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub Advanced User Search</h1>
      <form onSubmit={handleSearch} className="flex flex-col gap-2 p-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we can't find the user</p>}
      <div className="mt-4">
        {users.map((user) => (
          <div key={user.id} className="p-2 border rounded-md mb-2">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
