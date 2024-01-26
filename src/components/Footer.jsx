import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
}from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoDark, paymentLogo } from "../assets";

const Footer = () => {
    return (
        <div className="bg-black text-[#949494] py-20 ">
            <div className="max-w-screen-xl mx-auto grid grid-cols-4">
                {}
                <div className="flex flex-col gap-7">
                    <img className="w-32" src={logoDark} alt="logoDark" />
                    <p className="text-white text-sm tracking-wide">dark.com</p>
                    <img className="w-56"  src={paymentLogo} alt="paymentLogo" />
                    <div className="flex gap-5 text-lg text-gray-500">
                        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                        <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                </div>
                {}
                {}
                <div>
                <h2 className="text-2xl text-white mb-4">locate us</h2>
                <div className="text-base flex flex-col gap-2">
                    <p>Insurgentes Sur, Mixcoac, 4121</p>
                    <p>Mobile: 7654 4567</p>
                    <p>Phone:9876 6543</p>
                    <p>e-mail: dark@dark.com.mx</p>
                </div>
                </div>
                {}
                {}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
                    <div className="flex flex-col gap-2 text-base">
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span>
                        <BsPersonFill />     
                        </span> 
                        my account
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span>
                        <BsPaypal />     
                        </span> 
                        checkout
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span>
                        <FaHome />     
                        </span> 
                        order tracking
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span>
                        <MdLocationOn />     
                        </span> 
                        help & support
                    </p>
                    </div>
                </div>
                {}
                {}
                <div className="flex flex-col justify-center">
                    <input
                    className="bg-transparent border px-4 py-2 text-sm" 
                    placeholder="e-mail" 
                    type="text" 
                    />
                    <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-withe active:text-black">
                        Subscribe
                    </button>
                </div>
                {}
            </div>
        </div>
    )
}

export default Footer