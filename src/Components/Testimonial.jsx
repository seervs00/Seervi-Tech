import React from 'react'
import { TestimonialDummyData } from '../assets/assets'

const Testimonial = () => {
 
    return (
      <div className='flex flex-col items-center px-4 md:px-16 lg:px-16  py-20 bg-gradient-to-b from-gray-900 to-cyan-50 '>
         <div className={`flex flex-col justify-center items-center text-center `}>
         <h1 className={`text-4xl md:text-[40px] font-bold text-gray-950 `}>Hear It From Us, But Check Yourself</h1>
         </div>
          <div className='flex flex-wrap items-center justify-center gap-10 mt-20  '>
            {TestimonialDummyData.map((item,index) => (
              <div key={index}
              className="flex flex-col gap-4 relative max-w-160 rounded-xl overflow-hidden bg-gray-200 text-gray-500/90  shadow-[0px_4px_rgba(0,0,0,0.02)]  py-10 md:px-10 px-4
              border border-transparent hover:border-indigo-600 transition-all duration-300"> 
               <div>
                 <p className=' text-xl' >{item.Text}</p>
               </div>
               <div className='flex gap-4'>
                  <img src={item.Image} alt="Image" className='h-11 w-11 rounded-full'/>
                  <div className=''>
                    <p className='text-lg font-bold text-black'>{item.Name}</p>
                    <p>{item.JobTitle}</p>
                  </div>

               </div>
              </div>
            ))}
          </div>
      </div>
    )
  
}

export default Testimonial