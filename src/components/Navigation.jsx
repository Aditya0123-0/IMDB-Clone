import React from 'react'
import Logo from '../assets/hero.png'
function Navigation() {
  return (
    <div className='flex border space-x-8 pl-3 py-4 item-center'>
        <img src="{Logo}" className='w-[50px]' alt=''/>
        <a href='/' className='text-blue-500 font-bold text-3xl'>Movies</a>
        <a href='/watchlist' className='text-blue-500 font-bold text-3xl'>Watchlist</a>
    </div>
  )
}

export default Navigation