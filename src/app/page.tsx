
import Image from "next/image";
import Navbar from "./Components/Nabar/page";
import HomePage from "./Components/HomePage/home";
import OurPosts from "./Components/RecentPost/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <OurPosts/>
    </div>
   
  );
}
