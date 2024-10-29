import { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { databases, databaseId, collectionId } from "../utils/appwriteConfig";
import { Query } from "appwrite";
import SideBar from "../components/UI/SideBar";
import { CircularProgress } from "@mui/material";

const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
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
        }
      }
    };

    fetchUserData();
  }, [user]);
  return (
    <>
      <SideBar />
      <div className="w-full flex gap-2 flex-wrap items-center justify-center flex-col mt-10">
        {userData ? (
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
        ) : (
          <div className="max-w-xs w-full bg-white shadow-box rounded-lg p-5 mt-10 animate-pulse">
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-center justify-center flex-col mb-4">
                <div className="bg-gray-300 rounded-full h-20 w-20"></div>
                <div className="h-6 bg-gray-300 rounded w-32 mt-3"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
              <div className="flex justify-between text-gray-600 text-base mt-4">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
