import teamimage from "../../../Images/image 1.png"
import MainHead from "./Components/MainHead"
import Img from "../../Ui Utils/img";
import H4 from "../../Ui Utils/H4";
import P from "../../Ui Utils/P";




const Services = ({ data }) => {

  return (
    <div className="w-[100%]">
      <MainHead data={data} />
      <div className="w-[100%] mt-[37px]  flex flex-row   items-center  flex-wrap gap-[10px] justify-between max-[649px]:justify-center">
        {Array.from({ length: 6 }, function (): any {
          return (
            <div className="flex flex-col  items-center min-h-[280px]  w-[426px] py-[8px] min-[320px]:min-h-fit  max-[476px]:w-[320px]  min-[500px]:min-h-fit  max-[660px]:w-[220px]   min-[800px]:flex-grow-1 min-[1300px]:w-[380px] min-[1300px]:flex-grow-1 min-[1200px]:w-[346px]  gap-[15px] px-[6px]  rounded-[10px] bg-[#FFFFFF] max-[1120px]:flex-grow-1 max-[1002px]:w-[300px]  hover:w-[410px]">
              <div className="w-[402px] max-[476px]:w-[100%]  min-[320px]:w-[100%] min-[1300px]:w-[100%] h-[200px] rounded-[10px]">
                <Img style={"rounded-[15px] h-[100%] w-[100%]"} src={teamimage} />
              </div>
              <div className="flex items-center justify-between w-[100%] mb-[12px]">
                <div className="flex flex-col w-[70%] gap-[5px]  max-[585px]:w-[100%]">
                  <H4 content={"Leak Detection & Repair"} css={"text-[20px] text-[#444444] max-[708px]:text-[18px] max-[624px]:text-[16px]"} />
                  <P css={"text-[#AAAAAA] text-[12px]"} content={"Quickly identifying and fixing leaks to prevent water damage and high utility bills"} />
                </div>
                <button className="border-[1px] w-[25%] px-[10px]   py-[10px]  cursor-pointer border-[#d3d2d2] text-sm rounded-sm text-[blue] bg-none hidden">Book Now</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
