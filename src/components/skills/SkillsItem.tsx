import {FC} from "react";


interface ISkillsItemProps {
  nameSkill:string,
  progressSkill:number
}


const SkillsItem: FC<ISkillsItemProps> = ({nameSkill,progressSkill}) => {

  return (
     <div className={'flex flex-col items-center justify-center'}>
         <p className={'py-3.5 pb-3 text-center items-center flex h-[60px] text-gray-500 text-[1.1rem]'}>{nameSkill}</p>
         <div className={'w-full relative rounded h-[20px] bg-gray-300'}>
          <div className={`absolute top-0 left-0 rounded right-0 bottom-0 bg-blue-950 h-full text-blue-50 text-[0.8rem] text-center`} style={{width:`${progressSkill}%`}}>{progressSkill}%</div>
         </div>
     </div>
  )
}

export default SkillsItem