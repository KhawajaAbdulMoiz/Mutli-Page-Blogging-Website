import React from 'react';
import Image from 'next/image';
import styles from './Nabar.module.css';

function Navbar() {
  return (
    
    <div className={styles.navbar}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway&display=swap" />
      <Image 
        src="/logo.png"  
        alt="Logo"
        width={100}   
        height={100}  
        className={styles.navbar__image}
      />
      
      <ul className={styles.navbar__ul}>
        <li className={styles.navbar__li}>Blog</li>
        <li className={styles.navbar__li}>About</li>
      </ul>
      
      <button className={styles.navbar__button}>
        Contact Us
      </button>
    </div>
  );
}

export default Navbar;
