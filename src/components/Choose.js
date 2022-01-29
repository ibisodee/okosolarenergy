import React from 'react'

function Choose () {
  return (
      <div>
          <div className='w-5/6 max-w-5/6 m-auto mb-5 justify-evenly'>
            <div className='lg:flex lg:flex-row sm:flex sm:flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-5 mt-20'>
              <div className='bg-milk'>
                <img className='md:-mt-10 animate-spin' src='images/focus1.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>Premium Quality Solar</h5>
                <p className='text-center p-5  mb-10 '>
                  We only offer the best solar panel systems sourced with high Autralian Standard and imported from Australia, offering reputable Premium solar systems at the best affordable prices.
                </p>
              </div>
              <div className='bg-milk'>
                <img className='md:-mt-10 sm:mt-2 animate-spin' src='images/focus2.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>Guaranteed Performance</h5>
                <p className='text-center p-5  mb-10 '>
                  We offer a wide range of solar panel systems to work with your budget and ensure you’re receiving the highest quality panels, designed for maximum performance and efficiency over time.
                </p>
              </div>
              <div className='bg-milk'>
                <img className='md:-mt-10 sm:mt-2 animate-spin' src='images/focus3.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>Nationwide 24x7 support</h5>
                <p className='text-center p-5  mb-10 '>
                  Our Support team is always on standby to assist you with any technical assistance and expertise on your systems. We are here for You. We are always ready to assist and answer any questions.
                </p>
              </div>
              <div className='bg-milk'>
                <img className='md:-mt-10 sm:mt-2 animate-spin' src='images/focus4.png' alt='Our Focus' />
                <h5 className='bg-green mt-5 p-2 rounded-md text-white text-center font-semibold'>Latest Solar Technology</h5>
                <p className='text-center p-5 mb-10 '>
                  We offer the latest in solar panel technology to fit your home or business with the most modern solar system solution,hence we always provideproducts that are Trending and invoked.
                </p>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Choose
