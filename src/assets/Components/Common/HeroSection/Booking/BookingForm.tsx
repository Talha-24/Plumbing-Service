import { useNavigate } from "react-router-dom";
import display from "../../../../Images/Background Image.png"
const BookingForm = () => {

    const moveTo=useNavigate();
  return (
    <div className="w-[100%] h-[100%]  flex flex-row justify-center items-start z-3 absolute px-[70px] py-[50px] max-[1411px]:w-[100%] max-[940px]:hidden">
              <div className="w-[600px]  h-[872px] bg-white py-[30px] px-[20px] rounded-l-2xl max-[1411px]:w-[45%] max-[1200px]:w-[100%] max-[1200px]:h-fit max-[1412px]:h-fit min-[1443px]:max-h-fit">
                <div className="flex flex-col items-start w-[100%] h-[100%]  gap-[10px] ">
                  <h3 className="text-[37.4px] max-[1412px]:text-[2.4vw] font-bold">Schedule Your Appointment</h3>
                  <div className="flex flex-col w-[100%] max-[1200px]:flex-row">
                    <div className="flex flex-col w-[100%] ">
                      <label htmlFor="name" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Your Name</label>
                      <input className="w-[500px] h-[60px] max-[1060px]:h-[50px] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px] max-[1412px]:w-[90%] " id="name" type="text" placeholder="Your Name" />
                    </div>
                    <div className="flex flex-col w-[100%] ">
                      <label htmlFor="email" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Your Email</label>
                      <input className="w-[500px] h-[60px] max-[1060px]:h-[50px] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px] max-[1412px]:w-[90%] " id="email" type="text" placeholder="Email" />
                    </div>
                  </div>

                  <div className="flex flex-col w-[100%] ">
                    <label htmlFor="phonenumber" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Phone Number</label>
                    <input className="w-[500px] h-[60px] max-[1060px]:h-[50px] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px] max-[1412px]:w-[90%]  max-[1200px]:w-[95%]" id="phonenumber" type="text" placeholder="Phone Number" />
                  </div>

                  <div className="flex flex-row justify-between gap-[10px] max  max-[1412px]:w-[100%] ">
                    <div className="flex flex-col w-[100%] ">
                      <label htmlFor="name" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Subject</label>
                      <select name="" className="w-[245px] h-[60px] max-[1060px]:h-[50px] text-[#AAAAAA] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px] max-[1412px]:w-[80%] max-[1200px]:w-[90%]" id="subject">
                        <option className="w-[100%] h-[100%]" value="Inquiry About Services">Inquiry About Services</option>
                      </select>
                    </div>

                    <div className="flex flex-col w-[100%] ">
                      <label htmlFor="date" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Date</label>
                      <input className="w-[245px] h-[60px] max-[1060px]:h-[50px] border-[0.5px] rounded-lg  border-[#CCCCCC] px-[16px] max-[1412px]:w-[80%] max-[1200px]:w-[90%]" id="date" type="date" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="flex flex-col w-[100%] max-[1412px]:h-[20%] max-[1200px]:h-[50%]">
                    <label htmlFor="message" className="font-bold text-[22px] text-[#4A4A4A] py-[6px] max-[1060px]:text-[16px]">Your Message</label>
                    <textarea placeholder="Write Your Message Here..." className="w-[500px] h-[100px] py-[14px] px-[30px] border-[0.5px] rounded-lg  border-[#CCCCCC]  text-[#AAAAAA] max-[1412px]:w-[90%] max-[1200px]:w-[95%] max-[1200px]:h-[100%]" name="" id=""></textarea>
                  </div>
                  <button onClick={() => {
                    moveTo('booking');
                  }} className={`bg-[#FFC107] px-[40px] py-[14px] my-[15px] rounded-sm  max-xs:text-[4px]   max-md:px-[14px] max-md:py-[6.5px] max-md:text-[14px]  font-normal   max-[360px]:text-[10px] navbutton max-[1412px]:self-end mr-[59px]`}>Confirm Your Booking</button>

                </div>

              </div>
              <div className="w-[600px] h-[872px] rounded-l-2xl max-[1412px]:w-[50%] max-[1200px]:hidden max-[1412px]:h-fit">
                <img className="h-[100%] w-[100%] object-conver" src={display} alt="" />
              </div>
            </div>
  )
}

export default BookingForm
