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
    <div className=" bg-white p-2 md:p-6
    flex flex-col gap-3 border rounded-lg
    hover:scale-105 hover:shadow-lg
    transition-all ease-in-out cursor-pointer  ">
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          className="h-100 w-full object-cover"
          src={img}
          alt={name}
        />
      </div>
      <div className="mt-4">
        <h5 className="text-lg font-bold text-gray-900">
          {name}
        </h5>
        <div className="flex items-center mt-2">
          <Rating
            name="read-only"
            value={rating}
            precision={0.1}
            size="small"
            readOnly
          />
        </div>
        <div className="flex items-center mt-2">
          <PersonIcon className="text-gray-600" />
          <span className="text-sm text-gray-800 ml-1">
            {farmerName}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <PlaceIcon className="text-gray-600" />
          <span className="text-sm text-gray-800 ml-1">
            {location}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-sm font-semibold text-gray-600">
            Upto {quantity}kg
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className=" text-2xl font-semibold text-green-700">
            ₹{price}/kg
          </span>
          <Button
            variant="contained"
            sx={{ bgcolor: "#70e000" }}
            size="small"
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
