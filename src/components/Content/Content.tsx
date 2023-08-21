import {FC, useState} from "react";
import Work from "../Working/Work.tsx";
import Title from "../Title.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from "../Education/Education.tsx";

interface IContentProps {

}


const Content: FC<IContentProps> = ({}) => {

const [activeLink,setActiveLink] = useState(true)



  return (

       <div className={'flex flex-col gap-10'}>
         <div className={'flex gap-5'}>
           <div onClick={()=>setActiveLink(true)} className={'basis-1/2 select-none'}>
             <Title><h5 className={`${activeLink && 'text-gray-900'}`}>Опыт работы</h5></Title>
           </div>
           <div onClick={()=>setActiveLink(false)} className={'basis-1/2 select-none'}>
             <Title><h5 className={`${!activeLink && 'text-gray-900'}`}>Образование</h5></Title>
           </div>
         </div>
         <div className={'content'}>
           {activeLink?<Work/>:<Education/>}
         </div>
       </div>



  )
}

export default Content