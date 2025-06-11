import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
const SportsPresentation = () => {
  return (
    <div className="flex flex-col  xl:flex-row items-center justify-center  bg-[url('/src/assets/sports.jpg')] bg-no-repeat bg-cover bg-center text-white min-h-auto px-4 md:px-16 lg:px-20 xl:px-28 py-20 gap-12 md:gap-20">
  
    {/* Text Section */}
    <div className="">
      <p className="bg-gray-500 text-center text-white px-4 py-2 text-2xl sm:text-3xl font-bold rounded-full mt-10 md:mt-20 inline-block">
        Sports Presentation
      </p>
  
      <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4">
        PrimeSport Representation & Management.
      </h1>
  
      <p className="text-lg md:text-2xl text-cyan-900 mt-4 max-w-150  font-bold">
        We design intuitive sports management systems that keep everything connected — teams, schedules, stats, and more.
      </p>
  
      <Link to="https://162e020c.sport-studio.pages.dev/">
        <button className="text-lg sm:text-xl font-bold rounded-full bg-red-500 px-6 py-3 sm:py-4 mt-6 sm:mt-8 hover:bg-blue-500 transition">
          Get Solution
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