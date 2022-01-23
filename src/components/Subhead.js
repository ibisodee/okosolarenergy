import React from 'react'

function Subhead () {
  return (
     <div>
        <div className='bg-gradient-to-r from-deepsky to-maroon'>
          <div className='flex md:flex-row sm:flex-col text-white md:w-5/6 md:max-w-5/6 m-auto mb-5 justify-evenly'>
            <div className='bg-deepsky transform transition-all hover:scale-110 p-7'>
                <h3 className='font-bold text-lg my-3'>Our Vision </h3>
                <p>To be a significant indigenous player in Africa Power industry by delivering quality Solar services, cost effective solar panel solution.</p>
                <button className='px-3 py-1 border-dotted hover:border-solid hover:bg-white hover:text-blue border-2 mt-3 rounded-md'> READ MORE</button>
            </div>
            <div className='bg-gold transform transition-all hover:scale-110 p-7 '>
                <h3 className='font-bold text-lg my-3'>Our Mission</h3>
                <p> To provide an affordable and clean ­energy to our clients both in rural and urban communities, cities and Neigbouring country.</p>
                <button className='px-3 py-1 border-dotted hover:border-solid hover:bg-white hover:text-blue border-2 mt-3 rounded-md'> READ MORE</button>
            </div>
            <div className='bg-maroon  transform transition-all hover:scale-110 p-7 '>
                <h3 className='font-bold text-lg my-3'>Our Values</h3>
                <p> To ensure ZERO DOWN-TINE to our client as a result of our operation and ensuring that our solar panels are always in good working condition...</p>
                <button className='px-3 py-1 border-dotted hover:border-solid hover:bg-white hover:text-blue border-2 mt-3 rounded-md'> READ MORE</button>
            </div>
          </div>
        </div>
     </div>
  )
}

export default Subhead
