
import time from "../../../Images/ime.svg"
import stamp from "../../../Images/stamp.svg"
import dollar from "../../../Images/dollar.svg"
import setting from "../../../Images/setting.svg"
import H2 from "../../Ui Utils/H2"
import P from "../../Ui Utils/P"
import Img from "../../Ui Utils/img"

const IntroMessage = () => {




  let ourservices=[{
    image: time,
    text: "Fast & Reliable Service",
    imageStyling: "h-[22px]",
    textStyling: "text-[16px] ",
},
{
    image: setting,
    text: "Certified Professional",
    imageStyling: "h-[22px]",
    textStyling: "text-[16px] ",
},
{
    image: stamp,
    text: "Advanced Technology",
    imageStyling: "h-[22px]",
    textStyling: "text-[16px]",
},
{
    image: dollar,
    text: "Affordable Pricing",
    imageStyling: "h-[22px]",
    textStyling: "text-[16px]",
}]




    return (
        <div className="">
            <div className="bg-[white]  w-[100%] min-h-[200px] flex flex-row min-[1200px]:gap-[100px]   p-[26px] rounded-2xl max-[952px]:flex-col max-[952px]:gap-[30px]   min-h-[1100px]:gap-[50px]">
                <div className="w-[50%] flex h-[100%]  items-center   max-[952px]:w-[100%] ">
                    <div className="flex flex-col justify-around  gap-[14px] min-[1400px]:h-[170px]">
                        <H2 content="See Our Experts in Action – Quality Plumbing  You Can Trust!" css="text-[22px]  font-normal font-semibold  text-[#444444] min-[1214px]:text-[24px] min-[1214px]:w-[110%] min-[1300px]:text-[27px]"/>
                       <P css="text-[16px] w-[90%] max-[936px]:w-[100%] text-[#AAAAAA] min-[1200px]:text-[16px]" content="Watch how our certified plumbers handle repairs, installations, and emergencies with precision and care. We ensure quick, reliable, and affordable services for your home or business." />
                        <div className="flex flex-col gap-[8px]">
                            <div className="text-[#AAAAAA] flex flex-row  min-[1300px]:gap-[12px]  gap-[5px] flex-wrap">
                                {ourservices.map(function(data,idx):any{
                                    return (
                                    <span key={idx} className="flex flex-row items-center gap-[10px]">
                                        <Img style={data.imageStyling} src={data.image}/>
                                        <P css={data.textStyling} content={data.text} />
                                    </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-[210px] min-[950px]:min-h-[250px] max-[1081px]:min-h-[200px] flex items-center  justify-end  max-[952px]:w-[100%]">
                    <video className="w-[100%] h-[100%] rounded-sm" autoPlay controls muted loop src="https://youtu.be/8jxRn-T_LCs"></video>
                </div>
            </div>
        </div>
    )
}

export default IntroMessage
