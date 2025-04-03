import ReachUs from "./Contacts/ReachUs"
import location from "../../Images/ContactUs/location.svg"
import phone from "../../Images/ContactUs/phone.svg"
import email from "../../Images/ContactUs/mailbox.svg"
import timer from "../../Images/ContactUs/timer.svg"
import GetInTouch from "./GetInTouch/GetInTouch"
import Location from "../Home/Location/Location"
import Queries from "../Common/Header/Components/Queries/Queries"


const ContactUs = () => {
    const reachUs = [{
        image: location,
        message: "1234 Business Avenue, Suite 567, New York, NY 10001",

    },

    {

        image: phone,
        message: "+1 (555) 123-4567",

    },

    {

        image: email,
        message: " support@company.com",

    },
    {
        image: timer,
        message: "Monday - Friday: 8:00 AM - 7:00 PM  Saturday - Sunday: 9:00 AM - 4:00 PM",
    },



    ]
    return (
        <div className="w-[100%]  items-center pt-[70px] flex flex-col gap-[38px] px-[70px] max-md:px-[20px] bg-[#F4FAFF]">
            <div className="flex flex-wrap justify-between m-[] w-[100%]">
                {reachUs.map(function (val) { return (<ReachUs icon={val.image} description={val.message} />) })}
            </div>
            <GetInTouch />
            <div className="pt-[90px] w-[100%]">
                <Queries />
                {/* Separate Component for every quesiton */}
            </div>
            <div className="w-[100%] h-[100%] mt-[100px]">
                <Location />
            </div>
        </div>

    )
}

export default ContactUs
