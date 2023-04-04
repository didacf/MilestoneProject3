import React from 'react'
import styles from './../styles/FlightCard.module.scss'



const FlightCard = (props) => {
    const sample = props.sample
    console.log(sample)
    let hr = Math.trunc(sample.data[0].legs[0].duration/60)
    let min = sample.data[0].legs[0].duration%60

  return (
    <>
        <div className={styles.container}>
            <div>
            <h3>{sample.data[0].legs[0].origin.name} to {sample.data[0].legs[0].destination.name}</h3>
                <h4>{sample.data[0].legs[0].carriers[0].name}</h4>
                <h4>${sample.data[0].price.amount}</h4>
                <h5>{hr}hr {min}min</h5>
                <h5>{sample.data[0].legs[0].stop_count}</h5>
            </div>
        </div>
    </>
  )
}

export default FlightCard