import React from 'react'
import '@/app/css/satoshi.css'
import Image from 'next/image'
import browse1 from '../../../public/Home/browse1.png'
import browse2 from '../../../public/Home/browse2.png'
import browse3 from '../../../public/Home/browse3.png'
import browse4 from '../../../public/Home/browse4.png'

export default function Browse() {

  return (
    <main>
     <div>
        <div className='bg-[#F0F0F0] h-[995px] w-auto grid grid-cols-1 my-[50px] mx-[16px] rounded-[20px] md:w-auto md:h-[816px] md:rounded-[40px] md:mx-[100px]'>
            <h1 className='font-bold text-[32px] leading-[36px] mx-[56px] mt-[40px] mb-[28px] flex justify-center text-center md:w-[687px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:mx-auto md:mt-[70px]' style={{fontFamily:"integral"}}>BROWSE BY DRESS STYLE</h1>
        <div className='relative flex flex-wrap flex-col-1 gap-4 mx-[24px] mb-[50px] md:flex-wrap flex-col-2  justify-center items-center'>
            <Image src={browse1} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[358px] md:h-[269px]'/>
            <Image src={browse2} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[644px] md:h-[269px]'/>
            <Image src={browse3} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[644px] md:h-[269px]'/>
            <Image src={browse4} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[358px] md:h-[269px]'/>
        </div>
        
        </div>
     </div>

    </main>
  )
}

