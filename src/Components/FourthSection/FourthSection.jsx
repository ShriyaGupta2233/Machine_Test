import React from 'react'
import styles from './FourthSection.module.css'
const FourthSection = () => {
  return (
    <>
      <div className={styles.contanier}>
        <div className={styles.text1}>Our Services</div>

        <div className={styles.text2}>We Build the Future, Today: Websites & Apps with AI Integration</div>

        <div className={styles.Rectangle}>
       <div className={styles.Rectangle1}></div>
         <div className={styles.Rectangle2}>  
            <div className={styles.Rectangle21}>AI Integration</div>
            <div className={styles.Rectangle3}>Development</div>
            <div className={styles.Rectangle4}>Design</div>
            
            <div className={styles.Rectangle5}>AI Integration Services</div>
            <div className={styles.Rectangle6}>We specialize in a range of AI-driven solutions tailored to meet diverse needs.</div>

            <img src='./images/Group 35.png' alt='' className={styles.img1}/>
            <div className={styles.text3}>Chatbots/Virtual Assistants</div>

            <img src='./images/Group 33.png' alt='' className={styles.img2}/>
            <div className={styles.text4}>A/B Testing Optimization</div>

            <img src='./images/Group 18.png' alt='' className={styles.img3}/>
            <div className={styles.text5}>Natural Language Processing (NLP)</div>

             <img src='./images/Clip path.png' alt='' className={styles.img4}/>
            <div className={styles.text6}>User Behavior Analysis</div>

            <img src='./images/Group 31.png' alt='' className={styles.img5}/>
            <div className={styles.text7}>Recommendation Engines</div> 
     
            </div>
        </div>
        
      </div>
    </>
  )
}

export default FourthSection