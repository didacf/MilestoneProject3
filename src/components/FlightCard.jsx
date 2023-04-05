import React from 'react'
import styles from './../styles/FlightCard.module.scss'



const FlightCard = (props) => {
    const data = props.item
    console.log(props)
    let hr = Math.trunc(data.legs[0].duration/60)
    let min = data.legs[0].duration%60

  return (
    <>
        <div className={styles.container}>
            <div>
            <h3>Departure {data.legs[0].origin.name} to {data.legs[0].destination.name}</h3>
                <h4>{data.legs[0].carriers[0].name}</h4>
                <h4>${data.price.amount}</h4>
                <h5>{hr}hr {min}min</h5>
                <h5>{data.legs[0].stop_count}</h5>
            </div>
            <div>
                <h3>Return {data.legs[1].origin.name} to {data.legs[1].destination.name}</h3>
                <h4>{data.legs[1].carriers[0].name}</h4>
                <h4>${data.price.amount}</h4>
                <h5>{hr}hr {min}min</h5>
                <h5>{data.legs[1].stop_count}</h5>
            </div>
        </div>
    </>
  )
}

export default FlightCard