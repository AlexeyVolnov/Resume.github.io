import './App.css'
import Sidebar from "./components/sidebar/Sidebar.tsx";
import Work from "./components/Working/Work.tsx";
import Skills from "./components/skills/Skills.tsx";
import About from "./components/About/About.tsx";


function App() {


  return (
     <div className={''}>
       <Sidebar/>
       <div className={'contain'}>
         <div className={'content'}>
           <div className={'grid grid-cols-[2fr,1fr] max-xl:grid-cols-[1fr]  pt-10 gap-5'}>
             <Work/>
             <Skills/>
           </div>
         </div>
         <About/>
       </div>
     </div>
  )
}

export default App
