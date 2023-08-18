import {FC} from "react";
import Title from "../Title.tsx";
import SkillsItem from "./SkillsItem.tsx";


interface ISkillsProps {

}

const skills = [
   {
     Name:'HTML',
     progress: 95
   },
  {
    Name:'CSS/SCSS',
    progress: 80
  },
  {
    Name:'css-modules',
    progress: 90
  },
  {
    Name:'tailwindcss',
    progress: 60
  },
  {
    Name:'BEM',
    progress: 70
  },
  {
    Name:'JS',
    progress: 88
  },
  {
    Name:'React',
    progress: 80
  },
  {
    Name:'redux-toolkit',
    progress: 80
  },
  {
    Name:'rtk-Query',
    progress: 70
  },
  {
    Name:'Git',
    progress: 70
  },
  {
    Name:'gulp',
    progress: 50
  },
  {
    Name:'webpack',
    progress: 50
  },
  {
    Name:'typescript',
    progress: 47
  },
  {
    Name:'npm/yarn',
    progress: 60
  },
  {
    Name:'Docker',
    progress: 40
  }

]

const Skills: FC<ISkillsProps> = ({}) => {
  return (
     <div className={''}>
       <Title><p>Skills & Tools</p></Title>
       <div className={'grid grid-cols-3 items-center justify-center] max-xl:grid-cols-6 gap-x-5 gap-y-3'}>
         {skills.map(skill=><SkillsItem key={skill.Name} nameSkill={skill.Name.toUpperCase()} progressSkill={skill.progress}/>)}
       </div>
     </div>
  )
}

export default Skills