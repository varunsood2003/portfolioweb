import React from "react";
import leetcode from "./leetcode.png";
import github from "./github.png";
import gfg from "./gfg.png";
import twitter from "./twitter.png";
import link from "./link.png";
export default function App() {
  return (
    <>
      <section
        id="contact"
        className="text-gray-600 bg-[#002233] body-font relative "
      >
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-6xl text-3xl font-medium mb-4 text-[#F6BE00] pt-24 pb-5">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Thank you for taking the time to visit my portfolio. If you're
              interested in working together or have a project in mind, let's
              connect! You can reach me through the contact form or by email
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form action="https://formspree.io/f/xqkoqrjv" method="POST" className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" value='send' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 mb-6 border-t border-gray-200 text-center">
                <a className="text-indigo-500">soodvarun2003@email.com</a>
                <p className="leading-normal my-5"></p>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/varun2003/"
                    className="ml-4 text-gray-500  "
                  >
                    <img className="w-10 " src={link} alt="" />
                  </a>
                  <a
                    href="https://leetcode.com/varunsood/"
                    className="ml-4 text-gray-500  "
                  >
                    <img className="w-10 " src={leetcode} alt="" />
                  </a>
                  <a
                    href="https://auth.geeksforgeeks.org/user/soodvarun2003/"
                    className="ml-4 text-gray-500  "
                  >
                    <img className="w-10 " src={gfg} alt="" />
                  </a>
                  <a
                    href="https://github.com/varunsood2003"
                    className="ml-4 text-gray-500  "
                  >
                    <img className="w-10 " src={github} alt="" />
                  </a>
                  <a
                    href="https://twitter.com/VarunSo62929244"
                    className="ml-4 text-gray-500  "
                  >
                    <img className="w-10 " src={twitter} alt="" />
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
