import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { AiOutlineRollback } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdContactPhone, MdEmail } from 'react-icons/md'

function Quote () {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_kx26xlu', 'template_l3btka4', form.current, 'user_mF0xhc0DRGpuSZvq5gfy3')
      .then((result) => {
        console.log(result.text)
        Swal.fire(
          'Thanks for Your Request!',
          'We Just Received Your Request, One of Our Sales Representative would Get Back to You as Soon as Possible, Cheers!',
          'primary'
        )
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <div>
      <div className='absolute -z-40 md:ml-20 sm:ml-10'>
        <img className='' src='images/breadcrum.png'/>
      </div>
      <div className='flex justify-between w-2/3 max-w-2/3 m-auto text-yellow md:py-10 sm:py-2 my-5'>
        <h2 className='md:text-2xl sm:text-xl'>Quotation Request</h2>
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
                  <h2 className='font-bold text-lg'>MAKE A QUICK REQUEST OR ENQUIRY </h2>
                  <p>Enter your information, and one of our solar experts will be in touch as soon as possible. We can then answer any of your questions and help recommend the best solar solution for your home or business. If you would like, we can also arrange an onsite assessment, and provide you with a quote to get you started.</p>
                  <img className='rounded-md w-full py-10' src='images/quote.png' alt="About Image" />
                </div>
            </div>
          </div>
          <div className='grid-start-2'>
            <div className='introduction'>
                <h2 className='font-bold my-2 text-blue text-2xl'>Request Form</h2>
                <form ref={form} onSubmit={sendEmail} >
                <div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Full Name</label>
                      <input className='rounded-md invalid:border-red bg-skyblue w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="text" name="name" required />
                    </div>
                    <div className='p-2'>
                        <label className='p-2 font-bold text-darkblue'>Phone No</label>
                        <input className='rounded-md invalid:border-red bg-skyblue w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="text" name="phone" required />
                    </div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Email</label>
                      <input className='rounded-md invalid:border-red bg-skyblue w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="email" name="email" required />
                    </div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Address</label>
                      <input className='rounded-md invalid:border-red bg-skyblue w-full p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="text" name="address" required />
                    </div>
                    <label className='p-2 font-bold text-darkblue'>Request Information</label><br/>
                    <div className='p-2 flex gap-2'>
                      <select className='rounded-md invalid:border-red bg-skyblue w-2/3 p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' name="order" required >
                        <option value=" ">Choose Panel Type</option>
                        <option value="SunPower 360W"> SunPower 360W </option>
                        <option value="Panasonic 330W"> Panasonic 330W </option>
                        <option value="Q CELLS  Q.PEAK DUO "> Q CELLS Q.PEAK 315W </option>
                        <option value="REC Group REC290TP2 "> REC Group 290W </option>
                        <option value="LG  335W"> LG 335W </option>
                        <option value="Silfab Solar"> Silfab Solar 300W </option>
                        <option value="LONGi Solar"> LONGi Solar 300W </option>
                        <option value="Mission Solar"> Mission Solar</option>
                        <option value="Hyundai 300W"> Hyundai 300W </option>
                      </select>
                      <select className='rounded-md invalid:border-red bg-skyblue w-2/3 p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' name="quantity" required>
                        <option value=" ">Select Quantity</option>
                        <option value="Between 1 - 10 Units">Between 1 - 10 Units</option>
                        <option value="Between 10 - 20 Units">Between 10 - 20 Units</option>
                        <option value="Between 20 - 30 Units">Between 20 - 30 Units</option>
                        <option value="Between 30 - 40 Units">Between 30 - 40 Units</option>
                        <option value="Between 40 - 50 Units">Between 40 - 50 Units</option>
                        <option value="Between 50 - 100 Units">Between 50 - 100 Units</option>
                        <option value="Between 100 - 500 Units">Between 100 - 500 Units</option>
                        <option value="Between 500 - 1000 Units">Between 500 - 1000 Units</option>
                        <option value="Between 1000 and Above">Between 1000 and Above</option>
                      </select>
                    </div>
                    <div className='p-2'>
                      <label className='p-2 font-bold text-darkblue'>Choose Prefered Means of Communication</label>
                      <div className='p-2 flex'>
                        <input className='rounded-md invalid:border-red bg-skyblue mx-10 p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="radio" value="Phone" name="communication" /><MdContactPhone />
                        <input className='rounded-md invalid:border-red bg-skyblue mx-10 p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="radio" value="Email" name="communication" /> <MdEmail />
                        <input className='rounded-md invalid:border-red bg-skyblue mx-10 p-2 shadow-md focus:border-yellow focus:border-2 focus:border-dash' type="radio" value="Whatsapp" name="communication" /> <IoLogoWhatsapp />
                        </div>
                      </div>
                    <div className='p-2'>
                    <input className='rounded-md bg-blue w-full p-2 text-white' type='submit' value='Send Request' />
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
      <div className='shadow-lg mb-5'>
        <img className='' src='images/track1.png' alt='' />
      </div>
    </div>
  )
}

export default Quote
