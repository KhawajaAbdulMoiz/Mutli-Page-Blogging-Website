import styles from '@/app/RecentPost/Recent-Post.module.css';
import '@/app/OurPosts2/OurPosts2.module.css'
import React from 'react'
import Image from 'next/image';

function Blogs2() {
  return (
    <>
    <div>
    <h1 className={styles.main_heading}>Our Recent Post</h1>  {/* Imported From Recent-Post.module.css */}
    </div>
    <div className='flex mt-10 hidden md:block md:flex md:flex-row'>
   
      <Image
                src="/Container.jpg"
                alt="Logo"
                width={712}
                height={456}
                className='ml-[12%] sm:w-[286.24px] sm:h-[300px] md:w-[386.24px] md:h-[300px] md:mt-[15%] lg:w-[712px] lg:h-[256px] lg:mt-[4%]'


            />
     <div className='mt-12 p-8 w-1/2'>
                <div className={styles.contianer2}>
                    <h4 className={styles.recent_post_text}>Developement</h4>
                    <h2 className={styles.recent_post_heading}>How to make a Game look more attractive with New <br />VR & AI Technology</h2>
                    <h3 className={styles.recent_post_text}>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and  <br />communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools  <br />and resources that enable others, we’re committed to making AI accessible to everyone.
                    </h3>
                    <button className={styles.rp__button}>
                        Read More
                    </button>
                </div>
            </div>
    </div>
    
    </>
  )
}

export default Blogs2


