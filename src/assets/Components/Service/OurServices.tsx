
import man from "../../Images/OurServices/man.png"
import pipes from "../../Images/OurServices/pipe.png"
import serviceone from "../../Images/OurServices/serviceone.png"
import imageone from "../../Images/OurServices/Services/Vector.svg"
import imagetwo from "../../Images/OurServices/Services/Vector-1.svg"
import imagethree from "../../Images/OurServices/Services/Vector-2.svg"
import imagefour from "../../Images/OurServices/Services/Vector-3.svg"
import imagefive from "../../Images/OurServices/Services/Vector-4.svg"
import imagesix from "../../Images/OurServices/Services/Vector-5.svg"
import imageseven from "../../Images/OurServices/Services/Vector-6.svg"
import imageeight from "../../Images/OurServices/Services/Vector-7.svg"
import imagenine from "../../Images/OurServices/Services/Vector-8.svg"
import Rightarrow from "../../Images/OurServices/caretRight.svg"
import Leftarrow from "../../Images/OurServices/caretLeft.svg"
import Dots from "../../Images/OurServices/Dots.svg"
import OurServiceDetails from "./Our Services Card/OurServiceDetails"



const OurServices = () => {
    interface head {
        outline: string,
        title: string,
        message: string,

    }

    let data: head = {
        outline: "Services",
        title: "Comprehensive Plumbing Services  for Your Home & Business",
        message: "We offer a full range of plumbing solutions tailored to your needs",
    }




    let serviceData = [
        {
            icon: imagetwo,
            text: "Water Heater Installation",
        }
        ,
        {
            icon: imagethree,
            text: "Drain Cleaning & Unclogging",
        },
        {
            icon: imagefour,
            text: "Emergency Plumbing",
        },
        {
            icon: imagefive,
            text: "Pipe Replacement",
        },
        {
            icon: imagesix,
            text: "Garbage Disposal Repair",
        },
        {
            icon: imageseven,
            text: "Water Filtration System",
        },
        {
            icon: imageeight,
            text: "Sewer Line Inspection",
        },
        {
            icon: imagenine,
            text: "Gas Line Installation",
        }
    ]
    return (
        <div className='w-[100%] flex flex-row  gap-[30px] max-[1032px]:flex-col'>
            <div className="w-[50%] flex flex-col items-center gap-[10px] h-[100%] max-[1032px]:w-[100%]">
                <img className="w-[100%]  self-start" src={pipes} alt="" />
                <div className="flex flex-row  gap-[10px]  w-[100%] self-start  min-h-[100vh]">

                    <div className="w-[400px] h-[482px] max-[1260px]:w-[255px] self-start max-[429px]:w-[56%]">
                        <img className="h-[100%] w-[100%]" src={man} alt="" />
                    </div>

                    <div className="w-[100%] max-[1260px]:w-[80%] min-h-[100vh] flex flex-col gap-[10px]">
                        <img className=" w-[100%] h-[192px] rounded object-cover max-[429px]:h-[100%]" src={serviceone} alt="" />

                        <div className="w-[100%] bg-[#0056A6] flex flex-col gap-[10px]  max-[385px]:py-[8px] max-[385px]:gap-[0px] max-[429px]:h-[59%] max-[385px]:h-[71vmin] max-[1029px]:h-[308px] pt-[20px] rounded-lg">
                            <div className="flex flex-col w-[100%] items-start px-[24px] ">
                                <h4 className="text-[38px] text-center text-white font-bold   max-[1260px]:text-[25px] max-[385px]:text-[5vw] max-[426px]:text-[5vmax]">500+</h4>
                                <p className="text-[#AAAAAA] text-[14px] max-[476px]:text-[10px]">Skilled Plumbers in Our Network</p></div>

                            <div className="flex flex-col w-[100%] items-start px-[24px] max-[385px]:py-[8px] max-[1260px]:py-[12px]">
                                <h4 className="text-[38px] text-center text-white font-bold max-[1260px]:text-[25px] max-[385px]:text-[5vw]">10K+</h4>
                                <p className="text-[#AAAAAA] text-[14px] max-[476px]:text-[10px]">Emergency Repair Handled</p></div>

                            <div className="flex flex-col w-[100%] items-start px-[24px] max-[385px]:py-[8px] max-[1260px]:py-[12px] ">
                                <h4 className="text-[38px] text-center text-white font-bold max-[1260px]:text-[25px] max-[385px]:text-[5vw]">50K+</h4>
                                <p className="text-[#AAAAAA] text-[14px] max-[476px]:text-[10px]">Satisfied Customers</p></div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="w-[50%] max-[1260px]:w-[60%] flex flex-col items-center gap-[20px]  max-[1032px]:w-[100%]">
                <div className="w-[100%] flex flex-col gap-[10px] justify-start items-start">
                    <span className="flex flex-row items-center gap-[10px]">
                        <p className="border-[1px] rounded border-[#C4C4C4] w-[50px]  bg-[#C4C4C4]"></p>
                        <h3 className={`text-[#aeadad] font-semibold text-[18px] uppercase ${location.pathname == "/aboutus" ? "max-[343px]:text-[14px]" : ""}`}>{data.outline}</h3>
                    </span>
                    <h4 className={`text-left w-[80%]  text-[33px] text-[#4A4A4A] font-bold max-[450px]:text-[25px] max-[343px]:text-[20px] max-[800px]:text-left  max-[900px]:text-center max-[900px]:w-[100%]`}>{data.title} </h4>
                    <p className={`text-[#AAAAAA] w-[80%] text-left mb-[30px] ml-[4px] ${location.pathname == "/aboutus" ? "w-[60%] max-[800px]:w-[80%] max-[600px]:w-[100%] max-[600px]:text-left max-[343px]:text-[12px]" : ""}`}> {data.message}</p>
                </div>
                <div className="flex flex-wrap h-[100]  gap-[10px]">

                    <div className="h-[150px] w-[175px] max-[1170px]:w-[150px] max-[1170px]:h-[120px] bg-[#0056A6] rounded-sm border-[1px] border-[#bebdbd] flex flex-col items-center justify-center max-[1031px]:flex-grow-1 flex--1">
                        <span className="py-[15px] px-[10px] bg-[#d4d5d61a] rounded-sm"><img className="w-[35px] h-[28px]" src={imageone} alt="" /></span>
                        <p className="text-[#FFFFFF] font-medium w-[80%] text-[16px] text-center mt-[5px]">{"Leak Detection & Repair"}</p>
                    </div>


                    {serviceData.map((val,idx) => {
                        return (
                            <OurServiceDetails key={idx} val={val}/>
                        )
                    })}
                </div>
                <div className="flex flex-row justify-between w-[100%]">
                    <img src={Leftarrow} alt="" />
                    <img src={Dots} alt="" />
                    <img src={Rightarrow} alt="" />
                </div>
                <div className="w-[100%] flex flex-row gap-[40px] max-[538px]:flex-col">
                    <div className="bg-[white] h-[38px] px-[8px] justify-between w-[58%] max-[538px]:w-[100%] flex flex-row items-center rounded-sm">
                        <span className="bg-[#0056A6] text-white py-[3px] px-[20px] rounded-[2px]">
                            Emergency Hotline
                        </span>
                        <b className="text-[#0056A6] text-[22px] px-[5px]">
                            784392
                        </b>
                    </div>
                    <button className="bg-[#FFC107] max-[538px]:w-[120px] max-[538px]:py-[10px] max-[538px]:self-end  text-sm px-[30px] rounded-sm font-semibold">Call Now</button>
                </div>

            </div>

        </div>
    )
}

export default OurServices
