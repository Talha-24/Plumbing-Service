import Queries from "../Common/Header/Components/Queries/Queries"
import Location from "../Home/Location/Location"
import Blogs from "./Blogs/Blogs"

const Blog = () => {
    return (
        <div className="w-[100%]  items-center pt-[100px] flex flex-col gap-[150px] px-[70px] max-md:px-[20px] bg-[#F4FAFF]">
            <div>
                <h1>Category</h1>
            <Blogs />
            </div>
            <Queries/>
            <Location/>
        </div>
    )
}

export default Blog
