export const calculateDistance = (coord1, coord2) => {
  const R = 6371;
  const dLat = ((coord2[0] - coord1[0]) * Math.PI) / 180;
  const dLon = ((coord2[1] - coord1[1]) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coord1[0] * Math.PI) / 180) *
      Math.cos((coord2[0] * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const fetchUserData = async ({ name, olaApiKey }) => {
  try {
    const user = await fetch(
      `https://api.olamaps.io/places/v1/geocode?address=${name}&api_key=${olaApiKey}`
    );
    const userData = await user.json();
    const { lat, lng } = userData.geocodingResults[0].geometry.location;
    const farmerCoordinates = [lat, lng];
    const buyerCoordinates = [18.524099921414436, 73.8587982848159]; //Pune coordinates
    const distance = calculateDistance(buyerCoordinates, farmerCoordinates);
    console.log(`Distance : ${distance.toFixed(2)} km`);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
