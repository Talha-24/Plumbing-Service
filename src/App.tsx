import { Toaster } from "react-hot-toast"
import Header from "./assets/Components/Common/Header/Header"
import Footer from "./assets/Components/Common/Footer/Footer"
import { RouterProvider } from "react-router-dom"
import HeroSection from "./assets/Components/Common/HeroSection/HeroSection.js"
import { router } from "./assets/Utils/Router.js"
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div onClick={() => { }} className="app">
        <Header />
        <HeroSection />
        <div className="min-h-[100vh] bg-[#F4FAFF]">
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>


    </>
  )
}

export default App
