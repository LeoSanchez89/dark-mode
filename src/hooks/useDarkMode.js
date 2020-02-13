import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";


const useDarkMode = (key) => {

    const[toggleMode, setToggleMode] = useLocalStorage(key);

    useEffect(() => {
        
        if (toggleMode === true) {
           
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [toggleMode]);

    return [toggleMode, setToggleMode];
}

export default useDarkMode;