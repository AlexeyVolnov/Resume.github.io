import {FC} from "react";
import Contact from "../contact/Contact.tsx";

interface ISidebarProps {

}


const Sidebar: FC<ISidebarProps> = ({}) => {
  return (
     <div className={'contain'}>
       <Contact/>
     </div>

  )
}

export default Sidebar