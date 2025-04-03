
const ProjectDescription = ({title,challenge,stepOne,stepTwo,stepThree}) => {
    return (
        <div className="flex flex-col w-[100%]">
            <h3 className="text-[32px] mb-[10px]  text-[#444444] font-semibold  max-[700px]:text-[22px] max-[400px]:mb-[0px]">{title}</h3>
            <div className="flex flex-col gap-[5px]">
                <p className="text-[20px] text-[#666666] font-bold">Challenges and Objectives</p>
                <p className="text-[#666666] text-[20px]">{challenge}</p>
                <ul className="ml-[30px]">
                    <li className="text-[#666666] list-disc text-[20px]">{stepOne}</li>
                    <li className="text-[#666666] list-disc text-[20px] ">{stepTwo}</li>
                    <li className="text-[#666666] list-disc text-[20px]">{stepThree}</li>
                </ul>
            </div>
        </div>

    )
}

export default ProjectDescription
