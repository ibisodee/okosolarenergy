import React from 'react'
import Intro from '../components/Intro'
import Subhead from '../components/Subhead'
import Choose from '../components/Choose'
import { AiOutlineRollback } from 'react-icons/ai'
import { FaQuoteLeft } from 'react-icons/fa'

function About () {
  return (
    <div>
      <div className='absolute -z-40 md:ml-20 sm:ml-10'>
        <img className='' src='images/breadcrum.png'/>
      </div>
      <div className='flex justify-between w-2/3 max-w-2/3 m-auto text-yellow md:py-10 sm:py-2 my-5'>
        <h2 className='md:text-2xl sm:text-xl'>About Us</h2>
        <p className='flex text-white'><AiOutlineRollback /> Home</p>
      </div>
      <Intro />
      <div className='w-3/4 max-w-3/4 text-justify m-auto pb-5' ><p className='mb-5'>Okon Solar Enegy is One of African’s leading trusted suppliers and integrators of renewable energy products. We are an Australian owned and operated company. Okon Solar was formed to help residences and commences overcome the biggest challenges faced because of high electricity/utility bills. Our aim is to help both commercial enterprises and residences access energysaving equipment with minimal fuss. We have been offering complete renewable solutions, tailored to our individual customer requirements.,</p>
      </div>
      <Subhead />
      <div className='w-3/4 max-w-3/4 m-auto'>
        <div className='introduction'>
            <h2 className='font-bold  text-center text-blue text-4xl'><FaQuoteLeft />Full-service solar provider <p className='text-center font-bold text-xl text-blue'>High quality, tier 1 solar systems from </p></h2>
            <p className='text-center my-2 font-bold text-lg text-red'>100% Australian Solar Panels Fast installation times Guaranteed performance Trusted solar provider</p>
            <p className='mb-5'>Okon Solar Energy is a multi-award winning Nigeria solar company, providing renewable energy services. Founded in Nigeria, in 2016 and incorporated with the CAC in 2021. now with offices in warehouses in Lagos and Enugu and soon to have offices in various zones in the country. Over the past 6 years, we have established ourselves as one of Nigerian’s leading renewable energy providers. In 2016, Okon Solar Energy supplied thousands of the first our first Set of Imported Panels from Australia. Our solar providers are some of Australia’s most well known organisations, including . If you own an operation that is feeling the pinch of rapidly increasing energy prices, get in touch with us.</p>
        </div>
      </div>
      <div className='w-3/4 max-w-3/4 m-auto ' >
        <h1 className='font-bold text-green text-4xl pt-10'>Why Choose Us </h1>
          <Choose />
      </div>
      <div className='w-3/4 max-w-3/4 m-auto' >
        <h2 className='font-bold text-maroon md:text-2xl sm:text-xl py-10' >OUR PROFESSIONAL TEAM</h2>
        <div className='md:grid md:grid-flow-col sm:grid-flow-row'>
          <img className='rounded-lg' src='images/black.jpg' />
          <div className='bg-darkblue text-white md:text-sm sm:text-xs md:p-10 sm:p-2 rounded-lg shadow-md sha text-justify md:mt-40 sm:-mt-20 relative z-30 md:-ml-20'>
            <h2 className='md:text-2xl sm:text-lg font-san md:py-5 sm:py-1 w-full'>Message from the Founder</h2>
            <p className=''> Our first and foremost commitment is to our local community, using a local workforce. As we continued to experience service demands from the local community our small business expanded into what it is today. From our original scope of procurement, we now provide a full range of Solar Supply services. We respond very quickly to the needs of our wider community and industries. Over the years we identified a need to stock materials and components for the supply of our solar panels.</p>
            <p className='py-2'>Today we operate a major solar power procurement service center which offers modern panels, and equipment to our clients. This approach allows us to remain competitive in our market as we are able to maintain our stock levels through a streamlined ordering system resulting in timely production and service to our clients.</p>
            <p className='py-2'>Our diverse client base now is focused on solar power industries. We will continue to work with our local community and provide innovative and effective solutions in our production and provision of service.</p>
            <p className='py-2'>Over the years we have built a stable workforce with a large number of our employees being <quote>long term employees</quote>. Loyalty and commitment are values we promote amongst all our employees, from apprentices and trainees through to senior management.</p>
            <h4 className='pt-5 text-xl font-bold'>Mr. Okon</h4>
            <p className='text-yellow italic'>Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
