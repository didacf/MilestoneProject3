import React from 'react'
import NavBar from '../components/NavBar'
import styles from "./Login.module.scss"

const Login = () => {
  return (
    <>
        <div>
            <h2>Login</h2>
            <form className={styles.form}>
                <label for="email">email:</label>
                <br/>
                <input type={"text"} id="email" name="email"/>
                <br/>
                <label for="password">Password:</label>
                <br/>
                <input type={"text"} id="password" name="password"/>
                <br/>
                <input type={"submit"} value="Login"/>
            </form>
        </div>
    </>
  )
}

export default Login