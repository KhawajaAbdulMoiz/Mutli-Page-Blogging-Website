"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Nabar.module.css';
import Link from 'next/link';
import Loading from './loading';


function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoading =(path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = path;
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
   
      
      <Image 
        src="/Flara.png"  
        alt="Logo"
        width={31.49}   
        height={31.49} 
        className={styles.navbar__image}
      />
      <h1 className='text-Raleway text-[24.19px] font-bold'>Flara</h1>
     
      <ul className={`${styles.navbar__ul} ${styles.desktopOnly}`}>
        <Link href="/" onClick={() => handleLoading('/')}>
          <li className={styles.navbar__li}>Home</li>
        </Link>
        <Link href="/Blogs" onClick={() => handleLoading('/Blogs')}>
          <li className={styles.navbar__li}>Blog</li>
        </Link>
        <li className={styles.navbar__li}>About</li>
      </ul>
      <Link href="/Contact" onClick={() => handleLoading('/Contact')}>
        <button className={`${styles.navbar__button} ${styles.desktopOnly}`}>
          Contact Us
        </button>
      </Link>

      
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={styles.mobileMenuIcon}>
        ☰
      </button>
      {isMobileMenuOpen && (
        <ul className={`${styles.navbar__ul} ${styles.mobileMenu}`}>
          <Link href="/" onClick={() => handleLoading('/')}>
            <li className={styles.navbar__li}>Home</li>
          </Link>
          <Link href="/Blogs" onClick={() => handleLoading('/Blogs')}>
            <li className={styles.navbar__li}>Blog</li>
          </Link>
          <li className={styles.navbar__li}>About</li>
          <Link href="/Contact" onClick={() => handleLoading('/Contact')}>
            <button className={styles.navbar__button}>Contact Us</button>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
