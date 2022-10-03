import { ReactNode, useEffect, useState } from "react";
import { MenuContext } from "..";

type MenuContextProps = {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuContextProps) => {
  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if(isOpen){
      document.body.classList.add('open-menu');
    } else {
      document.body.classList.remove('open-menu');
    }
  }, [isOpen]);

  return <MenuContext.Provider value={{isOpen, setIsOpen}}>{children}</MenuContext.Provider>
}
