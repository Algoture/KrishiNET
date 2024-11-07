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
        postCollection
        // [Query.equal("userId", userId)]
      );
      const userPosts = response.documents.filter(
        (post) => console.log(post.userId,currentUserId)
      );
      setPosts(userPosts);
      console.log(userPosts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <div className="lg:ml-60 mt-10">
      <SideBar />
    </div>
  );
};

export default DashboardPage;
