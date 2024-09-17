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
    const role = currentUser.documents[0].role;
    const userState = currentUser.documents[0].state;
    const currentUserCoordinates = currentUser.documents[0].coordinates;
    if (!user || !currentUserCoordinates) {
      console.error("User or coordinates not found!");
      return;
    }
    const oppositeRole = role === "farmer" ? "buyer" : "farmer";
    const usersWithOppositeRole = await databases.listDocuments(
      databaseId,
      collectionId,
      [Query.equal("role", oppositeRole)]
    );

    const filteredUsers = usersWithOppositeRole.documents.filter(
      (doc) => doc.state === userState
    );

    const distances = filteredUsers.map((user) => {
      const currentUserCoord = [
        parseFloat(currentUserCoordinates[0]),
        parseFloat(currentUserCoordinates[1]),
      ];
      const userCoord = [
        parseFloat(user.coordinates[0]),
        parseFloat(user.coordinates[1]),
      ];
      const distance = calculateDistance(currentUserCoord, userCoord);
      return { ...user, distance };
    });
    const nearbyUsers = distances.filter((user) => user.distance <= 300);
    const sortedByDistance = nearbyUsers.sort(
      (a, b) => a.distance - b.distance
    );
    return sortedByDistance;
  } catch (error) {
    console.error("Error fetching recommendations: ", error);
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
