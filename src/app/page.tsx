

import Navbar from "./Components/Nabar/page";
import HomePage from "./Components/HomePage/home";
import OurPosts from "./Components/RecentPost/page";
import Blogs2 from "./Components/OurPosts2/page";
import Blog3 from "./Components/OurPosts3/page";
import Engage from "./Components/Audience-Engage/page";
import Footer from "./Components/Footer/page";

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
