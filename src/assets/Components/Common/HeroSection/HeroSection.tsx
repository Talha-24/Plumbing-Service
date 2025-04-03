import { useLocation, useNavigate } from "react-router-dom"
import teamimage from "../../../Images/image 1.png"
import gradient from "../../../Images/Gradient Background.svg"
import LineText from "../RouteOpt/LineText"
import BookingForm from "./Booking/BookingForm"
import wayto from "../../../Utils/Routes"

const HeroSection = () => {
  const location = useLocation();
  const moveTo = useNavigate();
  let bookingRoute:string=wayto.booking;
  let contactRoute:string=wayto.contact;
  let homeRoute:string=wayto.home;
  let projectRoute:string=wayto.projects;
  let projectDetails:string=wayto.projectDetails
  let aboutUsRoute:string=wayto.about;
  let serviceRoute:string=wayto.services;
  let blogRoute:string=wayto.blog;
  let route = location.pathname;

  let data = route == aboutUsRoute ? "About Us" : route == serviceRoute ? "Services" : ""
  let activeRoute = route == projectRoute || route == contactRoute || route == blogRoute || route == projectDetails;

  return (
    <div className="w-[100%] relative h-[100%]">
      {activeRoute ? <>
        <div className="absolute top-[39%] w-[100%] left-[50%] flex items-center justify-center translate-x-[-50%] translate-y-[-50%] max-[1015px]:top-[32%] max-[589px]:top-[15%] z-3">
          <div className="flex  flex-col gap-[5px] max-[1015px]:gap-[0px] justify-between">
            <div className={`self-center flex gap-[15px]   items-center mt-[70px]`} >
              <p className="border-[1.2px] min-[1000px]:border-[1.4px] rounded border-[#FFFFFF] w-[50px] min-[1440px]:w-[64px]  self-center"></p>
              <h3 className={`text-[#FFFFFF] font-semibold text-[20px] text-center uppercase max-[1015px]:text-[14px] max-[589px]:text-[11px] `}>{route == contactRoute ? "Contact us" : route == wayto.blog ? "Blogs" : route == wayto.projects ? "Projects" : ""}</h3>
              <p className="border-[1.2px] min-[1000px]:border-[1.4px] rounded border-[#FFFFFF] w-[50px] min-[1440px]:w-[64px] "></p>
            </div>
            <div className="mb-[20px] flex flex-col gap-[4px] w-[100%]">
              <h4 className={route == wayto.blog ? "text-[42px]  min-[1400px]:text-[48px] text-white font-semibold  text-center max-[1015px]:text-[30px]  max-[589px]:text-[18px] max-[386px]:text-[16px] w-[80%] place-self-center" : `text-[42px]  min-[1400px]:text-[48px] text-white font-semibold  text-center max-[1015px]:text-[30px]  max-[589px]:text-[18px] max-[386px]:text-[16px]`}>{route == contactRoute ? "Get in Touch with Us" : route == wayto.blog ? "Expert Tips & Insights from Our Plumbing Pros" : "Our Completed Projects"}</h4>
              <div className="w-[94%]">
                <p className="text-center text-white w-[80%] min-[1440px]:w-[70%] place-self-center max-[1015px]:text-[12px] max-[589px]:text-[9px] max-[386px]:text-[7px]">{route == contactRoute ? "Whether you have a question, need assistance, or want to request a service, we’re here to help. Reach out today!" : route == wayto.projects || route == wayto.projectDetails ? "Quality Plumbing Solutions for Homes and Businesses – See Our Work in Action" : route == blogRoute ? "Stay updated with the latest plumbing tips, industry trends, and maintenance advice to keep your home running smoothly." : ""}</p>
              </div>
            </div>
            <div className="self-center  mt-[10px] max-[750px]:hidden">
              <button onClick={() => { moveTo(bookingRoute) }} className={route == blogRoute ? "max-[1292px]:hidden bg-[#FFC107] px-[40px] py-[13px] rounded-sm  max-xs:text-[4px]   max-md:px-[14px] max-md:py-[6.5px] max-md:text-[14px]  font-medium   max-[360px]:text-[10px] navbutton":`bg-[#FFC107] px-[40px] py-[13px] rounded-sm  max-xs:text-[4px]   max-md:px-[14px] max-md:py-[6.5px] max-md:text-[14px]  font-medium   max-[360px]:text-[10px] navbutton`}>Book Now</button>
            </div>
          </div>
        </div>
      </> :
        route != bookingRoute ?
          <div className={`absolute   top-[15%] left-[10%] w-[65%]   max-[558px]:w-[80%] max-[558px]:top-[10%] max-[558px]:left-[8%] flex flex-col max-[894px]:gap-[18px] max-[413px]:gap-[10px] gap-[20px] text-white z-3   ${route == "/aboutus" ? "max-[700px]:top-[15%] max-[600px]:gap-[8px] max-[470px]:top-[10%] max-[470px]:gap-[5px] max-[375px]:top-[2%] max-[340px]:gap-[6px]" : "max-[350px]:top-[10%] max-[1089px]:top-[10%] "}`}>
            {route == wayto.home || route == bookingRoute ? "" : <> <LineText data={data} /></>}
            <h1 className={`text-[45px] font-bold max-[894px]:text-[22px] max-[630px]:text-[22px] max-[440px]:text-[16px] min-[1300px]:text-[45px] min-[892px]:text-[32px] min-[1300px]:w-[80%] min-[1366px]:text-[52px] min-[1366px]:w-[100%] min-[1376px]:text-[60px]  ${route == aboutUsRoute ? "max-[1089px]:text-[35px]" : route == serviceRoute ? "" : ""}`}> {route == homeRoute ? "Your Trusted Plumbing Experts Fast, Reliable, Affordable!" : route == aboutUsRoute ? "Your Trusted Partner in Plumbing Solutions" : route == serviceRoute ? "Reliable Plumbing Services For Every Need" : ""}</h1>
            <p className="w-[400px] max-[500px]:w-[100%] max-[894px]:text-[14px] max-[630px]:text-[12px] min-[1200px]:text-[20px] min-[1200px]:w-[60%]">{route == homeRoute? "Providing top-notch plumbing and home services for all your needs – anytime, anywhere." : route == "/aboutus" ? "Decades of expertise, a commitment to quality, and reliable service—ensuring your home & business plumbing runs smoothly." : route == serviceRoute ? "From minor leaks to major installations, our certified plumbers ensure quality, efficiency, and long-lasting solutions." : ""}</p>
            <div className="flex flex-row gap-[15px] mt-[10px]">
              <button onClick={() => { moveTo(bookingRoute) }} className={`bg-[#FFC107] px-[40px] py-[8px] rounded-sm    cursor-pointer  text-black max-[576px]:py-[8px] max-[576px]:px-[15px] max-[576px]:text-[12px] max-[500px]:text-[10px] max-[500px]:px-[10px] max-[413px]:py-[6px] min-[1300px]:py-[12px] min-[1300px]:text-[22px] ${route == "/aboutus" ? "max-[800px]:text-[12px] max-[800px]:px-[18px] max-[800px]:py-[5px]" : ""}`}>Book Now</button>
              <button onClick={() => { moveTo(contactRoute) }} className={`bg-[#FFFFFF] px-[40px] py-[8px] rounded-sm     cursor-pointer  text-black max-[576px]:py-[2px] max-[576px]:px-[15px] max-[576px]:text-[12px] max-[500px]:text-[10px] max-[500px]:px-[10px] min-[1300px]:py-[12px] min-[1300px]:text-[22px]  ${route == "/aboutus" ? "max-[800px]:text-[12px] max-[800px]:px-[18px] max-[800px]:py-[5px]" : ""} `}>Contact Us</button>
            </div>
          </div> : route == bookingRoute ? <> <BookingForm /> </> : ""}
      <img id="introimage" className="w-[100%] z-8" src={route == homeRoute ? teamimage : route == projectRoute || route == contactRoute || route == projectDetails || route == blogRoute ? 'https://s3-alpha-sig.figma.com/img/9ca2/4b76/f219661edbc51b3bc41225988424ad6e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fIq5lTFhQBOHQdvLmoa7byz-EgBEbizo50cs0xquEInUJjA9hSkWXCxUbw7EtR24m0ICjz4p~ZTyoEkrKY7xoj~zR4DjbgVyJBEjwcbXUzRy-U4QD4G3wZUwccFwfxNz8~vVfde1PZDHHtQhgK8kMl51PR0bSUN5Qn3RkC7poGg~KNpQ~YPcVdPU5AvzIf0TP77daqiTk--N878p-roBMUA2zkmNh9GYmD81omS9~q6-M7SC9qm9-uO-uyYEBeGFy142EIUL2dtUoznamgLkSa-KFpXwtoxU9WsQQev6yM1Tk9wNi5iTPRqyzb30MIeBkXHLIftmhSxd7vH9TRfdng__' : route == "/booking" ? "https://s3-alpha-sig.figma.com/img/6d2f/b87f/776a6ded9716d58fbd5da53d455c4bd6?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QbgjThflNVKskOP8ykod~CPPMY7HbcLcu4DeynKj9MAJj~3bezjdI~w1StNAWAo0437Iy4YgY39yb2j7a6YbXQ8efIWancCBk-8s5vdOPt2Mj1QavBc6AhDzXAP2jTQM2EHQQaPxI17uptnYqSNLXCR0Ln2dpvvvLNPE5RZXzlNC8Mz8jyqaS3Vr7eGPTQ9ohoCGHWEOJ996j8dBOGZT-BtDVdx9KNI9FkoUUJj4lxVQs0BNia0jpTLM6j0fXT3-hngI5wB7TJKHko-3jZN~I3wwoVGqOTD4rXNcrjhnz77t7vWWJcxK0HyOvXwvMCCs~ipB99CgBTDTq-6gqQ~MLQ__" : teamimage} alt="" />
      <div className="h-[100%] w-[100%] absolute top-[0%] left-0 z-[2]" id="intro"></div>
      {route == projectRoute || route == contactRoute || route == blogRoute || route == projectDetails ? <> <div className="h-[100%] w-[100%] absolute top-[0%] left-0 z-[2]" id="intro"></div></> : <><img src={route != projectRoute && route != bookingRoute ? gradient : ""} className="absolute top-[0%] z-[2] h-[100%]" alt="" /></>}
    </div>
  )
}

export default HeroSection
