import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
const SportsPresentation = () => {
  return (
    <div className="flex flex-col  xl:flex-row items-center justify-center  bg-[url('/src/assets/sportsbgimg.jpg')] bg-no-repeat bg-cover bg-center text-white min-h-screen px-4 md:px-16 lg:px-20 xl:px-28 py-20 gap-12 md:gap-20">
  
    {/* Text Section */}
    <div className="">
      <p className="bg-fuchsia-400 text-center text-white px-4 py-2 text-2xl sm:text-3xl font-bold rounded-full mt-10 md:mt-20 inline-block">
        Sports Presentation
      </p>
  
      <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4">
        PrimeSport Representation & Management.
      </h1>
  
      <p className="text-lg md:text-2xl text-white mt-4 max-w-150  font-bold">
        We design intuitive sports management systems that keep everything connected — teams, schedules, stats, and more.
      </p>
  
      <Link to="https://162e020c.sport-studio.pages.dev/">
      <button className="group flex items-center text-lg sm:text-xl font-bold rounded-full gap-5 bg-red-500 px-6  py-3 sm:py-4 mt-6 sm:mt-8 hover:bg-red-400 transition">
  Continue to login
  <span className="inline-block transition-transform duration-300 group-hover:translate-x-4">
    <img src={assets.arrow} alt="" className="h-9 w-9 rounded-full" />
  </span>
</button>

      </Link>
    </div>
  
    {/* Image Section */}
    <div className=" items-center md:mt-20 ">
      <img src={assets.sportsrep} alt="sports representation" className="rounded-4xl " />
    </div>
    
  </div>
  
  )
}

export default SportsPresentation