import { NavLink, useLocation } from "react-router-dom"
import downArrow from "../../../../../Images/OurServices/downArrow.svg"

const Queries = () => {
    const location = useLocation();



    let titles=["General Questions",
        "Emergency Services",
        "Pricing & Payments",
        "Repairing & Maintenance",
        "Installation & Upgrades",
    ]
    return (
        <>
            <div className="flex flex-col gap-[30px]  w-[100%] h-[100%]">
                <div className="flex flex-col items-center">
                    <span className="flex flex-row items-center gap-[12px]">
                        <p className="border-[1.2px] rounded border-[#C4c4c4] w-[50px]  bg-[#c4c4c4] self-center"></p>
                        <h3 className={`text-[#AAAAAA] font-semibold text-[18px] uppercase ${location.pathname == "/aboutus" ? "max-[343px]:text-[14px]" : ""}`}>FAQs</h3>
                        <p className="border-[1.2px] rounded border-[#C4c4c4] w-[50px]  bg-[#C4C4C4] self-center"></p>
                    </span>
                    <h3 className="text-center  text-[45px] text-[#4A4A4A] font-bold w-[60%] mt-[20px] max-[450px]:text-[25px] max-[343px]:text-[20px] max-[800px]:text-left  max-[900px]:text-center max-[900px]:w-[100%] capitalize">Answers to your plumbing questions</h3>

                </div>
                <div className=" w-[100%] flex flex-row  justify-between   max-[862px]:flex-col max-[862px]:gap-[20px]">
                    <div className="flex flex-col  w-[30%] gap-[12px] max-[862px]:w-[100%]">
                        {titles.map(function(text){
                            return(
                                <NavLink to='/services' className={({ isActive }) => (isActive ? "text-black" : 'text-[#AAAAAA]')} >{text}</NavLink>

                            )
                        })}
                    </div>
                    <div className="w-[70%] max-[862px]:w-[100%]">
                        <div className="w-[100%] border-b-[1px] flex flex-col  justify-between min-h-[100px]  border-[#d1cece] pb-[15px] max-[528px]:py-[20px] max-[528px]:min-h-[62px] ]">
                            <span className="flex flex-row justify-between items-center pl-[10px]">          <h4 className="text-[#666666] text-[20px] font-bold max-[528px]:text-[13px]">What types of plumbing services do you offer?</h4> <img className="w-[18px] h-[10px] max-[528px]:h-[7px]" src={downArrow} alt="" /> </span>
                            <p className="text-[13px] text-[#666666] pl-[4px] py-[8px]">We provide a full range of plumbing services, including leak detection, drain cleaning, water heater repair, pipe replacement, and emergency plumbing.</p>
                        </div>

                        <div className="w-[100%] border-b-[1px] flex flex-col  justify-between min-h-[100px] py-[30px] border-[#d1cece] pb-[15px] max-[528px]:py-[20px] max-[528px]:min-h-[62px] ]">
                            <span className="flex flex-row justify-between items-center pl-[10px]">          <h4 className="text-[#666666] text-[20px] font-bold max-[528px]:text-[13px]"> Do you offer 24/7 emergency plumbing services?</h4> <img className="w-[18px] h-[10px] max-[528px]:h-[7px]" src={downArrow} alt="" /> </span>

                        </div>

                        <div className="w-[100%] border-b-[1px] flex flex-col  justify-between min-h-[100px] py-[30px] border-[#d1cece] pb-[15px] max-[528px]:py-[20px] max-[528px]:min-h-[62px] ]">
                            <span className="flex flex-row justify-between items-center pl-[10px]">          <h4 className="text-[#666666] text-[20px] font-bold max-[528px]:text-[13px]"> How quickly can you respond to an emergency call?</h4> <img className="w-[18px] h-[10px] max-[528px]:h-[7px]" src={downArrow} alt="" /> </span>

                        </div>

                        <div className="w-[100%] border-b-[1px] flex flex-col  justify-between min-h-[100px] py-[30px] border-[#d1cece] pb-[15px] max-[528px]:py-[20px] max-[528px]:min-h-[62px] ]">
                            <span className="flex flex-row justify-between items-center pl-[10px]">          <h4 className="text-[#666666] text-[20px] font-bold max-[528px]:text-[13px]"> Are your plumbers licensed and insured?</h4> <img className="w-[18px] h-[10px] max-[528px]:h-[7px]" src={downArrow} alt="" /> </span>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Queries
