import { createContext, useContext, useEffect, useState } from "react";
import { account, databaseId, collectionId, databases } from "./appwriteConfig";
import { ID } from "appwrite";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, [])


    const loginUser = async (userInfo) => {
        setLoading(true);
        console.log('loginUser called with: ', userInfo);
        try {
            let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
            let accountDetails = await account.get();
            setUser(accountDetails);
            console.log("accountDetails: ", accountDetails);
        } catch (error) {
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = async () => {
        await account.deleteSession('current');
        setUser(false);
    };

    const registerUser = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password1,
                userInfo.name,
                userInfo.city,
                userInfo.state,
                userInfo.phone
            )

            await account.createEmailPasswordSession(userInfo.email, userInfo.password1);
            let accountDetails = await account.get();
            setUser(accountDetails);

            const userProfileResponse = await databases.createDocument(
                databaseId,
                collectionId,
                ID.unique(),
                {
                    userId: accountDetails.$id,
                    name: userInfo.name,
                    phone: userInfo.phone,
                    city: userInfo.city,
                    state: userInfo.state,
                    role: userInfo.userType,
                    email: userInfo.email,
                }
            );

            console.log("User profile saved: ", userProfileResponse);

        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }



    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p> loading... </p> : children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
