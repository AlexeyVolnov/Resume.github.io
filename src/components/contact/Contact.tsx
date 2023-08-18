import {FC} from "react";
import style from "../sidebar/Sidebar.module.scss";
import phone from "../../image/contact/phone.png";
import gmail from "../../image/contact/yandex.png";
import vk from "../../image/contact/vk.png";
import github from "../../image/contact/github.png";
import SidebarSlider from "../sidebar/SidebarSlider.tsx";


interface IContactProps {

}


const Contact: FC<IContactProps> = ({}) => {




  return (
     <div className={"w-full h-[300px]  min-w-[200px] rounded text-blue-50 bg-logo bg-no-repeat bg-cover"}>
       <div className={'w-full h-full px-10 rounded grid grid-cols-[1fr,1fr,1fr] max-2xl:grid-cols-[1fr,2fr,1fr]  items-center  bg-gray-800 bg-opacity-70'}>

         <div className={'image-profile flex px-5 py-5'}>
           <SidebarSlider/>
         </div>

         <div className="profile_info flex-1 px-3">
           <h3 className={'text-4xl mb-3'}>Вольнов Алексей</h3>
           <p className={'opacity-80 pl-3 text-2xl'}>Frontend Developer</p>
         </div>

         <ul className={`${style.profile_social_links} justify-self-end`}>
         <li>
           <img src={phone} alt=""/>
           <p>89228086068</p>
         </li>
         <li>
           <img src={gmail} alt=""/>
           <p>
             <a
                href="mailto:volnovalexy@yandex.ru?subject=По поводу работы"
                target={'_blank'}>volnovalexy@yandex.ru</a></p>
         </li>
         <li>
           <img src={vk} alt=""/>
           <a
              href="https://vk.com/id149472054"
              target={'_blank'}>https://vk.com/id149472054</a>
         </li>
         <li>
           <img src={github} alt=""/>
           <a
              href="https://github.com/AlexeyVolnov"
              target={'_blank'}>https://github.com/AlexeyVolnov</a>
         </li>
       </ul>
       </div>
     </div>
  )
}

export default Contact