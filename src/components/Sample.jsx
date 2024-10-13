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
    <div className="rounded-xl shadow-box">
      <div className="post-header">
        <div className="flex items-center mt-2">
          <PersonIcon className="text-gray-600" />
          <span className="text-sm text-gray-800 ml-1">{name}</span>
        </div>
        <p className="text-black text-2xl">{cropName}</p>
        <p className="text-gray-600">{role}</p>
      </div>
      <p className="post-description">{description}</p>
      {/* <p className="post-date pl-2">
        {new Date(post.$createdAt).toLocaleString()}
      </p> */}

      <p className="text-gray-600">Category: {category}</p>
      <div className="w-full overflow-hidden rounded-lg p-2">
        {fileUrl && (
          <img
            src={`https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${fileUrl}/view?project=krishinet`}
            alt={description}
            className=" rounded-xl h-full w-full object-cover"
            onClick={() =>
              openModal(
                `https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${fileUrl}/view?project=krishinet`
              )
            }
          />
        )}
      </div>
      <div className="flex items-center mt-2">
        <PlaceIcon className="text-gray-600" />
        <span className="text-sm text-gray-800 ml-1">
          {city}, {state}
        </span>
      </div>
      <div className="mt-2">
        <span className="text-sm font-semibold text-gray-600">
          Upto {quantity}kg
        </span>
      </div>
      <span className=" text-2xl font-semibold text-green-700">
        ₹{price}/kg
      </span>
      <div className="post-actions">
        <button
          className={`like-button ${
            likes.includes(currentUserId) ? "liked" : ""
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
