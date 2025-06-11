import React from 'react'
import { SportsPresentationFeatureData } from '../assets/assets'

const SportsPresentationFeature = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-10 py-10 md:py-20 px-5 md:px-20'>
    {
        SportsPresentationFeatureData.map((item,index) => (
            <div key={index} className=' flex items-center justify-center h-20 px-5  border bg-cyan-600 border-amber-400 w-140 rounded-full'>
               <p className='text-3xl text-white font-bold '>{item.Title}</p>
            </div>
        ))
    }
    </div>
  )
}

export default SportsPresentationFeature