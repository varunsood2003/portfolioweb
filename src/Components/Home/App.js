import React from 'react'
import logo from './logo.svg'
import './style.css';
export default function App() {
  return (
    <>
    <section className="text-gray-600 bg-[#f5f3ec]  h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-[#002233] tapered title-font sm:text-8xl text-5xl mb-4 font-medium ">Hey! <span className='text-indigo-800'>I'm</span>
                <br className=" lg:inline-block "/> <span className='text-indigo-800'>Varun</span> Sood
            </h1>
            <p className="mb-8 leading-relaxed">PROGRAMMER | DEVELOPER</p>
            <div className="flex justify-center">
                <a href='#contact' className=" rounded-xl inline-flex text-[#002233] font-bold bg-[#f5f3ec] border-2 py-2 px-6 focus:outline-none hover:bg-[#fcba4e] text-lg border-[#243c5a]">Contact me</a>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={logo}/>
            </div>
        </div>
    </section>
    </>
  )
}
