import Emergency from "../Common/Emergency/Emergency"
import AboutUs from "./AboutUs/AboutUs"
import IntroMessage from "./IntroVideo/IntroMessage"
import Location from "./Location/Location"
import PlumbingOff from "./PlumbingOff/PlumbingOff"
import Pricing from "./Pricing/Pricing"
import Projects from "./Projects/Projects"
import Services from "./Services/Services"
import Testeminial from "./Testeminial/Testeminial"

const Home = () => {
  interface head{
    outline: string,
    title:string,
    message: string,

  }

  let data:head={
    outline: "Services",
    title: "Comprehensive Plumbing Services  for Your Home & Business",
    message : "We offer a full range of plumbing solutions tailored to your needs",
  }
  return (
    <div className="w-[100%]  items-center pt-[100px] flex flex-col gap-[150px] px-[70px] max-md:px-[20px]">
      <IntroMessage/>
      <AboutUs/>
      <Services data={data}/>
      <div className="w-[100%] h-[100%] flex flex-col gap-[32px]">
      <Projects/>
      <PlumbingOff/>
      </div>
      <Emergency/>
      <Testeminial/>
      <Pricing/>
      <Location/>
    </div>
  )
}

export default Home
