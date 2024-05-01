import React from 'react'
import styles from './FirstSection.module.css'
const FirstSection = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.Rectangel}></div>
        <div className={styles.text1}>Simply Helping, Integrating  AI, Simplifying Business,</div>
        <div className={styles.Group1}>
            <div className={styles.Rectangle155}></div>
            <div className={styles.Rectangle156}></div>
            <div className={styles.Rectangle157}></div>
            
        </div>
      </div>
      <div className={styles.text2}>Transform Your Online Presence with<span className={styles.span}> AI-Integrated </span> Web and App Solutions</div>
      <div className={styles.text3}>Unlock the Power of Artificial Intelligence , Build Next-Gen Websites & Apps with AI</div>
      <button className={styles.btn1}>Start Free Trial</button>
      <button className={styles.btn2}>Learn More</button>
      <div className={styles.Rectangle2}>
        <div className={styles.text4}>Download Deck</div>
        </div>
    </div>
    </>
  )
}

export default FirstSection