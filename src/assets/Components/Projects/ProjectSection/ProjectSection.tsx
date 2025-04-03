

import { useNavigate } from "react-router-dom"
import rating from "../../../Images/Testimonial Rating.svg"
import ProjectCards from "../Project Cards/ProjectCards"
import wayto from "../../../Utils/Routes";
const ProjectSection = () => {
    const moveTo=useNavigate();


    interface pro {
        image: string,
        rating: string,
        title: string,
        message: string,
        date: string,
    }

    const projects: pro = [
        {
            image: "https://s3-alpha-sig.figma.com/img/22e1/94b9/abb931122842fa72aa2b159c898b04a4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U5Ndf8yzbwa-bEyZYRwRNBLTMqb5u9fXilZIzbXg5oLJIfuCw5iKqK1ikDGOln2MaKZ4jHeMOKiYe0PSakT5hnCUbYf7NcI4XwlKxeQl5UDHX6OWOhETZF2H7yx7oQUkfZpQY6H42Z6kurzJM1Cr0o0ZhY-SMK2rDAUGE8tGXmNLmxtyIQGQ5UcOlCBAM2GLG6y2TquVa-5WLoGuxGv~s0YkBoDhvRlo0DITxdG7CrMgjoOKEdaExz~Gla1qBFj2rX~CqaQHHxkvR98e5GxDp1WNI2c5-uQrjKyEjVRrw8UCUAkbbPMsZNcICNyvmHL1YIUK5MeoShStC99Km3lbRA__",
            rating: rating,
            title: "Modern Kitchen Renovation",
            message: "Complete plumbing overhaul for a contemporary kitchen upgrade ...",
            date: "March 2023",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/f2f6/908f/a7fc0b25997b95ed14c49665bc601633?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sd7lTSxUuOPJ-ZMKxINxDQc~LXQ-Da~W5jjNOsPXoxl0ZBcLvKQTFteu6K1-94tYcbJX5d2O2IPiPZ~TqXtFZMqamaNOW9MqVyEUA35R1GFer463dH5dbsppKKZrG7uVBwjn0u1N0oI-KM~gN6e6HNznyr8VZx3AlgFuvpcSjULJPv7uAy-yW~SN-pLiAWYogT8pB2WW4qKV0GhdCYTSRoQ8KP-bxUnHZz3HYQzXjxn0eKyFxO3~5beDUDBUx3TEw4hL3Wejc17D7pSYCyFOLz4L4KpihZxqXP9OEUDx-mc4~hksMWRJCajy80sf7PpE09ttIXnxHwOqkxQuIepa1A__",
            rating: rating,
            title: "Residential Bathroom Upgrade",
            message: "Refurbished the bathroom plumbing system by replacing ...",
            date: "January 2023",
        },

        {
            image: "https://s3-alpha-sig.figma.com/img/ec05/ab7b/74ecda58ffe8075606b1b4213ffd919d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TVrAWLzJ0QElz0c2MVu7M8YCAgq~VuLoW4sGsStwzFdZWVM99IBpDvOZMqLvZH724y0EhLPL4q9XB0UQiP3vANOnAIjzNP6kkGmNyx~ZxOxb1r448l~zcOeT8rjOYKw0Y9OnoUsSwoXJRJ-yashBsAuh-UglPDYD5a9rvE77aQ6046i1zMzngzVYwbqyNk6YksNB0koJfHi9UvKGjn2pinPJl~L2JuHovNxHwFek4vX7qBXX~UZrx~9qNwapls3cn8VQ8Lw4uXNUjbk5PhInb0h7KwiDQC8lAikQIVcxoNqsll8f3w8ppKSV1kQnoe5DIhejEpd627wJNSoQZrXpSg__",
            rating: rating,
            title: "Commercial Office Plumbing",
            message: "Installed a comprehensive plumbing system for a new office...",
            date: "October 2023",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/91a0/0e49/2b43e3ae3281e34751f21d0e7d6cd11d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R5uVadaBTdbDMC4DrbVmsxEW54fmx5YiQ3fZCuvO6f3aeqhiLkWadQDiNxsIRFst0ClYUO-tO-A1V3Ru9ZB2foPaGssZDIpZadkAoS2SHS8UgJHVxg44Q1U1qnUIeWuUZUjOox2HsxRdUeWvrVjJEnU3tSVKNZfXwrZO9uA8dRyDutUrunBxbta3Wt8U1~kDfbzaLXx7vyrwcnDKh0HRyRM5GDttzwNyh7ExhgrhFVHEdYs6dFCPxe3jSaX345H8iegkzBMch8E1h8rAItnbx3ndmZZU8-TJrPCfqT6JmgbB2ExVG~mPSCVIFJNLnsoYUCRkO93xIfWRZkJ2J93Lxw__",
            rating: rating,
            title: "Emergency LeakRepair",
            message: "Responded to a 24/7 emergency service call to repair ...",
            date: "March 2023",
        },

        {
            image: "https://s3-alpha-sig.figma.com/img/5996/ad65/cbc8c4cd4a8e952bb3d7ecc4f563a43f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aod1h2GEDNWd5Umf~e1OqY27Owix3kkrv-PcMXMfwXhNHc1REdSY0~QyaqyUZZKdtT9JZpnBhRWV~81CxZ460L7bOGrcLh1JjNAOOhMrKffWN04x9kKOZDy6CSiuNzcggdN-CMQou2UXx0pbNtFBK3pPJRh20VC3bVtsd0Y9WvSw~6F79wPxahnbEluYD7~G47FpoMRIE6IjD5xHp2-msmEnIC~oyaFXpS~XsVgDFPNzZtJK5qebmQ~oSJNgjAx8W8BBzVuOHIw6Ck4kn~5DK5sd~GkcNPQ7hVYHLM5~-Y7t72XS3Ut2FZmQyWcohkeUvM9n2lPUPm6OcmaUVSKeGg__",
            rating: rating,
            title: "Industrial Pipe Replacement",
            message: "Executed a full-scale replacement of outdated pipes ...",
            date: "January 2023",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/c373/4269/42437fdf8d556ca3e3da613c6a4676e7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ReWOdl7FoxrW2CigifewRa4Ip7XtqpokberOo1RNHqSacGB2L8jbZs3eZE2fKYNADIHFyWW1MHcxaoUNVvyN2gUhzYWZlby3uv3XJm7EVo9l0-1TI6OhMmqOvfh6~X8DCNH7TmeqzLeR8dEBQPGGI~2FburHQPcUtne93Z-iWOvxZ-s~dJrOVYBCVlc4bBu4ruiFAnl5rbFSWa8IKT3EkmtnWhIpEAiVZqcsHQUx9VN2CPXktzp6MuzcUVYgpTbRV96qFXUZdq12w-jZGbJyN9UmNrBAdiFl27YPTFRcMZ3OFrpMxSOrVTbq1U-HtTtGhiODBz6V~FpfVxr--Xy3lQ__",
            rating: rating,
            title: "Complex Water Heater Installation",
            message: "Utilized advanced camera inspections to detect issues...",
            date: "October 2023",
        },


    ]


    return (
        <div onClick={()=>{
            moveTo(wayto.projectDetails);
        }} className="w-[100%] flex   gap-[30px] flex-wrap items-center justify-center ">
            {projects.map(function (value, idx) {
                return <ProjectCards  key={idx} icon={value.image} rating={value.rating} title={value.title} message={value.message} date={value.date} />

            })}
            <div className="w-[100%] flex items-center justify-center">
                <p className="w-[30%] bg-[#C4C4C4] h-[2px]"></p>
                <p className="text-[25px] font-bold mx-[20px] text-[#C4C4C4]">Load More</p>
                <p className="w-[30%] bg-[#C4C4C4] h-[2px]"></p>
            </div>


        </div>
    )
}

export default ProjectSection
