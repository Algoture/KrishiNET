import React, { useState, useEffect } from "react";
import {
  databases,
  databaseId,
  postCollection,
  account,
  SideBar,
  AddIcon,
  cropsCategories,
  SearchBar,
} from "../../Index";
import FeedCard from "./FeedCard";
import { NavLink } from "react-router-dom";
import FeedCardSkeleton from "./FeedCardSkeleton";
const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [category, setCategory] = useState("");
  const visibleCategories = showAllCategories
    ? cropsCategories
    : cropsCategories.slice(0, 5);

  const handleViewMoreClick = () => {
    setShowAllCategories(!showAllCategories);
  };
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
    <div className="flex flex-col bg-primary lg:ml-56 lg:pt-4 py-8">
      <SideBar />
      {/* <SearchBar /> */}
      <div className=" sticky flex w-full h-fit gap-4 mt-2 flex-wrap p-2">
        {visibleCategories.map((cat, index) => (
          <div
            key={index}
            onClick={() => setCategory(category === cat.name ? "" : cat.name)}
            className={` flex flex-col items-center justify-center bg-accent gap-2 p-2 rounded-xl group cursor-pointer ${
              category === cat.name ? "" : "bg-white"
            }`}
          >
            <h2 className="text-black">{cat.name}</h2>
          </div>
        ))}
        {cropsCategories.length > 7 && (
          <div className="pt-2">
            <button onClick={handleViewMoreClick} className=" text-link ">
              {showAllCategories ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="flex gap-4 flex-wrap lg:my-10 justify-center">
        {loading
          ? Array(4)
              .fill("")
              .map((_, index) => (
                <FeedCardSkeleton key={index} indexKey={index} />
              ))
          : category
          ? posts
              .filter((i) => i.category === category)
              .map((post) => (
                <FeedCard
                  key={post.$id}
                  {...post}
                  category={post.category}
                  cropName={post.cropname}
                  currentUserId={currentUserId}
                  handleLike={handleLike}
                />
              ))
          : posts.map((post) => (
              <FeedCard
                key={post.$id}
                {...post}
                category={post.category}
                cropName={post.cropname}
                currentUserId={currentUserId}
                handleLike={handleLike}
              />
            ))}
      </div>

      <NavLink
        to="/newpost"
        className="fixed bottom-6 right-6 bg-accent rounded-full w-14 h-14 flex justify-center items-center"
      >
        <AddIcon sx={{ color: "black", height: "2rem", width: "2rem" }} />
      </NavLink>
    </div>
  );
};

export default Feeds;
