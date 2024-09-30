import { Nav } from "../Index";

const Home = () => {
  return (
    <div className="w-screen h-dvh bg-primary">
      <Nav />
      <div className="w-screen h-96 flex justify-center items-center">
        <h1 className="text-7xl text-center text-black font-Poppins">
          Connecting Farmers, Cultivating Prosperity with{" "}
          <span className="text-accent">KrishiNET</span> 
        </h1>
      </div>
    </div>
  );
};

export default Home;
