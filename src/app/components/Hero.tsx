import React from "react";
import Image from "next/image";
import models from '../../../public/Home/heroImage.png';
import star from '../../../public/Home/starLarge.png';
import "../css/satoshi.css";


export default function Hero() {


  return (
    <main>
      <div className=" flex flex-col justify-between  items-center bg-[#F2F0F1] mx-auto h-[880px] md:items-start md:flex-row md:h-[663px] md:px-[100px]">
        <div className="mt-[40px] pl-[8px] md:mt-[100px] md:pl-[30px] md:w-1/2">

          <h1 className="w-[315px] h-[93px] font-bold text-[36px] leading-[34px] md:w-[577px] md:h-[173px] md:text-[64px] md:leading-[64px]" style={{ fontFamily: "integral" }}>Find clothes that matches your style</h1>

          <div>
            <p className="w-[358px] h-[50px] font-normal text-[14px] mt-[22px] md:w-[510px] md:mt-[30px] md:h-[33px]  md:text-[15px] md:leading-[22px] md:pt-[px]" style={{ fontFamily: "Satoshi-Light" }}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

          </div>
          <div>
            <button className="w-[358px] h-[52px] text-[16px] rounded-full mt-[36px]  bg-black text-white md:w-[210px]"style={{ fontFamily: "satoshi-light" }} >Shop Now</button>

          </div>

          <div className="flex md:hidden flex-wrap mx-auto w-[278px]  justify-center items-center mt-[20px] md: md:w-[596px] md:flex-row md:justify-start md:mx-0 md:mb-[116px]">
            <div className="flex flex-col w-[106px] h-[48px]">
              <h1 className="font-bold text-2xl " style={{ fontFamily: "Satoshi-variable" }}>200+</h1>
              <p className="text-[#00000099] font-normal text-[12px]" style={{ fontFamily: "Satoshi-variable" }}>International Brands</p>
            </div>
            <span className="w-[1px] h-[52px] flex justify-center items-center bg-black opacity-10 mx-[27px]">.</span>
            <div className="flex flex-col w-[117px] h-[48px]">
              <h1 className="font-bold text-2xl" style={{ fontFamily: "Satoshi-variable" }}>2000+</h1>
              <p className="text-[#00000099] font-normal text-[12px]" style={{ fontFamily: "Satoshi-variable" }}>High-Quality Products</p>
            </div>
            <div className="w-0.5 h-[52px] bg-black opacity-10 mx-4 hidden md:block">.</div>
            <div className="flex mt-[20px] justify-center flex-col w-[117px] h-[48px]">
              <h1 className="font-bold text-2xl" style={{ fontFamily: "Satoshi-variable" }}>30,000+</h1>
              <p className="text-[#00000099] font-normal text-[12px]" style={{ fontFamily: "Satoshi-variable" }}>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex  relative justify-center items-center h-[448px] md:h-[663px] md:w-1/2">
          <div >
            <Image
              src={models}
              alt="HeroImage"
              className="h-[447px]  w-full object-cover md:h-[663px] md:w-[600px] "
            />
          </div>
          <div>
            <Image src={star} alt="star" className="absolute h-[76px] w-[76px] top-[40px] right-[40px] animate-pulse md:top-[100px] md:right-[60px] md:h-[106px] md:w-[106px]" />
            <Image src={star} alt="star" className="absolute h-[44px] w-[44px] top-[136px] left-[27px] animate-pulse  md:top-[297px] md:left-[10px] md:h-[56px] md:w-[56px]" />
          </div>
        </div>
      </div>

    </main>
  );
};

