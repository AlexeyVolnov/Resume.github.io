import {FC} from "react";
import style from "../sidebar/Sidebar.module.scss";
import whatsApp from "../../image/contact/wathapp.png";
import gmail from "../../image/contact/yandex.png";
import vk from "../../image/contact/vk.png";
import github from "../../image/contact/github.png";
import telegram from "../../image/contact/tme.png";
import SidebarSlider from "../sidebar/SidebarSlider.tsx";


interface IContactProps {

}


const Contact: FC<IContactProps> = ({}) => {


  return (
     <div className={"w-full h-[300px]  min-w-[200px] rounded text-blue-50 bg-logo bg-no-repeat bg-cover"}>
       <div className={'w-full h-full px-10 rounded grid grid-cols-[1fr,2fr]  items-center  bg-gray-800 bg-opacity-70'}>

         <div className={'image-profile flex px-5 py-5'}>
           <SidebarSlider/>
         </div>

         <div className="profile_info justify-between max-xl:items-center max-xl:flex-col flex-1 flex px-3">
           <div>
             <h3 className={'text-4xl mb-3'}>Вольнов Алексей</h3>
             <p className={'opacity-80 pl-3 text-2xl'}>Frontend Developer</p>
           </div>
           <ul className={`${style.profile_social_links} justify-self-end max-xl max-xl:flex-row max-xl:mt-10`}>
             <li>
               <a target={'_blank'} href="https://wa.me/+79228086068?text=Здравствуйте Алексей">
                 <img src={whatsApp} alt=""/>
                 <p>+7 922 808-60-68</p>
               </a>
             </li>
             <li>
                 <a href="mailto:volnovalexy@yandex.ru?subject=По поводу работы"
                    target={'_blank'}>
                   <img src={gmail} alt=""/>
                   <p>volnovalexy@yandex.ru</p>
                 </a>
             </li>
             <li>
               <a
                  href="https://vk.com/id149472054"
                  target={'_blank'}><img src={vk} alt=""/><p>https://vk.com/id149472054</p></a>
             </li>
             <li>
               <a target={'_blank'} href="https://t.me/Alex_Volnov1995?text=Здравствуйте Алексей">
                 <img src={telegram} alt=""/>
                 <p>https://t.me/Alex_Volnov1995</p>
               </a>
             </li>
             <li>
               <a
                  href="https://github.com/AlexeyVolnov"
                  target={'_blank'}>
                 <img src={github} alt=""/>
                 <p>https://github.com/AlexeyVolnov</p></a>
             </li>
           </ul>
         </div>
       </div>
     </div>
  )
}

export default Contact