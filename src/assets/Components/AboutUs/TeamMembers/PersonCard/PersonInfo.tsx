
import { useRef } from "react";
import member from "../../../../Images/TEam/Team Member Image-1.png"
import insta from "../../../../Images/TEam/TeamSocials/Insta.svg"
import linkedin from "../../../../Images/TEam/TeamSocials/LinkedIn.svg"




const PersonInfo = () => {

    const intro = useRef(null);


    return (
        <div className=" h-[400px] w-[443px] rounded-[20px] hover:border-[blue] border-[2px] border-[#dcdada]  max-[530px]:w-[180px]   max-[690px]:w-[220px] max-[690px]:h-[300px]  relative flex-grow-1  max-[1500px]:w-[300px] ">
            <img className="w-[100%] h-[100%] object-contain" src={member} alt="" />
            <div className="h-[80px] px-[30px] max-[690px]:h-[60px] rounded-xl bg-[#005FB8] flex flex-row items-center justify-between w-[100%] absolute bottom-0 hover:h-[204px] max-[530px]:px-[10px]">
                
                <div className="">
                    <h4 className="text-[white] font-bold font-sans text-[25px] max-[586px]:text-[14px] max-[690px]:text-[18px] ">Michael Carter</h4>
                    <h5 className="text-[#d1d2d2] font-semibold text-[20px]  max-[586px]:text-[12px] max-[690px]:text-[14px]">Master Plumber</h5>
                    <p ref={intro} id="intro" className="hidden">With 15+ years of experience, Michael specializes in complex plumbing repairs and installations.</p>
                </div>
               
                <div className="flex gap-[12px]"><img src={linkedin} alt="" />
                    <img src={insta} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PersonInfo
