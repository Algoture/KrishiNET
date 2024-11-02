import { useState } from "react";
import { cropsCategories } from "../../Index";
import { crops } from "../../utils/Data";
const CropCategories = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [category, setCategory] = useState("");
  const visibleCategories = showAllCategories
    ? cropsCategories
    : cropsCategories.slice(0, 7);

  const handleViewMoreClick = () => {
    setShowAllCategories(!showAllCategories);
  };
  const cat = "Fruits";
  const filtered = visibleCategories.filter((p) => p.name.includes(cat));
  //   console.log(filtered);
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="flex w-fit h-fit gap-5 mt-2 flex-wrap">
        {visibleCategories.map((cat, index) => (
          <div
            key={index}
            onClick={() => setCategory(category === cat.name ? "" : cat.name)}
            className={`flex flex-col items-center bg-accent gap-2 p-3 rounded-lg group cursor-pointer ${
              category === cat.name ? "" : "bg-primary"
            }`}
          >
            {typeof cat.src === "string" ? (
              <img
                alt={cat.name}
                width="50"
                height="50"
                src={cat.src}
                className="group-hover:scale-125 transition-all ease-in-out"
              />
            ) : (
              <cat.src />
            )}
            <h2 className="text-black">{cat.name}</h2>
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
      {(category ? crops.filter((i) => i.category === category) : crops).map(
        (i) => (
          <div key={i.id} className="w-fit">
            <div className="bg-orange-500 flex flex-col m-4">
              <h1>Category : {i.category}</h1>
              <h1>Crop Name : {i.cropname}</h1>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CropCategories;
