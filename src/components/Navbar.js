import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenuFold, AiOutlineMenuUnfold, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { BiStopwatch } from 'react-icons/bi'
import { BsMessenger } from 'react-icons/bs'
import { FcHome, FcServices, FcAbout, FcOnlineSupport, FcGallery } from 'react-icons/fc'

function Navbar () {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
  const showMobileMenu = () => {
    (isMobileMenuOpen) ? setisMobileMenuOpen(false) : setisMobileMenuOpen(true)
  }
  return (
    <div>
      <nav className='relative w-100% bg-white shadow-lg shadow-indigo-500/50 p-1 h-auto color-blue drop-shadow-shadow rounded-bl-large'>
        <div className="">
            <div className='flex justify-between align-middle w-5/6 max-w-5/6 align-center m-auto'>
                <div className='p-1'>
                  <Link to='/' className=''><img className='md:w-3/5 sm:w-3/5' src="images/logo.png" alt='Logo'/></Link>
                </div>
                <div className='md:inline place-self-center sm:hidden'>
                  <ul className='menu-list flex flex-row text-right mx-3 mb-2'>
                    <li className='text-darkblue px-2 list-none '><Link to='/' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2 active:text-darkblue'><FcHome className='mt-1' /> Home</Link></li>
                    <li className='text-darkblue px-2 list-none'><Link to='/About' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'><FcAbout className='mt-1' /> About</Link></li>
                    <li className='text-darkblue px-2 list-none'><Link to='/Services' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'><FcServices className='mt-1' /> Services</Link></li>
                    <li className='text-darkblue px-2 list-none'><Link to='/Portfolio' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'>< FcGallery className='mt-1' /> Portfolio</Link></li>
                    <li className='text-darkblue px-2 list-none'><Link to='/Contact' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'><FcOnlineSupport className='mt-1' /> Contact</Link></li>
                  </ul>
                </div>
                <div className='md:text-md sm:text-sm sm:h-auto p-2'>
                  <Link to='/Quote'><button className='w-5/6 animate-pulse mr-10 sm:text-xs md:text-md p-2 mx-3 bg-yellow text-blue hover:bg-blue hover:animate-pulse hover:text-yellow font-bold rounded-md'>Get Quote</button></Link>
                </div>
                <div className='md:hidden py-4 px-2 h-5'>
                  <button onClick={ () => { showMobileMenu() } } className='relative z-40'>
                    {(isMobileMenuOpen) ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold /> }
                  </button>
                  {(isMobileMenuOpen) ? MobileMenu(false) : '' }
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

function MobileMenu () {
  return (
    <div className='fixed h-screen bg-white top-0 w-2/5 z-10 right-0 rounded-bl-full rounded-tl-full shadow-lg '>
      <ul className='menu-list flex flex-col mt-5 font-bold'>
          <li className='flex text-darkblue mt-20 py-2 px-5 list-none '><Link to='/' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2 active:text-darkblue'><FcHome />Home</Link></li>
          <li className='flex text-darkblue py-2 px-5 list-none'><Link to='/About' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'><FcAbout />About</Link></li>
          <li className='flex text-darkblue py-2 px-5 list-none'><Link to='/Services' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'><FcServices />Services</Link></li>
          <li className='flex text-darkblue py-2 px-5 list-none'><Link to='/Portfolio' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'>< FcGallery />Portfolio</Link></li>
          <li className='flex text-darkblue py-2 px-5 list-none'><Link to='/Contact' className='flex flex-row text-md hover:font-semibold hover:text-blue hover:animate-pulse hover:border-y-2'><FcOnlineSupport />Contact</Link></li>
        </ul>
        <div className='py-5'>
          <p className='flex space-x-1 text-xs px-2'><BiStopwatch className=''/>MON - FRI </p>
          <p className='flex space-x-1 text-xs px-2'>8:30 AM -  6:00 PM</p>
          <div className='flex pt-5 justify-evenly'>
            <BsMessenger />
            <AiFillFacebook />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <p className='text-xs font-extrabold text-blue  px-2 py-1'>Okon Solar Energy</p>
        </div>
      </div>
  )
}
