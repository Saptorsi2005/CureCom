import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div>
            {/* Contact heading */}
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
            </div>
            
            {/* Contact section */}
            <div className='my-10 flex flex-col-reverse justify-center md:flex-row gap-10 mb-28 text-sm'>
                {/* Image Section */}
                <img className='w-full md:w-[360px] rounded-lg shadow-lg' src={assets.contact_image} alt="Contact" />
                
                {/* Contact Details */}
                <div className='flex flex-col justify-center items-start gap-6 md:max-w-lg'>
                    <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
                    <p className='text-gray-500'>56/2, Raja Dinendra Street, Maniktala <br /> Kolkata, West Bengal, 700006, India</p>
                    <p className='text-gray-500'>Tel: +91-6968653423 <br /> Email: care@curecom.com</p>
                    
                    <p className='font-semibold text-lg text-gray-600'>Career at CureCom</p>
                    <p className='text-gray-500'>Learn more about us</p>
                    
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 mt-4'>
                        Explore Jobs
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
