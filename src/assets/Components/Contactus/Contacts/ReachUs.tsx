
const ReachUs = ({ icon, description }) => {
  return (
    <div className="h-[222px] w-[310px] max-[1170px]:w-[280px] max-[1170px]:h-[220px] max-[1441px]:w-[305px] max-[1341px]:w-[260px] flex flex-col gap-[18px] items-center justify-center m-[10px]   bg-white rounded-lg   max-[1031px]:flex-grow-1 min-[1441px]:w-[300px] max-[1260px]:w-[50px] max-[1259px]:flex-grow-1">
      <span className="p-[20px]  bg-[#0056A6] rounded-sm">
        <img className="w-[70px] h-[70px]" src={icon} alt="" /></span>
      <p className="font-medium w-[80%] text-[14px] text-center mt-[8px]">{description}</p>
    </div>
  )
}

export default ReachUs
