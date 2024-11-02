import { PlaceIcon, PersonIcon } from "../../Index";
import { Heart, Liked } from "../UI/Icons";

const FeedCard = ({
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
    <div className="rounded-xl shadow-box lg:w-96 w-80 bg-white p-4 flex flex-col">
      <div className="flex items-center gap-2">
        <PersonIcon className="text-black text-2xl" fontSize="25px" />
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-900 mt-2">{cropName}</p>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>

      <span className="inline-block bg-accent text-xs text-black px-2 py-1 rounded-full font-bold w-fit mt-2">
        {category}
      </span>

      {fileUrl && (
        <img
          src={`https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${fileUrl}/view?project=krishinet`}
          alt={description}
          className="rounded-lg h-44 w-full mt-4"
          onClick={() =>
            openModal(
              `https://cloud.appwrite.io/v1/storage/buckets/670a9efd00256f9547db/files/${fileUrl}/view?project=krishinet`
            )
          }
        />
      )}

      <div className="flex items-center justify-between text-sm text-gray-600 font-bold mt-4 -ml-1">
        <div className="flex items-center ">
          <PlaceIcon className="text-gray-500" />
          <span>
            {city}, {state}
          </span>
        </div>
        <span>Quantity: {quantity}kg</span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-bold text-green-600">₹{price}/kg</span>
        <button
          className={`flex items-center text-xl font-medium transition-all ${
            likes.includes(currentUserId) ? "text-red-500" : "text-gray-500"
          }`}
          onClick={() => handleLike(postId)}
        >
          {likes.includes(currentUserId) ? <Liked /> : <Heart />}
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
