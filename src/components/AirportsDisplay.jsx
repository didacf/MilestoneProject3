import React from "react";

const AirportsDisplay = (props) => {
  const data = props.item;
  return (
    <div>
      {data.PlaceId} {data.PlaceName}
    </div>
  );
};

export default AirportsDisplay;
