import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import Avatar_2 from '../../assets/avatar-2.png'

function About() {
  return (
      <div>
      <h2 className='text-2xl md:text-4xl font-bold mb-10 md:mr-17'>
        About
      </h2>
      <div className='flex justify-center'>
        <div className='md:flex flex-col md:flex-row items-center gap-8 max-w-4xl'>
          <img
            className='md:h-90 md:w-90 object-contain mb-8 md:mb-6 md:mr-25 md:pl-2 md:pt-3'
            src={Avatar_2}
            alt='Avatar'
          />
          <ul className='flex flex-col gap-6 md:mb-19 md:my-10 md:mr:0.2 md:mt-1 '>
            
            <li className='flex gap-3'>
              <IoArrowForward size={26} className='mt-2 flex-shrink-0' />
              <span className='md:w-96 w-full'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                  Frontend developer
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                  I am Frontend developer making with html css and javascript and the backend with php and node js.
                </p>
              </span>
            </li>

            <li className='flex gap-3'>
              <IoArrowForward size={26} className='mt-2 flex-shrink-0' />
              <span className='md:w-96 w-full'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                  Backend developer
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                  I am backend developer making with php laravel and node.js and the backend with php and node js.
                </p>
              </span>
            </li>

            <li className='flex gap-3'>
              <IoArrowForward size={26} className='mt-2 flex-shrink-0' />
              <span className='md:w-96 w-full'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                  Database developer
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                  I am database developer making with mysql sql firebase and javascript and the backend with php and node js.
                </p>
              </span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
