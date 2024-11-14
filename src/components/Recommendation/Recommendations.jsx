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
      <div className="flex-col md:ml-56 flex items-center py-2 justify-center gap-5  bg-primary">
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
