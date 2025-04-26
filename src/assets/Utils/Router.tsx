import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../Components/AboutUs/AboutUs"
import Blogs from "../Components/Blogs/Blogs/Blogs"
import Booking from "../Components/Booking/Booking"
import ContactUs from "../Components/Contactus/ContactUs"
import Home from "../Components/Home/Home"
import Projects from "../Components/Projects/Projects"
import ProjectDetails from "../Components/Projects/Routes/ProjectDetails"
import Services from "../Components/Service/Services"
import wayto from "./Routes"

const AppRoutes = [{
    path: wayto.home,
    element: <Home />
},
{
    path: wayto.about,
    element: <AboutUs />
},
{
    path: wayto.services,
    element: <Services />
},

{
    path: wayto.contact,
    element: <ContactUs />
},
{
    path: wayto.projects,
    element: <Projects />
},
{
    path: wayto.projectDetails,
    element: <ProjectDetails />
},
{
    path: wayto.booking,
    element: <Booking />
},

{
    path: wayto.blog,
    element: <Blogs />
},
]

export const router = createBrowserRouter(AppRoutes);