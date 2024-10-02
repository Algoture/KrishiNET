const FarmerDashboard = ({ user }) => {
  return (
    <div className="bg-primary text-black w-full">
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-8 ">
          <h1 className="text-3xl font-bold">
            Krishi<span className=" text-accent">NET</span>
          </h1>
          <div className="flex  justify-center ">
            <div
              className="flex items-center bg-green-300  rounded-full px-4 py-2"
              style={{ height: "50px", width: "500px" }}
            >
              <span>Solapur, Maharashtra</span>
            </div>
            <div className="relative">
              <input
                className="bg-green-300 rounded-full  text-gray-800 pl-10 focus:outline-none"
                placeholder="Search..."
                type="text"
                style={{ height: "50px", width: "500px" }}
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl  font-semibold">Categories</h2>
          <div className="flex space-x-4 mt-2">
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
            <button className=" bg-green-300 rounded-full px-4 py-2 flex items-center space-x-2">
              <img
                alt="Grains"
                className=" rounded-full   object-cover "
                width="50"
                height="50"
                src="https://th.bing.com/th/id/OIP.llTF-y5BU9FhKOj6Voom3QHaE8?rs=1&pid=ImgDetMain"
              />
              <span>Grains</span>
            </button>
            <button className=" bg-green-300 rounded-full px-4 py-2 flex items-center space-x-2">
              <img
                alt="Herbs"
                className="rounded-full"
                width="50"
                height="50"
                src="https://www.rd.com/wp-content/uploads/sites/2/2016/06/09-medicinal-herbs-you-can-grow-parsley.jpg"
              />
              <span>Herbs</span>
            </button>
            <button className=" bg-green-300 rounded-full px-4 py-2 flex items-center space-x-2">
              <img
                alt="Veggies"
                className="rounded-full object-cover"
                width="50"
                height="50"
                src="https://th.bing.com/th/id/R.e394aab04be6ce06864ded3ecda3f7e3?rik=LA2FsUbL3ciLww&riu=http%3a%2f%2fbettervitamin.com%2fwp-content%2fuploads%2f2013%2f07%2fvegetables.jpg&ehk=gCQpnbhGj9r966HCSotxcRHm6R%2b6tVvVINF%2b2WpMHdo%3d&risl=&pid=ImgRaw&r=0"
              />
              <span>Veggies</span>
            </button>
            <button className=" bg-green-300 rounded-full px-4 py-2 flex items-center space-x-2">
              <img
                alt="Dairy"
                className="rounded-full object-cover"
                width="50"
                height="50"
                src="https://mishry.com/wp-content/uploads/2020/08/best-dairy-products-1024x768.png"
              />
              <span>Dairy</span>
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl  font-semibold">Browse Products</h2>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <div className=" text-black shadow-lg  rounded-lg p-3 border-2">
              <img
                alt="Product"
                className="w-full h-42 object-cover rounded-lg"
                src="https://th.bing.com/th/id/OIP.691Hw6NXrfwl4cskWAja_QHaFj?rs=1&pid=ImgDetMain"
              />
              <h3 className="text-lg font-semibold mt-2"> Tomatos</h3>
              <p className="mt-1">Description of the product.</p>
              <p className="mt-1 text-xl font-semibold">10 ₹/kg</p>
              <button className="bg-green-700 text-white rounded-full px-4 py-2 mt-2"></button>
            </div>
            <div className=" text-black shadow-lg rounded-lg p-3  border-2 ">
              <img
                alt="Product"
                className="w-full h-42 object-cover rounded-lg"
                src="https://th.bing.com/th/id/OIP.691Hw6NXrfwl4cskWAja_QHaFj?rs=1&pid=ImgDetMain"
              />
              <h3 className="text-lg font-semibold mt-2"> Tomatos</h3>
              <p className="mt-1">Description of the product.</p>
              <p className="mt-1 text-xl font-semibold">10 ₹/kg</p>
              <button className="bg-green-700 text-white rounded-full px-4 py-2 mt-2"></button>
            </div>
            <div className=" text-black  shadow-lg rounded-lg p-3  border-2">
              <img
                alt="Product"
                className="w-full h-42 object-cover rounded-lg"
                src="https://th.bing.com/th/id/OIP.alMIPKoYmvrpVDhi5OEzsAHaE7?rs=1&pid=ImgDetMain"
              />
              <h3 className="text-lg font-semibold mt-2"> Wheat</h3>
              <p className="mt-1">Description of the product.</p>
              <p className="mt-1 text-xl font-semibold">40 ₹/kg</p>
              <button className="bg-green-700 text-white rounded-full px-4 py-2 mt-2"></button>
            </div>
            <div className=" text-black  shadow-lg rounded-lg p-3  border-2">
              <img
                alt="Product"
                className="w-full h-42 object-cover rounded-lg"
                src="https://th.bing.com/th/id/OIP.alMIPKoYmvrpVDhi5OEzsAHaE7?rs=1&pid=ImgDetMain"
              />
              <h3 className="text-lg font-semibold mt-2"> Sorghum / जुवार</h3>
              <p className="mt-1">Description of the product.</p>
              <p className="mt-1 text-xl font-semibold">35 ₹/kg</p>
              <button className="bg-green-700 text-white rounded-full px-4 py-2 mt-2"></button>
            </div>
            <div className=" text-black shadow-lg rounded-lg p-3  border-2">
              <img
                alt="Product"
                className="w-full h-42 object-cover rounded-lg"
                src="https://morningchores.com/wp-content/uploads/2020/04/Growing-Rice-Planting-Guide-Care-Problems-and-Harvest-FB.jpg"
              />
              <h3 className="text-lg font-semibold mt-2"> Rice</h3>
              <p className="mt-1">Description of the product.</p>
              <p className="mt-1 text-xl font-semibold">32 ₹/kg</p>
              <button className="bg-green-700 text-white rounded-full px-4 py-2 mt-2"></button>
            </div>
            <div className=" text-black shadow-lg rounded-lg p-3  border-2">
              <img
                alt="Product"
                className="w-full h-42 object-cover rounded-lg"
                src="https://th.bing.com/th/id/OIP.k2aJqiSfJfhewRdAOri4dAAAAA?rs=1&pid=ImgDetMain"
              />
              <h3 className="text-lg font-semibold mt-2"> onions</h3>
              <p className="mt-1">Description of the product.</p>
              <p className="mt-1 text-xl font-semibold">35 ₹/kg</p>
              <button className="bg-green-700 text-white rounded-full px-4 py-2 mt-2"></button>
            </div>
            <div className=" text-black  shadow-lg rounded-lg p-3  border-2">
              <img
                alt="Product"
                className="w-full h-42 object-cover rounded-lg"
                src="https://th.bing.com/th/id/OIP.UREqz5NFjBzlr6sWlo3rPwHaE7?rs=1&pid=ImgDetMain"
              />
              <h3 className="text-lg font-semibold mt-2"> potato</h3>
              <p className="mt-1">Description of the product.</p>
              <p className="mt-1 text-xl font-semibold">20 ₹/kg</p>
              <button className="bg-green-700 text-white rounded-full px-4 py-2 mt-2"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
