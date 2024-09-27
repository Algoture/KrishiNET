import { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, CircularProgress, Rating } from "@mui/material";
import { getRecommendations, useAuth, BackBtn } from "../Index";
const RecommendCard = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getRecommendations(user, setRecommendations);
  }, [user]);
  return (
    <div className="w-full flex-col flex items-center justify-center gap-5 mt-14">
      <BackBtn />
      <h2 className="text-3xl font-normal text-center">
        Recommended Users To You
      </h2>
      <div className="w-full flex gap-2 flex-wrap items-center justify-center">
        {recommendations.length > 0 ? (
          recommendations.map((user) => (
            <div
              key={user.$id}
              className="max-w-xs w-full bg-white shadow-box rounded-lg p-5"
            >
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex items-center justify-center">
                  <AccountCircleIcon sx={{ fontSize: 75 }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {user.name}
                </h3>
                <p className="text-base text-gray-500">
                  <MailIcon /> {user.email}
                </p>
                <p className="text-base text-gray-500">
                  <PhoneIcon /> {user.phone}
                </p>
                <p className="text-base text-gray-500">
                  <PersonIcon /> {user.role === "farmer" ? "Farmer" : "Buyer"}
                </p>
                <div className="flex justify-between text-gray-600 text-base">
                  <div className="flex items-center justify-center">
                    <PlaceIcon /> <p className="ml-1">{user.city}</p>
                  </div>
                  <p>{Math.floor(user.distance)} km</p>
                </div>
                <div className="flex">
                  <Rating name="read-only" value={4} readOnly />
                  (45)
                </div>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#70e000", color: "white" }}
                >
                  Connect
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex items-center justify-center h-screen">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendCard;
