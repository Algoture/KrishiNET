import React, { useState, useEffect } from "react";
import {
  databases,
  databaseId,
  postCollection,
  account,
} from "../utils/appwriteConfig";
import "../style/Feeds.css";
import Sample from "./Sample";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SideBar from "./UI/SideBar";

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCurrentUserId = async () => {
      setLoading(true);
      try {
        const user = await account.get();
        setCurrentUserId(user.$id);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setError("Failed to fetch user information. Please log in again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUserId();
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await databases.listDocuments(
        databaseId,
        postCollection
      );
      const sortedPosts = response.documents.sort(
        (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
      );
      setPosts(sortedPosts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      setError("Failed to load posts. Please try again.");
    }
  };

  const handleLike = async (postId) => {
    const post = posts.find((p) => p.postId === postId);
    const isLiked = post.likes.includes(currentUserId);

    const updatedLikes = isLiked
      ? post.likes.filter((userId) => userId !== currentUserId)
      : [...post.likes, currentUserId];

    try {
      await databases.updateDocument(databaseId, postCollection, postId, {
        likes: updatedLikes,
      });
      fetchPosts();
    } catch (error) {
      console.error("Failed to update likes:", error);
      setError("Failed to update likes. Please try again.");
    }
  };

  return (
    <div className="flex bg-primary  lg:ml-60">
      <SideBar />
      {error && <p className="error-message">{error}</p>}
      <div className="flex gap-4 flex-wrap lg:my-10  justify-center ">
        {loading
          ? Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-xl shadow-box w-96 bg-white p-4 space-y-3"
                >
                  <div className="post-header">
                    <div className="flex items-center space-x-2">
                      <div className="bg-gray-300 rounded-full h-6 w-6"></div>
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </div>
                    <div className="h-6 bg-gray-300 rounded mt-3 w-40"></div>
                    <div className="h-4 bg-gray-300 rounded w-20 mt-1"></div>
                  </div>

                  <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>

                  <div className="h-48 bg-gray-300 rounded-lg mt-3"></div>

                  <div className="flex items-center mt-2 space-x-1">
                    <div className="bg-gray-300 h-5 w-5 rounded-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                    <div className="h-6 bg-gray-300 rounded w-16"></div>
                  </div>

                  <div className="post-actions mt-4">
                    <div className="h-6 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>
              ))
          : posts.map((post) => (
              <Sample
                key={post.$id}
                {...post}
                cropName={post.cropname}
                currentUserId={currentUserId}
                handleLike={handleLike}
              />
            ))}
      </div>

      <NavLink
        to="/newpost"
        className="fixed bottom-8 right-8 bg-accent rounded-full w-14 h-14 flex justify-center items-center"
      >
        <AddIcon sx={{color:"white",height:"2rem",width:"2rem"}}/>
      </NavLink>
    </div>
  );
};

export default Feeds;
