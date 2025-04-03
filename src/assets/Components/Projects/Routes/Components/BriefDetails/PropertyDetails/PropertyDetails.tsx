
const PropertyDetails = ({property,value}) => {
  return (
    <div className="flex justify-between w-[38%] max-[1247px]:w-[50%] max-[1200px]:w-[70%] max-[700px]:w-[100%]">
    <p className="text-[18px] max-[1247px]:text-[24px]  max-[700px]:text-[14px]">{property}</p><p className="text-[18px] text-[#AAAAAA] max-[1247px]:text-[22px]  max-[700px]:text-[14px]">{value}</p>
</div>
  )
}

export default PropertyDetails
