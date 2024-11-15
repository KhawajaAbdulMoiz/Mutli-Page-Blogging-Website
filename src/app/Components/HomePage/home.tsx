import React from 'react'
import styles from './Home.module.css';
import Image from 'next/image';
function HomePage() {
  return (
    <div className={styles.main}>
        <div>
        <h3 className={styles.main_subtext}>Featured Post</h3>
        <h1 className={styles.main_heading}>How AI will<br/> Change the Future</h1>
        <h3 className={styles.main_subtext}>The future of AI will see home robots having enhanced<br/> intelligence, increased capabilities, and becoming more <br/>personal and possibly cute. For example, home robots<br/> will overcome navigation, direction</h3>
       <button className={styles.navbar__button}>
        Read More
      </button>
       </div>
       <div>
      <Image 
        src="/robot.png"  
        alt="Logo"
        width={208}   
        height={576}  
        className={styles.main_image}
      />
       </div>
      
    </div>
  )
}

export default HomePage
