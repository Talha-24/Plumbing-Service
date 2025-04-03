import Img from "../../Ui Utils/img"
import P from "../../Ui Utils/P"

const WhyChoseUs = ( {val}) => {
  return (
    <div className={val.itemCss}>
                <Img style={val.icon.css} src={val.icon.icon} />
                <P css={val.title.css} content={val.title.title} />
                <P css={val.message.css} content={val.message.message} />
              </div>
  )
}

export default WhyChoseUs
