import { Toaster } from "react-hot-toast"
import Header from "./assets/Components/Common/Header/Header"
import Footer from "./assets/Components/Common/Footer/Footer"
import wayto from "./assets/Utils/Routes.js"
import { Route, Routes } from "react-router-dom"
import HeroSection from "./assets/Components/Common/HeroSection/HeroSection.js"
import Home from "./assets/Components/Home/Home.js"
import AboutUs from "./assets/Components/AboutUs/AboutUs.js"
import Services from "./assets/Components/Service/Services.js"
import Projects from "./assets/Components/Projects/Projects.js"
import Booking from "./assets/Components/Booking/Booking.js"
import ContactUs from "./assets/Components/Contactus/ContactUs.js"
import ProjectDetails from "./assets/Components/Projects/Routes/ProjectDetails.js"
import Blog from "./assets/Components/Blogs/Blog.js"
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div onClick={() => { }} className="app">
        <Header />
        <HeroSection />
        <div className="min-h-[100vh] bg-[#F4FAFF]">
          <Routes>
            <Route path={wayto.home} element={<Home />} />
            <Route path={wayto.about} element={<AboutUs />} />
            <Route path={wayto.services} element={<Services />} />
            <Route path={wayto.contact} element={<ContactUs />} />
            <Route path={wayto.projects} element={<Projects />} />
            <Route path={wayto.projectDetails} element={<ProjectDetails />} />
            <Route path={wayto.booking} element={<Booking />} />
            <Route path={wayto.blog} element={<Blog />} />
          </Routes>

        </div>

        <Footer />
      </div>


    </>
  )
}

export default App
