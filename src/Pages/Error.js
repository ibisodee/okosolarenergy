import React from 'react'

function Error () {
  return (
    <div>
      <div className='m-5 m-auto'>
        <img className='m-auto' src='images/oops.png' />
        <p className='mx-20 my-10 text-darkblue font-bold'>We looked all over, but te page you are requesting to view seems to have gotten away or probably doesnt exist. you can just depend on the navigations above or <a className='font-extrabold text-red' href=''> click here </a> to return to the home page..</p>
      </div>
    </div>
  )
}

export default Error
