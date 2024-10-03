import cropData from "../../utils/Data";
import SearchBar from "../SearchBar";
import CropCard from "./CropCard";
const BuyerDashboard = ({ user }) => {
  return (
    <div className="bg-primary text-black w-full ">
      <div className="p-4 w-full">
        <div className="flex items-center mb-8 ">
          <h1 className="text-3xl font-bold">
            Krishi<span className=" text-accent">NET</span>
          </h1>
          <div className="flex  justify-center ">
            <div className="flex items-center bg-green-300  rounded-full px-4 py-2">
              <span>Solapur, Maharashtra</span>
            </div>
            <div className="relative">
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl  font-semibold">Categories</h2>
          {/* <div className="flex space-x-4 mt-2">
            <button className=" bg-green-300 rounded-full px-4 py-2 flex items-center space-x-2">
              <img
                alt="Fruits"
                className="rounded-full object-cover"
                width="50"
                height="50"
                src="https://th.bing.com/th/id/R.e664b16f26647216cf8727f375b02af6?rik=WNhj5SbsXtnbwA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f2%2f2f%2fCulinary_fruits_front_view.jpg&ehk=sr%2ffErwRNU43LX0Q2RKHZov%2fci7QtR2%2fH0MZsT6o%2fC4%3d&risl=1&pid=ImgRaw&r=0"
              />
              <span>Fruits</span>
            </button>
          </div> */}
        </div>
        <div className="w-full">
          <h2 className="text-xl  font-semibold">Browse Products</h2>
          <div className="w-full flex gap-4 flex-wrap">
            {cropData.map((crop, index) => (
              <CropCard
                key={index}
                img={crop.image}
                name={crop.name}
                price={crop.price}
                farmerName={crop.farmerName}
                location={crop.location}
                rating={crop.rating}
                quantity={crop.quantity}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
