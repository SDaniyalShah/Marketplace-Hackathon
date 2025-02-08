'use client'
import { useState } from "react";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import X from '../../../public/Home/X.png'
import hamburger from '../../../public/Home/hamburgermenu.png'
import Logo from '../../../public/Home/Logo.png'
import searchIcon from '../../../public/Home/searchIcon.png'
import Cart from '../../../public/Home/cartIcon.png'
import dropdown from '../../../public/Home/dropDownIcon.png'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";


export default function Navbar() {
    const cart =  useSelector((state:any)=>state.cart)

    const [isOpen, setIsOpen] = useState(false); // State for toggle menu
    
      const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the navbar menu visibility
      };
  return (
    <main>
  
   <nav className='relative'>
    <div className='bg-black  h-auto w-auto text-white md:h-[38px]'>
        <div className='flex justify-center items-center text-xs mx-auto md:mx-auto gap-4 text-'>
            <div className='text-center flex-grow py-[9px] md:flex-grow-0'>
                Sign up and get 20% off your first order. <Link href='/' className='underline'>Sign Up Now</Link>
            </div>
            {/* This div will only show on medium and larger screens */}
            <div className='cursor-pointer hidden md:block md:absolute md:right-[100px]'>
                <Image src={X} alt='X' />
            </div>
        </div>
    </div>

        {/* small device screen Navbar */}
    <div className='flex justify-between h-[18px] my-5 mx-4 w-auto bg-white md:hidden'>
        <div className='flex gap-4 items-center'>
        <button onClick={toggleMenu} className="md:hidden">
            <Image src={hamburger} alt='hamburger' className='w-[24px] h-[24px]'/>
            </button>
            <Link href='/'><Image src={Logo} alt='Logo' className='w-[126px] h-[18px]' /></Link>
        </div>
        {/* Navbar Links - Visible when menu is open */}
      
        <div className='flex gap-[12px] md:hidden'>
            <Image src={searchIcon} alt='SearchIcon' className='w-[24px] h-[24px]'/>
            <Link href={"/cart"} className="relative">
            <IoCartOutline className="text-2xl lg:text-4xl "/>
            {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )}            </Link>
            <ClerkProvider>
           <SignedOut>
            <SignInButton mode="modal">
              <h1 className="text-red-500 text-[12px] items-center font-bold cursor-pointer">Login</h1>
            </SignInButton >
          </SignedOut >
          <SignedIn >
            <UserButton />
          </SignedIn> 
           </ClerkProvider>
        </div>
    </div>
    <div className={`md:flex ${isOpen ? "block" : "hidden"} font-semibold flex gap-6 md:hidden h-[60px] items-center justify-center mx-auto w-full bg-black`}>
        <Link href="/Cart" className="text-white ">Shop</Link>
        <Link href="/Product" className="text-white ">On Sale</Link>
        <Link href="/Casual" className="text-white ">New Arrivals</Link>
        <Link href="/" className="text-white ">Brands</Link>
      </div>


    {/* Large device Navbar */}

    <div className='justify-center items-center h-[96px] hidden bg-white z-20 md:flex ' >
        <div className='flex justify-between items-center mx-[100px]  h-[48px] w-full '>
        <Link href='/'><Image src={Logo} alt='Logo' className='w-[160px] h-[22px] font-bold text-[32px] hover:'/></Link>
            <ul className='flex gap-[40px] font-normal text-[16px] leading-[21.6px] cursor-pointer'>
                <li className='flex justify-between cursor-pointer gap-2 '> <Link href='/Cart'> Shop </Link> <span className='flex items-center'><Image src={dropdown} alt='dropdown' className='h-[6.5px] w-[11.5px] py-auto'/></span></li>
                <Link href='/Product'><li>On Sale</li></Link>
                <Link href='/Casual'><li>New Arrivals</li></Link>
                <Link href='/'><li>Brands</li></Link>
            </ul>
            <div className='flex items-center pl-[17.86px] text-[#000000] text-opacity-40 w-[470px] 2xl:w-[577px] h-[48px] rounded-full bg-[#F0F0F0]'>
                <Image src={searchIcon} alt='Logo' className='w-[24px] h-[24px] flex items-center opacity-40'/>
                <input type="text" placeholder='Search for products...' className='flex items-center bg-transparent w-[300px] h-[22px] pl-[17.86px] text-[#000000] text-opacity-40'/>
            </div>

            <div className='flex justify-between gap-[14px] cursor-pointer '>
            <Link href={"/cart"} className="relative">
            <IoCartOutline className="text-2xl lg:text-4xl "/>
            {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )}            </Link>
                <ClerkProvider>
           <SignedOut>
            <SignInButton mode="modal">
              <h1 className="text-red-500 cursor-pointer">Login/Register</h1>
            </SignInButton >
          </SignedOut >
          <SignedIn >
            <UserButton />
          </SignedIn> 
           </ClerkProvider>
            </div>
        </div>
    </div>
</nav>
<hr className='mx-[16px]  md:mx-[100px] h-[3px] bg-black opacity-10 flex justify-center' />

    </main>
  )
}
