import arrow from "../../../../Images/Vector.svg"
import Img from "../../../Ui Utils/img"
import P from "../../../Ui Utils/P"
const NavButton = ({ title }) => {
    return (
        <span className="flex flex-row gap-[4px]">
            <Img style="w-[16px]" src={arrow} />
            <p>{title}</p>
        </span>
    )
}

export default NavButton
