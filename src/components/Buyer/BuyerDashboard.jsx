import cropData from "../../utils/Data";
import SearchBar from "../UI/SearchBar";
import CropCard from "./CropCard";

const BuyerDashboard = ({ user }) => {
  const categories = [
    {
      name: "Fruits",
      src: "https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678972/003_orange_984217ca48.png",
    },
    {
      name: "Grains",
      src: "https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678972/006_wheat_sack_80f6f0f6db.png",
    },
    {
      name: "Herbs",
      src: "https://www.rd.com/wp-content/uploads/sites/2/2016/06/09-medicinal-herbs-you-can-grow-parsley.jpg",
    },
    {
      name: "Veggies",
      src: "https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678972/004_vegetables_5494192878.png",
    },
    {
      name: "Dairy",
      src: "https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678972/005_milk_d2274408c0.png",
    },
    {
      name: "Spices",
      src: "https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-pieces-of-cooking-spices-png-png-image_11591592.png",
    },
    {
      name: "lentils",
      src: "https://png.pngtree.com/png-vector/20231101/ourmid/pngtree-red-lentils-in-a-bowl-from-above-protein-png-image_10389107.png",
    },
  ];

  return (
    <div className="bg-primary text-black w-full">
      <div className="p-4 w-full">
        <div className="flex items-center mb-8 justify-between">
          <h1 className="text-3xl font-bold">
            Krishi<span className=" text-accent">NET</span>
          </h1>
          <div className="relative">
            <SearchBar />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-green-600 font-bold text-2xl">
            Shop by Category
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-accent"
              >
                <img
                  alt={category.name}
                  width="50"
                  height="50"
                  src={category.src}
                  className="group-hover:scale-125 transition-all ease-in-out"
                />
                <h2 className="text-green-800 group-hover:text-white">
                  {category.name}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-green-600 font-bold text-2xl">
            Our Popular Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            {cropData.map((crop, index) => (
              <CropCard
                key={index}
                img={crop.image}
                name={crop.name}
                price={crop.price}
                farmerName={crop.farmerName}
                location={crop.location}
                quantity={crop.quantity}
                rating={crop.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
