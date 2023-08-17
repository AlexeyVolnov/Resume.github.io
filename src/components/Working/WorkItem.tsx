import {FC} from "react";
import WorkLineItem from "./WorkLineItem.tsx";


interface IWorkItemProps {

}


const WorkItem: FC<IWorkItemProps> = ({}) => {
  return (
     <div className={'flex gap-5'}>
       <div className={''}>
         <WorkLineItem startDate={2015} finalDate={2023}/>
       </div>
       <div className={'work_info flex-1'}>
         <h4 className={'font-bold text-2xl text-[#2b384a] py-3.5'}>Инженер-программист</h4>
         <p>Газпром</p>
         <p className={'py-5 px-3.5 text-gray-700 font-thin'}>
           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium corporis culpa dicta doloremque doloribus ducimus, ipsa iste magni molestias nisi perferendis placeat quas quo rem sint ullam? Quibusdam, vero.</span><span>A ab, accusamus aliquid deserunt eius enim est exercitationem facilis fuga hic iusto nesciunt officiis omnis praesentium, provident sunt unde. Aliquid deserunt dicta dolor hic nulla quidem similique temporibus voluptates?</span><span>Aut facilis illum laboriosam mollitia nobis praesentium quam quia repellendus suscipit vitae! Ad aperiam autem explicabo nisi, nobis porro quam reiciendis sint vel vitae voluptate voluptatem? Dicta dolores quae sapiente.</span>

         </p>
       </div>
     </div>
  )
}

export default WorkItem