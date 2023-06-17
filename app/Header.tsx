import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-gray-400'>
        {/* <p className='font-bold text-white'>Header</p> */}
        <div className='flex space-x-3 px-2'>
        <Link href="/" className='px-2 py-1 bg-white text-gray-500'>Home</Link> 
        <Link href="/search" className='px-2 py-1 bg-white text-gray-500'>Search</Link> 
        <Link href="/todos" className='px-2 py-1 bg-white text-gray-500'>Todo</Link>
        </div> 
    </header>
  )
}

export default Header