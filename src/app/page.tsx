

import HomePage from "./HomePage/home";
import OurPosts from "./RecentPost/page";
import Blogs2 from "./OurPosts2/page";
import Blog3 from "./OurPosts3/page";
import Engage from "./Audience-Engage/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      
      <HomePage/>
      <OurPosts/>
      <Blogs2/>
      <Blog3/>
      <Engage/>

    </div>
   
  );
}
