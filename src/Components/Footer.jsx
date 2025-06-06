import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className=" text-gray-800 px-6 pt-8 md:px-16 lg:px-36 w-full bg-white">
    <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-300 pb-10">
      {/* Logo and Description */}
      <div className="md:max-w-96 ">
        <div className='flex gap-4'>
        <img
          className=" h-10"
          src={assets.logo}
          alt="logo"
        />
        <p className='font-bold text-2xl pt-1'>Seervi Tech Labs</p>
        
        </div>
        <p className="mt-6 text-sm text-gray-600">
        We specialize in turning ideas into intelligent, scalable software solutions. As a forward-thinking software development company, we partner with businesses to design, build, and deploy powerful applications tailored to their unique needs
        </p>
        
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
        <div>
          <h2 className="font-semibold mb-5 text-gray-900">Company</h2>
          <ul className="text-sm space-y-2 text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-5 text-gray-900">Get in touch</h2>
          <div className="text-sm space-y-2 text-gray-600">
            <p>+1-234-567-890</p>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <p className="pt-4 text-center text-sm pb-5 text-gray-500">
      Copyright {new Date().getFullYear()} © Seervi Tech Labs. All Rights Reserved.
    </p>
  </footer>
  )
}

export default Footer