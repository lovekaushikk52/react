import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.logo}>WELCOME TO HOME PAGE!!!</h3>
        <button classname={styles.btn} >login</button>
      </div>
    </div>
  )
}

export default Header
