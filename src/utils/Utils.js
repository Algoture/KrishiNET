// Haversine Formula:
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

// Post Date:
export const formatTimeAgo = (dateString) => {
  const timeDifference = Date.now() - new Date(dateString).getTime();
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  return hours < 24
    ? `${hours} hours ago`
    : new Date(dateString).toLocaleDateString();
};
