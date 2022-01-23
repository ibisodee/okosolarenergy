import React from 'react'
import { BiStopwatch, BiMailSend, BiPhoneIncoming } from 'react-icons/bi'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function Footer () {
  const App = () => {
    return <WhatsAppWidget phoneNumber='+2349036267513' />
  }
  return (
    <div className=''>
      <div className=''>
        <div className='w-5/6 max-w-5/6 m-auto overflow-hidden'>
          <div>
            <p className='font-bold text-lg text-black py-2'>Partners & Clients</p>
          </div>
          <div className='m-10 motion-safe:animate-marquee flex flex-row justify-between'>
            <img className='h-10 mx-2' src='images/partners/1.jpg' />
            <img className='h-10 mx-2' src='images/partners/2.jpg' />
            <img className='h-10 mx-2' src='images/partners/3.jpg' />
            <img className='h-10 mx-2' src='images/partners/4.jpg' />
            <img className='h-10 mx-2' src='images/partners/5.jpg' />
          </div>
        </div>
      </div>
      <div className='bg-color-blue'>
        <div className='relative flex md:flex-row sm:flex-col bg-yellow rounded-lg place-content-center w-5/6 max-w-5/6 align-center md:p-10 sm:p-5 place-items-center m-auto -mb-20' >
          <div className='text-darkblue '>
            <h4 className='font-bold'>FREE CONSULTATION - +23480 0000 0000</h4>
            <p>Please contact us today for more information or to organise a COVID safe consultation or proposal.</p>
          </div>
          <div className='flex space-between gap-2 md:p-15'>
            <div className='bg-darkblue w-120px h-80px text-white rounded-md text-center p-3'>
              <div className='md:text-xl font-bold'>30000</div>
              <p className='lg:text-sm sm:text-xs'>Supplied Solar</p>
            </div>
            <div className='bg-darkblue w-120px h-80px text-white rounded-md text-center p-3'>
              <div className='md:text-xl font-bold'>70</div>
              <p className='lg:text-sm sm:text-xs'>Satisfied Client</p>
            </div>
            <div className='bg-darkblue w-120px h-80px text-white rounded-md text-center p-3'>
              <div className='md:text-xl font-bold'>7</div>
              <p className='lg:text-sm sm:text-xs'>Years in Business</p>
            </div>
          </div>
        </div>
        <div className='bg-blue text-white'>
          <div className='px-5 pt-20 pb-5 w-5/6 max-w-5/6 m-auto flex md:flex-row sm:flex-col gap-5 place-content-center h-auto'>
            <div className='col-start-1 col-span-3'>
                <img src="images/logo.png" alt='Logo' />
                <h5 className='font-bold text-yellow'>OKON SOLAR ENERGY</h5>
                <p>Okon Solar Energy is Proud of Being One of the Top Solar Companies in Nigeria with all Panel produced in Australia.  Over the past 10 Years we have supplied over fifty thousand  number of Solar Panels across the country</p>
            </div>
            <div className='col-start-4'>
                <h5 className='text-xl font-bold text-yellow mt-5 mb-5' >Our Contact</h5>
                <p className='flex mt-0.5 space-x-4'><BiStopwatch className='mr-5'/> MON - FRI 8:30 AM -  6:00 PM</p>
                <p className='flex mt-0.5 space-x-4'><BiMailSend className='mr-5'/> info@okonsolar.com</p>
                <p className='flex mt-0.5 space-x-4'><BiPhoneIncoming className='mr-5'/>+234 803 0000  0000</p>
                <p className='flex mt-0.5  mr-10'> Socialize with Us  <BsMessenger className='mx-1' /><AiFillFacebook className='mx-1'/><AiFillLinkedin className='mx-1'/><AiFillInstagram className='mx-1'/></p>
            </div>
          </div>
        </div>
        <div className='bg-darkblue text-center text-white p-1 md:text-md sm:text-sm'>
          <p className='sm:m-2'>Copyright © 2021 Okon Solar Enegy Dev Team. All rights reserved.</p>
        </div>
        {App}
      </div>
    </div>
  )
}

export default Footer
