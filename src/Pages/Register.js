import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'

function Register () {
  return (
    <div>
      <div className='absolute -z-40 md:ml-20 sm:ml-10'>
        <img className='' src='images/breadcrum.png'/>
      </div>
      <div className='flex justify-between w-2/3 max-w-2/3 m-auto text-yellow md:py-10 sm:py-2 my-5'>
        <h2 className='md:text-2xl sm:text-xl'>Admin Registeration</h2>
        <p className='flex text-white'><AiOutlineRollback /> Home</p>
      </div>
      <div className='w-5/6 max-w-5/6 m-auto lg:py-10'>
        <div className='md:grid md:grid-flow-col sm:grid-flow-row grid-cols-2 gap-5 md:p-10'>
          <div className='grid-start-1'>
            <div className='p-1'>
                <div className='absolute'>
                  <img className='rounded-md lg:w-2/3 md:w-1/2 sm:w-2/3 -mt-2 -ml-2' src='images/abouty.png' alt="About Image" />
                </div>
                <div className='relative bg-blue rounded-md shadow-md text-white p-5'>
                  <img className='rounded-md w-full py-10' src='images/about.png' alt="About Image" />
                </div>
            </div>
          </div>
          <div className='grid-start-2'>
            <div className='introduction'>
                <div>
                  <div>
                    <div className='p-1'>
                      <label className='p-1 font-bold text-darkblue text-sm'>Full Name</label>
                      <input className='rounded-md invalid:border-red bg-skyblue w-full p-1 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="text" name="name" />
                    </div>
                    <div className='p-1'>
                        <label className='p-1 font-bold text-darkblue text-sm'>Phone No</label>
                        <input className='rounded-md invalid:border-red bg-skyblue w-full p-1 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="text" name="name" />
                    </div>
                    <div className='p-1'>
                      <label className='p-1 font-bold text-darkblue text-sm'>Email</label>
                      <input className='rounded-md invalid:border-red bg-skyblue w-full p-1 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="email" name="name" />
                    </div>
                    <div className='p-1'>
                      <label className='p-1 font-bold text-darkblue text-sm'>Password</label>
                      <input className='rounded-md invalid:border-red bg-skyblue w-full p-1 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="password" name="password" />
                    </div>
                    <div className='p-1'>
                      <label className='p-1 font-bold text-darkblue text-sm'>Confirm Password</label>
                      <input className='rounded-md invalid:border-red bg-skyblue w-full p-1 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="password" name="password" />
                    </div>
                    <div className='p-2 mt-2'>
                      <button className='rounded-md bg-blue w-full p-2 text-white'>Register</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
