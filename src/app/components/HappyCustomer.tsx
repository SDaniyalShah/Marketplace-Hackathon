import React from 'react';
import '@/app/css/satoshi.css';
import Image from 'next/image';
import arrowLeft from '../../../public/Home/arrow-down-bold 2.png'
import arrowRight from '../../../public/Home/arrow-down-bold 1.png'
import fiveStar from '../../../public/Home/fivestar.png';
import varified from '../../../public/Home/verified.png';
import blurReview1 from '../../../public/Home/BlurReview1.png'
import blurReview2 from '../../../public/Home/BlurReview2.png'
import '@/app/css/satoshi.css'

export default function HappyCustomer() {
  return (
    <>
      <div className='flex flex-col mb-[149px] md:mb-[120px]'>
      <div className='flex justify-between mx-0 px-6 mr-12 md:mt-[30px] md:mx-[80px] md:mr-[140px]'>
        <div className='w-[286px] h-[72px] flex leading-9 text-[32px] font-bold md:w-[654px] md:h-[58px] md:text-5xl md:leading-[57.6px]' >
            <h1 style={{fontFamily:"integral"}}>OUR HAPPY CUSTOMERS</h1>
            
        </div>
        <div className='flex gap-6 w-6 h-6 mt-[40px] '>
            <Image src={arrowLeft} alt='<-'/>
            <Image src={arrowRight} alt='->'/>
            </div>
            </div>
        <div className='flex flex-col justify-center items-center gap-5 mt-[24px] md:flex-row md:mt-[40px] md:mb-[50px] md:mx-[100px]' style={{fontFamily:"Satoshi-variable"}} >
          <Image className='hidden md:flex w-[120px] h-[240px]' src={blurReview1} alt='Review'/>
            <div className='w-[358px] h-[186.19px] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[340px] md:h-[219.58px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={fiveStar} alt='fiveStar' className='w-[118px] h-[19.19px] '/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[89px] h-[19px] md:w-[110px] md:h-[24px] md:text-xl md:pt-5'>Sarah M. <span><Image src={varified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:w-[306px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;</p>
            </div>
            </div>

            <div className='hidden w-[358px] h-[186.19px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[340px] md:h-[219.58px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={fiveStar} alt='fiveStar' className='w-[118px] h-[19.19px] '/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[89px] h-[19px] md:w-[110px] md:h-[24px] md:text-xl md:pt-5'>Alex K. <span><Image src={varified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:w-[306px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;</p>
            </div>
            </div>

            <div className='hidden w-[358px] h-[186.19px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[340px] md:h-[219.58px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={fiveStar} alt='fiveStar' className='w-[118px] h-[19.19px] '/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[89px] h-[19px] md:w-[110px] md:h-[24px] md:text-xl md:pt-5'>James L. <span><Image src={varified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:w-[306px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.&quot;</p>
            </div>
            </div>
            <Image className='hidden md:flex w-[120px] h-[240px]' src={blurReview2} alt='Review'/>
        </div>

       
      </div>
    </>
  )
}
