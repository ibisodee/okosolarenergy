import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'

function services () {
  return (
    <div>
      <div className='absolute -z-40 md:ml-20 sm:ml-10'>
        <img className='' src='images/breadcrum.png'/>
      </div>
      <div className='flex justify-between w-2/3 max-w-2/3 m-auto text-yellow md:py-10 sm:py-2 my-5'>
        <h2 className='md:text-2xl sm:text-xl'>Our Services</h2>
        <p className='flex text-white'><AiOutlineRollback /> Home</p>
      </div>
      <div>
        <div className='w-5/6 max-w-5/6 m-auto py-10'>
          <h2 className='font-bold my-5 text-blue text-2xl'>Our Key Services</h2>
          <p className='mb-5 text-justify'>Okon Solar Enegy is One of African’s leading trusted suppliers and integrators of renewable energy products. We are an Australian owned and operated company. Okon Solar was formed to help residences and commences overcome the biggest challenges faced because of high electricity/utility bills. Our aim is to help both commercial enterprises and residences access energysaving equipment with minimal fuss. We have been offering complete renewable solutions, tailored to our individual customer requirements.,</p>
          <img src='images/services.jpg' alt='Ranges of Services' />
          <div className='md:grid md:grid-flow-row-dense grid-cols-2  py-10 gap-4'>
            <div className=''>
              <div className=''>
                <h3 className='text-maroon font-extrabold text-xl mb-2'>Solar Panel Sales & Supply</h3>
                <p className='p-5 bg-milk rounded-md border-solid border-b-4 outline outline-offset-4 outline-1 ring-offset-darkblue outline-blue'>As a Nigerian owned and grown solar business, we focus on offering products from diversified manufacturers that will stand the test of time and support Nigerians with local offices in different accessible zones, warranties and service. We are here to be your partner .
                We are proud to distribute some of the world largest manufacturers through our warehouses across Nigeria. Since our inception over 6 years ago, we have been dedicated to driving the growth of solar and our customers solar businesses.</p>
              </div>
            </div>
            <div className=''>
              <div className=''>
                <h3 className='text-maroon font-extrabold text-xl mb-2'>Solar Panel Maintenance</h3>
                <p className='p-5 bg-milk rounded-md border-solid border-b-4 outline outline-offset-4 outline-1 ring-offset-darkblue outline-blue'>As Nigerian leading solar supply service company, we can take care of every aspect of maintenance and repair for solar systems. We offer a comprehensive solar system analysis, helping to identify any issues that could lead to under-performing panels such as dead cells, dirty cells, or ageing components.
                  <br/> <br/>A solar panel system in top condition will ensure maximum efficiency and access to sustainable solar power for years to come.</p>
              </div>
            </div>
          </div>
          <div>
            <div className=''>
              <div className=''>
                <h3 className='text-maroon font-extrabold text-xl mb-2'>Solar power installation</h3>
                <p className='p-5 bg-milk rounded-md border-solid border-b-4 outline outline-offset-4 outline-1 ring-offset-darkblue outline-blue'>At Okon Solar Energy, we have access to a trusted installation network spanning across the entire country. we have access to a trusted installation network spanning across the entire country. From Lagos through the East and to the North and South Zones of the country, we can install solar panels quickly and with minimum disruption to your daily schedule. Our team of installers are fully qualified and have experience working in a range of residential and commercial environments. Whether you’re an individual homeowner, a small business owner, or the manager of a large multinational enterprise, we offer a range of solar power systems for residential and commercial applications. Our smallest residential system is measured at 6.6KW, with 10KW and Hybrid solar systems also available. We also provide a range of larger systems for businesses, including separate 15KW, 30KW, 50KW, and large 100KW installations. Regardless of the size you choose, each solar system has been designed with a high conversion efficiency. All of our solar panels are weather resistant and designed to meet the demands of the harsh Australian climate. As a full-service solar provider, Okon Solar offers a range of services that complement our solar panel systems for homes and businesses. While solar panel systems are typically low maintenance, its important to know that if something needs to be looked at, you can receive trusted advice on everything from installation to cleaning and maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
