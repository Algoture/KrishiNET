import { Button, Rating, PlaceIcon, AccountCircleIcon } from "../../Index";
const RecomCard = ({ user }) => {
  return (
    <div className=" h-full max-w-sm w-[18rem] bg-white shadow-box rounded-lg p-5">
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-center">
          <AccountCircleIcon sx={{ fontSize: 75 }} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 text-center">
          {user.name}
        </h3>
        <div className="flex justify-between text-gray-600 text-base">
          <div className="flex items-center justify-center">
            <PlaceIcon /> <p className="ml-1">{user.city}</p>
          </div>
          <p>{Math.floor(user.distance)} km</p>
        </div>
        <div className="flex">
          <Rating name="read-only" value={4} readOnly />
          (45)
        </div>
        <Button variant="contained" sx={{ bgcolor: "#70e000", color: "white" }}>
          Connect
        </Button>
      </div>
    </div>
  );
};

export default RecomCard;
