import React from "react";
import "../css/weather.css";
import clearDay from "../assets/animation-ready/clear-day.svg";
import rainy from "../assets/animation-ready/rain.svg";
import uvindex from "../assets/animation-ready/uv-index.svg";
import wind from "../assets/animation-ready/wind-beaufort-0.svg";
import thermometer from "../assets/animation-ready/thermometer.svg";
import raindrop from "../assets/animation-ready/raindrop.svg";

export default function Weather() {
  return (
    <div className="weather-details">
      <div className="card-container">
        <div className="main-card-first">
          <div className="grid-container">
            <div className="city-name">
              <h2>Madrid</h2>
            </div>
            <div className="description">
              <p>chance of rain : 0%</p>
            </div>
            <div className="temperature">
              <h2>31 &#176;</h2>
            </div>
            <div className="sun-icon">
              <img src={clearDay} width={120} height={150} alt="Clear Day" />
            </div>
          </div>
        </div>
        <div className="main-card">
          <div className="todays-forecast">
            <div className="todays-text">
              <p>Today's forecast</p>
            </div>
            <div className="todays-details">
              <div>
                <div>6:00 AM</div>
                <div>
                  <img src={rainy} width={60} height={60} alt="Clear Day" />
                </div>
                <div className="todays-temp">31 &#176;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-card">
          <div className="todays-forecast">
            <div className="conditions">
              <div>
                <p>Air condition</p>
              </div>
              <div>
                <p>See more</p>
              </div>
            </div>
            <div className="toDays">
              <div className="child">
                <div className="realFeel">
                  <div className="realfeelchild">
                    <div style={{ marginTop: "6px" }}>
                      <img
                        src={thermometer}
                        width={25}
                        height={25}
                        alt="Clear Day"
                      />
                    </div>
                    <div>
                      <p>Real Feel</p>
                    </div>
                  </div>
                  <div className="realfeeldeg">
                    <p>31 &#176;</p>
                  </div>
                </div>
              </div>
              <div className="child">
                <div className="realFeel">
                  <div className="realfeelchild">
                    <div style={{ marginTop: "6px" }}>
                      <img src={wind} width={25} height={25} alt="Clear Day" />
                    </div>
                    <div>
                      <p>Wind Feel</p>
                    </div>
                  </div>
                  <div className="realfeeldeg">
                    <p>0.2 km/h</p>
                  </div>
                </div>
              </div>
              <div className="child">
                <div className="realFeel">
                  <div className="realfeelchild">
                    <div style={{ marginTop: "7px" }}>
                      <img
                        src={raindrop}
                        width={25}
                        height={25}
                        alt="Clear Day"
                      />
                    </div>
                    <div>
                      <p>Chance of rain</p>
                    </div>
                  </div>
                  <div className="realfeeldeg">
                    <p>0%</p>
                  </div>
                </div>
              </div>
              <div className="child">
                <div className="realFeel">
                  <div className="realfeelchild">
                    <div style={{ marginTop: "6px" }}>
                      <img
                        src={uvindex}
                        width={25}
                        height={25}
                        alt="Clear Day"
                      />
                    </div>
                    <div>
                      <p>UV index</p>
                    </div>
                  </div>
                  <div className="realfeeldeg">
                    <p>3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-right">
        <div className="right-card">
          <h3>7-Day-forecast</h3>
        </div>
        <div className="card-details">
          <div className="card-detitems">Today</div>
          <div className="card-detitems">
            <div className="iconee">
              <div className="icone">
                <img src={clearDay} width={40} height={50} alt="Clear Day" />
              </div>
              <div className="sun">Sunny</div>
            </div>
          </div>
          <div className="card-detitems">36/21</div>
        </div>
      </div>
    </div>
  );
}
