import H4 from "../../Ui Utils/H4"
import ContactUs from "../../../Images/ContactUs/Contect image.png"
import Button from "../../Common/Header/Components/BookingButton/Button"

const GetInTouch = () => {

    
    return (
        <div className="w-[100%] h-[100%] flex flex-row  max-[1270px]:flex-col max-[1270px]:gap-[30px]  justify-between">

            <div className="w-[50%] max-[1270px]:w-[100%]">
                <div className="w-[100%]">
                    <H4 content={"Get in Touch with Us"} css={"text-[35px] font-semibold"}></H4>
                    <p className="text-[17px]  w-[100%] text-[#838383] py-[8px] mb-[20px]">Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible</p>
                </div>
                <div className="w-[594px] h-[463px] min-[1441px]:w-[100%] min-[1441px]:h-[70%] max-[1270px]:h-[100%] max-[1270px]:w-[100%]">
                    <img className="w-[100%] h-[100%] rounded-sm " src={ContactUs} alt="" />
                </div>
            </div>

            <div className="w-fit  flex flex-col  gap-[10px] max-[1270px]:w-[100%] min-[1441px]:w-[45%]">
                <div className="flex flex-col w-[100%] ">
                    <label htmlFor="name" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Your Name</label>
                    <input className="w-[500px] h-[60px] bg-white max-[1060px]:h-[50px] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px] max-[1270px]:w-[100%] min-[1441px]:w-[100%]" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="flex flex-col w-[100%] ">
                    <label htmlFor="name" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Your Email</label>
                    <input className="w-[500px] h-[60px] bg-white max-[1060px]:h-[50px] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px] max-[1270px]:w-[100%] min-[1441px]:w-[100%]" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="flex flex-col w-[100%] ">
                    <label htmlFor="name" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Phone Number</label>
                    <input className="w-[500px] h-[60px] bg-white max-[1060px]:h-[50px] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px]  max-[1270px]:w-[100%] min-[1441px]:w-[100%]" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="flex flex-col w-[100%] ">
                    <label htmlFor="name" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Subject</label>
                    <select className="w-[500px] h-[60px] bg-white max-[1060px]:h-[50px] border-[0.5px] rounded-lg text-[#AAAAAA] border-[#CCCCCC] px-[16px] max-[1270px]:w-[100%] min-[1441px]:w-[100%]" name="" id="">
                        <option value="">Inquiry about Services</option>
                        <option value="">With Talha</option>
                    </select>
                </div>
                <div className="flex flex-col w-[100%] max-[1200px]:h-[50%]">
                    <label htmlFor="message" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Your Message</label>
                    <textarea placeholder="Write Your Message Here..." className="w-[500px] h-[200px] bg-white py-[14px] px-[30px] border-[0.5px] rounded-lg  border-[#CCCCCC]  text-[#AAAAAA]    max-[1200px]:h-[100%] max-[1270px]:w-[100%]  min-[1441px]:w-[100%]" name="" id=""></textarea>
                </div>
                <div className="mt-[20px]">
                    <Button content={"py-[12px] text-semibold"} css={"Send Message"} />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
