import React from 'react'

const Contact = () => {
  return (
    <div className='pb-15 mt-16'> 
          <div className='pt-30 flex flex-col text-center gap-10 bg-gray-100 pb-20'>
           <p className='text-5xl'> Your journey to greatness starts here</p>
           <p className='text-xl'>Discover how we can create something great together.</p>
          </div>
        <form className="flex flex-col items-center text-sm Your journey to greatness starts herepb-16 pt-15">
    <p className="text-4xl text-blue-600 font-medium pb-2">Contact Us</p>
    <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
    <p className="text-xl text-gray-700 text-center pb-10">
    Please provide us the following information about you and we will get back to you within one business day.
    </p>
    
    <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
            <label className="text-black/70" htmlFor="name">Your Name</label>
            <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                type="text"
                required
                   placeholder="Enter your Name"
            />
        </div>
        <div className="w-full">
            <label className="text-black/70" htmlFor="email">Your Email</label>
            <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                type="email"
                required
                 placeholder="Enter your Email"
            />
        </div>
        
    </div>
    <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px] pt-6">
    <div className="w-full">
  <label className="text-black/70" htmlFor="phone">Phone Number</label>
  <input
    id="phone"
    name="phone"
    type="tel"
    inputMode="tel"
    pattern="[0-9]{10}"
    placeholder="Enter your phone number"
    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
    required
  />
</div>

        <div className="w-full">
            <label className="text-black/70" htmlFor="email">Address</label>
            <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                type="email"
                required
                placeholder="Enter your Address"
            />
        </div>
        
    </div>

    <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-black/70" htmlFor="message">Message</label>
        <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
            required
        ></textarea>
    </div>

    <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">
        Send Message
    </button>
</form>

    </div>
  )
}

export default Contact