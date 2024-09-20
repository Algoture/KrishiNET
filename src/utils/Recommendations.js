import { collectionId, databaseId, databases } from "./appwriteConfig";
import { calculateDistance } from "./Utils";
import { Query } from "appwrite";
export const fetchRecommendations = async (user) => {
  try {
    const currentUser = await databases.listDocuments(
      databaseId,
      collectionId,
      [Query.equal("userId", user.$id)]
    );
    if (!currentUser.documents || currentUser.documents.length === 0) {
      console.error("Current user not found!");
      return [];
    }
    const {
      role,
      state: userState,
      coordinates: currentUserCoordinates,
    } = currentUser.documents[0];
    if (!currentUserCoordinates || currentUserCoordinates.length < 2) {
      console.error("Invalid coordinates for the current user!");
      return [];
    }
    const oppositeRole = role === "farmer" ? "buyer" : "farmer";
    const usersWithOppositeRole = await databases.listDocuments(
      databaseId,
      collectionId,
      [Query.equal("role", oppositeRole)]
    );
    if (
      !usersWithOppositeRole.documents ||
      usersWithOppositeRole.documents.length === 0
    ) {
      console.warn("No users found with opposite role.");
      return [];
    }
    const filteredUsers = usersWithOppositeRole.documents
      .filter((doc) => {
        const userCoord = doc.coordinates;
        return (
          doc.state === userState &&
          userCoord &&
          userCoord.length >= 2 &&
          !isNaN(parseFloat(userCoord[0])) &&
          !isNaN(parseFloat(userCoord[1]))
        );
      })
      .map((doc) => {
        const currentUserCoord = [
          parseFloat(currentUserCoordinates[0]),
          parseFloat(currentUserCoordinates[1]),
        ];
        const userCoord = [
          parseFloat(doc.coordinates[0]),
          parseFloat(doc.coordinates[1]),
        ];
        const distance = calculateDistance(currentUserCoord, userCoord);
        return { ...doc, distance };
      });
    const nearbyUsers = filteredUsers.filter((doc) => doc.distance <= 300);
    const sortedByDistance = nearbyUsers.sort(
      (a, b) => a.distance - b.distance
    );

    return sortedByDistance;
  } catch (error) {
    console.error("Error fetching recommendations: ", error);
    return [];
  }
};

export const getRecommendations = async (user, setRecommendations) => {
  if (user) {
    const recommendedUsers = await fetchRecommendations(user);
    setRecommendations(recommendedUsers);
  } else {
    console.error("No user logged in");
  }
};
