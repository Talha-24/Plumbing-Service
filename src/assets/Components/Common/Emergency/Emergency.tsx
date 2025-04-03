

// import arrowone from "../../../Images/Arros Signs/image-1.svg"
// import arrowtwo from "../../../Images/Arros Signs/image-2.svg"
// import arrowthree from "../../../Images/Arros Signs/image-3.svg"
// import arrowfour from "../../../Images/Arros Signs/image-4.svg"

import H4 from "../../Ui Utils/H4"
import P from "../../Ui Utils/P"
import Button from "../Header/Components/BookingButton/Button"

const Emergency = () => {
  return (
    <div className="flex w-[100%] flex-row justify-between bg-[#0056A6] px-[70px] py-[70px]   max-md:px-[20px]">
      <div className="flex flex-col w-[100%] text-white gap-[18px]">
        <H4 css={"font-bold text-[27px]"} content={"Fast, Reliable, and Always Ready to Help"} />
        <P css={""} content={`Plumbing emergencies can happen anytime, and quick action is crucial to ${<br />}  prevent damage. Our expert team is available 24/7 to handle urgent  ${<br />} repairs and restore your plumbing system efficiently.`} />
        <div className="flex row items-center gap-[17px] font-semibold max-[780px]:flex-col max-[780px]:items-start">
          <div className="w-[270px] h-[38px] bg-white flex items-center gap-[12px] pl-[6px] rounded-sm">
            <div className="h-[30px] w-[180px] bg-[#0056A6] rounded-sm flex items-center justify-center">
              <P css={"text-center"} content={"Emergency Hotline"} />
            </div>
            <P css={"text-[#0056A6] font-bold"} content={"890765"} />
          </div>
          <Button css={"Call Now"} content={"px-[30px] py-[9px] text-[0.8rem] rounded-sm bg-[#FFC107] text-black max-[847px]:px-[30px] max-[847px]:py-[8px] max-[847px]:text-sm "} />
        </div>
      </div>
      <div className=" flex relative">
        {/* <img src={arrowone} className="absolute right-[5%]" alt="" />
        <img src={arrowtwo} className="absolute ml-[60px] h-[270px]" alt="" />
        <img src={arrowthree} className="absolute ml-[130px] h-[270px]" alt="" />
        <img src={arrowfour} className="absolute ml-[200px] h-[270px]" alt="" />
             */}
      </div>
    </div>
  )
}

export default Emergency
