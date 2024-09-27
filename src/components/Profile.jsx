import { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import { FarmerDashboard } from "./Farmer/FarmerDashboard";
import { BuyerDashboard } from "./Buyer/BuyerDashboard";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { databases, databaseId, collectionId } from "../utils/appwriteConfig";
import { Query } from "appwrite";
import { CircularProgress } from "@mui/material";
import { BackBtn } from "../Index";

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
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>No user data found</p>;
  }

  return (
    <div className="w-full flex-col flex items-center justify-center gap-5 mt-5">
      <BackBtn />
      <div className="w-full flex gap-2 flex-wrap items-center justify-center flex-col mt-10">
      {userData.role === "farmer" ? (
          <FarmerDashboard user={user} />
        ) : (
          <BuyerDashboard user={user} />
        )}
        <div className="max-w-xs w-full bg-white shadow-box rounded-lg p-5 mt-10">
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center justify-center flex-col">
              <AccountCircleIcon sx={{ fontSize: 75 }} />
              <h2 className="text-3xl font-normal text-center">
                {userData.name}
              </h2>
            </div>
            <p className="text-base text-gray-500">
              <MailIcon /> {userData.email}
            </p>
            <p className="text-base text-gray-500">
              <PhoneIcon /> {userData.phone}
            </p>
            <p className="text-base text-gray-500">
              <PersonIcon /> {userData.role === "farmer" ? "Farmer" : "Buyer"}
            </p>
            <div className="flex justify-between text-gray-600 text-base">
              <div className="flex items-center justify-center">
                <PlaceIcon />{" "}
                <p className="ml-1">
                  {userData.city}, {userData.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
