import React from 'react'
import styles from './ThirdSection.module.css'
const ThirdSection = () => {
  return (
    <>
      <div className={styles.contanier}>
        <div className={styles.text1}> Our Work Process To Make Your <span> Business Solution </span></div>
        <div className={styles.text2}>Our streamlined process ensures a fast and efficient journey. We'll guide you through each step, from initial concept to final launch.</div>
        <div className={styles.text3}>Idea Conceptualization <span className={styles.span2}>and Research</span></div>
        <div className={styles.text4}>Strategic Planning <span className={styles.span2}>and Feature Set</span></div>
        <div className={styles.text5}>Wireframing <span className={styles.span2}>and Prototyping </span></div>
        <div className={styles.text6}>Development</div>
        <div className={styles.text7}>Testing and <span className={styles.span2}>Quality Assurance</span></div>
        <div className={styles.text8}>Deployment</div>

        <div className={styles.Rectangle}>
          <div className={styles.one}>
            <div className={styles.elipse1}>
              <div className={styles.elipse2}><span>1</span></div>
            </div>
          </div>
          <div className={styles.Rectangle1}>
            <div className={styles.two}> <span>2</span> </div>
          </div>
          <div className={styles.Rectangle2}>
            <div className={styles.three}> <span>3</span> </div>
          </div>
          <div className={styles.Rectangle3}>
            <div className={styles.four}> <span>4</span> </div>
          </div>
          <div className={styles.Rectangle4}>
            <div className={styles.five}> <span>5</span> </div>
          </div>
          <div className={styles.Rectangle5}>
            <div className={styles.six}> <span>6</span> </div>
          </div>
          <div className={styles.text9}>Idea Conceptualization <span>and Research</span> </div>
          <div className={styles.text10}>
          • Market Analysis:<span>Research the target audience, competitors, market trends, and customer preferences.</span><br/>
          • Defining Goals:<span>Understand the purpose of the app, unique selling points, and the problems it aims to solve.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdSection