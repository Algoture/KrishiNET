import React, { useState, useEffect } from "react";
import {
  databases,
  databaseId,
  postCollection,
  account,
} from "../utils/appwriteConfig";
import "../style/Feeds.css";
import BackBtn from "../components/UI/BackBtn";
import Modal from "./Modal";
import Sample from "./Sample";

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState("");

  useEffect(() => {
    const fetchCurrentUserId = async () => {
      try {
        const user = await account.get();
        setCurrentUserId(user.$id);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setError("Failed to fetch user information. Please log in again.");
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

  const openModal = (imageUrl) => {
    setCurrentImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageUrl("");
  };

  return (
    <div className="flex flex-col items-center p-2 bg-primary ">
      <BackBtn />
      <h2 className="text-2xl mb-5 mt-10">Feeds</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="flex gap-4 flex-wrap min-w-80 max-w-96 ">
        {posts.map((post) => (
          <Sample
            key={post.$id}
            {...post}
            cropName={post.cropname}
            currentUserId={currentUserId}
            handleLike={handleLike}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={currentImageUrl}
      />{" "}
    </div>
  );
};

export default Feeds;
