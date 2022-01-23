import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import { MdLocationOn, MdShareLocation, MdContactPhone, MdEmail, MdFacebook } from 'react-icons/md'

function Contact () {
  return (
    <div>
      <div className='absolute -z-40 md:ml-20 sm:ml-10'>
        <img className='' src='images/breadcrum.png'/>
      </div>
      <div className='flex justify-between w-2/3 max-w-2/3 m-auto text-yellow md:py-10 sm:py-2 my-5'>
        <h2 className='md:text-2xl sm:text-xl'>Our Contact</h2>
        <p className='flex text-white'><AiOutlineRollback /> Home</p>
      </div>
      <div className='w-5/6 max-w-5/6 m-auto lg:py-10'>
        <p className='font-bold lg:w-4/6 md:w-5/6 text-center m-auto md:mb-2 sm:mb-5'>Contact us for more information or to organise an obligation free in-home consultation on a solar installation, solar battery, skylights or solar roof ventilation.</p>
        <div className='md:grid md:grid-flow-col sm:grid-flow-row grid-cols-2 gap-5 md:p-10'>
          <div className='grid-start-1'>
            <div className='p-1'>
                <div className='absolute'>
                  <img className='rounded-md lg:w-2/3 md:w-1/2 sm:w-2/3 -mt-2 -ml-2' src='images/abouty.png' alt="About Image" />
                </div>
                <div className='relative bg-blue rounded-md shadow-md text-white p-5'>
                  <div className='my-2 px-2'>
                    <h2 className='flex text-xl text-yellow'><MdShareLocation />Corporate Offices</h2>
                    <p className='flex'><MdLocationOn /> Head Office Address: Enugu, Nigeria.</p>
                    <p className='flex'><MdLocationOn /> Branch Office Address:Lagos, Nigeria</p>
                  </div>
                  <div className='my-2 p-2 pt-5'>
                    <h2 className='text-xl text-yellow'>Warehouses</h2>
                    <p className='flex'><MdLocationOn />No 90 Olojo drive, Alaba international market road, Ojo Alaba Lagos Nigeria</p>
                    <p className='flex'><MdLocationOn />Block 24 Shop 16 Jimade Close, Lapido Nigeria.</p>
                  </div>
                  <div className='my-2 p-2'>
                    <h2 className='text-lg text-yellow'>Phone Numbers</h2>
                    <p className='flex'><MdContactPhone /> <IoLogoWhatsapp/> +234 903 000 0000 </p>
                  </div>
                  <div className='my-2 p-2'>
                    <h2 className='text-lg text-yellow'>Email</h2>
                    <p className='flex'><MdEmail />info@okonsolar.com</p>
                  </div>
                  <div className='my-2 p-2'>
                    <h2 className='text-lg text-yellow'>We are Also Active on  </h2>
                    <p className='flex'><MdFacebook /><IoLogoLinkedin /><IoLogoInstagram /> <IoLogoTwitter />As Okon Solar Energy</p>
                  </div>
                </div>
            </div>
          </div>
          <div className='grid-start-2'>
            <div className='introduction'>
                <h2 className='font-bold my-2 text-blue text-2xl'>Contact Form</h2>
                <div>
                  <div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Full Name</label>
                      <input className='rounded-md invalid:border-red bg-milk w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="text" name="name" />
                    </div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Email Address</label>
                      <input className='rounded-md invalid:border-red bg-milk w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="text" name="name" />
                    </div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Mobile Number</label>
                      <input className='rounded-md invalid:border-red bg-milk w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="phone" name="phone" />
                    </div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Message or Query</label>
                      <textarea className='rounded-md invalid:border-red bg-milk w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' rows={4}> Feel Free to Tell or Ask any Questions </textarea>
                    </div>
                    <div className='p-2'>
                      <button className='rounded-md bg-blue w-full p-2 text-white'>Send Message</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe className='shadow-lg mb-5'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.484063656058!2d3.191432314449385!3d6.460189025689133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86c87af1e355%3A0x5c46affe773559b1!2sAlaba%20International%20Market%20Rd%2C%20Ojo%20102113%2C%20Alasia%2C%20Nigeria!5e0!3m2!1sen!2sau!4v1642559185174!5m2!1sen!2sau"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </div>
  )
}

export default Contact
