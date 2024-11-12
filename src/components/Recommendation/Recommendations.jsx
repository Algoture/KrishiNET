import { getRecommendations, useAuth } from "../../Index";
import { useEffect, useState } from "react";
import RecomCard from "./RecomCard";
import SideBar from "../UI/SideBar";
import RecomSkeleton from "./RecomSkeleton";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getRecommendations(user, setRecommendations);
  }, [user]);

  return (
    <>
      <SideBar />
      <h1 className="text-center text-2xl md:text-4xl text-unfocused">Recommended User For You</h1>
      <div className="flex-col flex items-center py-2 justify-center gap-5  bg-primary">
        {recommendations.length > 0 ? (
          <div className="w-full flex gap-2 flex-wrap items-center justify-center">
            {recommendations.map((user) => (
              <RecomCard key={user.$id} user={user} />
            ))}
          </div>
        ) : (
          <RecomSkeleton />
        )}
      </div>
    </>
  );
};

export default Recommendations;
