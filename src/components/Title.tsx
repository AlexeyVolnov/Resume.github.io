import {FC, ReactNode} from "react";


interface ITitleProps {
children:ReactNode
}


const Title: FC<ITitleProps> = ({children}) => {
  return (
     <div className={'text-2xl my-2 font-semibold text-gray-500'}>
       {children}
       <hr className={'bg-[#2a384b] h-[2px] w-full my-5'}/>
     </div>
  )
}

export default Title