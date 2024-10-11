import React, { useState, useEffect } from 'react';
import { ID, Query } from 'appwrite';
import { useAuth } from '../../utils/AuthContext';
import { databaseId, databases, postCollection, collectionId } from '../../utils/appwriteConfig';

const PostForm = () => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const { user } = useAuth();

    const fetchUserData = async () => {
        if (user) {
            try {
                const response = await databases.listDocuments(
                    databaseId,
                    collectionId,
                    [Query.equal('userId', user.$id)]

                );

                if (response.documents.length > 0) {
                    setUserData(response.documents[0]);
                } else {
                    console.error("No document found for the user");
                    setError("No user data found.");
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                setError('Failed to load user data. Please try again.');
            }
        } else {
            setError('User is not logged in.');
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userData) {
            setError('User data not available. Please try again.');
            return;
        }

        const postId = ID.unique();
        const postDetails = {
            userId: userData.$id,
            role: userData.role,
            name: userData.name,
            postId: postId,
            description: description,
            category: category,
        };

        try {
            const response = await databases.createDocument(databaseId, postCollection, postId, postDetails);
            setSuccess('Post created successfully!');
            console.log(response);
            setDescription('');
            setCategory('');
        } catch (error) {
            console.error('Failed to create post:', error);
            setError('Failed to create post. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Create a Post</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Category</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-32  bg-indigo-600 text-black py-2 border border-gray-300 rounded-md hover:bg-indigo-500 transition duration-300"
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostForm;
