import React from 'react'
import Title from './Title'
import { CardDummyData } from '../assets/assets'

const Features = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-16 bg-slate-5 py-20  bg-gradient-to-b from-gray-700 to-cyan-50 '>
        <Title title="Empowering the Visionaries of Tomorrow" subTitle="We work with select clients to deliver strategic, scalable tech—let’s explore how we can help you."/>

     <div className='flex flex-wrap items-center justify-center gap-6 mt-20 '>
      {CardDummyData.map((card,index) =>(
      <div key={index} className=" relative max-w-100 w-full rounded-xl overflow-hidden bg-gray-200 text-gray-500/90 shadow-[0px_4px_rgba(0,0,0,0.05)]">
        <img src={card.Image} alt="card_image"  className='h-90 w-full'/>
        <div className="p-4 pt-5">
            <p className='text-2xl font-medium text-gray-700 '>{card.Title}</p>
            <p className='text-xl text-gray-600 pt-2' > {card.Subtitle}</p>
        </div>
      </div>
      ))}
     </div>
    </div>
  )
}

export default Features