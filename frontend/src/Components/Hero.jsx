import React from "react";
import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/bg.avif")] bg-no-repeat bg-cover bg-center h-screen  '>
          {/* <p className ="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20"></p> */}
          <h1 className="font-playfair text-4xl  md:text-7xl  md:leading=[56px] font-bold md:font-extrabold max-w-xl mt-2">Grow Your Business With Our Technology Expertise.</h1>
          <p className="max-w-130 mt-2 text-xl md:text-2xl" >we help you scale faster, compete smarter, and innovate boldly through cutting-edge technology solutions and expert development services.</p>
          <Link to ="/contact">
          <button className="text-2xl font-bold rounded-full bg-red-500 px-4 py-2 mt-3 cursor-pointer hover:bg-red-400">Contact Now</button>
 
          </Link>
                 </div>
    )
};

export default Hero;
