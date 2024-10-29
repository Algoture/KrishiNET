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
      center: [77.61648476788898, 12.931423492103944],
      zoom: 15,
    });
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div
        id="map"
        style={{ width: "100%", height: "500px", marginLeft: "15rem" }}
      ></div>
    </div>
  );
};

export default OlaMap;
