import Image from 'next/image'
import { Suspense } from 'react'
import TodosList from './todos/TodosList'

export default function Home() {
  return (
    <div className='flex flex-col space-y-10'>
      <Suspense fallback={<p className='text-red-500'>LOADING TODOS....</p>}>
      <h1> Todo items</h1>
      <div className='flex space-x-2'>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      </Suspense>

      <Suspense fallback={<p className='text-blue-400'>LOADING SHOPPING TROLLEY....</p>}>
      <h1> Next Todo items</h1>
      <div className='flex space-x-2'>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      </Suspense>

    </div>


  )
}
