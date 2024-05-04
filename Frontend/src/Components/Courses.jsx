import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='pt-32 text-center space-y-10'>
            <h1 className='text-2xl md:text-4xl'>We are Delighted To Have You <span className='text-pink-500'>Here :)</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos quam quo perferendis in nihil totam velit, facilis aliquam temporibus ipsam praesentium laborum blanditiis quisquam odit unde maxime quaerat minima.
             Minima quibusdam illo molestiae ea voluptatum placeat, eum esse at mollitia! Laudantium nemo, assumenda non quidem beatae nostrum?</p>
             <Link to='/'>
             <button className='mt-6 text-white bg-pink-400 px-3 py-2 rounded-md hover:cursor-pointer'>Back</button>
             </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 py-4'>
            {
                list.map((item)=>(
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
    </div>
   
    </>
  )
}
