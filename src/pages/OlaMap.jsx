import React, { useEffect } from "react";
import "../OlaMaps/OlaMapsWebSDK/style.css";
import { OlaMaps } from "../OlaMaps/OlaMapsWebSDK/olamaps-js-sdk.es.js";
import { olaApiKey } from "../utils/OlaMaps";
import SideBar from "../components/UI/SideBar.jsx";

const OlaMap = () => {
  useEffect(() => {
    const olaMaps = new OlaMaps({
      apiKey: olaApiKey,
    });

    olaMaps.init({
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard-mr/style.json",
      container: "map",
      center: [75.9064, 17.6599],
      zoom: 15,
    });
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div id="map" className="w-full h-screen lg:ml-56"></div>
    </div>
  );
};

export default OlaMap;
