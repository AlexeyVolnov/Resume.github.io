import {FC} from "react";
import ContentItem from "../Content/ContentItem.tsx";


interface IWorkProps {
}


export interface IWorkAndEducation {
  startDate: number,
  finalDate: number,
  Title: string,
  Text: string,
  nameOrganization: string
}

const work: IWorkAndEducation[] = [
  {
    startDate: 2015,
    finalDate: 2023,
    Title: 'Инженер-программист',
    nameOrganization: 'Газпром',
    Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium corporis culpa dicta doloremque doloribus ducimus, ipsa iste magni molestias nisi perferendis placeat quas quo rem sint ullam? Quibusdam, vero.',
  }
]

const Work: FC<IWorkProps> = ({}) => {
  return (
     <div>
       {work.map(item => <ContentItem key={item.Title} item={item}/>)}
     </div>
  )
}

export default Work