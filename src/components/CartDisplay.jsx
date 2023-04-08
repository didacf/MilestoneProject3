import React, { useState } from "react";
import styles from "./../styles/FlightCard.module.scss";

const CartDisplay = (props) => {
  const data = props.item;
  let hr = Math.trunc(data.legs[0].duration / 60);
  let min = data.legs[0].duration % 60;
  let dep = data.legs[0].departure.slice(11, 16);
  let arr = data.legs[0].arrival.slice(11, 16);
  let hr2 = Math.trunc(data.legs[1].duration / 60);
  let min2 = data.legs[1].duration % 60;
  let dep2 = data.legs[1].departure.slice(11, 16);
  let arr2 = data.legs[1].arrival.slice(11, 16);

  const [hide, setHide] = useState("inherit");

  function removeFromCart() {
    setHide("none");
  }

  return (
    <div className={styles.container} style={{ display: hide }}>
      <div className={styles.dep}>
        <div className={styles.flight__carrier}>
          <p>{data.legs[0].carriers[0].name}</p>
        </div>

        <div className={styles.flight__dep}>
          <p>{dep}</p>
          <p>{data.legs[0].origin.alt_id}</p>
        </div>
        <div className={styles.flight__time}>
          <p>
            {hr}hr {min}min
          </p>
          {data.legs[0].stop_count < 1 ? (
            <p>direct</p>
          ) : (
            <p>
              {data.legs[0].stop_count}
              {data.legs[0].stop_count > 1 ? "stops" : "stop"}
            </p>
          )}
        </div>
        <div className={styles.flight__arr}>
          <p>{arr}</p>
          <p>{data.legs[0].destination.alt_id}</p>
        </div>
      </div>
      <div className={styles.ret}>
        <div className={styles.flight__carrier}>
          <p>{data.legs[1].carriers[0].name}</p>
        </div>

        <div className={styles.flight__dep}>
          <p>{dep2}</p>
          <p>{data.legs[1].origin.alt_id}</p>
        </div>
        <div className={styles.flight__time}>
          <p>
            {hr2}hr {min2}min
          </p>
          {data.legs[1].stop_count < 1 ? (
            <p>direct</p>
          ) : (
            <p>
              {data.legs[1].stop_count}
              {data.legs[1].stop_count > 1 ? "stops" : "stop"}
            </p>
          )}
        </div>
        <div className={styles.flight__arr}>
          <p>{arr2}</p>
          <p>{data.legs[1].destination.alt_id}</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <p className={styles.price}>${data.price.amount}</p>
        <button className={styles.button} onClick={removeFromCart}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default CartDisplay;
