import React, { useState, useEffect } from "react";
import {
  databases,
  databaseId,
  postCollection,
  account,
} from "../utils/appwriteConfig";
import "../style/Feeds.css";
import FeedCard from "./FeedCard";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SideBar from "./UI/SideBar";
import { Skeleton } from "@mui/material";
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
    <div className="flex bg-primary lg:ml-56 lg:pt-4 py-12">
      <SideBar />
      {error && <p className="error-message">{error}</p>}
      <div className="flex gap-4 flex-wrap lg:my-10  justify-center ">
        {loading
          ? Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="rounded-xl shadow-box lg:w-96 w-80 bg-white p-4 flex flex-col"
                >
                  <div className="flex items-center gap-2">
                    <Skeleton variant="circular" width={40} height={40} />
                    <div className="flex items-center justify-between w-full">
                      <Skeleton variant="text" width="60%" height={20} />
                      <Skeleton variant="text" width="30%" height={20} />
                    </div>
                  </div>

                  <Skeleton
                    variant="text"
                    width="80%"
                    height={30}
                    className="mt-2"
                  />
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={20}
                    className="mt-2"
                  />

                  <span className="inline-block bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded-full font-bold w-fit mt-2">
                    <Skeleton variant="text" width={50} height={15} />
                  </span>

                  <Skeleton
                    variant="rectangular"
                    height={176}
                    className="rounded-lg mt-4"
                  />

                  <div className="flex items-center justify-between text-sm text-gray-600 font-bold mt-4 -ml-1">
                    <div className="flex items-center">
                      <Skeleton variant="text" width={50} height={20} />
                    </div>
                    <Skeleton variant="text" width={30} height={20} />
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <Skeleton variant="text" width={50} height={30} />
                    <Skeleton variant="rectangular" width={30} height={30} />
                  </div>
                </div>
              ))
          : posts.map((post) => (
              <FeedCard
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
        <AddIcon sx={{ color: "white", height: "2rem", width: "2rem" }} />
      </NavLink>
    </div>
  );
};

export default Feeds;
