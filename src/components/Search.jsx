import React from "react";
import styles from "./../styles/Search.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import FlightCard from "./FlightCard";
import SearchLocation from "./SearchLocation";
import { OriginContext } from "../context/DataContext";

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

  const [origin, setOrigin] = useState();

  const [flights, setFlights] = useState({});

  useEffect(() => {
    console.log(flights);
  }, [inputs.origin, inputs.destination]);

  function handleSubmit(e) {
    e.preventDefault();
    setFlights({});
    console.log(inputs);
    reqData.params.origin = origin;
    reqData.params.destination = inputs.destination;
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
        />

        <input
          className={styles.form__item}
          type={"text"}
          placeholder="To"
          value={inputs.destination}
          onChange={(e) =>
            setInputs({ ...inputs, destination: e.target.value })
          }
        />
        <input
          className={styles.form__date}
          type={"date"}
          placeholder="Depart Date"
          value={inputs.date}
          onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
        />
        <input
          className={styles.form__date}
          type={"date"}
          placeholder="Return Date"
          value={inputs.returnDate}
          onChange={(e) => setInputs({ ...inputs, returnDate: e.target.value })}
        />
        <input type={"submit"} value={"Submit"} />
      </form>
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
