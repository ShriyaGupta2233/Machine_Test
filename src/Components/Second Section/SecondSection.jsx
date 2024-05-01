import React from 'react'
import styles from './SecondSection.module.css'
const SecondSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text1}> The Future is Here <br/>6 Reasons Why Your Business Needs AI</div>
        <div className={styles.text2}> Increase conversions, streamline workflows, and deliver personalized experiences.</div>
        <div className={styles.Rectangle11}>
          <div className={styles.elipse1}>
            <img src='./images/Clip path group.png' alt='' className={styles.imge}/></div>
            <div className={styles.text3}>Enhance Customer Satisfaction with Personalized Interactions</div>
        </div>
        <div className={styles.Rectangle11}>
        <div className={styles.elipse1}>
            <img src='./images/Clip path group.png' alt='' className={styles.imge}/></div>
            <div className={styles.text3}>Optimize Operations and Increase Efficiency with AI Automation.</div>
        </div>
        <div className={styles.Rectangle11}>
        <div className={styles.elipse1}>
            <img src='./images/Clip path group.png' alt='' className={styles.imge}/></div>
            <div className={styles.text3}>Offer 24/7 customer support, answer FAQs, and handle simple transactions.</div>
        </div>
        <div className={styles.Rectangle12}>
          <div className={styles.elipse1}>
            <img src='./images/Clip path group.png' alt='' className={styles.imge}/></div>
            <div className={styles.text3}>Stay Competitive in the AI-driven marketplace.</div></div>
        <div className={styles.Rectangle13}>
        <div className={styles.elipse1}>
            <img src='./images/Clip path group.png' alt='' className={styles.imge}/></div>
            <div className={styles.text4}>Gain valuable insights from user behavior to make informed business choices.</div>
        </div>
        <div className={styles.Rectangle14}>
        <div className={styles.elipse1}>
            <img src='./images/Clip path group.png' alt='' className={styles.imge}/></div>
            <div className={styles.text4}>Automate repetitive tasks and free up your team to focus on more strategic initiatives</div>
        </div>
        <button className={styles.btn}>Get A Consultation Call </button>
      </div>
    </>
  )
}

export default SecondSection