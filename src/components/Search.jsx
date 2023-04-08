import React from "react";
import styles from "./../styles/Search.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import FlightCard from "./FlightCard";
import SearchLocation from "./SearchLocation";

const Search = () => {
  let reqData = {
    method: "GET",
    url: "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights",
    params: {
      adults: "1",
      currency: "USD",
      countryCode: "US",
      market: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
    },
  };

  const [inputs, setInputs] = useState({});

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [flights, setFlights] = useState({});

  const dataTransfer = (value) => {
    setOrigin(value);
    console.log(origin);
  };
  const dataTransfer2 = (value) => {
    setDestination(value);
    console.log(destination);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setFlights({});
    console.log(inputs);
    reqData.params.origin = origin;
    reqData.params.destination = destination;
    reqData.params.date = inputs.date;
    reqData.params.returnDate = inputs.returnDate;
    console.log(reqData);
    axios
      .request(reqData)
      .then((response) => {
        console.log(response.data);
        setFlights(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e, inputs)} className={styles.form}>
        <input
          className={styles.form__item}
          type={"text"}
          placeholder="From"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />

        <input
          className={styles.form__item}
          type={"text"}
          placeholder="To"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          className={styles.form__date}
          type={"date"}
          placeholder="Depart Date"
          value={inputs.date}
          onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
          required
        />
        <input
          className={styles.form__date}
          type={"date"}
          placeholder="Return Date"
          value={inputs.returnDate}
          onChange={(e) => setInputs({ ...inputs, returnDate: e.target.value })}
          required
        />
        <input type={"submit"} value={"Submit"} />
      </form>
      <div style={{ display: "inline-block" }}>
        <SearchLocation item={origin} left="8%" dataTransfer={dataTransfer} />
        <SearchLocation
          item={destination}
          left="35%"
          dataTransfer={dataTransfer2}
        />
      </div>
      <div>
        {flights.data ? (
          flights.data.map((item, index) => {
            return (
              <FlightCard item={item} key={index} buttonText="Add to Cart" />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Search;
