'use client'
import Image from "next/image";
import { scroll } from "framer-motion/dom";
import { motion, useScroll, useMotionValue, transform} from 'framer-motion'
import { useEffect, useState, useRef } from "react"

import logo from './assets/img/icon-64.png'
import VideoComponent from './components/common/Video';
import SlickCarousel from "./components/carousel/SlickCarousel";

export default function Home() {
  const thresholdY = 0;

  const { scrollY } = useScroll();
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isPastThreshold1, setIsPastThreshold1] = useState(false);

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

  const controlsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  return (
    <>
      <section  className="w-full bg-white mx-auto relative rounded-[40px] z-10 overflow-hidden">
        <div className="max-w-7xl px-6 lg:px-10 mx-auto">
          <motion.div 
              initial={{ top:"-240px" }}
              animate={{ top:!isPastThreshold?"0":"-200px",
                          // scale:!isPastThreshold?1:0.5,
                          // opacity:!isPastThreshold?1:0.5,
                        }}
              transition={{ duration:0.8 }}
              className="w-full absolute top-0 left-0 text-center">
            <div className="text-xl mt-10 text-[#264269] font-semibold">
              Web Agency
            </div>
            <div className="text-6xl mt-4 text-[#264269] font-semibold">
              There is a plus side
            </div>
            <div className="text-6xl mt-4 text-[#264269] font-semibold">
              to <span className="text-[#549bfe]">every purchase</span>
            </div>
            <div className="text-sm mt-8 rounded-full w-fit mx-auto px-4 py-1 text-white bg-[#264269] font-semibold">
              Get Web Agency
            </div>
          </motion.div>
          <div className="bg-white pt-[320px]">
            <VideoComponent 
              poster={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/hero/ql-home-page-hero-may-desktop-cover.webp?quality=75"} 
              src={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/hero/ql-home-page-hero-may-desktop-vp9.webm#t=0.01"}/>
          {/* <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={controlsVariants}
                transition={{ duration: 0.5 }}
              >
                <motion.video
                  playsInline
                  disableRemotePlayback
                  disablePictureInPicture
                  autoPlay
                  poster="https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/hero/ql-home-page-hero-may-desktop-cover.webp?quality=75"
                  src="https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/hero/ql-home-page-hero-may-desktop-vp9.webm#t=0.01"
                  type="video/mp4; codecs=&quot;hvc1&quot;"
                  onClick={() => {
                    // Toggle play/pause on click
                    if (document.querySelector('video').paused) {
                      document.querySelector('video').play();
                    } else {
                      document.querySelector('video').pause();
                    }
                  }}
                />
              </motion.div> */}
          </div>
          <div 
            className="w-full relative">
            <motion.div 
              initial={{ bottom:"-30vh" }}
              animate={{ bottom:!isPastThreshold?"0":"-30vh",
                          // scale:!isPastThreshold?1:0.5,
                          // opacity:!isPastThreshold?1:0.5,
                        }}
              transition={{ duration:0.8 }}
              className="fixed w-full flex justify-center items-end bottom-0 left-0 h-[30vh] pb-16 bg-gradient-to-b from-transparent to-white">
              <div className="flex justify-between gap-3">
                <div className="rounded-full text-sm px-4 py-2 border-1 text-[#264269] border-[#264269] cursor-pointer hover:border-black">
                  Personal
                </div>
                <div className="rounded-full  text-sm px-4 py-2 border-1 text-[#264269] border-[#264269] cursor-pointer hover:border-black">
                  Business
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className='w-full text-white  mt-[-30px] h-[80vh] text-center sticky top-0 bg-gradient-to-bl from-blue4 to-blue5'>
        <div className="text-4xl font-semibold px-10 lg:px-[200px] text-start max-w-7xl mx-auto pt-40">
          With Agency,
        </div>
        <div className="text-4xl pt-2 text-[#537ff9] font-semibold px-10 lg:px-[200px] text-start max-w-7xl mx-auto">
          It Really Adds Up
        </div>
        <div>
          <SlickCarousel />
        </div>
      </section>  
      <section className='w-full h-[2000px] text-center z-50 relative bg-white'>
        <div className="absolute top-6 sm:top-[300px] left-0 right-0">
          <div className="md:w-[620px] mx-auto">
            <p className="text-[50px] text-blue3 font-semibold">Get <span className="text-blue2">unlimited cash back </span> on your favorite brands</p>
            <p className="text-lg text-blue3">
              Hundreds of cash back offers picked just for you. Save as many as you want. Earn 1, 2, 3, 4, 5% and more after you check out with PayPal.1 Check offers for details. 
              <span className="text-blue2 font-semibold italic cursor-pointer">
                <a>
                  Terms and exclusions
                </a>
              </span>
              apply. 
            </p>
          </div>
        </div>
        <VideoComponent 
          poster={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/chapter2-desktop-poster.jpg?quality=75"} 
          src={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/chapter2-desktop.webm#t=0.01"}
        />
        
      </section>
    </>
  );
}
