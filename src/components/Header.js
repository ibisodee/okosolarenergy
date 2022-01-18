import React from 'react'
import { Link } from 'react-router-dom'
import { BiStopwatch, BiMailSend, BiPhoneIncoming } from 'react-icons/bi'
import { AiOutlineMenuFold, AiFillCloseSquare } from 'react-icons/ai'

function Header () {
  return (
    <>
      <header className=''>
          <div className='bg-blue w-full text-white'>
            <div className="flex lg:flex-row space-x-4 justify-center">
              <div className='inline-flex p-1 ' >
                <BiStopwatch /> MON - FRI 8:30 AM -  6:00PM
              </div>
              <div className='inline-flex p-1'>
                <BiMailSend /> info@okonsolar.com
              </div>
              <div className='inline-flex p-1'>
                <BiPhoneIncoming />+234 803 0000  0000
              </div>
            </div>
          </div>
          <nav className='relative w-100% bg-white shadow-lg shadow-indigo-500/50 p-1 h-auto color-blue drop-shadow-shadow rounded-bl-large'>
            <div className="">
                <div className='flex justify-between w-5/6 max-w-5/6 align-center m-auto'>
                    <div className='p-1'>
                      <Link to='/' className=''><img className='w-3/5' src="images/logo.png" alt='Logo'/></Link>
                    </div>
                    <div className='place-self-center'>
                      <ul className='flex text-right mx-3 mb-2'>
                        <li className='text-darkblue mr-5 list-none '><Link to='/' className='text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2 active:text-darkblue'>Home</Link></li>
                        <li className='text-darkblue mr-5 list-none'><Link to='/About' className='text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'>About</Link></li>
                        <li className='text-darkblue mr-5 list-none'><Link to='/Services' className='text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'>Services</Link></li>
                        <li className='text-darkblue mr-5 list-none'><Link to='/Quote' className='text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'>Quote</Link></li>
                        <li className='text-darkblue mr-5 list-none'><Link to='/Portfolio' className='text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'>Portfolio</Link></li>
                        <li className='text-darkblue mr-5 list-none'><Link to='/Contact' className='text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'>Contact</Link></li>
                      </ul>
                    </div>
                    <div className='mx-3'>
                      <button className='p-3 mx-3 bg-yellow text-blue hover:bg-blue hover:animate-pulse hover:text-yellow font-bold w-120 rounded-md'>Get Quote</button>
                    </div>
                    <div className="menu-icon" >
                      <AiOutlineMenuFold/> <AiFillCloseSquare/>
                    </div>
                </div>
            </div>
          </nav>
      </header>
    </>
  )
}

export default Header
