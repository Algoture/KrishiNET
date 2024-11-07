import { useState, useEffect } from "react";
import SideBar from "../components/UI/SideBar";
import {
  account,
  useAuth,
  databaseId,
  collectionId,
  databases,
  postCollection,
} from "../Index";
import { Query } from "appwrite";
import FeedCard from "../components/Feed/FeedCard";
import { formatTimeAgo } from "../utils/Utils";

const DashboardPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  const { user } = useAuth();
  useEffect(() => {
    const fetchCurrentUserId = async () => {
      try {
        if (user) {
          setCurrentUserId(user.$id);
          fetchPosts(user.$id);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchCurrentUserId();
  }, [user]);

  const fetchPosts = async (userId) => {
    try {
      const response = await databases.listDocuments(
        databaseId,
        postCollection,
        [Query.equal("userId", userId)]
      );
      setPosts(response.documents);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <div className="lg:ml-60 mt-10">
      <SideBar />
      {posts.map((i) => (
        <FeedCard
          key={i.$id}
          {...i}
          cropName={i.cropName}
          dash={true}
          date={formatTimeAgo(i.$createdAt)}
        />
      ))}
    </div>
  );
};

export default DashboardPage;
