import {FC} from "react";
import Slider, {Settings} from "react-slick";
import logo1 from '../../image/carousel/iedyODlWfXE.jpg';
import logo2 from '../../image/carousel/hyPTrTOdlqk.jpg';
import logo3 from '../../image/carousel/AbVhKFCdNa0.jpg';
interface ISidebarSliderProps {}



const SidebarSlider: FC<ISidebarSliderProps> = ({}) => {
  const images = [logo1,logo2,logo3]
  var settings:Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  }
  return (
     <div className={'w-80 h-full'}>
       <Slider {...settings}>
         {images.map(slide=><div className={'h-[200px]'}><img className={'object-cover'} src={String(slide)} alt=""/></div>)}
       </Slider>
     </div>
  )
}

export default SidebarSlider