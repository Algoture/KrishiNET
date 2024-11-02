import { cropsCategories, cropData, SideBar, SearchBar } from "../../Index";
import { useState } from "react";
import CropCard from "./CropCard";

const BuyerDashboard = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const visibleCategories = showAllCategories
    ? cropsCategories
    : cropsCategories.slice(0, 7);

  const handleViewMoreClick = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <>
      <SideBar />
      <div className="bg-primary text-black lg:ml-56">
        <div className="p-4 w-full">
          <div className="flex items-center mb-8 justify-end">
            <div className="relative">
              <SearchBar />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-green-600 font-bold text-2xl">
              Shop by Category
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2">
              {visibleCategories.map((category, index) => (
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

            {cropsCategories.length > 7 && (
              <div className=" mt-4">
                <button onClick={handleViewMoreClick} className=" text-link ">
                  {showAllCategories ? "View Less" : "View More"}
                </button>
              </div>
            )}
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
    </>
  );
};

export default BuyerDashboard;
