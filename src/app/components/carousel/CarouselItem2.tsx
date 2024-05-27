'use client'
import React, { useState } from 'react'

export default function CarouselItem2({description}: {description:string}) {
  const [on, setOn] = useState(false)
  const onMouseUp = () =>{
    setOn(true)
    console.log(on)
  }
  return(
    <>
      <div className='w-[280px] lg:w-[300px] bg-[#F3F3F6] rounded-lg overflow-hidden h-[60px] relative cursor-pointer' onMouseOver={onMouseUp} onMouseOut={() => setOn(false)}>
        <p className={`text-blue3 ${on? 'text-[26px]': 'text-[24px]'} duration-300`}>
          {description}
        </p>
        <div className='absolute bottom-3 right-2 z-50 text-blue2 text-[35px] flex'>
          {'->'}
          <div className={`left-[10px] top-[14px] bg-blue-400 p-3 rounded-full absolute z-[-10] ${on? 'translate-x-2': 'translate-x-0'} duration-200`}>
          </div>
        </div>
      </div>
    </>
  )
}