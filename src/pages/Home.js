import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import styles from '../styles/Home.module.scss'

const Home = () => {

  return (
    <div className={styles.container}>
      <div>
        <NavBar/>
      </div>
      <div>
        <Search/>
        </div>
    </div>
  )
}

export default Home