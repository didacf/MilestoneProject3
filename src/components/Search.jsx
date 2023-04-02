import React from 'react'
import styles from './../styles/Search.module.scss'

const Search = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input className={styles.form__item} type={"text"} placeholder='From'/>
        <input className={styles.form__item} type={"text"} placeholder='To'/>
        <input className={styles.form__date} type={"date"} placeholder='Depart Date'/>
        <input className={styles.form__date} type={"date"} placeholder='Return Date'/>
        <input type={"submit"} value={"Submit"}/>
      </form>
    </div>
  )
}

export default Search