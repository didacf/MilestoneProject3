import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AirportsDisplay from "./AirportsDisplay";
import { OriginContext } from "../context/DataContext";

const SearchLocation = (props) => {
  const term = useContext(OriginContext);

  const [airports, setAirports] = useState({});

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
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAirports(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [term]);

  return (
    <div>
      {airports.data ? (
        airports.data.map((item, index) => {
          return <AirportsDisplay item={item} key={index} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchLocation;
