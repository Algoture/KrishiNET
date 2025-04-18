import React, { useState, useEffect } from "react";
import { ID, Query } from "appwrite";
import {
  useAuth,
  databaseId,
  databases,
  postCollection,
  storageBucketId,
  collectionId,
  storage,
  InputField,
  SubmitBtn,
  InputFileUpload,
  CategorySelect,
  SideBar,
  Toast,
} from "../../Index";
const FeedPostForm = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cropName, setCropName] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [price, setPrice] = useState("");
  const [userData, setUserData] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [quantity, setQuantity] = useState("");
  const { user } = useAuth();

  const fetchUserData = async () => {
    if (user) {
      try {
        const response = await databases.listDocuments(
          databaseId,
          collectionId,
          [Query.equal("userId", user.$id)]
        );

        if (response.documents.length > 0) {
          setUserData(response.documents[0]);
        } else {
          console.error("No document found for the user");
          setError("No user data found.");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError("Failed to load user data. Please try again.");
      }
    } else {
      setError("User is not logged in.");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setToast(true);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!userData) {
      setError("User data not available. Please try again.");
      setLoading(false);
      return;
    }
    if (!file) {
      setError("Upload an Image");
      setLoading(false);
      return;
    }
    const postId = ID.unique();
    const postDetails = {
      userId: user.$id,
      role: userData.role,
      name: userData.name,
      city: userData.city,
      state: userData.state,
      postId: postId,
      price: price,
      quantity: quantity,
      cropname: cropName,
      description: description,
      category: category,
    };
    try {
      let fileUrl = "";
      if (file) {
        const fileResponse = await storage.createFile(
          storageBucketId,
          ID.unique(),
          file
        );
        fileUrl = fileResponse.$id;
      }

      postDetails.fileUrl = fileUrl;
      await databases.createDocument(
        databaseId,
        postCollection,
        postId,
        postDetails
      );
      setSuccess("Post created successfully!");
      setLoading(false);
      setDescription("");
      setCategory("");
      setCropName("");
      setPrice("");
      setQuantity("");
      setFile(null);
    } catch (error) {
      console.error("Failed to create post:", error);
      setError("Failed to create post. Please try again.");
    }
  };

  return (
    <>
      <SideBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 lg:ml-56">
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Create a Post
          </h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && (
            <Toast
              msg="Post created successfully!"
              onClose={() => setSuccess(false)}
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4">
              <InputField
                label="Crop Name"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
              />
              <InputField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <InputField
                label="Price of Crop per Kg"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <InputField
                label="Quantity of Crop in Kg"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <CategorySelect
                category={category}
                onChange={handleCategoryChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Upload Crop Image/Video
              </label>
              <InputFileUpload handleChange={handleFileChange} />
              {toast && (
                <Toast
                  msg="File uploaded successfully!"
                  onClose={() => setToast(false)}
                />
              )}
            </div>
            <SubmitBtn text="Create Post" loading={loading} />
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedPostForm;
