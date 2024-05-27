'use client'
import Image from "next/image"
import logo from './../../assets/img/icon-64.png'
export default function Header () {
  return(
    <div className="max-w-[1280px] w-full justify-between mx-auto py-5 flex border-b-1">
      <div className="flex space-x-2 px-4">
        <a className="outline-none outline-0 hover:outline-1 outline-gray-500 border-none text-center px-1 rounded-[4px] cursor-pointer" href="/">
          <Image 
            alt="" 
            src={logo}
            width={33}
            height={33}
          />
        </a>
        <div className="lg:flex content-center space-x-2 hidden pt-2">
          <a 
            className="outline-none outline-0 hover:outline-1 outline-gray-500 border-none text-center px-4 rounded-full h-[20px] cursor-pointer hover:text-blue2 hover:font-semibold" 
            href="/"
          >
            Page1
          </a>
          <a 
            className="outline-none outline-0 hover:outline-1 outline-gray-500 border-none text-center px-4 rounded-full h-[20px] cursor-pointer hover:text-blue2 hover:font-semibold" 
            href="/"
          >
            Page2
          </a>
          <a 
            className="outline-none outline-0 hover:outline-1 outline-gray-500 border-none text-center px-4 rounded-full h-[20px] cursor-pointer hover:text-blue2 hover:font-semibold" 
            href="/"
          >
            Page3
          </a>
          <a 
            className="outline-none outline-0 hover:outline-1 outline-gray-500 border-none text-center px-4 rounded-full h-[20px] cursor-pointer hover:text-blue2 hover:font-semibold" 
            href="/"
          >
            Page4
          </a>
        </div>
      </div>
      <div className="flex">
        <a className="bg-blue1 hover:bg-blue2 cursor-pointer rounded-full p-2 px-4 lg:p-3 lg:px-8 text-xs lg:text-sm text-white font-semibold">
          Contact Us
        </a>
      </div>
    </div>
  )
}