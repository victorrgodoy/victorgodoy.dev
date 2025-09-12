import SocialLink from "./SocialLink"
import ButtonMenuNav from "../../components/interface/ButtonMenuNav";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import MenuNav from "../../components/interface/Menu";

function HomeContent(){
    const [isOpen, setIsOpen] = useState(false);
  
    return (
    <div className="h-full grid relative overflow-hidden">

        <div className="flex flex-col justify-end px-10">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-[var(--color-text-1)]">
              PORTFOLIO VICTOR GODOY
            </h1>

            <p className="text-xl font-normal mb-20 text-[var(--color-text-2)]">
             web developer & server-side
            </p>
      
            <div className="flex gap-4 text-[18px]">
              <SocialLink
                href="https://github.com/victorrgodoy"
                descripton="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/victorgodoy-/"
                descripton="LinkedIn"
              />
            </div>
          </div>
        </div>
        
         <div className="flex items-center justify-center">
           <ButtonMenuNav isOpen={isOpen} setIsOpen={setIsOpen}/>
         </div>

        <AnimatePresence>
            {isOpen && <MenuNav/>}
        </AnimatePresence>
        </div>

)}
export default HomeContent;