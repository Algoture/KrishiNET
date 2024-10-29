import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";

const Sample = ({
  name,
  role,
  price,
  cropName,
  handleLike,
  description,
  category,
  fileUrl,
  likes,
  city,
  state,
  quantity,
  currentUserId,
  postId,
}) => {
  return (
    <div className="rounded-xl shadow-box w-96 bg-white p-4 space-y-3">
      <div className="post-header">
        <div className="flex items-center">
          <PersonIcon className="text-gray-600" />
          <span className="text-sm font-medium text-gray-800 ml-2">{name}</span>
        </div>
        <p className="text-xl font-semibold text-gray-900 mt-1">{cropName}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>

      <p className="text-sm text-gray-700 mt-2">{description}</p>

      <p className="text-sm text-gray-500 mt-2">
        Category: <span className="font-medium">{category}</span>
      </p>

      <div className="w-full overflow-hidden rounded-lg mt-3">
        {fileUrl && (
          <img
            src={`https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${fileUrl}/view?project=krishinet`}
            alt={description}
            className="rounded-lg h-48 w-full object-cover cursor-pointer"
            onClick={() =>
              openModal(
                `https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${fileUrl}/view?project=krishinet`
              )
            }
          />
        )}
      </div>

      <div className="flex items-center mt-2 space-x-1">
        <PlaceIcon className="text-gray-600" />
        <span className="text-sm text-gray-800">
          {city}, {state}
        </span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-semibold text-gray-600">
          Upto {quantity}kg
        </span>
        <span className="text-lg font-semibold text-green-700">
          ₹{price}/kg
        </span>
      </div>

      <div className="post-actions mt-4">
        <button
          className={`like-button flex items-center text-sm font-medium transition-all duration-300 ${
            likes.includes(currentUserId)
              ? "text-red-500 animate-pop"
              : "text-gray-600"
          }`}
          onClick={() => handleLike(postId)}
        >
          {likes.includes(currentUserId) ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
};

export default Sample;
