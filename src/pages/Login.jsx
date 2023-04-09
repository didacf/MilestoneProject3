import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Signup.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data)
    if(data.logged_in == true){
      Cookies.set("bruh", "yo")
      await navigate("/")
    }
    else{
      alert("INCORRECT USERNAME OR PASSWORD")
    }
    
  };

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
          <div className={styles.redirectContainer}>
            <p className={styles.redirectText}>Don't have an Account?</p>
            <a className={styles.redirect} href="/Signup">
              Sign up
            </a>
          </div>
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
