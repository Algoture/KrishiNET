import { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import { FarmerDashboard } from "./Farmer/FarmerDashboard";
import { BuyerDashboard } from "./Buyer/BuyerDashboard";
import { databases, databaseId, collectionId } from "../utils/appwriteConfig";
import { Query } from "appwrite";
import { Button } from "@mui/material";

const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          let response = await databases.listDocuments(
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
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>No user data found</p>;
  }

  return (
    <div>
      <Button variant="contained" onClick={() => history.back()}>Back</Button>
      <h1>{userData.name}'s Profile</h1>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>City: {userData.city}</p>
      <p>State: {userData.state}</p>
      <p>Role: {userData.role === "farmer" ? "Farmer" : "Buyer"}</p>

      {userData.role === "farmer" ? (
        <FarmerDashboard user={user} />
      ) : (
        <BuyerDashboard user={user} />
      )}
    </div>
  );
};

export default Profile;
