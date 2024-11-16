import React from 'react';
import Image from 'next/image';
import styles from './Nabar.module.css';
import Link from 'next/link';



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
      <Link href="/">
      <li className={styles.navbar__li}>Home</li>
      </Link>
        <Link href="/Blogs">
        <li className={styles.navbar__li}>Blog</li>
        </Link>
        
        <li className={styles.navbar__li}>About</li>
      </ul>
     
      <button className={styles.navbar__button}>
        Contact Us
      </button>
      
    </div>
  );
}

export default Navbar;
