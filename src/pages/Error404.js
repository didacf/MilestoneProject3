import React from 'react'
import NavBar from '../components/NavBar'
import styles from '../styles/Error404.module.scss'

const Error404 = () => {
  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <h1 className={styles.content}>Error404</h1>
        <h2 className={styles.content}>Oops! This Page Does Not Exist!</h2>
      </div>
    </>
  )
}

export default Error404