

import phone from "../../../Images/Phone Icon Container.svg"
import insta from "../../../Images/Social Media Icon Container (1).svg"
import facebook from "../../../Images/facebook.svg"
import youtube from "../../../Images/YouTube Icon Container.svg";
import email from "../../../Images/Email Icon Container.svg"
import logo from "../../../Images/Logo Container.svg"
import { FiMenu } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FaX } from "react-icons/fa6";
const Header = () => {


    const moveTo = useNavigate();
    const sidebar: any = useRef();


    let icons: any = [
        { icon: facebook },
        { icon: insta },
        { icon: youtube },
    ]



    let activeRoutes: any = [
        {
            text: "Home",
            route: "/",
        },
        {
            text: "About Us",
            route: "/aboutus",
        },
        {
            text: "Services",
            route: "/services",
        },
        {
            text: "Projects",
            route: "/projects",
        },
        {
            text: "Contact Us",
            route: "/contactus",
        },
        {
            text: "Blog",
            route: "/blog",
        },

    ]

    return (
        <>
            <div className="flex flex-row items-center justify-between w-[100%] py-[12px] px-[70px] max-md:px-[20px]">
                <div className="flex flex-row items-center gap-[50px] min-[1300px]:gap-[40px] socialparent">
                    <span className="flex justify-center items-center gap-[14px]">
                        <img src={phone} className="min-[1300px]:h-[30px]" alt="" />
                        <p className="font-bold text-[#4A4A4A] socials min-[1300px]:text-[17px]">+62 864 6444 2222</p>
                    </span>
                    <span className="flex justify-center items-center gap-[14px]" >
                        <img src={email} className="min-[1300px]:h-[30px]" alt="" />
                        <p className="font-bold text-[#4A4A4A] socials min-[1300px]:text-[17px]">hi@yourdomain.com</p>
                    </span>
                </div>
                <div className="flex flex-row items-center">
                    <span className="flex  items-center  gap-[10px]">
                        <b className="font-bold text-[#4A4A4A]  min-[1300px]:text-[17px] socials">Follow Us</b>
                        {icons.map(function (data: any, idx: any) { return (<img key={idx} className="min-[1300px]:h-[30px]" src={data.icon} alt="" />) })}
                    </span>
                </div>
            </div>
            <div className="px-[70px]  py-[40px] bg-[#0056A6] flex items-center justify-between  max-md:px-[20px] max-md:py-[15px] navbar">
                <FiMenu onClick={() => { sidebar.current.style.cssText = `transition:0.9s ease-out;margin-left:-0px;` }} id='menuicon' className="navicon" />
                <img onClick={() => { moveTo("/"); }} className="max-md:w-[170px]  max-md:ml-[40px] cursor-pointer navlogo w-[245px]" src={logo} alt="" />
                <div className="flex flex-row items-center gap-[80px]">
                    <div className="flex flex-row gap-[35px] navoptions text-white">
                        {activeRoutes.map(function (route: any, key: any) {
                            return (<NavLink key={key} to={route.route} className={({ isActive }) => (isActive ? ' text-[#FFC107] border-b-2 border-x-[#FFC107] font-bold min-[1300px]:text-[18px]' : 'font-bold min-[1300px]:text-[18px]')}>{route.text}</NavLink>)
                        })}
                    </div>
                    <button onClick={() => { moveTo("/booking"); }} className={"bg-[#FFC107] px-[40px] py-[13px] rounded-sm  max-xs:text-[4px]   max-md:px-[14px] max-md:py-[6.5px] max-md:text-[14px]  font-medium   max-[360px]:text-[10px] max-[370px]:text-[10px] navbutton"}>Book Now</button>
                </div>
            </div>
            <div className="text-white flex flex-col"  >
                <div className="flex flex-col gap-[20px] bg-[#0056A6] pt-[20px] pl-[20px] w-[280px] h-[100%] z-10 items-start  fixed top-[10%] left-0 ml-[-280px]" ref={sidebar}>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                        <img onClick={() => { moveTo("/") }} className=" self-start  " src={logo} alt="" />
                        <FaX onClick={() => {
                            sidebar.current.style.cssText = `transition:0.9s ease-in;margin-left:-280px;`
                        }} className="text-[16px] mr-[10px] text-red-600" />
                    </div>
                    {activeRoutes.map(function (link: any, index: any) {
                        return (<NavLink key={index} to={link.route} className={({ isActive }) => (isActive ? ' text-[#FFC107] border-b-2 border-x-[#FFC107] font-bold' : 'font-bold')}>{link.text}</NavLink>)
                    })}
                </div>
            </div>
        </>


    )
}

export default Header
