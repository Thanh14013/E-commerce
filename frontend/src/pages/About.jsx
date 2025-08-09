import React from 'react'
import Title from '../components/Title'
import {assets }from '../assets/assets'
const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Forever was born out of a passion for creating high-quality, sustainable products that enhance everyday life. Our mission is to inspire and empower individuals to make conscious choices that positively impact the world.</p>
          <p>We believe that every small action can lead to significant change, and we are committed to being a part of that change. Join us on this journey towards a more sustainable future.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>To create a positive impact on the environment and society through our products and practices.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text:sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure that all our products meet the highest standards of quality and sustainability.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>We make it easy for you to access sustainable products without compromising on quality or style.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We are dedicated to providing the best possible experience for our customers, with support available every step of the way.</p>
        </div>
      </div>
      

    </div>
  )
}

export default About