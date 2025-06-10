import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'
import Contact from '../Components/Contact'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
   <>
   <Hero/>
   <Features/>
   <Services/>
   <Testimonial/>
   <Contact/>
   </>
  )
}

export default Home