import { useLocation } from "react-router-dom"
import H4 from "../../Ui Utils/H4"
import Img from "../../Ui Utils/img"
import P from "../../Ui Utils/P"
const ProjectCards = ({ icon, date, message, title, rating, author }) => {
  const location = useLocation();
  const route = location.pathname;


  return (

    <div className={`${route == "/blog" ? "max-[900px]:max-h-[400px] max-[1100px]:min-h-[400px]  w-[310px] min-[1116px]:flex-grow-1 m-[10px] max-[1116px]:w-[46.5%] max-[1027px]:flex-grow-1 max-[1027px]:w-[40%] max-[660px]:w-[30%] max-[400px]:w-[50%]" : "h-[454px] w-[382px] bg-white flex max-[690px]:h-fit flex-col  p-[10px] gap-[10px] rounded-[10px] min-[1200px]:w-[325px] min-[1300px]:flex-grow-1 min-[1529px]:flex-grow-0 min-[1529px]:w-[30%]  max-[1300px]:flex-grow-1  max-[938px]:w-[320px]"}`}>
      <div className={route == "/blog" ? "h-[210px] w-[348px] rounded-[10px] max-[2446px]:w-[100%] max-[600px]:h-[150px] max-[500px]:h-[120px] max-[400px]:h-[140px]" : `h-[260px] w-[358px]  rounded-[10px]   max-[2446px]:w-[100%]`}>
        <Img style={"w-[100%] h-[100%] z-[-1] rounded-[10px] object-cover"} src={icon} />
      </div>
      <div className="flex  items-center justify-between pt-[12px]">
        {route == "/blog" ? <>
          <button className="bg-[#FFC107] text-[#4A4A4A] text-[13px] px-[16px] py-[4px] rounded-[2px] max-[1027px]:text-[10px] max-[600px]:text-[8px]">Plumbing Service</button>
        </> : <>
          <P css="text-[#0056A6] text-[14px] font-medium  " content={date} />
          <div className="flex flex-row items-center gap-[10px]">
            <span>Rating</span>
            <span>
              <Img style={""} src={rating} />
            </span>
          </div>
        </>}
      </div>
      <H4 css={route == "/blog" ? "text-[25px] font-bold my-[10px] w-[88%] text-[#4A4A4A] max-[1346px]:w-[100%] max-[396px]:text-[20px] max-[1027px]:text-[16px] max-[600px]:text-[14px] max-[500px]:text-[12px] max-[400px]:text-[18px]" : `"text-[24px] text-[#4A4A4A] font-semibold w-[70%] max-[1346px]:w-[100%] max-[396px]:text-[20px]`} content={title} />
      <P css={route == "/blog" ? "text-[#AAAAAAAA] text-[18px] max-[396px]:text-[12px] max-[1027px]:text-[14px] max-[600px]:text-[12px] max-[500px]:text-[10px]" : `text-[#AAAAAAAA] text-[14px] font-medium max-[396px]:text-[12px]`} content={message} />
      {route == "/blog" ? <>
        <div className="flex flex-row py-[8px]">
          <p className="text-[14px] text-[#AAAAAA] max-[600px]:text-[10px]">by</p>
          <p className=" text-[#4A4A4A] text-[14px] font-semibold  max-[396px]:text-[12px]  px-[5px] max-[600px]:text-[9px]"> {author ?? ""}</p>
          <p className="text-[#AAAAAAAA] text-[14px] font-medium max-[396px]:text-[12px] max-[600px]:text-[10px]">Feb, 4, 2022.</p></div>

      </> : ""}
    </div>

  )
}

export default ProjectCards
