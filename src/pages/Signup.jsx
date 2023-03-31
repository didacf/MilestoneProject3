import React from 'react'
import NavBar from '../components/NavBar'
import styles from "../styles/Signup.module.scss"

const Signup = () => {
  return (
    <>
        <NavBar/>
        <div className={styles.container}>
            
            <form className={styles.form}>
            <h2 className={styles.form__title}>Signup</h2>                
                <input type={"text"} id="fName" name="fName" className={styles.form__item} placeholder='First Name'/>                
                <input type={"text"} id="lName" name="lName" className={styles.form__item} placeholder='Last Name'/> 
                
                <input type={"text"} id="email" name="email" className={styles.form__item} placeholder='Email'/>                
                <input type={"text"} id="conEmail" name="conEmail" className={styles.form__item} placeholder='Confirm Email'/>                
                
                <input type={"text"} id="password" name="password" className={styles.form__item} placeholder='Password'/>  
                <input type={"text"} id="conPassword" name="conPassword" className={styles.form__item} placeholder='Confirm Password'/>
                <div className={styles.form__buttonContainer}>
                <input type={"submit"} className={styles.form__button} value="Signup"/>
                </div>
            </form>
        </div>
    </>
  )
}

export default Signup