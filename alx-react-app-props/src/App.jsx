import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // User data to be shared
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
