"use client"
import React from 'react';
import Image from 'next/image';
import styles from './Nabar.module.css';
import Link from 'next/link';
import Loading from './loading';
import { useEffect, useState } from 'react';


function Navbar() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    
    <div className={styles.navbar}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway&display=swap"/>
      <Image 
        src="/logo.png"  
        alt="Logo"
        width={100}   
        height={100} 
        className={styles.navbar__image}
      />
      
      <ul className={styles.navbar__ul}>
      <Link href="/" onClick={handleLoading}>
      <li className={styles.navbar__li}>Home</li>
      </Link>
        <Link href="/Blogs" onClick={handleLoading}>
        <li className={styles.navbar__li}>Blog</li>
        </Link>
        
        <li className={styles.navbar__li}>About</li>
      </ul>
      <Link href="/Contact" onClick={handleLoading}>
      <button className={styles.navbar__button}>
        Contact Us
      </button>
      </Link>
      
    </div>
  );
}

export default Navbar;
