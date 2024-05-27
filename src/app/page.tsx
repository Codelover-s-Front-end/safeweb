'use client'
import Image from "next/image";
import { scroll } from "framer-motion/dom";
import { motion, useScroll, useMotionValue, transform, Variants} from 'framer-motion'
import { useEffect, useState, useRef } from "react"

import paypal from './components/svg/paypal.svg'
import VideoComponent from './components/common/Video';
import SlickCarousel from "./components/carousel/SlickCarousel";
import sendMoneyImage from './assets/img/send-money.png'
import banner1 from './assets/img/banner1.jpg'
import banner2 from './assets/img/banner2.jpg'
interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

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
      <section  className="w-full bg-white mx-auto relative rounded-[40px] z-10 overflow-hidden h-[100vh]">
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
          <div className="bg-white pt-[40vh] sm:pt-[320px]">
            <VideoComponent 
              poster={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/hero/ql-home-page-hero-may-desktop-cover.webp?quality=75"} 
              src={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/hero/ql-home-page-hero-may-desktop-vp9.webm#t=0.01"}/>
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
      
      <section className='w-full text-center z-50 relative bg-white rounded-b-3xl overflow-hidden'>
        <div className="absolute  top-[140px] left-0 right-0 md:w-[620px] mx-auto">
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
        <VideoComponent 
          poster={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/chapter2-desktop-poster.jpg?quality=75"} 
          src={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/chapter2-desktop.webm#t=0.01"}
        />
      </section>
      <section className='w-full text-center flex z-[49] relative bg-blue2 rounded-b-lg top-[-80px]'>
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-auto">
            <div className="py-[140px] text-[52px] text-blue5 font-bold">
              Add another <span className="text-white">3% on top</span>
            </div>
            <div className="w-full md:flex mx-auto">
              <div className="w-full text-center flex">
                <Image alt="" src={paypal} className="w-[300px] rotate-4 mx-auto"/>
              </div>
              <div className="w-full">
                <p className="text-white text-[48px] text-left">
                  Just use your PayPal Cashback Mastercard
                </p>
                <p className="text-white text-sm text-left">
                  Put it on the card and that’s another 3% back on your PayPal purchases.2 No rotating categories. No annual fee.3 Plus, no impact to your credit score if you’re declined.4
                </p>
                <div className="bg-white text-blue2 w-[120px] rounded-full my-6 py-2 hover:bg-link-hover2 cursor-pointer">
                  Apply Now
                </div>
                <p className="text-white text-sm text-left mb-12">
                Subject to credit approval.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    
      <section 
        className='w-full text-center flex z-[49] relative top-[-80px] h-[100vh]' 
        style={{ 
          backgroundImage: "url('http://localhost:3000/img/background.jpg')",
          backgroundSize: 'cover', // Optional: Cover the entire section
          backgroundPosition: 'center' // Optional: Center the background image
        }}
        >
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-auto">
            <div className="w-full max-w-[500px] bottom-0 mx-auto mt-24">  
              <p className="text-white text-[52px]">
                Earn interest on your cash back
              </p>
              <p className="text-white text-sm">
                Roll your cash back into a high-yield PayPal Savings account. You could earn 4.30% APY.5
              </p>
              <div className="bg-white text-blue2 w-[240px] rounded-full my-6 py-2 hover:bg-link-hover2 cursor-pointer mx-auto">
                Sign up for PayPal Saving
              </div>
              <p className="text-white text-sm">
                PayPal Balance account is required to use PayPal Savings. PayPal is a financial technology company, not a bank. Banking services provided by Synchrony Bank, Member FDIC.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full text-center flex z-[49] relative  rounded-b-lg bg-[#F3F3F6] top-[-80px]'>
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-auto">
            <div className="w-full md:flex mx-auto my-24">
              <div className="w-full text-center flex">
                <Image alt="" src={sendMoneyImage} className="w-[400px] rotate-4 mx-auto"/>
              </div>
              <div className="w-full">
                <p className="text-blue3 text-[48px] text-left">
                Settle up with friends, <span className="text-blue2">fast and safe</span>
                </p>
                <p className="text-blue3 text-sm text-left">
                  At the table or across the globe, it's the fast, secure way to get cash to your friends and family.6 
                </p>
                <div className="text-white w-[120px] rounded-full my-6 py-2 bg-blue1 hover:bg-blue2 cursor-pointer">
                  Send Money
                </div>
                <p className="text-blue3 text-sm text-left mb-12">
                Subject to credit approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full text-center flex z-[47] relative  rounded-b-lg bg-white top-[-120px] absolute'>
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-auto mt-[120px]">
            <p className="text-[52px] text-blue3 font-bold">
              Safe, private, <span className="text-blue2"> secure</span>
            </p>
            <p className="text-black text-lg">Your data is encrypted, keeping your sensitive financial info safe.</p>
            <div className="text-white w-[200px] rounded-full my-6 py-2 bg-blue1 hover:bg-blue2 cursor-pointer mx-auto">
              More About Security
            </div>
            <div className="w-full max-w-[800px] h-[300px] rounded-full overflow-hidden hidden md:flex mb-[170px]"> 
              <Image 
                alt=""
                src={banner1}
              />
            </div>
            <div className="w-[90vw] h-[90vw] rounded-xl overflow-hidden md:hidden mx-[5vw] mb-12"> 
              <Image 
                alt=""
                src={banner2}
              />
            </div>
            

          </div>
        </div>
      </section>
    </>
  );
}
