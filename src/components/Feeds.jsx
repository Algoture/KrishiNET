import React, { useState, useEffect } from 'react';
import { databases, databaseId, postCollection } from '../utils/appwriteConfig';
const Feeds = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await databases.listDocuments(databaseId, postCollection);

            const sortedPosts = response.documents.sort((a, b) => new Date(b.$createdAt) - new Date(a.$createdAt));

            setPosts(sortedPosts);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
            setError('Failed to load posts. Please try again.');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Feeds</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <div className="space-y-4">
                    {posts.map((post) => (
                        <div key={post.postId} className="p-4 border border-gray-300 rounded-md">
                            <h3 className="text-lg font-semibold">{post.name}</h3>
                            <p className="text-sm text-gray-500">{post.role}</p>
                            <p className="mt-2">{post.description}</p>
                            <p className="mt-1 text-gray-400 text-sm">{new Date(post.$createdAt).toLocaleString()}</p>
                            <p className="mt-1 text-gray-400 text-sm">Category: {post.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feeds;
