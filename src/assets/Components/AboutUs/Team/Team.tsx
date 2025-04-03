import MainHead from "../../Home/Services/Components/MainHead"
import TeamMembers from "../TeamMembers/TeamMembers"

const Team = () => {


    interface head{
        outline: string,
        title:string,
        message: string,
    
      }
    
      let data:head={
        outline: "Our Team",
        title: "Trusted Experts, Reliable Service",
        message : "Our team of licensed and experienced professionals is dedicated to delivering top-quality plumbing solutions with efficiency and care. Meet the experts who keep your home and business running smoothly!",
      }

    return (
        <div className="w-[100%]">
            <MainHead data={data} />
            <TeamMembers/>
        </div>
    )
}

export default Team
