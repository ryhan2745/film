/**import { useEffect } from "react"
import useLocalStorage from "../Hooks/useLocalStorage"
import ThemeContext from "./ThemeContext"

const ThemeProvider = ({children}) => {
    let [theme,setTheme] = useLocalStorage("theme","dark")
    let changeTheme = (themeValue) => {
        if (themeValue === "Light") {
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }
    useEffect(()=>{},[theme])
    return <ThemeContext.provider value={{theme,changeTheme}}>
                {children}
    </ThemeContext.provider>
}
export default ThemeProvider**/