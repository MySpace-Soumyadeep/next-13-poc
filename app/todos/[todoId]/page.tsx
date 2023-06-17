import { Todo } from '@/typing'
import React from 'react'
import {notFound} from 'next/navigation'

/*
we can toggle the ablity to generate or server side render pages that were not originally created when we statically built out website by doing the following
*/

export const dynamicParams = true

/* 
the issue with this is when we hit 100 million to the id, it gives unexpected behaviour where there were no hit and and next js didn't know what to do

--------------------------------------------------------

To solve this we have a notFound argument from next navigation
and we can add a check that if id is not found return 404 page by calling notFound argument as below
*/

type PageProps = {
    params:{
        todoId: string
    }
}

const fetchTodoDetail = async (todoId: string) => {

    /*
    fetch api is upgraded

    add a second argument and add object with param cache with bunch of options

    to force the server side rendering method that we previously knew --- no-cache [{cache: 'no-cache'}]

    if we want to force a SSG(Static Side Generation) --- force-cache [{cache: 'force-cache'}]

    to force ISR where we can revalidate the pages after a given certain time --- {next: {revalidate: 60}}
    */

    const res = await fetch (`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: {revalidate: 60}})
    const data:Todo = await res.json()
    return data

}

async function TodoPage({params: {todoId}}: PageProps) {
    
 const todo = await fetchTodoDetail(todoId)

 if(!todo.id) return notFound()

  return (
    <div className='p-10 bg-gray-200 border-2 m-2 shadow-lg'>
        <p>
            #{todo.id}: {todo.title}
        </p>
        <p> Completed: {todo.completed ? "Yes" : "No"}</p>

        <p className='border-t border-black mt-5 text-right'> By User: {todo.userId}</p>
    </div>
  )
}

export default TodoPage

/* new generateStaticParams() function */

export async function generateStaticParams(){
    const res = await fetch (`https://jsonplaceholder.typicode.com/todos/`)
    const data: Todo[] = await res.json()
    
    //for this demo we are only prebuilding first 10 pages to avoid being rate limited by this demo app

    const trimmedTodos = data.splice(0,10)

    return trimmedTodos.map(todo => ({todoId: todo.id.toString()}))
}