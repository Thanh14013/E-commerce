import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div> 
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Your trusted source for the latest trends in fashion and lifestyle.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem et at voluptatibus voluptatem veniam dolorem repudiandae? Illo tempore similique debitis numquam ducimus perspiciatis reprehenderit nostrum molestias. Iure qui optio fuga?
                </p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>1-212-345-678</li>
                    <li>ContactUs@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center text-gray-500">Copyright 2025@ forever.com - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer