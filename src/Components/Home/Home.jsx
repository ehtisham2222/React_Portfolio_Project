import React from 'react'
import Man_avatr from '../../assets/Man-avatar.png'
import TextChange from '../TextChange/TextChange'

function Home() {
  return (
    <section className="w-full text-white min-h-screen flex items-center">
      
      {/* Main Center Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left md:ml-8">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
            <TextChange />
          </h1>

          <p className="text-base md:text-2xl mt-4 leading-relaxed">
            I am a Computer Science graduate with knowledge in web development and app development.
          </p>

          <button className="mt-6 text-white py-2 px-6 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#455697]">
            Contact Me
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify- md:mr-2 ml-9">
          <img
            className="w-[240px] md:w-[380px]"
            src={Man_avatr}
            alt="Developer Avatar"
          />
        </div>

      </div>
    </section>
  )
}

export default Home
