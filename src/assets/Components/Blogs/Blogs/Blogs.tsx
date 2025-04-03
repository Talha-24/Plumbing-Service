import { NavLink } from "react-router-dom"
import ProjectCards from "../../Projects/Project Cards/ProjectCards"
import rating from "../../../Images/Testimonial Rating.svg"
const Blogs = () => {

    interface pro {
        image: string,
        rating: string,
        title: string,
        message: string,
        date: string,
        author: string,
    }

    const projects: pro = [
        {
            image: "https://s3-alpha-sig.figma.com/img/22e1/94b9/abb931122842fa72aa2b159c898b04a4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U5Ndf8yzbwa-bEyZYRwRNBLTMqb5u9fXilZIzbXg5oLJIfuCw5iKqK1ikDGOln2MaKZ4jHeMOKiYe0PSakT5hnCUbYf7NcI4XwlKxeQl5UDHX6OWOhETZF2H7yx7oQUkfZpQY6H42Z6kurzJM1Cr0o0ZhY-SMK2rDAUGE8tGXmNLmxtyIQGQ5UcOlCBAM2GLG6y2TquVa-5WLoGuxGv~s0YkBoDhvRlo0DITxdG7CrMgjoOKEdaExz~Gla1qBFj2rX~CqaQHHxkvR98e5GxDp1WNI2c5-uQrjKyEjVRrw8UCUAkbbPMsZNcICNyvmHL1YIUK5MeoShStC99Km3lbRA__",
            rating: rating,
            title: "How Regular Maintenance Prevents Costly Plumbing Repairs",
            message: "Maintaining your plumbing system can help avoid expensive repairs and unexpected breakdowns. Regular inspections ensure your pipes, faucets.",
            date: "March 2023",
            author: "John Carte",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/f2f6/908f/a7fc0b25997b95ed14c49665bc601633?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sd7lTSxUuOPJ-ZMKxINxDQc~LXQ-Da~W5jjNOsPXoxl0ZBcLvKQTFteu6K1-94tYcbJX5d2O2IPiPZ~TqXtFZMqamaNOW9MqVyEUA35R1GFer463dH5dbsppKKZrG7uVBwjn0u1N0oI-KM~gN6e6HNznyr8VZx3AlgFuvpcSjULJPv7uAy-yW~SN-pLiAWYogT8pB2WW4qKV0GhdCYTSRoQ8KP-bxUnHZz3HYQzXjxn0eKyFxO3~5beDUDBUx3TEw4hL3Wejc17D7pSYCyFOLz4L4KpihZxqXP9OEUDx-mc4~hksMWRJCajy80sf7PpE09ttIXnxHwOqkxQuIepa1A__",
            rating: rating,
            title: "5 Signs It’s Time to Replace Your Water Heater",
            message: "A failing water heater can lead to cold showers and high energy bills. Look out for signs like inconsistent temperatures, unusual noises, or rusty water.",
            date: "January 2023",
            author: "Sarah Mitchell",
        },

        {
            image: "https://s3-alpha-sig.figma.com/img/ec05/ab7b/74ecda58ffe8075606b1b4213ffd919d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TVrAWLzJ0QElz0c2MVu7M8YCAgq~VuLoW4sGsStwzFdZWVM99IBpDvOZMqLvZH724y0EhLPL4q9XB0UQiP3vANOnAIjzNP6kkGmNyx~ZxOxb1r448l~zcOeT8rjOYKw0Y9OnoUsSwoXJRJ-yashBsAuh-UglPDYD5a9rvE77aQ6046i1zMzngzVYwbqyNk6YksNB0koJfHi9UvKGjn2pinPJl~L2JuHovNxHwFek4vX7qBXX~UZrx~9qNwapls3cn8VQ8Lw4uXNUjbk5PhInb0h7KwiDQC8lAikQIVcxoNqsll8f3w8ppKSV1kQnoe5DIhejEpd627wJNSoQZrXpSg__",
            rating: rating,
            title: "How to Prevent Clogged Drains in Your Home",
            message: "Blocked drains can cause slow water flow and unpleasant odors. Avoid common culprits like grease, hair, and food scraps by using drain screens and regular cleaning.",
            date: "October 2023",
            author: "Mark Robinson",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/91a0/0e49/2b43e3ae3281e34751f21d0e7d6cd11d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R5uVadaBTdbDMC4DrbVmsxEW54fmx5YiQ3fZCuvO6f3aeqhiLkWadQDiNxsIRFst0ClYUO-tO-A1V3Ru9ZB2foPaGssZDIpZadkAoS2SHS8UgJHVxg44Q1U1qnUIeWuUZUjOox2HsxRdUeWvrVjJEnU3tSVKNZfXwrZO9uA8dRyDutUrunBxbta3Wt8U1~kDfbzaLXx7vyrwcnDKh0HRyRM5GDttzwNyh7ExhgrhFVHEdYs6dFCPxe3jSaX345H8iegkzBMch8E1h8rAItnbx3ndmZZU8-TJrPCfqT6JmgbB2ExVG~mPSCVIFJNLnsoYUCRkO93xIfWRZkJ2J93Lxw__",
            rating: rating,
            title: "Common Causes of Sewer Line Backups",
            message: "A clogged sewer line can lead to slow drainage, foul odors, and even flooding. Tree roots, grease buildup, and debris are common culprits.",
            date: "March 2023",
            author: "Rachel Carter",
        },
    ]


    return (
        <div className="w-[100%]  flex flex-wrap  justify-between  max-[1116px]:flex-col">
          
            <div className="flex flex-col w-[50%] gap-[20px] mt-[20px] flex-wrap max-w-fit max-[1116px]:w-[100%] max-[1116px]:gap-[10px] max-[1116px]:flex-row">
                <NavLink to='/blog' className={({ isActive }) => (isActive ? "border-l-2 text-[20px] min-[1320px]:text-[24px]  pl-[10px] border-[blue] text-black max-[1100px]:text-[18px]" : 'text-[#AAAAAA]  text-[20px] max-[1100px]:text-[15px]')} >Plumbing Tips & Maintenance</NavLink>
                <NavLink to='/ ' className={({ isActive }) => (isActive ? "border-l-2 text-[20px]  min-[1320px]:text-[24px]  pl-[10px] border-[blue] text-[black] max-[1100px]:text-[15px]" : "text-[#AAAAAA] text-[20px] max-[1100px]:text-[15px]")}> Emergency Plumbing Solutions</NavLink>
                <NavLink to='/' className={({ isActive }) => (isActive ? "border-1-2   pl-[10px] min-[1320px]:text-[24px] border-[blue] text-[black]" : "text-[#AAAAAA] text-[20px] max-[1100px]:text-[15px]")}>Water Heaters & Appliances</NavLink>
                <NavLink to='/' className={({ isActive }) => (isActive ? "border-1-2   pl-[10px] min-[1320px]:text-[24px] border-[blue] text-[black]" : "text-[#AAAAAA] text-[20px] max-[1100px]:text-[15px]")}>Pipe & Drain Solutions</NavLink>
                <NavLink to='/' className={({ isActive }) => (isActive ? "border-1-2   pl-[10px] min-[1320px]:text-[24px] border-[blue] text-[black]" : "text-[#AAAAAA] text-[20px] max-[1100px]:text-[15px]")}>Home Renovation & Plumbing</NavLink>
                <NavLink to='/' className={({ isActive }) => (isActive ? "border-1-2   pl-[10px] min-[1320px]:text-[24px] border-[blue] text-[black]" : "text-[#AAAAAA] text-[20px] max-[1100px]:text-[15px]")}> Industry News & Trends</NavLink>
            </div>
            <div className="flex flex-row flex-wrap gap-[22px] w-[70%] max-[1116px]:w-[100%] max-[1100px]:justify-between">
                {projects.map(function (value, idx) {
                    return (
                        <>
                            <ProjectCards key={idx} icon={value.image} rating={value.rating} title={value.title} message={value.message} date={value.date} author={value.author} />
                        </>
                    )

                })}
            </div>

        </div>
    )
}

export default Blogs
