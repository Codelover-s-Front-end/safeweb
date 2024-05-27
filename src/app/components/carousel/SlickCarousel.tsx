// SlickCarousel.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SlickCarousel = () => {
  
  return (
    <>
      <div className='flex overflow-x-scroll relative overflow-x-hidden '>
        <div className='w-[300px] bg-white rounded-lg overflow-hidden h-[400px]  relative'>
          
        </div>
        <div className='w-[300px] bg-white rounded-lg overflow-hidden h-[400px]  relative'>
          
        </div>

        <div className='w-[300px] bg-white rounded-lg overflow-hidden h-[400px]  relative'>
          
        </div>

        <div className='w-[300px] bg-white rounded-lg overflow-hidden h-[400px]  relative'>
          
        </div>  
      </div>      
    </>    
  );
};
export default SlickCarousel;