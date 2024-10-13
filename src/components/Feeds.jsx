import React, { useState, useEffect } from "react";
import {
  databases,
  databaseId,
  postCollection,
  account,
} from "../utils/appwriteConfig";
import "../style/Feeds.css";
import BackBtn from "./BackBtn";
import Modal from "./Modal";

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
    <div className="feed-container">
      <BackBtn />
      <h2 className="feed-title">Feeds</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="feed-grid">
        {posts.map((post) => (
          <div key={post.postId} className="feed-post">
            <div className="post-header">
              <h3 className="post-name">{post.name}</h3>
              <p className="post-role">{post.role}</p>
            </div>
            <p className="post-description">{post.description}</p>
            <p className="post-date pl-2">
              {new Date(post.$createdAt).toLocaleString()}
            </p>
            <p className="post-category pl-2">Category: {post.category}</p>
            {post.fileUrl && (
              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${post.fileUrl}/view?project=krishinet`}
                alt={post.description}
                className="mt-2 w-full h-auto rounded-lg p-5"
                onClick={() =>
                  openModal(
                    `https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${post.fileUrl}/view?project=krishinet`
                  )
                }
              />
            )}
            <div className="post-actions">
              <button
                className={`like-button ${
                  post.likes.includes(currentUserId) ? "liked" : ""
                }`}
                onClick={() => handleLike(post.postId)}
              >
                {post.likes.includes(currentUserId) ? "❤️ Liked" : "🤍 Like"}
              </button>
            </div>
          </div>
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
