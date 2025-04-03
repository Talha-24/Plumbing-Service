import Img from "../../../../Ui Utils/img"
import display from "../../../../../Images/ProjectDetails/Detail Project Image.png"
import imageone from "../../../../../Images/ProjectDetails/image-1.png"
import imagefour from "../../../../../Images/ProjectDetails/image-4.png"
import PropertyDetails from "./PropertyDetails/PropertyDetails"
import ProjectDescription from "./PropertyDetails/Challenges/ProjectDescription"
import OurSolution from "./PropertyDetails/Challenges/OurSolution"
const BriefDetail = () => {
    return (
        <div className="w-[100%] h-[100%] flex flex-col gap-[50px] max-[700px]:gap-[20px]">
            <div className="h-[544px] w-[100%] rounded-lg max-[900px]:h-[400px]  max-[700px]:h-[350px] max-[500px]:h-[220px]">
                <Img src={display} style={"h-[100%] w-[100%] object-cover rounded-lg"} />
            </div>
            <div className="flex flex-row gap-[70px] w-[100%] flex-wrap" >
                <div className="h-[312px] w-[262px] object-cover rounded-lg max-[1247px]:hidden"><img className="h-[100%] w-[100%] rounded-lg" src={imagefour} alt="" /></div>
                <div className="flex flex-col gap-[15px] w-[70%] max-[1247px]:w-[100%]">
                    <div className="w-[100%] mb-[7px]">
                        <h3 className="text-[32px] mb-[10px]  text-[#444444] font-semibold  max-[700px]:text-[22px] max-[400px]:mb-[0px]">Project Overview</h3>
                        <p className="text-[#666666] text-[18px] text-justify max-[1247px]:text-[24px] max-[700px]:text-[16px]">This project involved a full-scale renovation of a modern kitchen where our team was tasked with overhauling the plumbing system. The goal was to upgrade the outdated fixtures, install an energy-efficient water heater, and ensure that the new design met both aesthetic and functional requirements. Our expert plumbers executed the project with precision, ensuring minimal disruption to the homeowner’s daily life.</p>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        {/* Api sy data aa raha hoga */}
                        <PropertyDetails property={"Investor Name:"} value={"Michael Carter"} />
                        <PropertyDetails property={"Location:"} value={"Los Angeles, CA."} />
                        <PropertyDetails property={"Value:"} value={"5,200,000 $"} />
                        <PropertyDetails property={"Architecture:"} value={"Sarah Michael"} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between min-[1441px]:gap-[24px]  flex-wrap w-[100%]">
                {Array.from({ length: 4 }, () => {
                    return (
                        <div className="w-[300px] max-[460px]:flex-grow-1  max-[623px]:flex-grow-0 max-[623px]:w-[120px]  max-[623px]:h-[100px] h-[220px] max-[1000px]:flex-grow-1 max-[1294px]:w-[260px] max-[1260px]:w-[250px]  max-[1259px]:w-[230px]max-[1372px]:w-[270px]  max-[1372px]:m-[10px] min-[1441px]:flex-grow-1">
                            <img className="w-[100%] h-[100%]" src={imageone} alt="" />
                        </div>
                    )
                })}
            </div>
            <ProjectDescription title={"Detailed Project Description"} challenge={"The main challenges were upgrading the outdated pipe system and integrating modern fixtures into a historic structure. Our objectives were to"} stepOne={"Ensure a reliable and efficient water supply"} stepTwo={"Reduce energy costs with new appliances"} stepThree={"Enhance the kitchen’s overall design and functionality"} />
            <OurSolution />
        </div>
    )
}

export default BriefDetail
