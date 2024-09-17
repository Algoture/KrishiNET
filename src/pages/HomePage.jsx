import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { fetchRecommendations } from "../utils/Recommendations";

const HomePage = () => {
  const { user, logoutUser } = useAuth();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchAndSetRecommendations = async () => {
      if (user) {
        const recommendedUsers = await fetchRecommendations(user);
        setRecommendations(recommendedUsers);
      } else {
        console.error("No user logged in");
      }
    };

    fetchAndSetRecommendations();
  }, [user]);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to KrishiNET</h1>
      <div className="flex gap-4 mt-4">
        <NavLink
          to="/olamap"
          className="px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Ola Map
        </NavLink>

        <NavLink
          to="/contract"
          className="px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Create Contract
        </NavLink>

        <NavLink
          to="/profile"
          className="px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Profile
        </NavLink>

        {user ? (
          <button
            onClick={logoutUser}
            className="px-4 py-2 bg-yellow-400 text-black rounded-md"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="px-4 py-2 bg-yellow-400 text-black rounded-md"
          >
            Login
          </NavLink>
        )}
      </div>
      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold">Recommended Users To You</h2>
        <ul>
          {recommendations.length > 0 ? (
            recommendations.map((user) => (
              <li key={user.$id} className="border p-4 mb-2 rounded-md shadow-sm">
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>City: {user.city}</p>
                <p>Distance: {user.distance.toFixed(2)} km</p>
              </li>
            ))
          ) : (
            <p>No recommendations available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
