import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Signup.module.scss";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const [userData, setUserData] = useState({email:'', password:''})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json()
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json()
  
  }

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <form
          onSubmit={(e) => handleSubmit(e, userData)}
          className={styles.form}
        >
          <h2 className={styles.form__title}>Login</h2>
          <input
            type={"text"}
            id="email"
            name="email"
            className={styles.form__item}
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
          <input
            type={"password"}
            id="password"
            name="password"
            className={styles.form__item}
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />
          <div className={styles.form__buttonContainer}>
            <input
              type={"submit"}
              className={styles.form__button}
              value="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
