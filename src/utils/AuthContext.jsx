import { createContext, useContext, useEffect, useState } from "react";
import { account, databaseId, collectionId, databases } from "./appwriteConfig";
import { ID } from "appwrite";
import { CircularProgress } from "@mui/material";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    // console.log("User Info: ", userInfo);
    console.log("User Login Done");
    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      // console.log("accountDetails: ", accountDetails);
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    console.log("User Logged Out");
    setUser(false);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name,
        userInfo.city,
        userInfo.state,
        userInfo.phone
      );

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password1
      );

      let accountDetails = await account.get();
      setUser(accountDetails);

      await databases.createDocument(databaseId, collectionId, ID.unique(), {
        userId: accountDetails.$id,
        name: userInfo.name,
        phone: userInfo.phone,
        city: userInfo.city,
        state: userInfo.state,
        role: userInfo.userType,
        email: userInfo.email,
        coordinates: userInfo.coordinates,
      });

      console.log("User profile saved: ");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div className="w-full flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
