import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
    let [theme,setTheme] = useLocalStorage("theme","dark")
    let changeTheme = (themeValue) => {
        console.log(themeValue);
        
        if (themeValue === "Light") {
            setTheme("light")
           
        }else{
            setTheme("dark")
            
        }
    }
    useEffect(()=>{},[theme])
    return{theme,setTheme,changeTheme}
}
export default useTheme

/**import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"

const useTheme = () => {
    let context = useContext(ThemeContext);
    return context
}
export default useTheme**/