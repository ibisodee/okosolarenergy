import React from 'react'

function intro () {
  return (
    <div>
      <div className='w-5/6 max-w-5/6 m-auto md:py-5 '>
        <div className='md:grid md:grid-flow-col sm:flex sm:flex-col mt-5 justify-between'>
          <div className='p-5 '>
            <img className='absolute md:w-1/6 sm:w-2/3 -mt-2 -ml-2 rounded-md' src='images/abouty.png' alt="About Image" />
            <img className='relative mt-2 ml-2 rounded-md hover:translate-y-1 hover:translate-x-1' src='images/about.png' alt="About Image" />
          </div>
          <div className='p-5'>
            <h2 className='font-bold my-5 text-blue lg:text-2xl md:text-lg sm:text-md'>OUR COMPANY OKON SOLAR ENERGY</h2>
            <p className='mb-5 text-justify'>Okon Solar Enegy is One of African’s leading trusted suppliers and integrators of renewable energy products. We are a Nigerian owned and operated company. Okon Solar was formed to help residences and commences overcome the biggest challenges faced because of high electricity/utility bills. Our aim is to help both commercial enterprises and residences access energysaving equipment with minimal fuss. We have been offering complete renewable solutions, tailored to our individual customer requirements.,</p>
            <button className='px-3 py-1 bg-blue text-white hover:bg-blue md:text-sm sm:text-xs hover:animate-pulse hover:text-yellow rounded-sm'>READ MORE INFORMATION ABOUT US</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default intro
