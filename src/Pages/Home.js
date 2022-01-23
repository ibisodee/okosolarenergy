import React from 'react'
import Subhead from '../components/Subhead'
import Choose from '../components/Choose'
import Intro from '../components/Intro'

function Home () {
  return (
    <div className='overflow-hidden'>
      <img className='absolute -z-40 -mt-20 h-full' src='images/bannerbg.png' alt='' />
      <div className='absolute -z-30 md:right-0 md:top-20 lg:-top-40 sm:top-10 bg-blue sm:-mt-20 md:-mt-20 lg:-mt-40 lg:h-full lg:w-1/2 md:h-1/3 md:w-1/3 sm:h-80 sm:w-80 rounded-lg rotate-45 overflow-hidden'></div>
      <div className='pb-10'>
        <div className='flex md:flex-row sm:flex-col w-2/3 max-w-2/3 m-auto '>
          <div className='md:p-10 md:pb-10 sm:pb-2'>
            <h1 className='md:my-10 sm:my-5 font-extrabold outline-2 outline-white lg:text-4xl md:text-2xl sm:text-xl decoration-4 md:text-blue sm:text-yellow' >YOUR TRUSTED PARTNER IN SOLAR</h1>
            <p className='font-bold lg:text-xl md:text-lg sm:text-md md:text-blue sm:text-white mb-4'>Okon Solar is one of Nigeria’s largest solar companies</p>
          </div>
          <div className=''>
              <div className='relative transform transition-all hover:scale-125 hover:rotate-12'>
                <img className='rounded-md' src='images/banner1.png' alt="About Image" />
              </div>
          </div>
        </div>
      </div>
      <Subhead />
      <Choose />
      <div className='flex md:flex-row sm:flex-col justify-evenly p-5 bg-gradient-to-r from-blue to-yellow'>
        <div>
          <h3 className='text-white font-bold text-2xl mb-3'>
            Download Our Business Brochures
          </h3>
        </div>
        <div className='flex justify-evenly bg-gradient-to-r from-blue to-darkblue'>
          <button className='bg-white m-2 font-semibold rounded-sm p-1'>Company Profile</button>
          <button className='bg-white m-2 font-semibold rounded-sm p-1'>Product Catelog</button>
        </div>
      </div>
      <Intro />
      <div>
        <div className=''>
          <div className='relative z-0 lg:mb-40 md:5 sm:mb-5'>
            <img className='absolute' src='images/track.png' alt='' />
            <div className='relative z-40 lg:mx-20 lg:px-20 lg:pt-20 md:px-10 md:pt-10 sm:px-4 sm:py-4'>
              <h1 className='md:w-1/2 text-milk font-bold md:text-4xl sm:text-xl md:mb-5 md:text-left'>A track record that speaks for itself.</h1>
              <h3 className='sm:w-full md:w-1/2 md:font-bold md:text-2xl lg:mb-10 sm:text-xs sm:font-normal text-white md:text-left'>Our smart, industry-leading solutions are deployed by solar professionals in projects around the world.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
