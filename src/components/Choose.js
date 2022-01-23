import React from 'react'

function Choose () {
  return (
      <div>
          <div className='w-5/6 max-w-5/6 m-auto mb-5 justify-evenly'>
            <div className='lg:flex lg:flex-row sm:flex sm:flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-5 mt-20'>
              <div className='bg-milk'>
                <img className='md:-mt-10 animate-pulse' src='images/focus1.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>High quality solar systems</h5>
                <p className='text-center p-5  mb-10 '>
                  We offer a wide range of solar panel systems to work with your budget and ensure you’re receiving the highest quality panels, designed for maximum performance and efficiency over time.
                </p>
              </div>
              <div className='bg-milk'>
                <img className='md:-mt-10 sm:mt-2' src='images/focus2.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>Guaranteed Performance</h5>
                <p className='text-center p-5  mb-10 '>
                  We offer a wide range of solar panel systems to work with your budget and ensure you’re receiving the highest quality panels, designed for maximum performance and efficiency over time.
                </p>
              </div>
              <div className='bg-milk'>
                <img className='md:-mt-10 sm:mt-2' src='images/focus3.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>Nationwide 24x7 support</h5>
                <p className='text-center p-5  mb-10 '>
                  We offer a wide range of solar panel systems to work with your budget and ensure you’re receiving the highest quality panels, designed for maximum performance and efficiency over time.
                </p>
              </div>
              <div className='bg-milk'>
                <img className='md:-mt-10 sm:mt-2' src='images/focus4.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>30-Day Price Beat Guarantee</h5>
                <p className='text-center p-5 mb-10 '>
                  We offer a wide range of solar panel systems to work with your budget and ensure you’re receiving the highest quality panels, designed for maximum performance and efficiency over time.
                </p>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Choose
