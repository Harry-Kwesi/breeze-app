import React from "react";
import "../css/cities.css";
import clearDay from "../assets/animation-ready/clear-day.svg";

export default function Cities() {
  return (
    <div class="cities-container">
      <div class="cities-card-container">
        <div className="cities-card">
          <div className="card-box">
            <div className="icon-city">
              <div className="Icon">
                <img src={clearDay} width={80} height={80} alt="Clear Day" />
              </div>
              <div className="City">
                <div className="iconcity">
                  <p>Madrid</p>
                </div>
                <div className="icontime">
                  <p>10:23</p>
                </div>
              </div>
            </div>
            <div className="temperature">
              <p>31 &#176;</p>
            </div>
          </div>
        </div>
        <div className="todays-forecast"></div>
      </div>

      <div class="box-right">
        <div className="cityDets">
          <div className="detailsCity">
            <div className="detailsCityNameDesc">
              <div className="City">Madrid</div>
              <div className="detailsDesc">
                <p>chance of rain : 0%</p>
              </div>
              <div className="detailsTemp">
                <p>31 &#176;</p>
              </div>
            </div>
            <div className="detailsIcon">
              <img src={clearDay} width={100} height={120} alt="Clear Day" />
            </div>
          </div>
          <div className="forecastToday">
            <div className="forcastTodayTitle">
              <p>TODAY'S FORECAST</p>
            </div>
            <div className="forcastDetailsContainer">
              <div className="forcastDetails">
                <div className="forcastToday">
                  <div className="forcastTodayDetails">
                    <div>6:00 AM</div>
                    <div>
                      <img
                        src={clearDay}
                        width={60}
                        height={60}
                        alt="Clear Day"
                      />
                    </div>
                    <div className="forecastTemp">31 &#176;</div>
                  </div>
                </div>
              </div>
              <div className="forcastDetails">
                <div className="forcastToday">
                  <div className="forcastTodayDetails">
                    <div>6:00 AM</div>
                    <div>
                      <img
                        src={clearDay}
                        width={60}
                        height={60}
                        alt="Clear Day"
                      />
                    </div>
                    <div className="forecastTemp">31 &#176;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="threeDayForecast">
            <div forcastTodayTitle>
              <p>3-Day FORECAST</p>
            </div>
            <div className="threedayForecastDetails">
              <div className="card-details">
                <div className="card-detitems">Today</div>
                <div className="card-detitems">
                  <div className="iconee">
                    <div className="icone">
                      <img
                        src={clearDay}
                        width={40}
                        height={40}
                        alt="Clear Day"
                      />
                    </div>
                    <div className="sunny">sunny</div>
                  </div>
                </div>
                <div className="card-detitems">36/21</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
