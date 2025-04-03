import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import H4 from "../../Ui Utils/H4"

const Testeminial = () => {
  return (
    <div className="flex flex-col  gap-[10px] w-[100%]">
      <span className="flex items-center  gap-[6px]"> <p className="border-[1.2px] rounded border-[#C4C4C4] w-[50px]"></p> <p className="text-[#C4c4c4] font-semibold text-[22px] uppercase">Testeminial</p></span>
      <div className="flex flex-row justify-between items-end">
        <H4 css={"text-left  text-[40px] text-[#4A4A4A] font-bold  max-[450px]:text-[25px] max-[343px]:text-[20px]   w-[50%] max-[900px]:w-[100%] capitalize"} content={"what our customers are saying"} />
        <div className="flex  items-center justify-end gap-[10px]">
          <span onClick={() => { }} className="bg-[#FFC107] text-[18px]  h-[33px]  w-[60px]  rounded-[6px] flex items-center justify-center">
            <FaArrowLeft className="text-[white] text-[27px] py-[2px]" />
          </span>
          <span onClick={() => { }} className="bg-[#FFC107] text-[18px]  h-[33px]  w-[60px] rounded-[6px] flex items-center justify-center">
            <FaArrowRight className="text-[white] text-[27px] py-[2px]" />
          </span>
        </div>
      </div>
      {/* Library */}
      <div className="flex flex-row  flex-wrap gap-[20px] w-[100%] mt-[30px]">
        {Array.from({ length: 3 }, () => {
          return (
            <div className="w-[360px] h-[200px] border-[1px] rounded border-[#AAAAAA] "></div>)
        })}
      </div>
      <div>
      </div>
    </div>
  )
}

export default Testeminial
