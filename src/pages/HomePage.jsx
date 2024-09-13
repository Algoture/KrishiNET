import { NavLink } from "react-router-dom";
import ipapi from "ipapi.co";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [region, setRegion] = useState("");

  const fetchIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
      const locationResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
      const locationData = await locationResponse.json();
      setLocation(locationData.city);
      setRegion(locationData.region);
      console.log(locationData);
    } catch (error) {
      console.error("Error fetching IP or location:", error);
    }
  };
  useEffect(() => {
    fetchIp();
  }, []);
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to KrishiNET {location}</h1>
      <h1 className="text-3xl font-bold">Jai {region} ! From API</h1>
      <div className="flex gap-4 mt-4">
        <NavLink
          to="/auth"
          className="px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Register
        </NavLink>
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
      </div>
    </div>
  );
};

export default HomePage;
