import React from 'react'
import Navbar from '../components/Navbar'
import { BiStopwatch, BiMailSend, BiPhoneIncoming } from 'react-icons/bi'

function Header () {
  return (
    <>
      <header className=''>
        <div className='bg-blue w-full text-white text-sm m-auto'>
          <div className="flex justify-evenly space-x-2">
            <div className='md:inline-flex p-1 sm:hidden' >
              <BiStopwatch /> <p>MON - FRI 8:30 AM -  6:00PM</p>
            </div>
            <div className='inline-flex p-1 sm:grid-cols-2'>
              <BiMailSend /> <p className='mx-1'>info@okonsolar.com</p>
            </div>
            <div className='inline-flex p-1 sm:grid-cols-2 col-span-2'>
              <BiPhoneIncoming /><p>+234 813 242 3336</p>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
    </>
  )
}

export default Header
