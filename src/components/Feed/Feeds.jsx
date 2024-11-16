import React, { useState, useEffect } from "react";
import {
  databases,
  databaseId,
  postCollection,
  account,
  SideBar,
  AddIcon,
  cropsCategories,
} from "../../Index";
import FeedCard from "./FeedCard";
import { NavLink } from "react-router-dom";
import FeedCardSkeleton from "./FeedCardSkeleton";
import { formatTimeAgo } from "../../utils/Utils";
import { SearchIcon } from "../UI/Icons";

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [category, setCategory] = useState("");
  const visibleCategories = showAllCategories
    ? cropsCategories
    : cropsCategories.slice(0, 7);

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

  useEffect(() => {
    const searchTerm = search.trim().toLowerCase();
    let result = posts;

    if (category) {
      result = result.filter((post) => post.category === category);
    }

    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.cropname?.toLowerCase().includes(searchTerm) ||
          post.category?.toLowerCase().includes(searchTerm) ||
          post.city?.toLowerCase().includes(searchTerm) ||
          post.state?.toLowerCase().includes(searchTerm) ||
          post.name?.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredPosts(result);
  }, [search, posts, category]);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
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

  const handleViewMoreClick = () => {
    setShowAllCategories(!showAllCategories);
  };

  const handleCategoryClick = (catName) => {
    setCategory(category === catName ? "" : catName);
    setSearch("");
  };

  return (
    <div className="flex flex-col bg-primary lg:ml-56 py-2 min-h-screen">
      <SideBar />

      <div className="flex flex-wrap w-full py-3 gap-2 justify-center rounded-xl">
        {visibleCategories.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(cat.name)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              category === cat.name
                ? "bg-accent text-black"
                : "bg-white text-unfocused hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
        {cropsCategories.length > 5 && (
          <button
            onClick={handleViewMoreClick}
            className="bg-white text-link rounded-lg px-2 text-sm"
          >
            {showAllCategories ? "View Less" : "View More"}
          </button>
        )}
      </div>

      {/* Search  */}
      <div className="relative flex items-center justify-center mb-4">
        <div className="flex items-center bg-accent w-fit rounded-xl gap-2 px-4 py-2 shadow-md">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className="w-24 placeholder-slate-900 bg-accent focus:outline-none focus:w-40 transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {loading
          ? Array(4)
              .fill("")
              .map((_, index) => <FeedCardSkeleton key={index} />)
          : filteredPosts.length > 0
          ? filteredPosts.map((post) => (
              <FeedCard
                key={post.$id}
                {...post}
                currentUserId={currentUserId}
                date={formatTimeAgo(post.$createdAt)}
                handleLike={handleLike}
              />
            ))
          : posts.length > 0
          ? posts.map((post) => (
              <FeedCard
                key={post.$id}
                {...post}
                currentUserId={currentUserId}
                date={formatTimeAgo(post.$createdAt)}
              />
            ))
          : !loading && <p className="text-gray-500">No posts found.</p>}
      </div>

      <NavLink
        to="/newpost"
        className="fixed bottom-6 right-6 bg-accent rounded-full w-14 h-14 flex justify-center items-center shadow-lg"
      >
        <AddIcon sx={{ color: "#353535e5", height: "2rem", width: "2rem" }} />
      </NavLink>
    </div>
  );
};

export default Feeds;
