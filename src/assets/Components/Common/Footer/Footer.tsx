
import envelope from "../../../Images/envelope-solid 1.svg"
import phone from "../../../Images/phone-solid 1.svg"
import location from "../../../Images/location-dot-solid 1.svg"
import logo from "../../../Images/Logo Container.svg"
import plumbing from "../Footer/Plumbing.png"
import rating from "../../../Images/Project Link Rating.svg"
import email from "../../../Images/Email white.svg"
import address from "../../../Images/Address white.svg"
import whitephone from "../../../Images/Phone white.svg"
import facebook from "../../../Images/facebook.svg"
import insta from "../../../Images/Social Media Icon Container (1).svg"
import youtube from "../../../Images/YouTube Icon Container.svg"
import NavButton from "./Components/NavButton"
import { quickLinks, Services } from "../../../Utils/Ui Components/NavOptions"
import Img from "../../Ui Utils/img"
const Footer = () => {


























  return (
    <>
      <div className="bg-[#0056A6] w-[100%]  px-[70px] py-[100px] max-md:px-[20px]">
        <div className="w-[100%] pb-[100px] flex flex-row gap-[20px]  max-th:flex-col max-th:gap-[50px]">
          <div className="flex flex-col  gap-[10px] items-center text-white w-[60%] text-left max-md:w-[100%]">
            <div className="flex items-center gap-[5px] w-[100%]">
              <p className="h-[2px] w-[40px] bg-[white] text-left"></p>
              <h4 className="text-[16px] uppercase  font-semibold w-[100%]">Contact</h4>
            </div>
            <h1 className="text-[27px] font-bold w-[100%]">Get In Touch</h1>
            <p className="w-[100%]">We’re here to assist you with all your plumbing needs. Reach out <br /> today!</p>
          </div>
          <div className="w-[40%] flex flex-col gap-[20px] max-md:w-[100%]">
            <div className="flex flex-row items-end gap-[15px] text-white">
              <img className="self-start w-[20px] mt-[2px]" src={envelope} alt="" />
              <span className="flex flex-col gap-[4px]">
                <b >Email</b>
                <p className="underline">info@plumbingservices.com</p>
              </span>
            </div>
            <div className="flex flex-row items-end gap-[15px] text-white">
              <img className="self-start w-[20px] mt-[2px]" src={phone} alt="" />
              <span className="flex flex-col gap-[4px]">
                <b>Phone</b>
                <p className="underline">+1 (555) 123-4567</p>
              </span>
            </div>
            <div className="flex flex-row items-end gap-[15px] text-white">
              <img className="self-start w-[15px] mt-[2px]" src={location} alt="" />
              <span className="flex flex-col gap-[4px]">
                <b>Office</b>
                <p className="">456 Plumbing Ave, Springfield, IL 62701, USA</p>
              </span>
            </div>

          </div>

        </div>
        <div className="w-[100%] flex flex-col gap-[50px]">
          <div className="flex flex-col items-center max-five:items-start gap-[18px]">
            <img src={logo} alt="" className="max-five:w-[220px]" />
            <h3 className="  text-[25px] text-white max-five:text-[20px]">Flowing Towards a Better <span className="text-[#FFC107] font-bold"> Tomorrow, Together.</span></h3>
          </div>

          <div className="w-[100%] flex flex-row justify-between flex-wrap max-five:gap-[40px]  gap-[100px]">
            <div className="flex flex-col  gap-[9px] text-white">
              <h3 className="font-semibold">Quick Links</h3>
              {quickLinks.map((val: string) => { return <NavButton title={val.title} /> })}
            </div>





            <div className="flex flex-col gap-[9px] text-white">
              <h3 className="font-semibold">Services</h3>
              {Services.map((val: string) => { return <NavButton title={val.title} /> })}
            </div>


            <div className="flex flex-col  gap-[12px] text-white">
              <h3 className="font-semibold">Our Projects</h3>
              <span className="flex flex-row items-center gap-[10px]">
                <img src={plumbing} className="w-[80px] rounded-sm" alt="" />
                <div>
                  <p>PlumbCare Pro</p>
                  <img className="w-[110px]" src={rating} alt="" />
                </div>
              </span>

              <span className="flex flex-row items-center gap-[10px]">
                <img src={plumbing} className="w-[80px] rounded-sm" alt="" />
                <div>
                  <p>PlumbCare Pro</p>
                  <img className="w-[110px]" src={rating} alt="" />
                </div>
              </span>
              <span className="flex flex-row items-center gap-[10px]">
                <img src={plumbing} className="w-[80px] rounded-sm" alt="" />
                <div>
                  <p>PlumbCare Pro</p>
                  <img className="w-[110px]" src={rating} alt="" />
                </div>
              </span>

            </div>


            <div className="flex flex-col  gap-[12px] max-3xl:gap-[8px]  text-white">
              <h3 className="font-semibold">Contact Us</h3>
              <span className="flex flex-row gap-[10px]">
                <img src={whitephone} alt="" />
                <p>+62 864 6444 2222</p>
              </span>
              <span className="flex flex-row gap-[10px]"><img src={email} alt="" />
                <p>hi@yourdomain.com</p>
              </span>
              <span className="flex flex-row gap-[10px]">
                <img src={address} alt="" />
                <p className="text-[12px]">123 Plumbing Street,  Flow City, <br /> CA  12345</p>
              </span>
              <span className="flex flex-col  mt-[6px]">
                <h4 className="font-semibold mr-[2px]">Social Media Links</h4>
                <div className="flex flex-row justify-start">
                  <Img style="w-[35px]" src={facebook} />
                  <Img style="w-[30px]" src={insta} />
                  <Img style="w-[35px]" src={youtube} />
                </div>
              </span>

            </div>

            {/* </div> */}




          </div>

        </div  >
      </div>
      <div className="bg-[white] text-center py-[7px]">
        <p className="text-sm">© 2025 FlowPro. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
