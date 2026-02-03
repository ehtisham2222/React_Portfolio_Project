import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className='text-2xl md:text-4xl text-white font-bold md:ml-19'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-7 md:ml-11 md:mr-2'>
          <ProjectCard 
          title="Blogging website"
          main="this is a blogging created in next js and used some component library"/>
          <ProjectCard 
          title="Youtube Clone"
          main="this is a youtube  clore which is used to  created in diiferent videos and text"/>
          <ProjectCard 
          title="Youtube Clone"
          main="this is a youtube  clore which is used to  created in diiferent videos and text"/>
      
     </div>
    </div>
  )
}   

export default Projects