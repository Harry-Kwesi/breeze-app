import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Searchbar from "../components/searchbar";
import Weather from "../components/weather";
import Cities from "../components/cities";
import Map from "../components/map";
import Settings from "../components/settings";
import Component4 from "../components/settings";

export default function CurrentWeather() {
  const [showComponent, setShowComponent] = useState(<Weather />);

  const handleSidebarButtonClick = (buttonName) => {
    switch (buttonName) {
      case "weather":
        setShowComponent(<Weather />);
        break;
      case "cities":
        setShowComponent(<Cities />);
        break;
      case "map":
        setShowComponent(<Map />);
        break;
      case "settings":
        setShowComponent(<Settings />);
        break;
      default:
        setShowComponent(<Weather />);
    }
  };

  return (
    <div className="mainwrapper">
      <div className="weatherInfoWrapper">
        <div className="box-left">
          <Sidebar onButtonClick={handleSidebarButtonClick} />
        </div>
        <div className="box-center">
          <Searchbar />
          <div>{showComponent}</div>
        </div>
      </div>
    </div>
  );
}
