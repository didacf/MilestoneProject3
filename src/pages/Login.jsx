import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Signup.module.scss";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
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
