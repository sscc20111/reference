import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
    const location = useLocation();
    
    useEffect(() => {
        setTimeout(()=>{
        if(location.hash){
            const target=document.getElementById(location.hash.substring(1));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
          }
    },10);
},[location]);

return null;
};

export default ScrollHandler;