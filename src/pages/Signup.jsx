import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Signup.module.scss";
import { useState, useEffect } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    conEmail: "",
    password: "",
    conPassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    if (userData.email !== userData.conEmail) {
      alert("emails do not match");
    } else if (userData.password !== userData.conPassword) {
      alert("passwords do not match");
    }
  }

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <form
          onSubmit={(e) => handleSubmit(e, userData)}
          className={styles.form}
        >
          <h2 className={styles.form__title}>Signup</h2>
          <input
            type={"text"}
            id="fName"
            name="fName"
            className={styles.form__item}
            placeholder="First Name"
            value={userData.fName}
            onChange={(e) =>
              setUserData({ ...userData, fName: e.target.value })
            }
            required
          />
          <input
            type={"text"}
            id="lName"
            name="lName"
            className={styles.form__item}
            placeholder="Last Name"
            value={userData.lName}
            onChange={(e) =>
              setUserData({ ...userData, lName: e.target.value })
            }
            required
          />

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
            type={"text"}
            id="conEmail"
            name="conEmail"
            className={styles.form__item}
            placeholder="Confirm Email"
            value={userData.conEmail}
            onChange={(e) =>
              setUserData({ ...userData, conEmail: e.target.value })
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
          <input
            type={"password"}
            id="conPassword"
            name="conPassword"
            className={styles.form__item}
            placeholder="Confirm Password"
            value={userData.conPassword}
            onChange={(e) =>
              setUserData({ ...userData, conPassword: e.target.value })
            }
            required
          />
          <div className={styles.form__buttonContainer}>
            <input
              type={"submit"}
              className={styles.form__button}
              value="Signup"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
