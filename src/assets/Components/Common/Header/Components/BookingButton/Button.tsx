import { useNavigate } from "react-router-dom";

const Button = ({ content, css }) => {

    const moveTo = useNavigate();

    return (
        <button onClick={() => {
            moveTo('booking');
        }} className={`bg-[#FFC107] px-[40px] py-[8px] rounded-sm  max-xs:text-[4px]   max-md:px-[14px] max-md:py-[6.5px] max-md:text-[14px]  font-medium   max-[360px]:text-[10px] navbutton ${ content} `}>{css}</button>
    )
}

export default Button
