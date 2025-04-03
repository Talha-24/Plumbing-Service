
import PersonInfo from "./PersonCard/PersonInfo"
const TeamMembers = () => {


    return (
        <div className="w-[100%] flex flex-row   items-center  flex-wrap gap-[50px] justify-between max-[649px]:justify-center max-[690px]:gap-[20px] max-[480px]:gap-[10px]">
            {Array.from({ length: 6 }, () => {
                return (
                   <PersonInfo/>
                )
            })}




        </div>
    )
}

export default TeamMembers
