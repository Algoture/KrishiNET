import { Button, Rating } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";

export default function CropCard({
  img,
  name,
  price,
  farmerName,
  location,
  rating,
  quantity,
}) {
  return (
    <div className="w-full sm:w-32 lg:w-56 max-w-sm bg-white shadow-box rounded-lg">
      <div className="w-full h-40 overflow-hidden">
        <img
          className="p-2 h-40 w-full rounded-2xl object-cover"
          src={img}
          alt={name}
        />
      </div>
      <div className="px-2 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex items-center">
          <Rating
            name="read-only"
            value={rating}
            precision={0.1}
            size="medium"
            readOnly
          />
        </div>
        <div className="flex items-center mt-2">
          <PersonIcon />
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {farmerName}
          </span>
        </div>
        <div className="flex items-center">
          <PlaceIcon />
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {location}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Upto {quantity}kg
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹{price}/kg
          </span>
          <Button variant="contained" sx={{ bgcolor: "#70e000" }} size="small">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
