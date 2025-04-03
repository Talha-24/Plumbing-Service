import { useLocation } from "react-router-dom"
import P from "../../Ui Utils/P";

const LineText = ({data}) => {


    const location=useLocation();
    return (
        <span className="flex flex-row items-center gap-[16px] max-[500px]:hidden">
            <p className="border-[1.2px] rounded border-[#FFFFFF] w-[50px]  bg-[#C4C4C4] self-center"></p>
            <h3 className={`text-[#FFFFFF] font-semibold text-[22px] uppercase ${location.pathname == "/aboutus" ? "max-[343px]:text-[14px]" : ""}`}>{data}</h3>
            {location.pathname == "/aboutus" || location.pathname == '/services' ? "": <><P content={""} css="border-[1px] rounded border-[#C4C4C4] w-[50px]  bg-[#C4C4C4]"></P></> }
            
        </span>
    )
}

export default LineText
