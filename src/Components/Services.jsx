import React from 'react'
import Title from './Title'
import { ServiceDummyData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='flex flex-col items-center px-4 md:px-16 lg:px-16  py-20 bg-gradient-to-b from-gray-600 to-indigo-50'>
        <Title title="Start Exploring Our Expertise" subTitle="Unlock a world of potential through our comprehensive services."/>

        <div className='flex flex-wrap items-center justify-center gap-10 mt-20 '>
          {ServiceDummyData.map((item,index) => (
            <div key={index}
            className=" relative max-w-100 w-full rounded-xl overflow-hidden bg-gray-200 text-gray-500/90 shadow-[0px_4px_rgba(0,0,0,0.02)] "> 
              <div className=' flex justify-center mb-6 '>
                <Link to="">
                <img src={item.Icon} alt="" className='h-[104px] w-auto cursor-pointer pt-5' />
                </Link>
              </div>
              <div className='md:mx-6 flex flex-col gap-3'>
             <a href="">
              <p className='text-center text-xl text-black font-bold cursor-pointer'>{item.Title}</p></a>
      
                <p className='text-center text-gray-600 pb-5'>{item.Subtitle}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Services