import React, { useState } from "react";
import { useContext } from "react";
import { OriginContext } from "../context/DataContext";

const AirportsDisplay = (props) => {
  const data = props.item;
  const [term, setTerm] = useState(useContext(OriginContext));

  return (
    <button
      onClick={() => {
        setTerm(data.PlaceId);
        console.log(term);
      }}
    >
      {data.PlaceId} {data.PlaceName}
    </button>
  );
};

export default AirportsDisplay;
