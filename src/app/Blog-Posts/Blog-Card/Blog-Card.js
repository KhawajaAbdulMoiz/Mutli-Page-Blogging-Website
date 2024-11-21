import Image from 'next/image';
import Link from 'next/link';
import AllBlogsSection from './Allblogs';
const BlogCard = ({ image,heading1,heading2,heading3,heading4,heading5,category,title,descriptionBlog,description1,description2,description3,description4,description5}) => {
    return (
        <div className='mt-12 p-8'>
        <div className="container">
            <h4 className="text-[10.09px] font-bold font-raleway sm:text-[10.09px] sm:ml-[133px] md:text-[15.38px]">{category}</h4>
            <h1 className="text-[24px] font-bold font-raleway text-gray-700 sm:text-[25.38px] sm:ml-[133px] md:text-[50.38px] lg:text[52]">{title}</h1>
            <Image
                    src={image}
                    alt="image"
                    width={327}
                    height={204}
                    className='ml-[2%] mt-6 rounded sm:w-[387px] h-[544px] md:w-[687px] md:ml-[25%]'
    
                />
            <h3 className="mt-[40px] text-[13.46px] text-gray-700 md:text-[20.48px] sm:ml-[133px] lg:text[22px]">{descriptionBlog}
            </h3>
            
            <h1 className="text-[20px] mt-6 font-bold font-raleway text-gray-700 sm:text-[22px] sm:ml-[133px] md:text-[40px] lg:text[45px]">{heading1}</h1>
            <h3 className="mt-[20px] text-[13.46px] text-gray-700 sm:text-[14px] sm:ml-[133px] md:text-[20.48px] lg:text[22px]">{description1}
            </h3>
            <h1 className="text-[20px] mt-6 font-bold font-raleway text-gray-700 sm:text-[22px] sm:ml-[133px] md:text-[40px] lg:text[45px]">{heading2}</h1>
            <h3 className="mt-[20px] text-[13.46px] text-gray-700 sm:text-[14px] sm:ml-[133px] md:text-[20.48px] lg:text[22px]">{description2}
            </h3>
            <h1 className="text-[20px] mt-6 font-bold font-raleway text-gray-700 sm:text-[22px] sm:ml-[133px] md:text-[40px] lg:text[45px]">{heading3}</h1>
            <h3 className="mt-[20px] text-[13.46px] text-gray-700 sm:text-[14px] sm:ml-[133px] md:text-[20.48px] lg:text[22px]">{description3}
            </h3>
            <h1 className="text-[20px] mt-6 font-bold font-raleway text-gray-700 sm:text-[22px] sm:ml-[133px] md:text-[40px] lg:text[45px]">{heading4}</h1>
            <h3 className="mt-[20px] text-[13.46px] text-gray-700 sm:text-[14px] sm:ml-[133px] md:text-[20.48px] lg:text[22px]">{description4}
            </h3>
            
            <h1 className="text-[24px] mt-6 font-bold font-raleway text-gray-700 sm:text-[22px] sm:ml-[133px] md:text-[40px] lg:text[45px]">{heading5}</h1>
            <h3 className="mt-[20px] text-[13.46px] text-gray-700 sm:text-[14px] sm:ml-[133px] md:text-[20.48px] lg:text[22px]">{description5}
            </h3>
    
            <h1 className="text-[28px] mt-[15%] font-bold font-raleway text-gray-700 sm:text-[22px] sm:ml-[133px] md:text-[28px] lg:text[28px]">More Blogs</h1>
            <Link href = "/Blogs"><button className="bg-customPurple text-white ml-[9%] my-[2%] py-2 px-6 rounded-md transition-transform duration-500 ease-in-out">
           View All
            </button></Link>
            <AllBlogsSection/>
        </div>
    
    </div>
      )
    }
    

    
  export default BlogCard;
