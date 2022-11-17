import React from "react";

function Hero() {
  return (
    <div className="container">
      <img src="../images/places" alt="beautiful-place" />

      <aside>
        <div className="top-head">
          <img src="../images/location-logo.png" alt="location-logo" />
          <p>Japan</p>
          <p>view on google maps</p>
        </div>
        <div className="main-places">
          <h1>Mount Fuji</h1>
          <p>12 jan, 2021 - 25 jan 2021</p>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Hero;
