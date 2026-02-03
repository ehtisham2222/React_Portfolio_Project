import React from 'react'
 import {SiYoutube} from 'react-icons/si';
 import {SiLinkedin} from 'react-icons/si';
 import { SiGithub } from 'react-icons/si';
function Footer() {
  return (
    <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-10'>
        <div>
           <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
           <h3 className='text-sm md:text-2xl font-normal'>Feel Free To reach out!</h3>
          </div>
          <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'>
                <SiYoutube size={20}/>
                www.youtube/ehtisham12
            </li>
            <li className='flex gap-1 items-center'>
                 <SiLinkedin size={20}/>
                 linkedin.com/ehtisham.com
            </li>
            <li className='flex gap-1 items-center'>
                 <SiGithub size={20}/>
                 github.com./ehtisham2222
            </li>
          </ul>
        
        
        </div>
  )
}

export default Footer