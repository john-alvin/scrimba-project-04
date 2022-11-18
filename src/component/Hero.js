import React from "react";

function Hero(props) {
  return (
    <div className="container">
      <img src={`../images/${props.imageUrl}`} alt="beautiful-place" />

      <aside>
        <div className="top-head">
          <img src="../images/location-logo.png" alt="location-logo" />
          <p className="location">{props.location}</p>
          <a href={props.googleMapsUrl} target="_blank">
            check it on google map
          </a>
        </div>
        <div className="main-places">
          <h1>{props.title}</h1>
          <p>
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </aside>
    </div>
  );
}

export default Hero;
