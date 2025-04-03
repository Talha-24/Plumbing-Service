import Button from "../../Common/Header/Components/BookingButton/Button"
import H4 from "../../Ui Utils/H4"
import Img from "../../Ui Utils/img"
import P from "../../Ui Utils/P"
import bigEllipse from "../../../Images/About Us/Icon Background.svg"
import smallEllipse from "../../../Images/About Us/Ellipse 1.svg"
import smallerEllipse from "../../../Images/About Us/Ellipse 2.svg"

const AboutUs = () => {
  return (
    <div className="flex flex-row gap-[10%] w-[100%] flex-wrap justify-between items-center max-[970px]:flex-col  max-[1280px]:gap-[30px]">


      <div className="w-[40%] flex flex-col max-[970px]:w-[100%] gap-[10px] max-[1055px]:gap-[0px] min-[1200px]:gap-[25px] min-[1400px]:gap-[30px]  items-start max-[768px]:w-[100%] min-[1500px]:gap-[35px]">
        <span className="flex items-center  gap-[17px]">
          <P css="border-[1px] min-[1200px]:border-[1.8px] min-[1200px]:w-[56px] min-[1400px]:w-[65px] rounded border-[#C4C4C4] w-[54px]  bg-[#C4C4C4]" content="" />
          <P css="text-[#C4C4C4] font-semibold text-[18px] uppercase min-[1200px]:text-[25px]" content="About US" />
        </span>
        <H4 css="text-[3vmax] max-[930px]:text-[35px]  text-[#4A4A4A] font-bold w-[100%] max-[484px]:text-[28px] max-[354px]:text-[22px] min-[1200px]:text-[33px] min-[1400px]:text-[45px] min-[1500px]:text-[48px]" content="Experienced & Reliable Plumbing Services" />
        <div className="flex flex-col gap-[15px] max-[930px]:mt-[20px]">
          <P css="w-[100%] text-[#AAAAAA] max-[484px]:text-[12px]" content="With over a decade of experience, our team of certified plumbers is committed to providing top-quality service." />
          <P css="w-[100%] text-[#AAAAAA] max-[484px]:text-[12px]" content="From small leaks to major installations, we handle every job with professionalism and expertise." />
        </div>
        <div className="mt-[10px]">
          <Button content={"py-[12.5px] "} css={"Book Now"} />
        </div>
      </div>


      <div className="w-[45%]  max-[970px]:self-start max-[970px]:w-[100%] max-md:w-[100%] relative">
          <Img style="rounded h-[100%] w-[100%]" src="https://s3-alpha-sig.figma.com/img/bf1e/ce27/bf5c410eb9f9f7a8c067a6751bad48da?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SN4hA8c5oijfDjuv2NDCiREQFWIm6HIPKk2224T5V5SFotASnK4h5kz-2p9qkF-UfMzPhY-AcK120FHL4eubFxd6FdKDs~UfLcAwwCxOoshwqphJFJ4dHzYjAUJrmKR9fPfppOsfbS-YUri5HHdGtBE5TCEx9XQ3O8IhwH8yUGNiJhzBXmgSvp~-mdhf52AvzpHLUwx7q-~iUnt0DdUR6FViqZnCCEtESho72ob8QjtbjlDNVNSEl3zvdnf-P37n3sqNzLOrrUBOzhuOm192Rl5iTMvqm6wFJRx5O~d5I5dOuT9M~AccXnuWNlSx4W7P3Apy3jiYDZVtiTtupbs-FA__" />
        <div className="w-[80px] absolute bottom-[-15%] right-[3%]   justify-end">
          <Img style={"w-[100%] h-[100%]"} src={bigEllipse} />
          <Img style={""} src={smallEllipse} />
          <Img style={""} src={smallerEllipse} />
        </div>
      </div>

      
    </div>
  )
}

export default AboutUs
