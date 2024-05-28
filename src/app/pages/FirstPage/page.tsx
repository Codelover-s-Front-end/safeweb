'use client'
import Image from "next/image";
import { scroll } from "framer-motion/dom";
import { motion, useScroll, useMotionValue, transform, Variants} from 'framer-motion'
import { useEffect, useState, useRef } from "react"

import paypal from './components/svg/paypal.svg'
import VideoComponent from '../../components/common/Video';
import SlickCarousel from "../../components/carousel/SlickCarousel";
import sendMoneyImage from './assets/img/send-money.png'
import banner1 from './assets/img/banner1.jpg'
import banner2 from './assets/img/banner2.jpg'
import CarouselItem2 from "../../components/carousel/CarouselItem2";
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
  const [isScrolledToSection, setIsScrolledToSection] = useState({
    section0: false,
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section0Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          setIsScrolledToSection((prevState) => ({
            ...prevState,
            [String(id)]: entry.isIntersecting,
          }));
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = [
      section0Ref,
      section1Ref,
      section2Ref,
      section3Ref,
      section4Ref,
    ];
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);
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
            <div className="text-4xl md:text-6xl mt-4 text-[#264269] font-semibold">
              There is a plus side
            </div>
            <div className="text-4xl md:text-6xl mt-4 text-[#264269] font-semibold">
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
      <section className='w-full text-white  mt-[-30px] h-[100vh] text-center sticky top-0 bg-gradient-to-bl from-blue4 to-blue5'>
        <div className="text-4xl md:text-6xl font-bold px-10 lg:px-[00px] text-start max-w-7xl mx-auto pt-40">
          With Agency,
        </div>
        <div className="text-4xl md:text-6xl pt-2 text-[#537ff9] font-semibold px-10 lg:px-[0px] text-start max-w-7xl mx-auto">
          It Really Adds Up
        </div>
        <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
          <SlickCarousel />
        </div>
      </section>
      
      <section className={`w-full text-center z-50 relative bg-white rounded-b-3xl overflow-hidden `}>
        <div className={`absolute top-[35px] md:top-[190px] left-0 right-0 md:w-[620px] mx-6 md:mx-auto ${isScrolledToSection.section3? '': 'translate-y-[80px]'} duration-1000`}>
          <p className="text-4xl md:text-6xl md:text-[50px] text-blue3 font-bold">Get <span className="text-blue2">unlimited cash back </span> on your favorite brands</p>
          <p className="text-lg text-blue3 mt-6">
            Hundreds of cash back offers picked just for you. Save as many as you want. Earn 1, 2, 3, 4, 5% and more after you check out with PayPal.1 Check offers for details. 
            <span className="text-blue2 font-semibold italic ">
              <a className="cursor-pointer" href="/">
                Terms and exclusions
              </a>
            </span>
            apply. 
          </p>
        </div>
        <div id="section3" ref={section4Ref}>

        </div>
        <VideoComponent 
          poster={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/chapter2-desktop-poster.jpg?quality=75"} 
          src={"https://www.paypalobjects.com/marketing/web/US/en/quantum-leap/home/chapter2-desktop.webm#t=0.01"}
        />
      </section>
      <section className='w-full text-center flex z-[49] relative bg-blue2 rounded-b-lg top-[-50px]'>
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-6 md:mx-auto">
            <div className="py-[60px] md:py-[140px] text-4xl md:text-6xl text-blue5 font-bold">
              Add another <span className="text-white">3% on top</span>
            </div>
            <div className="w-full md:flex mx-auto">
              <div className="w-full text-center flex">
                <Image alt="" src={paypal} className={`w-[300px] mx-auto ${!isScrolledToSection.section0 ? 'translate-y-[-660px] -rotate-90' : 'translate-y-[-80px] -rotate-12'} duration-1000`}/>
              </div>
              <div className="w-full">
                <p className="text-white text-[48px] text-left font-bold">
                  Just use your PayPal Cashback Mastercard
                </p>
                <p className="text-white text-sm text-left">
                  Put it on the card and that’s another 3% back on your PayPal purchases.2 No rotating categories. No annual fee.3 Plus, no impact to your credit score if you’re declined.4
                </p>
                <div className="bg-white text-blue3 w-[120px] rounded-full my-6 py-2 hover:bg-link-hover2 cursor-pointer font-bold">
                  Apply Now
                </div>
                <div id="section0" ref={section0Ref} />
                <p className="text-white text-sm text-left mb-36">
                Subject to credit approval.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section 
        className={`w-full text-center flex z-[49] relative top-[-60px] h-[100vh] ${isScrolledToSection.section1 ? '' : ''} duration-500`} 
        style={{ 
          backgroundImage: "url('http://localhost:3000/img/background.jpg')",
          backgroundSize: `'cover'`,
          backgroundPosition: 'center'
        }}
        >
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-auto">
            <div className="w-full max-w-[500px] bottom-0 mx-auto mt-24">  
              <p className="text-white font-bold text-6xl mb-6">
                Earn interest on your cash back
              </p>
              <p className="text-white text-sm font-bold">
                Roll your cash back into a high-yield PayPal Savings account. You could earn 4.30% APY.5
              </p>
              <div className="bg-white text-blue3 w-[240px] rounded-full my-6 py-2 hover:bg-link-hover2 cursor-pointer mx-auto  font-bold">
                Sign up for PayPal Saving
              </div>
              <p className="text-white text-sm  font-bold">
                PayPal Balance account is required to use PayPal Savings. PayPal is a financial technology company, not a bank. Banking services provided by Synchrony Bank, Member FDIC.
              </p>
            </div>
          </div>
        </div>
        
      </section>
        <div id="section1" ref={section1Ref} className=""/>
      <section className='w-full text-center flex z-[49] relative  rounded-b-lg bg-[#F3F3F6] top-[-70px]'>
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-auto">
            <div className="w-full md:flex mx-6 md:mx-auto my-24">
              <div className="w-full text-center flex">
                <Image alt="" src={sendMoneyImage} className="w-[400px] rotate-4 mx-auto"/>
              </div>
              <div className="w-full">
                <p className="text-blue3 text-4xl md:text-6xl font-bold text-left">
                Settle up with friends, <span className="text-blue2">fast and safe</span>
                </p>
                <p className="text-blue3 text-lg text-left font-bold mt-6">
                  At the table or across the globe, it&apos;s the fast, secure way to get cash to your friends and family.6 
                </p>
                <div className="text-white w-[120px] rounded-full my-6 py-2 bg-blue1 hover:bg-blue2 cursor-pointer font-bold">
                  Send Money
                </div>
                <p className="text-blue3 text-lg font-bold text-left mb-12">
                Subject to credit approval.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section className='w-full text-center flex z-[47] relative  rounded-b-lg bg-white top-[-80px]'>
        <div className="w-full flex">
          <div className="max-w-[1280px] mx-auto mt-[120px]">
            <p className="text-4xl md:text-6xl text-blue3 font-bold">
              Safe, private, <span className="text-blue2"> secure</span>
            </p>
            <p className="text-black text-lg font-bold mt-6">Your data is encrypted, keeping your sensitive financial info safe.</p>
            <div className="text-white w-[200px] rounded-full my-6 py-2 bg-blue1 hover:bg-blue2 cursor-pointer mx-auto font-bold">
              More About Security
            </div>
            
            <div className="w-full max-w-[800px] h-[300px] rounded-full overflow-hidden hidden md:flex mb-[30px]"> 
              <Image
                alt=""
                src={banner1}
                className={`${isScrolledToSection.section2 ? 'scale-125' : ''} duration-1000`}
              />
            </div>
            <div id="section2" ref={section2Ref}/>
            <div className="w-[90vw] h-[90vw] rounded-xl overflow-hidden md:hidden mx-[5vw]"> 
              <Image 
                alt=""
                src={banner2}
              />
            </div>
            <div className="text-2xl md:text-3xl text-blue3 font-bold">
              Discover even more ways to PayPal
            </div>
            <div className="md:flex md:space-x-4 mx-auto w-full my-2 space-y-2 md:space-y-0 mt-16">
              <CarouselItem2 description="Download the App" />
              <CarouselItem2 description="Download the App" />
            </div>
            <div className="md:flex md:space-x-4 mx-auto w-full my-2 space-y-2 md:space-y-0 mb-28">
              <CarouselItem2 description="Download the App" />
              <CarouselItem2 description="Download the App" />
            </div>
          </div>
        </div>
      </section>
      <div className="relative top-[-80px] h-[120px] bg-white">
        <div className="absolute top-[-20px] bottom-[-80px] right-0 left-0 bg-white">
          
        </div>
      </div>
    </>
  );
}
