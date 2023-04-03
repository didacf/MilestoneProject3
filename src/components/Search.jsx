import React from 'react'
import styles from './../styles/Search.module.scss'
import { useState } from 'react'
import axios from 'axios'

const Search = () => {

  let reqData = {
  
      method: 'GET',
      url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
      params: {
        adults: '1',
        currency: 'USD',
        countryCode: 'US',
        market: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_API_HOST
      }
    }

    const [inputs, setInputs] = useState({})

    const [flights, setFlights] = useState({})

    const [reqData2, setreqData2] = useState({
      method: 'GET',
      url: 'https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails',
      params: {
        itineraryId: '',
        legs: '[{"origin":"LOND","destination":"NYCA","date":"2023-02-07"},{"date":"2023-02-14","destination":"LOND","origin":"NYCA"}]',
        adults: '1',
        currency: 'USD',
        countryCode: 'US',
        market: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_API_HOST
      }
    })
  

    function handleSubmit(e){
    e.preventDefault();
    console.log(inputs)
    reqData.params.origin = inputs.origin
    reqData.params.destination = inputs.destination
    reqData.params.date = inputs.date
    reqData.params.returnDate = inputs.returnDate
    console.log(reqData)
    axios.request(reqData).then(
      (response) => {
        console.log(response.data);
        setFlights(response.data)
      }
    ).catch(function (error) {
      console.error(error);
    })
    /*.then(axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    }))*/
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e, inputs)} className={styles.form}>
        <input className={styles.form__item} type={"text"} placeholder='From'
          value = {inputs.origin}
          onChange={e => setInputs({...inputs, origin: e.target.value})}
        />
        <input className={styles.form__item} type={"text"} placeholder='To'
          value = {inputs.destination}
          onChange={e => setInputs({...inputs, destination: e.target.value})}
        />
        <input className={styles.form__date} type={"date"} placeholder='Depart Date'
          value = {inputs.date}
          onChange={e => setInputs({...inputs, date: e.target.value})}
        />
        <input className={styles.form__date} type={"date"} placeholder='Return Date'
          value = {inputs.returnDate}
          onChange={e => setInputs({...inputs, returnDate: e.target.value})}
        />
        <input type={"submit"} value={"Submit"}/>
      </form>
      

    </div>
  )
}

export default Search