import H4 from "../../Ui Utils/H4"
import P from "../../Ui Utils/P"

const Pricing = () => {
  return (
    <div className="w-[100%] flex flex-col gap-[10px] justify-center items-center">
      <span className="flex flex-row items-center gap-[10px]">
        <P css="border-[1px] rounded border-[#C4C4C4] w-[50px]" content={""} />
        <H4 css={"text-[#aeadad] font-semibold text-[18px] uppercase"} content={"PRicing"} />
        <P css="border-[1px] rounded border-[#C4C4C4] w-[50px]" content={""} />
      </span>
      <H4 css={"text-center  text-[35px] text-[#4A4A4A] font-bold w-[60%] max-[450px]:text-[25px] max-[343px]:text-[20px] max-[800px]:text-left  max-[900px]:text-center max-[900px]:w-[100%] capitalize"} content={"affordable and tranparent pricing"} />
      <P css="text-[#AAAAAA] text-center" content={"Quality plumbing service with no hidden fees,just straight forward pricing"} />
      <div className="w-[100%] border-1 border-gray-500 h-[370px]">
      </div>
    </div>

  )
}

export default Pricing
