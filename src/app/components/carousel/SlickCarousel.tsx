// SlickCarousel.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CarouselItem from './CarouselItem';
const SlickCarousel = () => {
  
  return (
    <>
      <div className='flex mx-6 lg:mx-auto w-[900px] lg:w-full max-w-[1280px] space-x-4 mt-16'>
       <CarouselItem description='Cash Back offers on hundreds of brands'/>
       <CarouselItem description='Plus, earn up to 3% cash back with the PayPal Cashback Mastercard'/>
       <CarouselItem description='Plus, earn interest on that cash back with PayPal Savings'/>
      </div>      
    </>    
  );
};
export default SlickCarousel;