import {FC} from "react";
import WorkItem from "./WorkItem.tsx";
import Title from "../Title.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IWorkProps {

}


const Work: FC<IWorkProps> = ({}) => {
  return (
       <div className={'flex flex-col gap-1'}>
         <Title><h5>WORK Experience</h5></Title>
         <WorkItem/>
       </div>
  )
}

export default Work