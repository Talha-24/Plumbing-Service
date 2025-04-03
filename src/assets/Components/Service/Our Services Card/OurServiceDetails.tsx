
const OurServiceDetails = ({val}) => {
  return (
    <div className="h-[150px] w-[175px] max-[1170px]:w-[150px] max-[1170px]:h-[120px]     bg-white rounded-sm border-[1px] border-[#bebdbd] flex flex-col items-center justify-center  max-[1031px]:flex-grow-1">
    <span className="py-[15px] px-[10px] bg-[#0056A61A] rounded-sm"><img className="w-[35px] h-[28px]" src={val.icon} alt="" /></span>
    <p className="text-[#AAAAAA] font-medium w-[80%] text-[16px] text-center mt-[5px] max-[500px]:w-[100%]">{val.text}</p>
</div>
  )
}

export default OurServiceDetails
