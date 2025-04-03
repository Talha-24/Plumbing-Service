import Emergency from "../Common/Emergency/Emergency"
import Location from "../Home/Location/Location"
import Testeminial from "../Home/Testeminial/Testeminial"
import ProjectSection from "./ProjectSection/ProjectSection"

const Projects = () => {
  return (
    <div className="w-[100%]  items-center pt-[100px] flex flex-col gap-[100px] px-[70px] max-md:px-[20px] bg-[#F4FAFF]">
        <ProjectSection/>
        <Emergency/>
        <Testeminial/>
        <Location/>
    </div>
  )
}

export default Projects
