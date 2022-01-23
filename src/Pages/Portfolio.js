import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'

function Portfolio () {
  return (
    <div>
      <div className='absolute -z-40 md:ml-20 sm:ml-10'>
        <img className='' src='images/breadcrum.png'/>
      </div>
      <div className='flex justify-between w-2/3 max-w-2/3 m-auto text-yellow md:py-10 sm:py-2 my-5'>
        <h2 className='md:text-2xl sm:text-xl'>Portfolio | Product</h2>
        <p className='flex text-white'><AiOutlineRollback /> Home</p>
      </div>
      <div className='w-5/6 max-w-5/6 m-auto py-10'>
      <h2 className='font-bold text-lg text-blue border-y-darkblue border-y-4'>SOLAR PANELS</h2>
        <div className='md:grid md:grid-flow-col sm:grid-flow-row grid-cols-3 gap-5 md:p-10 sm:p-2 justify-between'>
          <div className=''>
            <div className='p-1 transform transition-all hover:scale-125'>
              <img src='images/product/panel1.png' alt='' />
            </div>
          </div>
          <div className=''>
            <div className='p-1'>
              <img src='images/product/p1logo.png' alt='' />
              <h4 className='font-bold text-md'>Q Cells Q.Peak DUO-G6+ Solar Panels</h4>
              <p className='text-sm'>Hanwha Group started in South Korea as Hanwha Explosives Inc. in 1952 and rapidly exploded into a massive international conglomeration. They acquired the German company Q Cells and its solar panel manufacturing capacity in Germany and Malaysia when it became insolvent in 2012. They also acquired Solarfun, which was a Chinese panel manufacturer. Not wanting to be mistaken for a bunch of clowns, they changed the name of Solarfun to Hanwha Solar One.Hanwha Q CELLS produces panels in Malaysia, China, and Korea</p>
            </div>
          </div>
          <div className=''>
            <div className='p-1'>
              <h5 className='font-bold mt-5 text-md py-5'>Here is what you can expect from the Q.Peak DUO-G6+ Solar panel range :</h5>
              <ul className='text-sm py-5 ml-5 list-disc'>
                <li>25 Year Product Warranty </li>
                <li>25 Year Performance Warranty </li>
                <li>Manufactured in Korea </li>
                <li>19.5% Module Efficiency </li>
                <li>Established in Australia since late 2009 with local offices in North Sydney NSW </li>
                </ul>
              <div>
              <button className='rounded-md bg-blue w-full p-2 text-white'>Enquire or Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='md:grid md:grid-flow-col sm:grid-flow-row grid-cols-3 gap-5 md:p-10 sm:p-2 justify-between'>
          <div className=''>
            <div className='p-1 transform transition-all hover:scale-125'>
              <img src='images/product/panel2.png' alt='' />
            </div>
          </div>
          <div className=''>
            <div className='p-1'>
              <img src='images/product/p2logo.png' alt='' />
              <h4 className='font-bold text-md'>LG NeON2 Solar Panels</h4>
              <p className='text-sm'>LG panels, and especially the NeON range have specific technical advantages, which can result in better performance, and overall more electricity output by solar systems powered by LG panels. LG Solar panels have many advantages that help form one of the most robust and long-term solar energy solutions on the market.LG Solar panels have been awarded WINNER Most Trusted Brand 2020 by Reader’s Digest, voted by a survey of over 3,000 Australian customers.</p>
            </div>
          </div>
          <div className=''>
            <div className='p-1'>
              <h5 className='font-bold mt-5 text-md py-5'>Here is what you can expect from the LG NeON2 Solar panel range ::</h5>
              <ul className='text-sm py-5 ml-5 list-disc'>
                <li>25 Year Product Warranty </li>
                <li>25 Year Performance Warranty </li>
                <li>Manufactured in Korea </li>
                <li>19.5% Module Efficiency </li>
                <li>Established in Australia since late 2009 with local offices in North Sydney NSW </li>
                </ul>
              <div>
              <button className='rounded-md bg-blue w-full p-2 text-white'>Enquire or Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
