import { getRecommendations, useAuth, BackBtn } from "../../Index";
import { useEffect, useState } from "react";
import RecomCard from "./RecomCard";
import SideBar from "../UI/SideBar";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getRecommendations(user, setRecommendations);
  }, [user]);

  const SkeletonLoader = () => (
    <div className="w-full flex gap-2 flex-wrap items-center justify-center">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="sm:w-32 lg:w-72 h-full max-w-sm w-72 bg-white shadow-box rounded-lg p-5 animate-pulse"
        >
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center justify-center">
              <div className="animate-pulse w-20 h-20 bg-gray-300 rounded-full" />
            </div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-1" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-1" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-1" />
            <div className="flex justify-between text-gray-600 text-base">
              <div className="flex items-center justify-center">
                <div className="animate-pulse w-24 h-4 bg-gray-300 rounded" />
              </div>
              <div className="animate-pulse w-12 h-4 bg-gray-300 rounded" />
            </div>
            <div className="flex">
              <div className="flex items-center">
                <div className="animate-pulse w-16 h-4 bg-gray-300 rounded mr-1" />
                <div className="animate-pulse w-8 h-4 bg-gray-300 rounded" />
              </div>
            </div>
            <div className="mt-3">
              <div className="animate-pulse w-20 h-4 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <SideBar />
      <div className="flex-col flex items-center justify-center gap-5 py-6 lg:ml-56 bg-primary">
        {recommendations.length > 0 ? (
          <div className="w-full flex gap-2 flex-wrap items-center justify-center">
            {recommendations.map((user) => (
              <RecomCard key={user.$id} user={user} />
            ))}
          </div>
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </>
  );
};

export default Recommendations;
