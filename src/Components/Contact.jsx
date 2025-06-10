import React from 'react'
import { assets } from '../assets/assets'


const Contact = () => {
  return (
    <div id='contact' className="flex flex-col items-center px-4 md:px-16 py-20 bg-gray-300">
      {/* Header Section */}
      <div className="flex flex-col text-center gap-6 pb-16">
        <p className="text-4xl md:text-[40px] font-bold">Your journey to greatness starts here</p>
        <p className="text-xl text-gray-600">Discover how we can create something great together.</p>
      </div>

      {/* Image + Form */}
      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-7xl">
        {/* Left Image Section */}
        <div
          className='w-full md:w-1/2 h-[538px] overflow-hidden bg-cover bg-center shadow-md md:rounded-l-xl bg-[url("/src/assets/contact.jpg")]'
        >
          <div className="w-full h-full bg-black/40 text-white flex items-end p-10 text-xl font-semibold">
            This platform takes the hassle out of website development, making online processes easy to handle.
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="flex flex-col items-center w-full md:w-1/2 bg-gray-100 rounded-r-xl p-8 shadow-sm text-sm">
          <p className="text-gray-700 text-center pb-5">
          Please provide the information requested below and we will respond within one business day.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full">
              <label htmlFor="name" className="text-black/70">Your Name</label>
              <input
                className="h-10 p-2 mt-1 w-full border border-gray-400 rounded outline-none focus:border-indigo-300"
                type="text"
                id="name"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-black/70">Your Email</label>
              <input
                className="h-10 p-2 mt-1 w-full border border-gray-400 rounded outline-none focus:border-indigo-300"
                type="email"
                id="email"
                placeholder="Enter your Email"
                required
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label htmlFor="phone" className="text-black/70">Phone Number</label>
            <input
              className="h-10 p-2 mt-1 w-full border border-gray-400 rounded outline-none focus:border-indigo-300"
              type="tel"
              id="phone"
              pattern="[0-9]{10}"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="w-full mt-4">
            <label htmlFor="message" className="text-black/70">Message</label>
            <textarea
              className="w-full mt-1 p-2 h-32 border border-gray-400 rounded resize-none outline-none focus:border-indigo-300"
              id="message"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 bg-indigo-600 text-white h-10 rounded-full w-40 hover:bg-indigo-700 transition active:scale-95 cursor-pointer"
          >
            Send Message
          </button>

          <p className="pt-3">
            Or drop us a message via <a href="mailto:wwww@gmail.com" className="text-blue-500 hover:text-blue-700">email</a>
          </p>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="w-full max-w-7xl  mt-16">
        <div className="flex flex-col items-center text-center pb-10">
          <h1 className="text-4xl md:text-[40px] font-bold pb-3">Get in touch</h1>
          <p className="text-gray-700">Our friendly team is always here to connect</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-10 px-4">
          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <img src={assets.mail_icon} alt="Email Icon" className="h-9 w-9" />
            <p className="font-semibold">Email</p>
            <p>Our team is here to help</p>
            <a href="mailto:wwww@gmail.com" className="text-blue-500">wwww@gmail.com</a>
          </div>

          {/* Office Location */}
          <div className="flex flex-col items-center gap-3">
            <img src={assets.location_icon} alt="Location Icon" className="h-9 w-9" />
            <p className="font-semibold">Office</p>
            <p>Visit our corporate HQ</p>
            <p className="text-blue-500">123 Tech Street, City, Country</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-3">
            <img src={assets.phone_icon} alt="Phone Icon" className="h-9 w-9" />
            <p className="font-semibold">Phone</p>
            <p>Call us anytime</p>
            <a href="tel:+1234567890" className="text-blue-500">+123 456 7890</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
