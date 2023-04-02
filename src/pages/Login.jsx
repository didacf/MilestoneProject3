import React from 'react'
import NavBar from '../components/NavBar'
import styles from "../styles/Signup.module.scss"

const Login = () => {
  return (
    <>
      <NavBar/>
        <div className={styles.container}>
            
            <form className={styles.form}>
              <h2 className={styles.form__title}>Login</h2>
              <input type={"text"} id="email" name="email" className={styles.form__item} placeholder='Email'/>
              <input type={"text"} id="password" name="password" className={styles.form__item} placeholder='Password'/>
              <div className={styles.form__buttonContainer}>  
                <input type={"submit"} className={styles.form__button} value="Login"/>
              </div>
            </form>
        </div>
    </>
  )
}

export default Login