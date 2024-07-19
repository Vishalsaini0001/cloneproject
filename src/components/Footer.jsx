import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import logo from './../assets/images/footerlogo.png';



const Footer = () => {
    return (
        <div>
            <div className='bg-[#1c1c1c] mt-48  w-full h-[500px]'>
<div className="border-b  mx-10 pt-20 border-white">

</div>
                <div className='flex justify-around  pt-20' >
                   
                    <div className=' flex  '>
                        <p className='text-white ml-8'>Careers</p>
                        <p className='text-white ml-8'>The Ritz-Carlton Club</p>
                        <p className='text-white ml-8'>Shop</p>
                        <p className='text-white ml-8'>The Ritz-Carlton leadership center</p>

                    </div>
                    <div className='flex'>
                        <p className='text-white text-[1.5rem] ml-8'> <FaFacebookSquare /></p>
                        <p className='text-white text-[1.5rem] ml-8'> <FaInstagram /></p>
                        <p className='text-white  text-[1.5rem] ml-8'> <FaXTwitter /></p>
                        <p className='text-white  text-[1.5rem] ml-8'> <FaYoutube /></p>
                    </div>
                </div>
                <div>
                    <div className=' flex ml-44 mt-8 '>
                        <p className='text-white ml-8'>Morriott Bonvoy</p>
                        <p className='text-white ml-8'>Contact</p>
                        <p className='text-white ml-8'>Midia Contact</p>
                        <p className='text-white ml-8'>Privacy Center</p>

                    </div>
                </div>
                <div className='flex justify-around pt-10' >
                    <div className=' flex ml-[-50px]  border-t-slate-200'>
                        <p className='text-white '>Tracking Prefences</p>
                        <p className=' text-blue-500 mt-2 ml-8'><TiTick /></p>
                        <p className='text-blue-500 mt-2 '><RxCrossCircled /></p>
                        <p className='text-white ml-4'>The Ritz-Carlton leadership center</p>

                    </div>
                    <div className='flex'>
                        <p className='text-white text-[1.5rem] mt-2 ml-2'> <BiWorld /> </p>
                        <p className='text-white text-[1.5rem] '>English</p>

                    </div>
                </div>
                <div className='flex justify-around pt-10' >
                    <div className=' flex ml-[-50px]   border-t-slate-200'>
                        <img className="mt-[-2rem] pl-20" src={logo} alt="" />
                    </div>
                    <div className=''>
                        <p className='text-white text-[1rem] mt-2 ml-2'>RITZ® is a Registered Service Mark of The Ritz Hotel,  Limited, and is <br /> used by The Ritz-Carlton Hotel Company under License.

                        </p>
                        <p className='text-white text-[1rem] '> @2024 The Ritz-Carlton Hotel Company, L.L.C. All rights reserved. </p>

                    </div>
                    <div className='border-l border-rose-100'>
                        <p className='text-white mt-4 ml-3'>Terms of use</p>
                        <p className='text-white  ml-3'>BEIAN CN Site</p>
                        <p className='text-white  ml-3'>Do Not Sell Information</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
