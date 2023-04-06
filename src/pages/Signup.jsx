import React from 'react'
import NavBar from '../components/NavBar'
import styles from "../styles/Signup.module.scss"
import { useState, useEffect } from 'react'

const Signup = () => {

  const [userData, setUserData] = useState({firstname:'', lastname:'', email:'', password:''})
  const [isDuplicate, setisDuplicate] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault();


    
    const response = await fetch('http://localhost:5000/add_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json()
    setisDuplicate(data)
    if (isDuplicate==true){
      console.log("DUPLICATE")
    }
    else{console.log(isDuplicate)}

    // fetch('http://localhost:5000/add_user',{
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(existing => setisDuplicate(existing))
    // .catch(error => console.error(error));


  };




  return (
    <>
        <NavBar/>
        <div className={styles.container}>
            
            <form onSubmit={(e) => handleSubmit(e, userData)} className={styles.form}>
            <h2 className={styles.form__title}>Signup</h2>                
                <input type={"text"} id="firstname" name="firstname" className={styles.form__item} placeholder='First Name'
                  value = {userData.firstname}
                  onChange={e => setUserData({...userData, firstname: e.target.value})}
                />                
                <input type={"text"} id="lastname" name="lastname" className={styles.form__item} placeholder='Last Name'
                  value = {userData.lastname}
                  onChange={e => setUserData({...userData, lastname: e.target.value})}  
                /> 
                
                <input type={"text"} id="email" name="email" className={styles.form__item} placeholder='Email'
                  value = {userData.email}
                  onChange={e => setUserData({...userData, email: e.target.value})}
                />                
                <input type={"text"} id="conEmail" name="conEmail" className={styles.form__item} placeholder='Confirm Email'/>                
                
                <input type={"password"} id="password" name="password" className={styles.form__item} placeholder='Password'
                  value = {userData.password}
                  onChange={e => setUserData({...userData, password: e.target.value})}
                />  
                <input type={"password"} id="conPassword" name="conPassword" className={styles.form__item} placeholder='Confirm Password'/>
                <div className={styles.form__buttonContainer}>
                <input type={"submit"} className={styles.form__button} value="Signup"/>
                </div>
            </form>
        </div>
    </>
  )
}

export default Signup