import React, { useState } from "react";
import { useContext } from "react";
import { OriginContext } from "../context/DataContext";
import styles from "./../styles/Search.module.scss";

const AirportsDisplay = (props) => {
  const data = props.item;

  return (
    <div>
      <button
        className={styles.airportsDisplay}
        onClick={() => {
          props.setHide("none");
          props.dataTransfer(data.PlaceId);
        }}
      >
        {data.PlaceName} ({data.PlaceId})
      </button>
    </div>
  );
};

export default AirportsDisplay;
