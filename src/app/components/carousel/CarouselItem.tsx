'use client'
import React, { useState } from 'react'

export default function CarouselItem({description}: {description:string}) {
  const [on, setOn] = useState(false)
  const onMouseUp = () =>{
    setOn(true)
    console.log(on)
  }
  return(
    <>
      <div className='w-[280px] lg:w-[300px] bg-white rounded-lg overflow-hidden h-[400px] relative' onMouseOver={onMouseUp} onMouseOut={() => setOn(false)}>
        <p className={`text-blue3 ${on? 'text-[50px]': 'text-[48px]'} duration-300`}>
          {description}
        </p>
        <div className='absolute bottom-5 right-5 z-50 text-blue2 text-[35px] flex'>
          {'-->'}
          <div className={`left-[10px] top-[10px] bg-blue-400 p-4 rounded-full absolute z-[-10] ${on? 'translate-x-2': 'translate-x-0'} duration-200`}>
          </div>
        </div>
      </div>
    </>
  )
}