import React from 'react'
import { BiStopwatch, BiMailSend, BiPhoneIncoming } from 'react-icons/bi'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'

function Footer () {
  return (
    <div className=''>
      <div className='bg-color-blue'>
        <div className='relative flex bg-yellow rounded-lg place-content-center w-5/6 max-w-5/6 align-center p-10 place-items-center m-auto -mb-20' >
          <div className='text-darkblue '>
            <h4 className='font-bold'>FREE CONSULTATION - +23480 0000 0000</h4>
            <p>Please contact us today for more information or to organise a COVID safe consultation or proposal.</p>
          </div>
          <div className='flex space-between p-15'>
            <div className='bg-darkblue w-120px h-80px text-white rounded-md text-center ml-5 p-3'>
              <div className='text-xl font-bold'>30000</div>
              <p className='text-sm'>Supplied Solar</p>
            </div>
            <div className='bg-darkblue w-120px h-80px text-white rounded-md text-center ml-5 p-3'>
              <div className='text-xl font-bold'>70</div>
              <p className='text-sm '>Satisfied Client</p>
            </div>
            <div className='bg-darkblue w-120px h-80px text-white rounded-md text-center ml-5 p-3'>
              <div className='text-xl font-bold'>7</div>
              <p className='text-sm'>Years in Business</p>
            </div>
          </div>
        </div>
        <div className='bg-blue text-white '>
          <div className='pl-20 pr-20 pt-20 pb-10px grid grid-cols-4 grid-flow-cols gap-5 place-content-center h-auto'>
            <div className='col-start-1 col-span-3 pb-10'>
                <img src="images/logo.png" alt='Logo' />
                <h5 className='font-bold text-yellow'>OKON SOLAR ENERGY</h5>
                <p>Okon Solar Energy is Proud of Being One of the Top Solar Companies in Nigeria with all Panel produced in Australia.  Over the past 10 Years we have supplied over fifty thousand  number of Solar Panels across the country</p>
            </div>
            <div className='col-start-4 pb-10'>
                <h5 className='text-xl font-bold text-yellow mt-5 mb-5' >Our Contact</h5>
                <p className='flex mt-0.5 space-x-4'><BiStopwatch className='mr-5'/> MON - FRI 8:30 AM -  6:00 PM</p>
                <p className='flex mt-0.5 space-x-4'><BiMailSend className='mr-5'/> info@okonsolar.com</p>
                <p className='flex mt-0.5 space-x-4'><BiPhoneIncoming className='mr-5'/>+234 803 0000  0000</p>
                <p className='flex mt-0.5  mr-10'> Socialize with Us  <BsMessenger className='mx-1' /><AiFillFacebook className='mx-1'/><AiFillLinkedin className='mx-1'/><AiFillInstagram className='mx-1'/></p>
            </div>
          </div>
        </div>
        <div className='bg-darkblue p-1.5 text-center text-white p-10px '>
          <p>Copyright © 2021 Okon Solar Enegy Dev Team. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
