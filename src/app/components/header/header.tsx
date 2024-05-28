'use client'
import Image from "next/image"
import logo from './../../components/svg/paypal.svg'
export default function Header () {
  return(
    <div className="max-w-[1440px] w-full justify-between mx-auto py-5 flex border-b-1">
      <div className="flex space-x-2 px-4">
        <a className="outline-none outline-0 hover:outline-1 outline-gray-500 border-none text-center px-1 rounded-[4px] cursor-pointer mt-2 " href="/">
          <Image 
            alt="" 
            src={logo}
            width={35}
            height={35}
          />
        </a>
        <div className="lg:flex content-center space-x-2 hidden pt-2">
          <a 
            className="outline-none border-none text-center px-4 py-1 rounded-full h-[32px] cursor-pointer hover:text-blue2 hover:bg-blue6 font-semibold duration-500" 
            href="/"
          >
            Personal
          </a>
          <a 
            className="outline-none border-none text-center px-4 py-1 rounded-full h-[32px] cursor-pointer hover:text-blue2 hover:bg-blue6 font-semibold duration-500" 
            href="/"
          >
            Small Business
          </a>
          <a 
            className="outline-none border-none text-center px-4 py-1 rounded-full h-[32px] cursor-pointer hover:text-blue2 hover:bg-blue6 font-semibold duration-500" 
            href="/"
          >
            Enterprise
          </a>
          <a 
            className="outline-none border-none text-center px-4 py-1 rounded-full h-[32px] cursor-pointer hover:text-blue2 hover:bg-blue6 font-semibold duration-500" 
            href="/"
          >
            Developer
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