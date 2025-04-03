import { useLocation } from "react-router-dom"
import wayto from "../../../../Utils/Routes";






const MainHead = ({ data }) => {
  const location = useLocation();




  return (
    <div className="w-[100%] flex flex-col gap-[10px] justify-center items-center">
      <span className="flex flex-row items-center gap-[10px]">
        <p className="border-[1px] rounded border-[#C4C4C4] w-[62px]  bg-[#C4C4C4]"></p>
        <h3 className={`text-[#C4C4C4] font-semibold text-[18px] uppercase ${location.pathname == wayto.about ? "max-[343px]:text-[14px]" : ""}`}>{data.outline}</h3>
        <p className="border-[1px] rounded border-[#C4C4C4] w-[62px]  bg-[#C4C4C4]"></p>
      </span>
      <h4 className={` text-center  text-[35px] text-[#4A4A4A] font-bold w-[60%] max-[450px]:text-[25px] max-[343px]:text-[20px] max-[800px]:text-left  max-[900px]:text-center max-[900px]:w-[100%] min-[1360px]:w-[48%] min-[1476px]:w-[46%] min-[1535px]:w-[43%]`}>{data.title} </h4>
      <p className={`text-[#AAAAAA] text-center  text-[14.8px] ${location.pathname == wayto.about ? "w-[60%] max-[800px]:w-[80%] max-[600px]:w-[100%] max-[600px]:text-left max-[343px]:text-[12px]" : ""}`}> {data.message}</p>
    </div>
  )
}

export default MainHead
