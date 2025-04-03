import { FaArrowRight } from "react-icons/fa6"
import H4 from "../../Ui Utils/H4"
import P from "../../Ui Utils/P"
import { useNavigate } from "react-router-dom"
import wayto from "../../../Utils/Routes"
const Projects = () => {

  const moveTo = useNavigate();




  return (
    <div className="flex flex-col items-start w-[100%]  max-[841px]:gap-[5px]">
      <span className="flex flex-row items-center gap-[10px]">
        <P css={"border-[1.3px] min-[1300px]:border-[1.5px] rounded border-[#C4C4C4] w-[50px]  bg-[#C4C4C4]"} content={""} />
        <H4 css={"text-[#C4c4c4] font-semibold text-[18px] uppercase"} content={"Projects"} />
      </span>
      <div className="flex flex-row w-[100%] justify-between max-[841px]:flex-col max-[841px]:gap-[15px] ">
        <H4 css={"text-left  text-[40px] text-[#4A4A4A] font-bold  max-[450px]:text-[25px] max-[343px]:text-[20px]   w-[40%] max-[900px]:w-[100%] min-[1300px]:w-[70%] min-[1385px]:w-[65%] min-[1425px]:w-[60%] min-[1472px]:w-auto"} content={"Delivering Quality Plumbing Solutions for Homes & Businesses"} />
        <P css="w-[50%] text-[#aaaaaa] text-[18px] text-center max-[841px]:w-[100%]" content={"We take pride in our successful plumbing projects, ensuring durability efficiency, and customer satisfaction. Explore our portfolio of residential and commercial plumbing solutions tailored to every need."} />
      </div>
      <span onClick={() => { moveTo(wayto.projectDetails); }} className="bg-[#FFC107] text-white text-[16px] self-end h-[28px]  w-[40px] rounded-[6px] flex items-center justify-center">
        <FaArrowRight className="py-[3px] text-[24px] cursor-pointer" />
      </span>
    </div>
  )
}

export default Projects
