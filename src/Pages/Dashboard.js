import React from 'react'

function Dashboard () {
  return (
    <div className='mt-5 h-auto'>
      <div className='grid grid-cols-12'>
        <div className='absolute col-start-1 p-2 -mt-20 -z-40 col-span-2 bg-yellow h-screen'>
          <ul className='mt-20'>
            <li>Request</li>
            <li>Request</li>
          </ul>
        </div>
        <div className='col-start-2 col-span-12 bg-white'>
          <div className='flex flex-row gap-4 text-white'>
            <div className='bg-darkblue rounded-md w-1/4 p-5 '>1</div>
            <div className='bg-maroon rounded-md w-1/4 p-5'>2</div>
            <div className='bg-blue rounded-md w-1/4 p-5'>3</div>
          </div>
        </div>
      </div>
      <div className='table-header-group '>

      </div>
    </div>
  )
}

export default Dashboard
