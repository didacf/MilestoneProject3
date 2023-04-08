import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AirportsDisplay from "./AirportsDisplay";
import styles from "./../styles/Search.module.scss";

const SearchLocation = (props) => {
  const term = props.item;

  const [airports, setAirports] = useState({});

  const [hide, setHide] = useState("");

  const options = {
    method: "GET",
    url: "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport",
    params: { query: term },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
    },
  };

  useEffect(() => {
    console.log(term.length);
    if (term.length < 4) {
      setHide("hidden");
    } else {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setHide("inherit");
          setAirports(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [term]);

  return (
    <div
      className={styles.locationContainer}
      style={{ display: hide, left: props.left }}
    >
      {airports.data ? (
        airports.data.map((item, index) => {
          return (
            <AirportsDisplay
              item={item}
              key={index}
              dataTransfer={props.dataTransfer}
              setHide={setHide}
            />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchLocation;
