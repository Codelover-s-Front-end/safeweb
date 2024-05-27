'use client'
import Image from "next/image"
import { motion, useScroll, useMotionValue, transform} from 'framer-motion'
import { useEffect, useState, useRef } from "react"
import logo from './../../assets/img/icon-64.png'

export default function Footer () {
  const thresholdY = 2000;

  const { scrollY } = useScroll();
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    function updateOpacity(y:number) {
      if(thresholdY < y){
        setIsPastThreshold(true)
      }else{
        setIsPastThreshold(false)
      }
    }

    const unsubscribeY = scrollY.on("change", updateOpacity)

    return () => {
      unsubscribeY()
    }
  }, [])

  return(
    <motion.div 
      initial={{ opacity: 1 }}
      // whileInView={{ position: "sticky", bottom:0 }}
      animate={{
        display: isPastThreshold ? "block" : "none"
      }}
      className={`w-full text-center bg-gradient-to-bl sticky bottom-0 z-[6] from-blue4 to-blue5`}>
      <div className='w-full max-w-7xl px-6 lg:px-10 mx-auto pb-12'>
        <div className="w-full flex justify-start px-4 py-10 gap-x-4">
          <div className="flex items-center">
            <Image 
              src={logo}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <p className="text-[24px] md:text-[36px] font-semibold italic text-white">
            SafeWeb Agency
          </p>
        </div>
        <div className="w-full ">
          <div className="flex flex-wrap w-full gap-x-10 gap-y-4 mb-4">
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Help
            </a>
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Contact
            </a>
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Fees
            </a>
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Security
            </a>
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Apps
            </a>
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Shop
            </a>
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Enterprise
            </a>
            <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
              Partners
            </a>
          </div>
          <div className="w-full h-[1px] bg-gray-400" />
          <div className="w-full flex flex-wrap justify-between">
            <div className="flex flex-wrap w-fit gap-x-10 gap-y-4 my-4">
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                About
              </a>
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                Newsroom
              </a>
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                Jobs
              </a>
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                Investor Relations
              </a>
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                Public Policy
              </a>
            </div >
            <div className="w-full block lg:hidden h-[1px] bg-gray-400" />
            <div className="flex flex-wrap w-fit gap-x-10 gap-y-4 my-4">
              <div className="text-[12px] font-semibold text-slate-300 hover:text-link-hover">
                @1999-2024
              </div>
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                Shop
              </a>
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                Enterprise
              </a>
              <a href="/" className="text-[12px] font-semibold text-white hover:text-link-hover">
                Partners
              </a>
            </div>            
          </div>
          <div className="w-full mt-10 space-y-4">
            <div className="w-full flex space-x-2">
              <p className="text-[7px] pt-[4px]  align-bottom text-white">1</p>
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="text-[7px] pt-[4px]  align-bottom text-white">2</p>
              <p className="text-[12px] text-white">Purchases are subject to credit approval, and the PayPal Cashback Mastercard must be used for payment. See<span> <a href="/" className="font-semibold underline"> Rewards Program Terms</a></span>  for details and restrictions.</p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="text-[7px] pt-[4px]  align-bottom text-white">1</p>
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="text-[7px] pt-[4px]  align-bottom text-white">1</p>
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="text-[7px] pt-[4px]  align-bottom text-white">1</p>
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="text-[7px] pt-[4px]  align-bottom text-white">1</p>
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>

            <div className="w-full flex space-x-2">
              <p className="text-[7px] pt-[4px]  align-bottom text-white">1</p>
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>

            <div className="w-full flex space-x-2">
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="text-[12px] text-white">Check offers for details. <span> <a href="/" className="font-semibold underline">Terms and exclusions apply.</a></span> </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}