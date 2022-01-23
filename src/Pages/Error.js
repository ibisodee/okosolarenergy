import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'

function Error () {
  return (
    <div>
      <div className='absolute -z-40 md:ml-20 sm:ml-10'>
        <img className='' src='images/breadcrum.png'/>
      </div>
      <div className='flex justify-between w-2/3 max-w-2/3 m-auto text-yellow md:py-10 sm:py-2 my-5'>
        <h2 className='md:text-2xl sm:text-xl'>Oops Error Page</h2>
        <p className='flex text-white'><AiOutlineRollback /> Home</p>
      </div>
    </div>
  )
}

export default Error
