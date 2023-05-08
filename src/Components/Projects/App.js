import React from 'react'
import img from './wisdom.png'
import img2 from './CRYPTO.png'
import img3 from './keeper.png'
import img4 from './exp.png'
import img5 from './lottery.png'
import img6 from './bud.png'
export default function App() {
  return (
    <>
    {/* <svg id='project' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#002233" fill-opacity="1" d="M0,224L40,192C80,160,160,96,240,69.3C320,43,400,53,480,96C560,139,640,213,720,213.3C800,213,880,139,960,117.3C1040,96,1120,128,1200,149.3C1280,171,1360,181,1400,186.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg> */}
    <section id='project'  className=' bg-[#f5f3ec] '>
    <section className="text-gray-600 body-font">
      <div className='px-5'>
      <div  className='flex justify-center items-center'>
      <h1 className=" sm:text-6xl text-3xl font-medium text-[#002233] pt-24 pb-5">Projects</h1>
      </div>
  <div className="container px-5 py-5 mx-auto ">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4" >
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Chat-App</h1>
            <p className="leading-relaxed">Developed a real-time chat application using React.js and used Firebase as the backend. Implemented user authentication using Firebase Authentication for secure login and sign-up functionality.</p>
            <p className="">Tech Stack: React js and Firebase</p>
            
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mt-3"><a href="https://lnkd.in/g6TsHWRt">Live Link</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img2}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Crypto World</h1>
            <p className="leading-relaxed">Built a web app that displays the prices of all the crypto currencies, could be a useful tool for keeping track of the value of various digital assets.</p>
            <p className="">Tech Stack: React js, Axios</p>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mr-4 "><a href="https://github.com/varunsood2003/cryptoworld">Github</a> </button>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mt-3"><a href="https://varunsood2003.github.io/cryptoworld/">Live Link</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img3}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Keeper</h1>
            <p className="leading-relaxed">A note taking app that performs CRUD (create, read, update, delete) operations which is a useful tool for individuals to store and manage their notes.</p>
            <p className="">Tech Stack: React js</p>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mr-4 "><a href="https://github.com/varunsood2003/Keeper">Github</a> </button>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mt-3"><a href="https://varunsood2003.github.io/Keeper/">Live Link</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img6}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Grocery Buddy</h1>
            <p className="leading-relaxed">Grocery Buddy is a user-friendly web application that helps you manage your grocery list. It allows CRUD operations, also stores your data in local storage.</p>
            <p className="">Tech Stack: React js</p>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mr-4 "><a href="https://github.com/varunsood2003/grocery-buddy">Github</a> </button>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mt-3"><a href="https://varunsood2003.github.io/grocery-buddy/">Live Link</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img5}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lottery contract</h1>
            <p className="leading-relaxed">Lottery contract provides a secure and transparent way for users to participate in a lottery, and would offer a user-friendly experience for interacting with blockchain.</p>
            <p className="">Tech Stack: React js, Solidity</p>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mr-4 "><a href="https://github.com/varunsood2003/lottery-contract">Github</a> </button>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mt-3"><a href="https://varunsood2003.github.io/lottery-contract/">Live Link</a> </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img4}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Expense Tracker</h1>
            <p className="leading-relaxed">Made a expense tracker webapp that helps you to keep a track of all your expenses. </p>
            <p className="">Tech Stack: React js</p>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mr-4 "><a href="https://github.com/varunsood2003/expense-tracker">Github</a> </button>
            <button className="rounded-xl inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg mt-3"><a href="https://varunsood2003.github.io/expense-tracker/">Live Link</a> </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
    </section>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#002233" fill-opacity="1" d="M0,224L40,202.7C80,181,160,139,240,101.3C320,64,400,32,480,42.7C560,53,640,107,720,128C800,149,880,139,960,112C1040,85,1120,43,1200,48C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg> */}
    </>
  )
}
