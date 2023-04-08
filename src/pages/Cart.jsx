import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CartDisplay from "../components/CartDisplay";

const Cart = () => {
  const [flights, setFlights] = useState();

  return (
    <div>
      <NavBar />
      {flights ? (
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
      <button>Check out</button>
    </div>
  );
};

export default Cart;
