import Services from "../Home/Services/Services"
import iconOne from "../../Images/Why Chose us/one.svg";
import iconTwo from "../../Images/Why Chose us/two.svg";
import iconThree from "../../Images/Why Chose us/three.svg";
import iconFour from "../../Images/Why Chose us/four.svg";
import iconFive from "../../Images/Why Chose us/five.svg";
import iconSix from "../../Images/Why Chose us/six.svg";
import iconSeven from "../../Images/Why Chose us/seven.svg";
import iconEight from "../../Images/Why Chose us/eight.svg";
import Team from "./Team/Team"
import MainHead from "../Home/Services/Components/MainHead"
import Emergency from "../Common/Emergency/Emergency";
import Testeminial from "../Home/Testeminial/Testeminial";
import Location from "../Home/Location/Location";
import P from "../Ui Utils/P";
import Img from "../Ui Utils/img";
import WhyChoseUs from "./whyChoseUs/WhyChoseUs";






const AboutUs = () => {

  interface head {
    outline: string,
    title: string,
    message: string,

  }

  let data: head = {
    outline: "Why Choose Us?",
    title: "Reliable, Professional, and Always There When You Need Us",
    message: "We take pride in delivering top-quality plumbing solutions with a commitment to efficiency, transparency, and customer satisfaction. Here’s why homeowners and businesses trust us!",
  }

  let iconcss = "w-[30px] mt-[5px] min-[1300px]:w-[45px]";
  let titlecss = "pt-[15px] font-semibold text-[#444444] text-[14px] min-[1300px]:text-[17px]";
  let messagecss = "text-[12px] text-[#AAAAAA] text-center min-[1300px]:text-[13px]";
  let itemcss = "flex flex-col items-center gap-[5px] bg-white w-[210px] h-[180px] p-[14px] rounded-[15px] max-[470px]:w-[250px] max-[470px]:h max-[475px]:w-[160px] max-[1000px]:flex-grow-1 min-[1300px]:w-[200px] min-[1300px]:h-[220px] min-[1400px]:w-[280px] min-[1500px]:w-[300px] max-[1086px]:w-[200px] flex-grow-1";

  const whyChoseUs = [
    {
      icon: {
        icon: iconOne,
        css: iconcss,
      },
      title: {
        title: "Fast and Reliable",
        css: titlecss,
      },
      message: {
        message: "24/7 emergency plumbing service, ensuring quick response times to prevent further damage",
        css: messagecss,
      },
      itemCss: itemcss,
    },
    {
      icon: {
        icon: iconTwo,
        css: iconcss,
      },
      title: {
        title: "Certified Experts",
        css: titlecss,
      },
      message: {
        message: "Our team consists of licensed and experienced professionals who bring years of expertise to every job",
        css: messagecss,
      },
      itemCss: itemcss,
    },
    {
      icon: {
        icon: iconThree,
        css: iconcss,
      },
      title: {
        title: "Latest Technology",
        css: titlecss,
      },
      message: {
        message: "We use modern tools and technology for accurate diagnostics and high-quality repairs",
        css: messagecss,
      },
      itemCss: itemcss,
    },
    {
      icon: {
        icon: iconFour,
        css: iconcss,
      },
      title: {
        title: "Transparent Pricing",
        css: titlecss,
      },
      message: {
        message: "No hidden costs—just clear, upfront pricing so you know exactly what to expect",
        css: messagecss,
      },
      itemCss: itemcss,
    },
    {
      icon: {
        icon: iconFive,
        css: iconcss,
      },
      title: {
        title: "Guaranteed Satisfaction",
        css: titlecss,
      },
      message: {
        message: "Our job isn’t done until you’re 100% satisfied with our service",
        css: messagecss,
      },
      itemCss: itemcss,
    },
    {
      icon: {
        icon: iconSix,
        css: iconcss,
      },
      title: {
        title: "Locally Trusted",
        css: titlecss,
      },
      message: {
        message: "We provide free estimates before any work begins, so you can plan your budget confidently",
        css: messagecss,
      },
      itemCss: itemcss,
    },
    {
      icon: {
        icon: iconSeven,
        css: iconcss,
      },
      title: {
        title: "Upfront Estimates",
        css: titlecss,
      },
      message: {
        message: "We provide free estimates before any work begins, so you can plan your budget confidently",
        css: messagecss,
      },
      itemCss: itemcss,
    },
    {
      icon: {
        icon: iconEight,
        css: iconcss,
      },
      title: {
        title: "Long-Term Warranties",
        css: titlecss,
      },
      message: {
        message: "Enjoy peace of mind with service warranties and guaranteed workmanship",
        css: messagecss,
      },
      itemCss: itemcss,
    },
  ]


  interface headtwo {
    outline: string,
    title: string,
    message: string,

  }

  let datatwo: headtwo = {
    outline: "Services",
    title: "Comprehensive Plumbing Services  for Your Home & Business",
    message: "We offer a full range of plumbing solutions tailored to your needs",
  }


  return (
    <div className="w-[100%]  items-center pt-[100px] flex flex-col gap-[100px] px-[70px] max-md:px-[20px] bg-[#F4FAFF]">
      <div>
        <MainHead data={data} />
        <div className="flex   justify-evenly gap-[34px] min-[1300px]:gap-[55px] flex-wrap max-w-fit mt-[25px]">
          {whyChoseUs.map((val) => { return (<WhyChoseUs val={val} />) })}
        </div>
      </div>
      <Team />
      <Services data={datatwo} />
      <Emergency />
      <Testeminial />
      <Location />
    </div>
  )
}

export default AboutUs