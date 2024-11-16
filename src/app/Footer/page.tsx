import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div>
            <div>
                <ul className='flex gap-4 text-customPurple text-font justify-center mt-[10%] font-raleway sm: text-[11.49px]'>
                    <li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>Home</li>
                    <li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>Blog</li>
                    <li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>About</li>
                    <li className='transition-all duration-300 ease-in-out cursor-pointer transform hover:translate-y-[-2px]'>Contact</li>

                </ul>
            </div>
            <div className='flex justify-center gap-6 mt-8 mb-8'>

                <Image
                    src="/linkedin.png"
                    alt="Linkedin"
                    width={40}
                    height={40}
                    className='justify-center rounded cursor-pointer sm: w-[28.72px] h-[28.72px]'

                />

                <Image
                    src="/portfolio.png"
                    alt="My Personal Potfolio"
                    width={40}
                    height={40}
                    className='justify-center rounded cursor-pointer sm: w-[28.72px] h-[28.72px]'

                />
                <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className='justify-center rounded cursor-pointer sm: w-[28.72px] h-[28.72px]'

                />


            </div>
            <footer className="text-center py-4 text-customPurple sm: text-[11.49px]">
                <p>&copy; Copyright Ideapeel Inc. 2024. All Rights Reserved.</p>
            </footer>
        </div>

    )
}

export default Footer