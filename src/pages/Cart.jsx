import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import CartDisplay from "../components/CartDisplay";

const Cart = (props) => {
  const [flights, setFlights] = useState('');

  async function get_cart_data() {
    const response = await fetch("http://localhost:5000/access_cart", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setFlights(data);
  }

  useEffect(() => {
    get_cart_data();
  }, []);

  return (
    <div>
      <NavBar />
      {flights ? (
        flights.map((item, index) => (
          <CartDisplay
            item={item}
            key={index}
            buttonText="Remove from Cart"
          />
        ))
      ) : (
        <div></div>
      )}
      <button>Check out</button>
    </div>
  );
};

export default Cart;
