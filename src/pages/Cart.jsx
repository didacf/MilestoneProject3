import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CartDisplay from "../components/CartDisplay";

const Cart = () => {
  const [flights, setFlights] = useState();

  return (
    <div>
      <NavBar />
      {flights.data ? (
        flights.data.map((item, index) => {
          return (
            <CartDisplay
              item={item}
              key={index}
              buttonText="Remove from Cart"
            />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
