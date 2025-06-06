import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {

  const navLinks = [
    { name: 'Software Development Services', path: '/',
      children:[
        { name: 'Product Development Services', path: '/web-development' },
        { name: 'Web Development Services', path: '/web' },
        { name: 'Hire a Development Team', path: '/web' },
        { name: 'App Development Services', path: '/Appdev' },
      ]
     },
    { 
      name: 'Enterprise Solutions', 
      path: '/', 
      children: [
        { name: 'mPresent', path: '/web-development' },
        { name: 'Task Hours', path: '/app-development' },
      ] 
    },
    { name: 'Management Service', path: '/',
      children: [
        { name: "Project Management", path: "/management/project" },
        { name: "IT Infrastructure Management", path: "/management/it-infrastructure" },
        { name: "Business Process Outsourcing", path: "/management/bpo" },
        { name: "Operations Consulting", path: "/management/operations-consulting" },
        { name: "Risk & Compliance Management", path: "/management/risk-compliance" }
      ]
     },
    { name: 'Contact Us', path: '/' },
    { name: 'About Us', path: '/' },
];



const [isScrolled, setIsScrolled] =useState(false)
const [isMenuOpen, setIsMenuOpen] =useState(false);

useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (

        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <Link to="/" className="flex items-center ">
                <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
         <div key={i} className="relative group  ">
          <Link
          to={link.path}
        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
           >
       {link.name}
       <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
        </Link>

        {link.children && (
    <div className="absolute top-full left-0 z-50">
      <div className="pt-2 group-hover:block hidden">
        <div className="bg-white text-gray-800 shadow-md rounded-md min-w-max transition-opacity duration-200">
          {link.children.map((child, j) => (
            <Link
              key={j}
              to={child.path}
              className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )}
  </div>
))}         
            </div>
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
  <div key={i} className="w-full flex flex-col items-center group relative">
    <Link to={link.path} className="py-2 text-center w-full">
      {link.name}
    </Link>

    {link.children && (
      <div className="flex flex-col w-full items-center transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
        {link.children.map((child, j) => (
          <Link
            key={j}
            to={child.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-sm text-gray-600 py-1  hover:bg-gray-200 whitespace-nowrap"
          >
            {child.name}
          </Link>
        ))}
      </div>
    )}
  </div>
))}
            </div>
        </nav>
   
);

};

export default Navbar;
