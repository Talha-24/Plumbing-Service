import { FaArrowRight } from "react-icons/fa6"
import teamimage from "../../../Images/image 1.png"
import P from "../../Ui Utils/P"
import Img from "../../Ui Utils/img"

const PlumbingOff = () => {
  return (
    <div className="flex flex-row items-center   flex-wrap gap-[40px] justify-between w-[100%] ">
      <div className="flex flex-col gap-[15px] max-w-fit">
        <p className="border-l-2 text-[20px] min-[1320px]:text-[24px]  pl-[10px] border-[blue] text-black max-[500px]:text-[16px]">Residential Plumbing</p>
        <p className="border-l-2 text-[20px] min-[1320px]:text-[24px]  pl-[10px] border-[blue] text-black max-[500px]:text-[16px]">Residential Plumbing</p>
        <p className="border-l-2 text-[20px] min-[1320px]:text-[24px]  pl-[10px] border-[blue] text-black max-[500px]:text-[16px]">Residential Plumbing</p>
        <p className="border-l-2 text-[20px] min-[1320px]:text-[24px]  pl-[10px] border-[blue] text-black max-[500px]:text-[16px]">Residential Plumbing</p>
      </div>
      <div className="flex flex-row  flex-wrap  gap-[20px] min-h-[210px]  max-[1247px]:w-[100%] max-[1246px]:mt-[28px]  max-[1300px]:flex-grow-1">
        {Array.from({ length: 2 }, (): any => {
          return (
            <div className="w-[290px] h-[220px] max-[641px]:w-[220px] max-[1051px]:flex-grow-1 max-[1300px]:flex-grow-1 relative"><Img style={"w-[100%] h-[100%] rounded-lg"} src={teamimage} /><P css={"absolute bottom-[10px] left-[20px] w-[100px] text-white font-medium"} content={"Luxury Home  Leak Repairs"} /></div>)
        })}
        <div className="w-[290px] h-[220px] max-[500px]:flex-grow-1 max-[641px]:w-[290px] max-[1051px]:w-[340px]  min-[1051px]:flex-grow-1 relative">
          <img className="w-[100%] h-[100%] rounded-lg" src={teamimage} alt="" />
          <p className="absolute bottom-[10px] left-[20px] w-[100px] text-white font-medium">Luxury Home  Leak Repairs</p>
          <button className="absolute bottom-[4px] right-[10px]">
            <FaArrowRight className="text-[22px]" color='white' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlumbingOff
