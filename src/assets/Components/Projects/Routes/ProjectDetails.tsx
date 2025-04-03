import MainHead from "../../Home/Services/Components/MainHead"
import Testeminial from "../../Home/Testeminial/Testeminial"
import ProjectSection from "../ProjectSection/ProjectSection"
import BriefDetail from "./Components/BriefDetails/BriefDetail"

const ProjectDetails = () => {


  let data = {
    outline: "Project",
    title: "Modern Kitchen Renovation - Plumbing Excellence in Action",
    message: "A complete plumbing transformation for a contemporary home, combining efficiency and style",
    completionDate: "Completed: March 2023 | Los Angeles, CA",
  }




  return (
    <div className="w-[100%]  items-center pt-[100px] flex flex-col gap-[100px] px-[70px] max-md:px-[20px] bg-[#F4FAFF]">
      <div className="w-[100%]">
        <MainHead data={data} />
        <p className="text-[#0056A6] text-sm text-center my-[10px] pb-[8px]"> <span className="font-semibold"> Completed:</span> March 2023 | Los Angeles, CA</p>
        <BriefDetail />
      </div>
      <ProjectSection />
      <div className="mb-[120px] w-[100%]">
        <Testeminial />
      </div>

    </div>
  )
}

export default ProjectDetails
