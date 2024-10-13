import { getRecommendations, useAuth, BackBtn } from "../../Index";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import RecomCard from "./RecomCard";
const Recommendations = () => {
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
            <RecomCard key={user.$id} user={user} />
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

export default Recommendations;
